// TypeScript mirror of src/styles/tokens.css for use inside .astro frontmatter
// expressions (e.g. inline SVG strokes, conditional styles). Keep in lockstep
// with tokens.css.

// Light theme (form4dev port, 2026-06-01). 1:1 mirror of tokens.css.
// Per-service decorative accents are Tailwind-600 weights so they read
// cleanly on white backgrounds.
export const o = {
  bg:        '#ffffff',
  panel:     '#fafafa',
  panelHi:   '#f4f4f5',
  line:      '#e5e5e7',
  lineHi:    '#ddddde',

  // net-new surface tokens
  bgSunken:    '#f4f4f5',
  bgDeep:      '#ebebed',
  lineWhisper: '#f0f0f1',

  ink:       '#0a0a0a',
  mute:      '#52525b',
  faint:     '#8a8a93',

  accent:    '#0066ff',
  accent2:   '#0052cc',
  accentDim: '#e7efff',
  accentInk: '#ffffff',

  // per-service decorative accents (Tailwind-600)
  warn:      '#ea580c',
  red:       '#dc2626',
  blue:      '#2563eb',
  purple:    '#7c3aed',
  teal:      '#0d9488',
  green:     '#16a34a',   // AI Software identity — was o.accent (lime)
} as const;

// Six services × six accents — single source of truth for service color/glyph
// assignments used by Services.astro, /services index, footer, etc.
export type Service = {
  slug: string;
  name: string;
  tag: string;
  glyph: string;
  accent: string;
  chip: string;
  blurb: string;
  bullets: string[];
};

export const services: readonly Service[] = [
  {
    slug:   'ai-software',
    name:   'AI Software Development',
    tag:    'agents, copilots, RAG',
    glyph:  '▲',
    accent: o.green,   // distinct from primary CTA blue; was o.accent (lime on dark)
    chip:   '4–16 wks',
    blurb:  'We design, build, and ship custom AI products end-to-end. Agents, copilots, RAG, internal automations — in your repo, on your stack, with evals you can actually defend.',
    bullets: ['Discovery → demo in 14 days', 'Built in your codebase', 'Eval-driven, not vibes-driven', 'You own everything, day one'],
  },
  {
    slug:   'software-dev',
    name:   'Software Development',
    tag:    'custom platforms & apps',
    glyph:  '▢',
    accent: o.blue,
    chip:   '4–24 wks',
    blurb:  'Web, mobile, backend, integrations. Built by senior engineers on boring stacks you can hire for. We refactor the legacy. We ship the new thing. We document the handoff.',
    bullets: ['Senior engineers only', 'TypeScript, Postgres, Rust, Go', 'CI/CD baked in', 'Hand off in 1 week, not 1 quarter'],
  },
  {
    slug:   'aeo',
    name:   'Answer Engine Optimization',
    tag:    'AEO · be the citation',
    glyph:  '◆',
    accent: o.purple,
    chip:   'monthly',
    blurb:  'When buyers ask ChatGPT, Perplexity, Gemini, or Claude about your category, your brand should be the answer — with the link. We make that happen.',
    bullets: ['Cite-able content architecture', 'Schema, llms.txt, structured Q&A', 'Tracked in the AI surfaces that matter', 'Monthly visibility reports'],
  },
  {
    slug:   'seo',
    name:   'Search Engine Optimization',
    tag:    'SEO · earn the rank',
    glyph:  '◇',
    accent: o.warn,
    chip:   'monthly',
    blurb:  'Technical, content, and link strategy that compounds. We audit, fix, write, and measure — and we report in pipeline, not in vanity metrics.',
    bullets: ['Technical SEO audit', 'Cluster-based content plans', 'Link earning (not buying)', 'Reported in qualified pipeline'],
  },
  {
    slug:   'social-media',
    name:   'Social Media Marketing',
    tag:    'organic + community',
    glyph:  '◈',
    accent: o.red,
    chip:   'monthly',
    blurb:  'A weekly drumbeat across LinkedIn, X, YouTube, and Instagram. Strategy, scripts, posts, edits, comments, replies. Built around your founder voice — not a brand template.',
    bullets: ['Founder-led posting playbooks', 'Weekly content sprints', 'Short-form video edits', 'Community + DM ops'],
  },
  {
    slug:   'performance-marketing',
    name:   'Performance Marketing',
    tag:    'paid ads · CAC discipline',
    glyph:  '▣',
    accent: o.teal,
    chip:   'monthly',
    blurb:  'Google, Meta, LinkedIn, TikTok. We do the targeting, the creative, the landing pages, and the post-click measurement. Optimised against your real CAC, not Ads Manager numbers.',
    bullets: ['Full-funnel attribution', 'Creative production in-house', 'LPs we actually build', 'CAC and LTV reported weekly'],
  },
] as const;
