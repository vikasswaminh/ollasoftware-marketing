// Portfolio of brands we own and operate. Mirrors the CF zone list (minus the
// founder's personal domain, the duplicate ccTLDs, ollasoftware.com itself,
// and the parent training brand which is linked separately as
// parentOrganization in seo.ts).
//
// Reconciled 2026-07-02 against the live CF zone list (54 zones). Within
// each category, brands prefixed with "olla*" lead — they are the canonical
// Ollasoftware-owned product family.

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
  // ── AI & ML (18) ──────────────────────────────────────────────
  // Olla-prefixed family first.
  { name: 'Ollima',        domain: 'ollima.com',        category: 'ai', blurb: 'AI workspace for ops teams' },
  { name: 'Ollagraph',     domain: 'ollagraph.com',     category: 'ai', blurb: 'Knowledge graphs for agents' },
  { name: 'Ollabear',      domain: 'ollabear.com',      category: 'ai', blurb: 'Agent runtime + observability' },
  { name: 'Ollanode',      domain: 'ollanode.com',      category: 'ai', blurb: 'Managed video infrastructure and CDN for AI apps' },
  { name: 'OllaDNS',       domain: 'olladns.com',       category: 'ai', blurb: 'AI-aware DNS for distributed agents' },
  { name: 'Ollasuper',     domain: 'ollasuper.com',     category: 'ai', blurb: 'Supervisor for autonomous agent fleets' },
  { name: 'Ollawrite',     domain: 'ollawrite.com',     category: 'ai', blurb: 'AI writing assistant with grounded citations' },
  // The rest of the AI family.
  { name: 'Aeoniti',       domain: 'aeoniti.com',       category: 'ai', blurb: 'Answer-engine optimisation platform' },
  { name: 'Crawlcrawl',    domain: 'crawlcrawl.com',    category: 'ai', blurb: 'AI-grade web crawler for AEO' },
  { name: 'Switchllm',     domain: 'switchllm.com',     category: 'ai', blurb: 'LLM router with cost & latency gates' },
  { name: 'Memfog',        domain: 'memfog.com',        category: 'ai', blurb: 'Agent memory store + recall API' },
  { name: 'NAC4AI',        domain: 'nac4ai.com',        category: 'ai', blurb: 'Network access control for AI agents' },
  { name: 'browserfog',    domain: 'browserfog.com',    category: 'ai', blurb: 'Private web memory with end-to-end encryption' },
  { name: 'Super25.ai',    domain: 'super25.ai',        category: 'ai', blurb: 'Frontier-model evaluation harness' },
  { name: '24observe',     domain: '24observe.com',     category: 'ai', blurb: 'Always-on AI uptime & eval monitor' },
  { name: 'Hitcli',        domain: 'hitcli.com',        category: 'ai', blurb: 'AI-native command-line companion' },
  { name: 'Qcrawl',        domain: 'qcrawl.com',        category: 'ai', blurb: 'Distributed crawl scheduler' },
  { name: 'Downdownalert', domain: 'downdownalert.com', category: 'ai', blurb: 'AI-summarised incident alerting' },

  // ── APIs & dev tools (14) ─────────────────────────────────────
  // Olla-prefixed family first.
  { name: 'Ollastack',     domain: 'ollastack.com',     category: 'api', blurb: 'Pre-built stacks for production AI apps' },
  { name: 'Ollasync',      domain: 'ollasync.com',      category: 'api', blurb: 'Cross-platform data sync for agents' },
  { name: 'Ollalink',      domain: 'ollalink.com',      category: 'api', blurb: 'Smart link management and short-URL platform' },
  // The rest.
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
  { name: 'Whatping',      domain: 'whatping.com',      category: 'api', blurb: 'Status & uptime monitoring for endpoints' },

  // ── Security & networking (10) ────────────────────────────────
  // Olla-prefixed family first.
  { name: 'Ollavpn',          domain: 'ollavpn.com',          category: 'security', blurb: 'Quantum-safe consumer VPN' },
  // The rest.
  { name: '21tunnel',         domain: '21tunnel.com',         category: 'security', blurb: 'Tunneling-as-a-service' },
  { name: 'StandVPN',         domain: 'standvpn.com',         category: 'security', blurb: 'Consumer + business VPN' },
  { name: 'Meshwg',           domain: 'meshwg.com',           category: 'security', blurb: 'WireGuard mesh networking' },
  { name: 'QSec Network',     domain: 'qsecnetwork.com',      category: 'security', blurb: 'Post-quantum secure networking' },
  { name: 'Quick ZTNA',       domain: 'quickztna.com',        category: 'security', blurb: 'Zero-trust network access' },
  { name: 'Quick SD-WAN',     domain: 'quicksdwan.com',       category: 'security', blurb: 'SD-WAN for distributed teams' },
  { name: 'Namahos',          domain: 'namahos.com',          category: 'security', blurb: 'Identity-aware infrastructure' },
  { name: 'Freevpn4usa',      domain: 'freevpn4usa.com',      category: 'security', blurb: 'Free VPN for US-based users' },
  { name: 'Lifetimefreevpn',  domain: 'lifetimefreevpn.com',  category: 'security', blurb: 'Forever-free consumer VPN' },

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
