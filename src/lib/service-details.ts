// Extended copy for each service detail page. Indexed by slug to match
// services[] in tokens.ts. Keep slugs in sync.

export type Feature = { name: string; body: string };
export type Phase = { week: string; head: string; body: string };
export type FAQ = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  intro: string;
  features: Feature[];
  phases: Phase[];
  sample: string;      // pre-formatted SOW excerpt
  notForUs: string[];  // what we won't take on
  faqs: FAQ[];
  starting: string;    // headline price/cadence chip
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'ai-software': {
    slug: 'ai-software',
    intro:
      'AI products that ship to production. Agents that triage your queue, copilots embedded in your app, RAG over the docs your customers actually search. We build them in your repo, with evals you can defend in a board meeting.',
    features: [
      { name: 'Eval-first, always',         body: 'Every build starts with a gold set and a precision/latency target. If we can\'t measure it, we don\'t ship it. You get the eval harness on day one.' },
      { name: 'In your codebase',           body: 'No black-box "AI platform" rental. We commit to your monorepo. The code reads like the rest of your service. Your team can hire against it tomorrow.' },
      { name: 'Models you can swap',        body: 'OpenAI, Anthropic, Bedrock, Vertex, open-weight. The model is a config line, not an architectural decision. We benchmark them on your eval set.' },
      { name: 'Cost & latency budgeted',    body: 'Every feature ships with a cost/run and p95 latency number. We blow the whistle if a prompt change pushes either past your budget.' },
      { name: 'Safety & redaction baked',   body: 'PII redaction, prompt-injection defenses, audit logs, refusal traces. Not a checkbox at the end — wired in from the first prototype.' },
      { name: 'Handoff in week one',        body: 'Your engineers are in our PRs from day one. By week 4 they\'re reviewing ours. By week 8 they\'re shipping without us in the loop.' },
    ],
    phases: [
      { week: 'week 0–1', head: 'Discovery & eval set', body: 'Stakeholder interviews, prior-art audit, a written discovery doc, and a labelled gold set. End of week: a clickable prototype you can show leadership.' },
      { week: 'week 2',   head: 'Prototype → harness',  body: 'Eval harness in CI. First end-to-end pipeline in your repo. Cost & latency tracked. Internal demo on Friday.' },
      { week: 'week 3',   head: 'Build to threshold',   body: 'Iterate on prompts, retrieval, and tools until we hit the precision / latency / cost gates we agreed on.' },
      { week: 'week 4–6', head: 'Stage & ship',         body: 'Staging deploy. Red-teaming. Rollout plan. Production behind a feature flag. Postmortem-style handoff doc.' },
    ],
    sample: `engagement intake-agent = {
  outcome:   'agent that triages support tickets',
  success:   '≥85% precision · <2s p95 · $0.04/run',
  team:      ['@rin (lead)', '@marco', '@anika'],
  stack:     ['your repo', 'your VPC', 'your eval set'],
  duration:  '4 weeks · fixed',
  price:     '$96,000',
  ownership: 'you · MIT-licensed code, day 1',
}`,
    notForUs: [
      'Demos we can\'t put behind an eval gate.',
      '"Replace our entire support team" briefs.',
      'Workloads that require us to fine-tune frontier models from scratch.',
      'Vendor-lock-in plays. We won\'t build you into a corner you can\'t exit.',
    ],
    faqs: [
      { q: 'Will you sign our MSA / DPA?', a: 'Yes. We also publish our own short-form MSA if you\'d like a starting point.' },
      { q: 'Do you build inside our VPC?', a: 'Default yes. Most clients run inference inside their own cloud. We adapt to your model provider, key store, and observability stack.' },
      { q: 'What if precision doesn\'t hit the bar?', a: 'You don\'t pay the final milestone. We\'ve only had to invoke this twice in 38 sprints — both times we ended up shipping a smaller scope that did clear the bar.' },
    ],
    starting: '$96k · 4-week sprint · fixed',
  },

  'software-dev': {
    slug: 'software-dev',
    intro:
      'Custom software, built by senior engineers, on stacks your team can hire for. Web apps, internal tools, mobile, backend, integrations. We refactor the legacy. We ship the new thing. We document the handoff so well your team forgets we were there.',
    features: [
      { name: 'Senior bench only',          body: 'No juniors learning on your dollar. Every engineer in our pods has shipped to production for 8+ years. They write code your team can read.' },
      { name: 'Boring stacks on purpose',   body: 'TypeScript, Postgres, React, Astro, Rust, Go, Python. The kind of tech you can hire against on LinkedIn — not the kind that needs a recruiter who attends conferences.' },
      { name: 'CI/CD on day one',           body: 'A green pipeline, preview deploys, and a one-command local setup land in week one. The rest of the build sits on top of that foundation.' },
      { name: 'Test what matters',          body: 'Integration tests around money, identity, and irreversibility. Unit tests where they pay rent. We don\'t chase coverage numbers.' },
      { name: 'We refactor as we go',       body: 'If your legacy code is in the way, we fix it. The PR explains why. Your team learns the cleanup pattern by reading the diff.' },
      { name: 'Handoff is a deliverable',   body: 'Architecture doc, runbook, oncall guide, video walkthroughs. By the time we leave, your team owns it like they wrote it.' },
    ],
    phases: [
      { week: 'week 0–1', head: 'Discovery & spike',    body: 'Stakeholder interviews, architecture doc, riskiest unknown built first. End of week: a working spike of the scariest part.' },
      { week: 'week 2',   head: 'Foundation',           body: 'Repo, CI, deploy, observability, auth, the data model. The boring scaffolding done well, so the next 8 weeks are pure feature work.' },
      { week: 'week 3–N', head: 'Build, demo, repeat',  body: 'Weekly demos. PRs into your main branch. Every sprint ships something you can click in staging.' },
      { week: 'last 2 wk',head: 'Harden & hand off',    body: 'Load test, security pass, runbook, training sessions with your team. We leave with the docs in your wiki, not in our Drive.' },
    ],
    sample: `engagement compliance-portal = {
  outcome:   'internal portal for SOC 2 evidence collection',
  success:   '6 evidence types · self-serve · 2k MAU · <500ms p95',
  team:      ['@theo (lead)', '@asha', '@oksana'],
  stack:     ['TypeScript', 'Astro', 'Postgres', 'your VPC'],
  duration:  '10 weeks · fixed',
  price:     '$240,000',
  ownership: 'you · MIT-licensed code, day 1',
}`,
    notForUs: [
      'WordPress, Wix, or no-code page builders.',
      'Build-and-leave-burning briefs — we won\'t ship code we can\'t hand off.',
      'Rewriting a 10-year-old monolith in 6 weeks.',
      'Greenfield SaaS where the customer hasn\'t been found yet.',
    ],
    faqs: [
      { q: 'Can you work in our monorepo?',          a: 'Yes — that\'s the default. We learn your conventions, your test patterns, and your review style in week one.' },
      { q: 'Do you do mobile?',                      a: 'React Native and Swift/Kotlin native, on a per-engagement basis. We\'ll tell you honestly when native is overkill.' },
      { q: 'What about ongoing maintenance?',        a: 'Two options: a small monthly retainer (1–2 days / month, on call for fires), or a clean exit with a runbook. Most clients pick exit, some come back for a sprint when things change.' },
    ],
    starting: '$48k · 4-week sprint · fixed',
  },

  'aeo': {
    slug: 'aeo',
    intro:
      'When buyers ask ChatGPT, Perplexity, Gemini, or Claude about your category, your brand should be the answer — and the citation should link back to you. We make that happen on purpose, not by accident.',
    features: [
      { name: 'Cite-able content architecture', body: 'We rebuild your top pages around the answer shape AI surfaces actually pull from: clear claims, sources, definitions, and structured Q&A.' },
      { name: 'llms.txt + schema layer',       body: 'A llms.txt that names your canonical pages, plus JSON-LD schema for Articles, FAQs, HowTos, and Products. Machines stop guessing what your pages mean.' },
      { name: 'Visibility tracking that\'s real', body: 'We run prompt-based probes weekly across the four major answer engines and report which queries surface you, where you sit in the citation list, and what moved.' },
      { name: 'Source authority loop',         body: 'We get you cited by the sources that get cited by the AI: G2, Wikipedia, industry reports, the right Reddit threads. Earned, not bought.' },
      { name: 'Prompt-coverage planning',      body: 'We map the 200 prompts your buyers will actually type, then prioritise the 30 where being the answer changes pipeline. The rest can wait.' },
      { name: 'Hand off if you want',          body: 'Once the engine is running, your team can drive it. We document the playbook so the cadence doesn\'t die when our retainer ends.' },
    ],
    phases: [
      { week: 'week 0–2',  head: 'AEO audit',          body: 'Current visibility in ChatGPT, Perplexity, Gemini, Claude. Citation gap analysis. Content + schema teardown. Priority map of prompts that move pipeline.' },
      { week: 'month 1',   head: 'Foundation',         body: 'llms.txt, schema rollout, top-20 pages rebuilt around answer shapes, source authority outreach plan.' },
      { week: 'month 2+',  head: 'Cadence',            body: 'Weekly: new answer pages, prompt-coverage tracking, source outreach, citation pickup. Monthly: written report tied to pipeline.' },
      { week: 'quarterly', head: 'Re-rank',            body: 'AI surfaces change fast. We re-audit each quarter and re-prioritise the prompts. The playbook evolves with the engines.' },
    ],
    sample: `engagement aeo.retainer = {
  outcome:  'be the cited answer in our category',
  surfaces: ['ChatGPT', 'Perplexity', 'Gemini', 'Claude'],
  team:     ['@maya (lead)', '@dev', '@arjun (writer)'],
  cadence:  'monthly · 30-day notice',
  output:   '4 answer pages/mo · weekly probes · monthly report',
  price:    '$14,000 / month',
}`,
    notForUs: [
      'Promises we\'ll get you cited by a specific name. We can\'t guarantee what the models do.',
      'Black-hat prompt-injection tricks. They get caught and they hurt your brand.',
      'AI-generated content at scale. We write less, but it actually ranks.',
      'Categories with under 100 monthly prompts — the math doesn\'t work yet.',
    ],
    faqs: [
      { q: 'Is AEO the same as SEO?',             a: 'Overlapping but distinct. SEO optimises for ten blue links; AEO optimises for being the cited answer inside a generated response. We do both — together is usually best.' },
      { q: 'How do you measure success?',         a: 'Citation share-of-voice per prompt, qualified pipeline attribution, and (where the engines support it) referral traffic from AI surfaces.' },
      { q: 'How long until we see results?',      a: '90 days to see real movement in citations. 6 months to see pipeline. Anyone selling you faster is selling you something else.' },
    ],
    starting: '$14k / month · 30-day notice',
  },

  'seo': {
    slug: 'seo',
    intro:
      'Technical, content, and link strategy that compounds. We audit, fix, write, build, and measure. The dashboards show pipeline, not vanity. The rankings show up because the work was done — not because we bought our way there.',
    features: [
      { name: 'Technical audit, fixed',         body: 'Crawl budget, indexation, Core Web Vitals, JS rendering, redirect chains, canonical hygiene. We don\'t hand you a 200-page PDF — we open PRs.' },
      { name: 'Cluster-based content plans',    body: 'Topical authority around the keywords your buyers actually search. Pillar + cluster maps with intent labels, prioritised by pipeline impact.' },
      { name: 'Writers who know your category', body: 'Briefs go to writers we\'ve worked with for years. SMEs review every draft. No AI sludge, no generic listicles.' },
      { name: 'Link earning, not buying',       body: 'Digital PR, original research, integrations, partnerships. The kind of links that survive an algorithm update — and a Google manual review.' },
      { name: 'Reporting in pipeline',          body: 'Rankings and traffic are leading indicators. We measure qualified pipeline from organic and attribute it back to clusters. Monthly read-out.' },
      { name: 'Migrations done right',          body: 'Replatforming? Domain change? We\'ve done dozens. Pre-migration audit, redirect map, post-launch monitoring, recovery plan if something slides.' },
    ],
    phases: [
      { week: 'week 0–3',  head: 'Technical + content audit', body: 'Full crawl, log file analysis, content gap, competitor cluster teardown. Output: a fix list opened as tickets in your tracker.' },
      { week: 'month 1',   head: 'Foundations',               body: 'Technical fixes shipped. First cluster of content scoped + written + published. Tracking + dashboards live.' },
      { week: 'month 2+',  head: 'Cadence',                   body: 'Weekly: new content live, link prospecting, rank tracking. Monthly: pipeline read-out, plan for the next 30 days.' },
      { week: 'quarterly', head: 'Re-strategise',             body: 'SERPs move. We re-audit each quarter, retire dying clusters, double down on growing ones.' },
    ],
    sample: `engagement seo.retainer = {
  outcome:  'qualified pipeline from organic search',
  scope:    ['technical fixes', '6 long-form/mo', 'link earning', 'reporting'],
  team:     ['@dev (lead)', '@arjun (writer)', '@maya (links)'],
  cadence:  'monthly · 30-day notice',
  price:    '$12,000 / month',
}`,
    notForUs: [
      'PBNs, link farms, or any link tactic we wouldn\'t put our name on.',
      'Content quotas without a quality bar. We\'d rather ship 4 great pieces than 40 bad ones.',
      'Black-hat anything. We\'ve cleaned up enough manual penalties to know better.',
      'Affiliate-only sites where there\'s no underlying business to drive pipeline to.',
    ],
    faqs: [
      { q: 'Do you do local SEO?',            a: 'Yes, on a per-engagement basis. Different playbook from category SEO, but same principles.' },
      { q: 'Can you work with our writers?',  a: 'Yes — we can run editorial on top of an in-house team. We\'ve done both setups and they both work.' },
      { q: 'How fast do we see results?',     a: 'Technical wins land in weeks. Content wins land in 3–6 months. We tell you which clusters are short-cycle vs long-cycle on day one.' },
    ],
    starting: '$12k / month · 30-day notice',
  },

  'social-media': {
    slug: 'social-media',
    intro:
      'A weekly drumbeat across LinkedIn, X, YouTube, and Instagram. Strategy, scripts, posts, edits, comments, replies. Built around your founder\'s voice — not a brand template. Channels that compound instead of churn.',
    features: [
      { name: 'Founder-led, not brand-led',     body: 'Audiences follow people, not logos. We run interviews with your founders and execs, then ghostwrite from their actual voice — not a sanitised brand version of it.' },
      { name: 'Weekly content sprints',         body: 'A planning call Monday, scripts and assets shipped by Wednesday, posts live Thursday/Friday. Every week. The cadence is the moat.' },
      { name: 'Short-form video, in-house',     body: 'Editors on our team cut your raw footage — webinars, podcasts, Loom recordings — into Reels / Shorts / TikTok-shaped clips. No external agency.' },
      { name: 'Community + DM ops',             body: 'Replies in your voice within an hour during your timezone. Inbound DMs triaged and routed. Lurkers become leads.' },
      { name: 'Cross-channel repurposing',      body: 'One founder interview becomes a LinkedIn post, an X thread, three Reels, a Shorts edit, and a podcast clip. We work it to the bone.' },
      { name: 'Reporting in inbound',           body: 'Follower growth is a leading metric. We track inbound DMs, qualified convos, and pipeline sourced from social. Monthly read-out.' },
    ],
    phases: [
      { week: 'week 0–2',  head: 'Audit + voice work',  body: 'Channel audit, audience interviews, voice extraction calls with founders. Output: a content brief that sounds like your CEO, not a brand guideline.' },
      { week: 'month 1',   head: 'First sprint',        body: 'Production gear shipped if needed. First batch of posts + 4 short-form videos go live. Reply playbook live.' },
      { week: 'month 2+',  head: 'Cadence',             body: 'Weekly: planning, scripts, posts, edits, replies. Monthly: a written read-out and a quarterly strategy doc.' },
      { week: 'quarterly', head: 'Re-mix',              body: 'Channels rise and fall. We re-cut the channel mix each quarter and double down on what\'s working.' },
    ],
    sample: `engagement social.retainer = {
  channels: ['LinkedIn', 'X', 'YouTube Shorts', 'Instagram Reels'],
  cadence:  '12 posts/wk · 4 short videos/wk · DM ops M–F',
  team:     ['@noor (strategist)', '@ian (writer)', '@yuna (editor)'],
  output:   'voice-matched content · weekly · reported monthly',
  term:     'monthly · 30-day notice',
  price:    '$11,000 / month',
}`,
    notForUs: [
      'Bot follower growth or engagement pods.',
      'Brands whose founders refuse to be on camera. The math just doesn\'t work in 2026.',
      'Paid social — that\'s our Performance Marketing service, different team.',
      'Pure follower-count goals with no business outcome attached.',
    ],
    faqs: [
      { q: 'Do you write for the founder, or with them?', a: 'Mostly for, after we\'ve extracted their voice. Founders approve before posting. Most reach a flow state where they only edit ~10% of drafts.' },
      { q: 'Which channels do you do?',                    a: 'LinkedIn, X, YouTube, Instagram by default. TikTok and Threads on a per-engagement basis. We don\'t do channels we can\'t measure.' },
      { q: 'What about employee advocacy?',                a: 'Yes — we can stand up an employee program alongside founder-led. Different motion, same playbook origin.' },
    ],
    starting: '$11k / month · 30-day notice',
  },

  'performance-marketing': {
    slug: 'performance-marketing',
    intro:
      'Google, Meta, LinkedIn, TikTok. We do the targeting, the creative, the landing pages, and the post-click measurement. Optimised against your real CAC and LTV, not against Ads Manager screenshots.',
    features: [
      { name: 'Full-funnel attribution',     body: 'Server-side tracking, CAPI / Enhanced Conversions, qualified-lead scoring, and CRM closed-loop. We attribute to pipeline, not to last-click form fills.' },
      { name: 'Creative production in-house', body: 'Static, motion, UGC, founder pieces. Our editors and designers spin variants weekly. Creative is the highest-leverage lever in 2026 — we treat it that way.' },
      { name: 'LPs we build, not just brief', body: 'Landing pages in our stack (TypeScript / Astro), shipped in days. We A/B at the LP layer because that\'s where the conversion math lives.' },
      { name: 'CAC + LTV reporting',          body: 'Weekly: CAC by channel × creative × LP. Monthly: payback period, LTV, marginal next-dollar guidance. No vanity dashboards.' },
      { name: 'Channels you should be on',    body: 'We\'ll tell you when a channel doesn\'t fit. LinkedIn isn\'t for everyone. TikTok isn\'t for everyone. We\'d rather double down where it works.' },
      { name: 'No black-box "AI bidding"',    body: 'We use platform automation where it helps and override it where it doesn\'t. Every change is documented; every test runs to significance.' },
    ],
    phases: [
      { week: 'week 0–2',  head: 'Attribution + audit',     body: 'Server-side tracking, conversion API, CRM mapping. Account audit, creative audit, LP audit. Output: a baseline you can trust.' },
      { week: 'month 1',   head: 'Foundation + ramp',       body: 'First creative batch, first LP, first tests live. Tight budget, fast learning. Daily check-ins for the first 30 days.' },
      { week: 'month 2+',  head: 'Cadence',                 body: 'Weekly creative drops, ongoing LP tests, channel mix re-balancing. Weekly written read-out. Monthly strategy review.' },
      { week: 'quarterly', head: 'Re-rank channels',        body: 'Platforms change. CAC drifts. We re-rank the channel mix each quarter and reallocate spend toward whatever has best payback.' },
    ],
    sample: `engagement perf.retainer = {
  channels: ['Google', 'Meta', 'LinkedIn'],
  scope:    ['attribution', 'creative', 'LPs', 'media buying', 'reporting'],
  team:     ['@kiran (lead)', '@yuna (editor)', '@asha (LP eng)'],
  budget:   'up to $250k/mo managed spend',
  fee:      '$18,000 / month + 0% of spend',
  term:     'monthly · 30-day notice',
}`,
    notForUs: [
      'Affiliate-style arbitrage where the business model is the ad.',
      'Spend levels under $20k/mo — the math on a managed retainer doesn\'t work for you yet.',
      '"Just run Meta and report ROAS." We won\'t take an engagement without server-side tracking.',
      'Categories we can\'t legally advertise to (gambling, crypto-pump, etc).',
    ],
    faqs: [
      { q: 'Do you take a cut of spend?',           a: 'No. Flat monthly retainer regardless of spend. Aligns incentives — we never push more spend than is healthy for your CAC.' },
      { q: 'Who owns the ad accounts?',             a: 'You. Always. We get admin access on your accounts. Day we stop working together, our access is removed and your accounts keep running.' },
      { q: 'Can you work with our in-house team?',  a: 'Yes — pure consult-and-strategy is an option, though most clients prefer full execution. We\'ll tell you which makes sense for your shape.' },
    ],
    starting: '$18k / month + media · 30-day notice',
  },
};
