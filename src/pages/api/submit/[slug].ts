// Astro SSR route — proxies form submissions to form4dev.
// Migrated from CF Pages Function (functions/api/submit/[slug].ts) when we
// went hybrid (2026-06-03): under hybrid mode, the Astro _worker.js takes
// precedence over the /functions/ directory, so this endpoint had to move
// into Astro itself as an SSR route. The logic is identical; only the
// handler signature and env access changed.
//
// The form4dev bearer (FORM4DEV_TOKEN) is exposed via Astro's Cloudflare
// adapter runtime: `locals.runtime.env.FORM4DEV_TOKEN`.
//
// Allowlist:
//   Only the two Ollasoftware-owned form endpoint slugs are accepted.
//   Anything else returns 404 so this endpoint cannot be used as an open
//   proxy to submit to arbitrary form4dev forms.

import type { APIRoute } from 'astro';

// CRITICAL: this is the one route in the project that opts OUT of prerender.
// Every other page is static; this one runs as SSR on the edge worker so it
// can receive POSTs and forward them to form4dev with a server-side bearer.
export const prerender = false;

const ALLOWED_SLUGS: Record<string, string> = {
  'ygyv78cz1cbofy-q': 'contact',
  'h_c7vkls0hxcgduz': 'job-application',
};

const FORM4DEV = 'https://login.form4dev.com';

function redirectTarget(formKind: string, ok: boolean, ref: string | null): string {
  // Honour an explicit `_next` redirect target if it points back at our own
  // origin (defence against open-redirect abuse).
  if (ref && ref.startsWith('/') && !ref.startsWith('//')) {
    return ref + (ref.includes('?') ? '&' : '?') + (ok ? 'ok=1' : 'err=1');
  }
  if (formKind === 'contact')         return ok ? '/contact/?ok=1' : '/contact/?err=1';
  if (formKind === 'job-application') return ok ? '/apply/?ok=1'   : '/apply/?err=1';
  return ok ? '/?ok=1' : '/?err=1';
}

export const POST: APIRoute = async ({ request, params, locals }) => {
  const slug = String(params.slug ?? '');
  const formKind = ALLOWED_SLUGS[slug];
  if (!formKind) {
    return new Response('Unknown form endpoint.', { status: 404 });
  }

  // CF adapter exposes env vars under locals.runtime.env. Defensive read in
  // case the adapter or runtime ever changes shape.
  const runtime = (locals as { runtime?: { env?: { FORM4DEV_TOKEN?: string } } }).runtime;
  const token = runtime?.env?.FORM4DEV_TOKEN;
  if (!token) {
    return new Response('Form backend not configured.', { status: 500 });
  }

  const ct = request.headers.get('content-type') ?? '';
  const payload: Record<string, string> = {};
  let nextRef: string | null = null;

  try {
    if (ct.includes('application/json')) {
      const j = (await request.json()) as Record<string, unknown>;
      for (const [k, v] of Object.entries(j)) payload[k] = String(v ?? '');
      nextRef = typeof j._next === 'string' ? j._next : null;
    } else {
      const form = await request.formData();
      for (const [k, v] of form.entries()) {
        if (k === '_next') { nextRef = String(v); continue; }
        const isHoneypot = k === '_gotcha' || k.startsWith('hp_');
        if (isHoneypot && String(v).length > 0) {
          // 200-redirect like a real submission, but never forward upstream.
          return Response.redirect(new URL(redirectTarget(formKind, true, nextRef), request.url).toString(), 303);
        }
        if (isHoneypot) continue;
        payload[k] = String(v ?? '');
      }
    }
  } catch {
    return new Response('Malformed body.', { status: 400 });
  }

  // Auto-set _replyto so notification emails Reply-To the submitter.
  const submitterEmail = payload.email;
  if (submitterEmail && /@/.test(submitterEmail) && !payload._replyto) {
    payload._replyto = submitterEmail;
  }

  const upstream = await fetch(`${FORM4DEV}/api/submit/${slug}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'ollasoftware.com-astro-ssr/1',
    },
    body: JSON.stringify(payload),
  });

  const ok = upstream.status >= 200 && upstream.status < 300;

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

// Reject non-POST methods.
export const ALL: APIRoute = ({ request }) => {
  if (request.method === 'POST') {
    return new Response('Unreachable — handled by POST export.', { status: 500 });
  }
  return new Response(`Method ${request.method} not allowed. POST only.`, {
    status: 405,
    headers: { Allow: 'POST' },
  });
};
