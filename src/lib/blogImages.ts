// Curated, high-resolution topic-specific editorial photography for each brand deep-dive.
// Sourced from Unsplash (verified high-quality CDN links).

export const blogImages: Record<string, string> = {
  // ── AI & ML Family ──
  // Ollima: LLM router & multi-model developer hub
  'ollima': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
  // Ollagraph: Knowledge graphs & entity relations for agents
  'ollagraph': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
  // Ollabear: Agent runtime & observability telemetry dashboard
  'ollabear': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
  // Ollanode: Managed video infrastructure & streaming CDN
  'ollanode': 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80',
  // OllaDNS: API-first, MCP-native DNS filtering & resolver
  'olladns': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
  // Ollasuper: Autonomous agent fleet supervisor
  'ollasuper': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
  // Aeoniti: Answer Engine Optimization (AEO) platform
  'aeoniti': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  // Crawlcrawl: AI-grade web crawler API & extraction
  'crawlcrawl': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1600&q=80',
  // Memfog: Long-term memory vector store for AI agents
  'memfog': 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1600&q=80',
  // browserfog: Private web memory with end-to-end encryption
  'browserfog': 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&q=80',
  // 24observe: Always-on AI uptime & incident monitoring
  '24observe': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
  'twentyfourobserve': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',

  // ── Developer APIs & Tooling ──
  // Ollastack: Pre-built production AI developer stack & IDE
  'ollastack': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
  // Ollasync: Cross-platform real-time data sync for agents
  'ollasync': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
  // 21tunnel: Developer localhost tunneling API & terminal
  '21tunnel': 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1600&q=80',
  'twentyonetunnel': 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1600&q=80',

  // ── Security & Networking ──
  // OllaVPN: Quantum-safe consumer & team VPN
  'ollavpn': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
  // MeshWG: WireGuard mesh router network
  'meshwg': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
  // Quick ZTNA: Zero-Trust Network Access & gateway
  'quickztna': 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80',
  // Quick SD-WAN: Software-Defined WAN for distributed teams
  'quicksdwan': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',

  // ── Training & Education ──
  // Networkers Home: Cisco & networking training academy Bangalore
  'networkershome': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
  // NH Prep: Exam certification prep for CCNA/CCIE
  'nhprep': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80',

  // ── SaaS & Consumer ──
  // FreeFreeCV: AI resume builder & professional CV design
  'freefreecv': 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80',
};

const categoryFallbacks: Record<string, string> = {
  ai: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
  api: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
  security: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
  saas: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80',
  training: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
  education: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
};

export function getBlogImage(slug: string, category: string = 'ai'): string {
  return blogImages[slug] || categoryFallbacks[category] || categoryFallbacks.ai;
}
