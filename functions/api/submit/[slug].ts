// Cloudflare Pages Function — proxies form submissions to form4dev.
//
// Why this exists:
//   The form4dev bearer token has `forms:write` + `submissions:read` scope.
//   Exposing it in client JS would let anyone delete forms, edit them, or
//   read every past submission. So we keep the token server-side as a CF
//   Pages secret env var and proxy the browser's POST through this Function.
//   The browser submits a normal HTML form to /api/submit/<slug>; this
//   Function adds the bearer and forwards to form4dev's agent endpoint
//   (which then skips captcha / rate-limit because the bearer authenticates
//   us as the form owner).
//
// Allowlist:
//   Only the two Ollasoftware-owned form endpoint slugs are accepted.
//   Anything else returns 404 so this Function cannot be used as an open
//   proxy to submit to arbitrary form4dev forms.

interface Env {
  FORM4DEV_TOKEN: string;
}

// Endpoint slugs returned by form4dev's POST /api/forms response.
// If we add new forms, append the slug + a logical name here.
const ALLOWED_SLUGS: Record<string, string> = {
  'ygyv78cz1cbofy-q': 'contact',
  'h_c7vkls0hxcgduz': 'job-application',
};

const FORM4DEV = 'https://login.form4dev.com';

// Where to send the user after a successful / failed submission. The page
// reads the `?ok=` or `?err=` query string to render a thank-you / retry
// state.
function redirectTarget(formKind: string, ok: boolean, ref: string | null): string {
  // Honour an explicit `_next` redirect target if it points back at our own
  // origin (defence against open-redirect abuse).
  if (ref && ref.startsWith('/') && !ref.startsWith('//')) {
    return ref + (ref.includes('?') ? '&' : '?') + (ok ? 'ok=1' : 'err=1');
  }
  if (formKind === 'contact')        return ok ? '/contact/?ok=1' : '/contact/?err=1';
  if (formKind === 'job-application') return ok ? '/apply/?ok=1'   : '/apply/?err=1';
  return ok ? '/?ok=1' : '/?err=1';
}

export const onRequestPost: PagesFunction<Env> = async ({ request, params, env }) => {
  const slug = String(params.slug ?? '');
  const formKind = ALLOWED_SLUGS[slug];
  if (!formKind) {
    return new Response('Unknown form endpoint.', { status: 404 });
  }

  if (!env.FORM4DEV_TOKEN) {
    return new Response('Form backend not configured.', { status: 500 });
  }

  // Parse whichever shape the browser sends — HTML form POST sends
  // application/x-www-form-urlencoded; JS fetch may send JSON.
  const ct = request.headers.get('content-type') ?? '';
  let payload: Record<string, string> = {};
  let nextRef: string | null = null;

  try {
    if (ct.includes('application/json')) {
      const j = (await request.json()) as Record<string, unknown>;
      for (const [k, v] of Object.entries(j)) payload[k] = String(v ?? '');
      nextRef = typeof j._next === 'string' ? j._next : null;
    } else {
      // form-encoded or multipart
      const form = await request.formData();
      for (const [k, v] of form.entries()) {
        if (k === '_next') { nextRef = String(v); continue; }
        // Honeypot capture. form4dev's canonical field is `_gotcha` (per their
        // OpenAPI spec — bots fill it, humans leave empty); we also accept
        // any `hp_*` prefix for back-compat with our older form HTML.
        const isHoneypot = k === '_gotcha' || k.startsWith('hp_');
        if (isHoneypot && String(v).length > 0) {
          // 200-redirect like a real submission, but never forward upstream.
          return Response.redirect(new URL(redirectTarget(formKind, true, nextRef), request.url).toString(), 303);
        }
        if (isHoneypot) continue; // empty honeypot → drop the field
        payload[k] = String(v ?? '');
      }
    }
  } catch {
    return new Response('Malformed body.', { status: 400 });
  }

  // Set form4dev's `_replyto` magic field from the submitter's email so the
  // notification email's Reply-To header points back to them — hitting Reply
  // in Gmail goes straight to the lead/candidate, not back to info@.
  const submitterEmail = payload.email;
  if (submitterEmail && /@/.test(submitterEmail) && !payload._replyto) {
    payload._replyto = submitterEmail;
  }

  // Forward to form4dev with the agent bearer.
  const upstream = await fetch(`${FORM4DEV}/api/submit/${slug}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.FORM4DEV_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'ollasoftware.com-pages-function/1',
    },
    body: JSON.stringify(payload),
  });

  const ok = upstream.status >= 200 && upstream.status < 300;

  // Browsers expect 303 See Other for POST-redirect-GET; preserve the form
  // semantics. JS clients that want JSON can send Accept: application/json.
  const accept = request.headers.get('accept') ?? '';
  if (accept.includes('application/json')) {
    const body = await upstream.text();
    return new Response(body, {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const target = new URL(redirectTarget(formKind, ok, nextRef), request.url).toString();
  return Response.redirect(target, 303);
};

// Reject anything other than POST.
export const onRequest: PagesFunction<Env> = async ({ request }) => {
  return new Response(`Method ${request.method} not allowed. POST only.`, {
    status: 405,
    headers: { Allow: 'POST' },
  });
};
