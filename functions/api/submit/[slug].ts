// Cloudflare Pages Function — forwards form submissions as emails via
// Cloudflare's native Email Sending REST API.
//
// Why this exists:
//   The browser submits a normal HTML form to /api/submit/<slug>. This
//   Function formats the payload as a human-readable email and POSTs it
//   to https://api.cloudflare.com/.../email/sending/send with a narrow
//   long-lived token. The email is delivered to FORWARD_TO
//   (vikas@networkershome.com) signed by Cloudflare's DKIM key already
//   on this domain. No form4dev, no third-party SMTP, no mailsetu.
//
// Allowlist:
//   The same 2 slugs the previous form4dev pipeline used — Contact and
//   Job Application. Mapped to logical kinds so the email subject and
//   field rendering match the form. Anything else returns 404.

interface Env {
  /** API token scoped to Email Sending Write only. Long-lived secret. */
  CF_EMAIL_TOKEN: string;
  /** Cloudflare account ID that owns the verified sending domain. */
  CF_ACCOUNT_ID: string;
  /** Where to forward every submission. Defaults to a safe address if unset. */
  FORWARD_TO?: string;
}

type FormKind = 'contact' | 'job-application';

const ALLOWED_SLUGS: Record<string, FormKind> = {
  // Keep the existing slugs so any in-flight URLs still resolve.
  'ygyv78cz1cbofy-q': 'contact',
  'h_c7vkls0hxcgduz': 'job-application',
};

const FROM_ADDRESS = { address: 'info@ollasoftware.com', name: 'Ollasoftware Web' };
const DEFAULT_FORWARD = 'vikas@networkershome.com';

// Per-form field ordering — fields appear in the email in this order.
// Anything in the payload that isn't listed gets dumped under "Other".
const FIELD_ORDER: Record<FormKind, string[]> = {
  contact: ['name', 'email', 'company', 'role', 'service', 'budget', 'brief'],
  'job-application': [
    'full_name', 'email', 'phone', 'role', 'location_pref',
    'institute', 'years_exp', 'ai_experience', 'top_ai_tools',
    'evidence_url', 'cover_note',
  ],
};

const FIELD_LABELS: Record<string, string> = {
  name: 'Name', full_name: 'Name',
  email: 'Email', phone: 'Phone',
  company: 'Company', role: 'Role',
  service: 'Service', budget: 'Budget',
  brief: 'Brief', cover_note: 'Cover note',
  location_pref: 'Location preference',
  institute: 'Institute / Company',
  years_exp: 'Years of experience',
  ai_experience: 'AI tooling experience',
  top_ai_tools: 'Top 3 AI tools',
  evidence_url: 'Production evidence URL',
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function buildEmail(formKind: FormKind, payload: Record<string, string>, sourceIp: string | null) {
  const order = FIELD_ORDER[formKind];
  const seen = new Set(order);
  const extra = Object.keys(payload).filter(k => !seen.has(k) && !k.startsWith('hp_') && k !== '_next');

  // Compose subject: short, includes who and what.
  let subject: string;
  if (formKind === 'contact') {
    const who = payload.name || payload.email || 'someone';
    const co  = payload.company ? ` (${payload.company})` : '';
    subject = `[Ollasoftware · Contact] ${who}${co}`;
  } else {
    const who  = payload.full_name || payload.email || 'someone';
    const role = payload.role ? ` — ${payload.role}` : '';
    subject = `[Ollasoftware · Apply] ${who}${role}`;
  }

  // Plain-text body — mirrors the form layout, every field on its own
  // labelled line. Easy to scan in any mail client.
  const lines: string[] = [];
  lines.push(`New ${formKind === 'contact' ? 'contact-form' : 'job-application'} submission via ollasoftware.com`);
  lines.push('—'.repeat(60));
  for (const k of order) {
    if (payload[k] != null && payload[k] !== '') {
      lines.push(`${(FIELD_LABELS[k] ?? k).padEnd(24)} : ${payload[k]}`);
    }
  }
  if (extra.length > 0) {
    lines.push('');
    lines.push('Other fields:');
    for (const k of extra) {
      lines.push(`  ${k.padEnd(22)} : ${payload[k]}`);
    }
  }
  lines.push('');
  lines.push('—'.repeat(60));
  lines.push(`Submitted at : ${new Date().toISOString()}`);
  if (sourceIp) lines.push(`Source IP    : ${sourceIp}`);
  lines.push(`Form         : ${formKind}`);
  lines.push('Reply directly to this email — From is set to the submitter.');
  const text = lines.join('\n');

  // HTML body — same content, more scannable. Includes a mailto: + tel:
  // reply pair when the submitter provided email + phone.
  const rows = [...order, ...extra]
    .filter(k => payload[k] != null && payload[k] !== '')
    .map(k => {
      const label = escapeHtml(FIELD_LABELS[k] ?? k);
      let value = escapeHtml(payload[k]);
      if (k === 'email')        value = `<a href="mailto:${value}">${value}</a>`;
      else if (k === 'phone')   value = `<a href="tel:${value.replace(/[^+\d]/g, '')}">${value}</a>`;
      else if (k === 'evidence_url' || /^https?:\/\//.test(payload[k])) {
        value = `<a href="${value}" target="_blank" rel="noopener">${value}</a>`;
      }
      return `<tr><td style="padding:6px 14px 6px 0;color:#7b828c;font:11px ui-monospace,monospace;text-transform:uppercase;letter-spacing:0.6px;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 0;color:#e8eaee;font:14px -apple-system,BlinkMacSystemFont,Segoe UI,system-ui,sans-serif;line-height:1.5">${value}</td></tr>`;
    }).join('');

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#08090b;color:#e8eaee;font:14px -apple-system,BlinkMacSystemFont,Segoe UI,system-ui,sans-serif">
  <table style="max-width:640px;margin:0 auto;background:#0f1114;border:1px solid #1c2026;border-radius:8px;padding:24px;border-collapse:collapse">
    <tr><td colspan="2" style="padding-bottom:12px;border-bottom:1px solid #1c2026">
      <div style="font:11px ui-monospace,monospace;color:#a7f06c;letter-spacing:1px;text-transform:uppercase">${escapeHtml(formKind === 'contact' ? 'Contact form · ollasoftware.com' : 'Job application · ollasoftware.com')}</div>
      <div style="font-size:18px;color:#e8eaee;font-weight:600;margin-top:6px;letter-spacing:-0.3px">${escapeHtml(subject.replace(/^\[Ollasoftware · [^\]]+\] /, ''))}</div>
    </td></tr>
    ${rows}
    <tr><td colspan="2" style="padding-top:16px;border-top:1px solid #1c2026;font:11px ui-monospace,monospace;color:#4a5159">
      Submitted ${escapeHtml(new Date().toISOString())}${sourceIp ? ` · IP ${escapeHtml(sourceIp)}` : ''}
    </td></tr>
  </table>
</body></html>`;

  return { subject, text, html };
}

function redirectTarget(formKind: FormKind, ok: boolean, ref: string | null): string {
  if (ref && ref.startsWith('/') && !ref.startsWith('//')) {
    return ref + (ref.includes('?') ? '&' : '?') + (ok ? 'ok=1' : 'err=1');
  }
  if (formKind === 'contact')         return ok ? '/contact/?ok=1' : '/contact/?err=1';
  if (formKind === 'job-application') return ok ? '/apply/?ok=1'   : '/apply/?err=1';
  return ok ? '/?ok=1' : '/?err=1';
}

export const onRequestPost: PagesFunction<Env> = async ({ request, params, env }) => {
  const slug = String(params.slug ?? '');
  const formKind = ALLOWED_SLUGS[slug];
  if (!formKind) {
    return new Response('Unknown form endpoint.', { status: 404 });
  }

  if (!env.CF_EMAIL_TOKEN || !env.CF_ACCOUNT_ID) {
    return new Response('Email backend not configured.', { status: 500 });
  }
  const to = env.FORWARD_TO || DEFAULT_FORWARD;

  // Parse form-encoded or JSON. Multipart files are not supported here —
  // applicants attach evidence as a URL.
  const ct = request.headers.get('content-type') ?? '';
  let payload: Record<string, string> = {};
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
        // Honeypot field — bots usually fill, humans never.
        if (k.startsWith('hp_') && String(v).length > 0) {
          return Response.redirect(new URL(redirectTarget(formKind, true, nextRef), request.url).toString(), 303);
        }
        payload[k] = String(v ?? '');
      }
    }
  } catch {
    return new Response('Malformed body.', { status: 400 });
  }

  const sourceIp = request.headers.get('cf-connecting-ip');
  const { subject, text, html } = buildEmail(formKind, payload, sourceIp);

  // From the submitter's address if they provided one — makes "Reply"
  // in any mail client work natively. Falls back to info@.
  const replyTo = payload.email && /@/.test(payload.email) ? payload.email : undefined;

  const sendBody: Record<string, unknown> = {
    to,
    from: FROM_ADDRESS,
    subject,
    text,
    html,
  };
  if (replyTo) sendBody.reply_to = replyTo;

  const send = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/email/sending/send`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.CF_EMAIL_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'ollasoftware.com-pages-function/2',
      },
      body: JSON.stringify(sendBody),
    },
  );

  const j = await send.json() as { success?: boolean; result?: { delivered?: string[] } };
  const ok = !!j.success && (j.result?.delivered?.length ?? 0) > 0;

  // JSON clients (curl tests, fetch from JS) get the raw response.
  const accept = request.headers.get('accept') ?? '';
  if (accept.includes('application/json')) {
    return new Response(JSON.stringify(j), {
      status: send.status,
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
