// Jobs data — mirrored from networkershome.com/jobs (the founder's
// training-and-hiring brand, also a portfolio company). Six categories,
// 19 open roles across the founder-product portfolio.

export type JobCategoryKey =
  | 'mba-fresher'
  | 'application'
  | 'platform'
  | 'security'
  | 'ai-native'
  | 'internship';

export type JobCategory = {
  key: JobCategoryKey;
  label: string;
  accentVar: string;
};

export const jobCategories: readonly JobCategory[] = [
  { key: 'mba-fresher', label: 'MBA Freshers · IIM & Top Institutions', accentVar: 'var(--o-purple)' },
  { key: 'application', label: 'Application Engineering',               accentVar: 'var(--o-accent)' },
  { key: 'platform',    label: 'Platform Engineering',                  accentVar: 'var(--o-blue)' },
  { key: 'security',    label: 'Security Engineering',                  accentVar: 'var(--o-red)' },
  { key: 'ai-native',   label: 'AI-Native Roles',                       accentVar: 'var(--o-purple)' },
  { key: 'internship',  label: 'Internship Program',                    accentVar: 'var(--o-teal)' },
];

export type Job = {
  id: number;
  slug: string;
  title: string;
  category: JobCategoryKey;
  openings: string;
  location: string;
  employmentType: string;
  experience: string;
  compensation: string;
  summary: string;
  skills: readonly string[];
  featured?: boolean;
};

const slug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const make = (j: Omit<Job, 'slug'>): Job => ({ ...j, slug: slug(j.title) });

export const hiringOverview = {
  totalOpenings: 19,
  founderCompanies: 16,
  location: 'HSR Layout, Bangalore',
  workModel: 'Hybrid · 3 days office, 2 days remote',
  salaryBand: '₹4.5 – 15 LPA',
  minAIExperience: '1 year',
  interviewRounds: 4,
  typicalTimeline: '7–14 days from application to offer',
} as const;

export const jobs: readonly Job[] = [
  make({
    id: 0,
    title: 'MBA Fresher — AI Strategy, Sales & Distribution (Class of 2026)',
    category: 'mba-fresher',
    openings: '8–12 (Class of 2026)',
    location: 'Bangalore · Work From Office · 5 days/week',
    employmentType: 'Full-time',
    experience: 'Final-year MBA / PGP graduating in 2026 · IIM A/B/C/L/K/I/Shillong/Udaipur/Trichy · ISB · XLRI · FMS · SPJIMR · MDI · IIT-DOMS',
    compensation: '₹6.8 – ₹8.5 LPA + ESOP track · perf incentive after 6mo',
    summary: 'Help scale one of the AI businesses within the Ollasoftware ecosystem — AEONITI, Crawlcrawl, Ollima, or Switchllm. This is not a product role. The products exist. You help them reach more customers, build distribution channels, and grow revenue from day one.',
    skills: ['Claude Projects', 'Notion AI', 'ChatGPT', 'CRM / sales automation', 'Mixpanel / Amplitude', 'RevOps', 'OKRs', 'North-Star metrics', 'Spreadsheet analysis'],
    featured: true,
  }),
  make({
    id: 1,
    title: 'Frontend Engineer',
    category: 'application',
    openings: '95+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–6 years frontend · 1+ year AI tooling',
    compensation: '₹6 – 14 LPA',
    summary: 'Build production React / Next.js / Astro UIs with AI-assisted velocity. Ship eval-driven feature flags and observability. Own Core Web Vitals performance across founder products.',
    skills: ['React 19', 'TypeScript', 'Tailwind v4', 'Vite / Turbopack', 'Claude Code', 'Cursor', 'v0.dev', 'LaunchDarkly', 'PostHog'],
  }),
  make({
    id: 2,
    title: 'Backend Engineer',
    category: 'application',
    openings: '110+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '3–8 years backend · 1+ year AI tooling',
    compensation: '₹7 – 15 LPA',
    summary: 'Design idempotent APIs, queues, and event streams. Own latency budgets across the founder-product stack. Ship OpenAPI 3.1 contracts that agents can consume.',
    skills: ['Node 22', 'Python 3.13', 'Postgres 17', 'gRPC', 'FastAPI', 'Kafka', 'Redpanda', 'Claude Code', 'Google Antigravity', 'Continue.dev'],
  }),
  make({
    id: 3,
    title: 'Full-Stack Engineer',
    category: 'application',
    openings: '85+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–7 years full-stack · 1+ year AI tooling',
    compensation: '₹6 – 15 LPA',
    summary: 'Own vertical slices end-to-end — data, API, UI, telemetry. Build on the Astro + React-island stack. Wire AI agents into product flows that ship to production every sprint.',
    skills: ['Next.js 15', 'Astro 6', 'Drizzle ORM', 'tRPC', 'Cloudflare Workers', 'Claude Code', 'Cursor', 'GitHub Copilot Agent'],
  }),
  make({
    id: 4,
    title: 'UI/UX Designer',
    category: 'application',
    openings: '40+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–6 years design · 1+ year AI design tools',
    compensation: '₹5 – 13 LPA',
    summary: 'Ship Figma to production via v0.dev and Claude Artifacts. Own design systems across 16 product domains. Run weekly usability tests and feed evidence back into the roadmap.',
    skills: ['Figma', 'Framer', 'Origami Studio', 'v0.dev', 'Claude Artifacts', 'Figma Make', 'Maze', 'Lyssna'],
  }),

  make({
    id: 5,
    title: 'Android Developer',
    category: 'platform',
    openings: '55+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–7 years Android · 1+ year AI tooling',
    compensation: '₹6 – 14 LPA',
    summary: 'Ship Kotlin + Jetpack Compose apps for NHPREP, Quick21, and FreeFreeCV. Use Android Studio + Gemini for live code suggestions. Own Play Store releases end-to-end.',
    skills: ['Kotlin 2', 'Jetpack Compose', 'KMP (Kotlin Multiplatform)', 'Firebase', 'Android Studio', 'Gemini', 'Claude Code', 'Cursor'],
  }),
  make({
    id: 6,
    title: 'Mac / iOS Developer',
    category: 'platform',
    openings: '35+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–7 years Apple platforms · 1+ year AI tooling',
    compensation: '₹7 – 15 LPA',
    summary: 'Build Swift 6 + SwiftUI apps for iOS, iPadOS, and macOS as universal binaries. Use Xcode + Claude Code for autonomous refactors. Ship App Store releases through TestFlight.',
    skills: ['Swift 6', 'SwiftUI', 'Swift Data', 'StoreKit 2', 'Xcode', 'Claude Code', 'Cursor', 'Google Antigravity', 'TestFlight'],
  }),
  make({
    id: 7,
    title: 'DevOps + AI Ops Engineer',
    category: 'platform',
    openings: '70+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '3–8 years DevOps · 1+ year AI tooling',
    compensation: '₹8 – 15 LPA',
    summary: 'Operate Kubernetes + Terraform + ArgoCD across 16 founder-product domains. Build AI-augmented runbooks. Own observability — no blind spots, evidence over guesses.',
    skills: ['Kubernetes 1.31', 'Terraform', 'OpenTofu', 'ArgoCD', 'Datadog', 'OTEL', 'Honeycomb', 'Claude Code', 'Warp Agent', 'Cursor'],
  }),
  make({
    id: 8,
    title: 'MCP Server Engineer',
    category: 'platform',
    openings: '45+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–6 years backend · 1+ year MCP / agent tooling',
    compensation: '₹8 – 15 LPA',
    summary: 'Design and ship MCP servers that Claude, Gemini, and Antigravity agents call. Build typed tool schemas and OAuth flows. Own MCP transport choices and version lifecycles.',
    skills: ['TypeScript SDK', 'Python SDK', 'OAuth 2.1', 'JSON Schema', 'Claude Desktop MCP', 'Anthropic MCP SDK', 'MCP Inspector'],
  }),

  make({
    id: 9,
    title: 'Firewall Expert',
    category: 'security',
    openings: '75+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '3–8 years firewall · 1+ year AI ops tooling',
    compensation: '₹6 – 15 LPA',
    summary: 'Operate Palo Alto, Fortinet, and Check Point across enterprise and founder-product LANs. Use AI ops for anomaly detection. Ship Terraform-driven security policies.',
    skills: ['Palo Alto PAN-OS 11', 'FortiGate 7.4', 'Check Point R82', 'Cisco Secure Firewall', 'Claude Code', 'Palo Alto AIOps', 'FortiAI', 'Terraform'],
  }),
  make({
    id: 10,
    title: 'SOC Analyst (L2 / L3)',
    category: 'security',
    openings: '110+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–6 years SOC · 1+ year AI-augmented triage',
    compensation: '₹4.5 – 13 LPA',
    summary: 'Triage Sev-1 / Sev-2 incidents with Microsoft Security Copilot + Splunk AI. Write detection rules (Sigma / SPL / KQL). Own MTTR < 30 min for critical incidents.',
    skills: ['Splunk ES', 'Microsoft Sentinel', 'IBM QRadar', 'Elastic SIEM', 'Microsoft Security Copilot', 'Splunk AI Assistant', 'Claude', 'Sigma', 'SPL', 'KQL'],
  }),
  make({
    id: 11,
    title: 'Pentester / Red Team',
    category: 'security',
    openings: '50+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–7 years offensive sec · 1+ year AI tooling',
    compensation: '₹7 – 15 LPA',
    summary: 'Red-team founder-owned domains and client engagements. Use PentestGPT + Burp AI for 3× faster recon-to-report cycles. Author CVE-grade write-ups under responsible disclosure.',
    skills: ['Burp Suite Pro', 'Metasploit Pro', 'Caido', 'Nuclei', 'PentestGPT', 'Claude Code', 'Burp AI', 'Responsible disclosure'],
  }),
  make({
    id: 12,
    title: 'Compliance Engineer',
    category: 'security',
    openings: '40+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–6 years compliance · 1+ year AI policy tooling',
    compensation: '₹5 – 13 LPA',
    summary: 'Own ISO 27001 + SOC 2 Type II + DPDP Act 2023 readiness across 16 domains. Use Vanta AI for evidence collection. Ship policy-as-code instead of policy-as-PDF.',
    skills: ['ISO 27001', 'ISO 27017', 'ISO 27018', 'SOC 2 Type II', 'DPDP Act 2023', 'OPA', 'Cedar', 'Rego', 'Vanta AI', 'Drata'],
  }),

  make({
    id: 13,
    title: 'Prompt Engineer',
    category: 'ai-native',
    openings: '60+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–5 years · 1+ year production prompting',
    compensation: '₹6 – 14 LPA',
    summary: 'Design and version prompts for Claude / Gemini / GPT across NHPREP, AEONITI, and Quick21. Run evals — nothing ships without regression suites. Own model routing decisions.',
    skills: ['Claude Console', 'OpenAI Playground', 'Gemini AI Studio', 'DSPy', 'LangSmith', 'Braintrust', 'Prompt-flow', 'Pydantic AI'],
  }),
  make({
    id: 14,
    title: 'AI Tooling Engineer',
    category: 'ai-native',
    openings: '55+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '3–7 years · 1+ year agent frameworks',
    compensation: '₹8 – 15 LPA',
    summary: 'Build internal agent platforms using Claude Agent SDK + LangGraph + MCP. Design tool schemas and function-calling contracts. Own cost guardrails across reasoning models.',
    skills: ['Anthropic MCP SDK', 'LangGraph', 'Claude Agent SDK', 'Tool calling APIs', 'JSON Schema', 'Reasoning models', 'Vector DBs', 'o1', 'R1'],
  }),
  make({
    id: 15,
    title: 'OpenAPI / API Platform Engineer',
    category: 'ai-native',
    openings: '45+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '2–6 years API · 1+ year AI-consumer APIs',
    compensation: '₹6 – 14 LPA',
    summary: 'Own OpenAPI 3.1 contracts for 16 founder-product backends. Generate typed SDKs. Make every API agent-readable with descriptions that an LLM can actually use.',
    skills: ['OpenAPI 3.1', 'JSON Schema 2020-12', 'AsyncAPI', 'Stainless', 'Speakeasy', 'Fern', 'Postman', 'Bruno'],
  }),
  make({
    id: 16,
    title: 'AI Product Manager',
    category: 'ai-native',
    openings: '30+',
    location: 'Bangalore · Hybrid',
    employmentType: 'Full-time',
    experience: '4–8 years PM · 1+ year AI product shipping',
    compensation: '₹9 – 15 LPA',
    summary: 'Own roadmaps for AEONITI, NHPREP, FreeFreeCV.com, and Quick21. Write eval-driven PRDs with measurable AI outcomes. Run weekly experiments, kill what does not work.',
    skills: ['Claude Projects', 'Notion AI', 'Linear AI', 'Eval-driven PRDs', 'OKR methodology', 'North-Star metrics', 'Mixpanel', 'Amplitude'],
  }),

  make({
    id: 17,
    title: 'Premier Institute Intern',
    category: 'internship',
    openings: 'Multiple',
    location: 'Bangalore · Hybrid',
    employmentType: 'Internship',
    experience: 'IIT / IIM / NIT / IIIT freshers only',
    compensation: 'Unpaid · 6 months · conversion to ₹4.5–15 LPA pending performance',
    summary: '6-month internship with full access to Claude, Gemini, and Antigravity tooling. Real production work on founder-owned products. Performance-based conversion to full-time at the end.',
    skills: ['All AI tools required by role', 'Production-quality work', 'Founder-product exposure'],
  }),

  make({
    id: 18,
    title: 'AI Marketing Intern',
    category: 'internship',
    openings: '300',
    location: 'Work from home · India',
    employmentType: 'Internship',
    experience: 'Freshers · no prior experience required',
    compensation: '₹10,000/month stipend · 6 months · top performers convert to in-office FT at ₹20k base + up to ₹15k incentives',
    summary: 'Write SEO and AEO-grade blogs, build social content for LinkedIn / Instagram / YouTube / Quora / Reddit / Facebook, and ship marketing intelligence work across the Ollasoftware brand portfolio. 6-month remote internship; top performers convert to in-office full-time at ₹20k base plus up to ₹15k incentives per month. Applications close 5 July 2026.',
    skills: ['Blog writing', 'SEO research', 'AEO awareness', 'Social media content', 'LinkedIn', 'Instagram', 'YouTube', 'Quora', 'Reddit', 'Facebook', 'AI writing tools'],
    featured: true,
  }),
];
