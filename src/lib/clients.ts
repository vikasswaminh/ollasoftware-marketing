// Portfolio of brands we own and operate. Mirrors the CF zone list (minus the
// founder's personal domain and the duplicate ccTLDs). Categorised for the
// home Clients grid; each entry knows its sector + accent for color treatment.

export type ClientCategory = 'ai' | 'api' | 'security' | 'saas' | 'training';

export type Client = {
  name: string;       // display name (brand)
  domain: string;     // canonical domain
  category: ClientCategory;
  blurb: string;      // ~5–10 words, what it does
};

export const categoryMeta: Record<ClientCategory, { label: string; accentVar: string }> = {
  ai:       { label: 'AI & ML',                 accentVar: 'var(--o-accent)' },
  api:      { label: 'APIs & dev tools',        accentVar: 'var(--o-blue)' },
  security: { label: 'Security & networking',   accentVar: 'var(--o-purple)' },
  saas:     { label: 'Consumer & SaaS',         accentVar: 'var(--o-warn)' },
  training: { label: 'Training & education',    accentVar: 'var(--o-teal)' },
};

export const clients: readonly Client[] = [
  // ── AI & ML (16) ──────────────────────────────────────────────
  { name: 'Aeoniti',       domain: 'aeoniti.com',       category: 'ai', blurb: 'Answer-engine optimisation platform' },
  { name: 'Crawlcrawl',    domain: 'crawlcrawl.com',    category: 'ai', blurb: 'AI-grade web crawler for AEO' },
  { name: 'Switchllm',     domain: 'switchllm.com',     category: 'ai', blurb: 'LLM router with cost & latency gates' },
  { name: 'Ollima',        domain: 'ollima.com',        category: 'ai', blurb: 'AI workspace for ops teams' },
  { name: 'Ollagraph',     domain: 'ollagraph.com',     category: 'ai', blurb: 'Knowledge graphs for agents' },
  { name: 'Ollabear',      domain: 'ollabear.com',      category: 'ai', blurb: 'Agent runtime + observability' },
  { name: 'Ollanode',      domain: 'ollanode.com',      category: 'ai', blurb: 'Self-hosted inference orchestration' },
  { name: 'OllaDNS',       domain: 'olladns.com',       category: 'ai', blurb: 'AI-aware DNS for distributed agents' },
  { name: 'Memfog',        domain: 'memfog.com',        category: 'ai', blurb: 'Agent memory store + recall API' },
  { name: 'NAC4AI',        domain: 'nac4ai.com',        category: 'ai', blurb: 'Network access control for AI agents' },
  { name: 'Browserfog',    domain: 'browserfog.com',    category: 'ai', blurb: 'Headless browser for AI workflows' },
  { name: 'Super25.ai',    domain: 'super25.ai',        category: 'ai', blurb: 'Frontier-model evaluation harness' },
  { name: '24observe',     domain: '24observe.com',     category: 'ai', blurb: 'Always-on AI uptime & eval monitor' },
  { name: 'Hitcli',        domain: 'hitcli.com',        category: 'ai', blurb: 'AI-native command-line companion' },
  { name: 'Qcrawl',        domain: 'qcrawl.com',        category: 'ai', blurb: 'Distributed crawl scheduler' },
  { name: 'Downdownalert', domain: 'downdownalert.com', category: 'ai', blurb: 'AI-summarised incident alerting' },

  // ── APIs & dev tools (10) ─────────────────────────────────────
  { name: 'api4api',       domain: 'api4api.com',       category: 'api', blurb: 'Universal API gateway' },
  { name: 'api4form',      domain: 'api4form.com',      category: 'api', blurb: 'Forms-as-an-API service' },
  { name: 'api4mind',      domain: 'api4mind.com',      category: 'api', blurb: 'Mind-mapping API for AI agents' },
  { name: 'api4pdf',       domain: 'api4pdf.in',        category: 'api', blurb: 'Render and parse PDFs via API' },
  { name: 'api4pqc',       domain: 'api4pqc.com',       category: 'api', blurb: 'Post-quantum crypto as an API' },
  { name: 'api4soc2',      domain: 'api4soc2.com',      category: 'api', blurb: 'SOC 2 evidence collection API' },
  { name: 'form4dev',      domain: 'form4dev.com',      category: 'api', blurb: 'Developer-friendly form backend' },
  { name: 'freefreecv',    domain: 'freefreecv.com',    category: 'api', blurb: 'Free CV / résumé builder + API' },
  { name: '21pdf',         domain: '21pdf.com',         category: 'api', blurb: 'HTML → PDF rendering service' },
  { name: 'Mailsetu',      domain: 'mailsetu.com',      category: 'api', blurb: 'Transactional SMTP infrastructure' },

  // ── Security & networking (7) ─────────────────────────────────
  { name: '21tunnel',      domain: '21tunnel.com',      category: 'security', blurb: 'Tunneling-as-a-service' },
  { name: 'StandVPN',      domain: 'standvpn.com',      category: 'security', blurb: 'Consumer + business VPN' },
  { name: 'Meshwg',        domain: 'meshwg.com',        category: 'security', blurb: 'WireGuard mesh networking' },
  { name: 'QSec Network',  domain: 'qsecnetwork.com',   category: 'security', blurb: 'Post-quantum secure networking' },
  { name: 'Quick ZTNA',    domain: 'quickztna.com',     category: 'security', blurb: 'Zero-trust network access' },
  { name: 'Quick SD-WAN',  domain: 'quicksdwan.com',    category: 'security', blurb: 'SD-WAN for distributed teams' },
  { name: 'Namahos',       domain: 'namahos.com',       category: 'security', blurb: 'Identity-aware infrastructure' },

  // ── Consumer & SaaS (5) ───────────────────────────────────────
  { name: 'Startupniti',   domain: 'startupniti.com',   category: 'saas', blurb: 'Newsroom for the Indian startup ecosystem' },
  { name: 'Quick21',       domain: 'quick21.com',       category: 'saas', blurb: 'Multi-tenant AI chat workspace' },
  { name: '21bill',        domain: '21bill.com',        category: 'saas', blurb: 'Invoicing & billing for SMBs' },
  { name: 'Billmybill',    domain: 'billmybill.com',    category: 'saas', blurb: 'Bill-splitting for households' },
  { name: '6699mail',      domain: '6699mail.com',      category: 'saas', blurb: 'Privacy-first consumer email' },

  // ── Training & education (3) ──────────────────────────────────
  { name: 'Networkers Home', domain: 'networkershome.com', category: 'training', blurb: 'Cisco / network engineering academy' },
  { name: 'NH Prep',         domain: 'nhprep.com',         category: 'training', blurb: 'Exam prep for network certifications' },
  { name: 'Skilledge',       domain: 'skilledge.school',   category: 'training', blurb: 'Vocational tech skills marketplace' },
] as const;

// Featured = the 6 brands we surface inline in the hero copy + bento.
export const featuredClients = [
  'Aeoniti', 'Crawlcrawl', 'Switchllm', 'Ollima', 'Super25.ai', '24observe',
] as const;
