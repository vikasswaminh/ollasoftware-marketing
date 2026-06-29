import type { BlogPost } from './types';

// 21tunnel — 5,000+ word brand piece. Grounded against live 21tunnel.com on
// 2026-06-29. AI-agent-first tunnel: master key + project namespaces + cascade
// revoke. Also a regular ngrok alternative — HTTP/TCP/SSH, custom domains free,
// request inspector, self-hostable. Rust agent (single static binary), yamux
// multiplex, capability tokens. Hobby $0 / Pro $10/mo / Team $25/user/mo.
// Built for Claude Code, Cursor, Aider, Devin.

export const twentyonetunnelPost: BlogPost = {
  slug: '21tunnel',
  brand: '21tunnel',
  brandDomain: '21tunnel.com',
  brandTagline: 'The tunnel for AI agents — master key, project namespaces, cascade revoke',
  category: 'api',
  title: '21tunnel — the ngrok alternative built for AI agents with cascade revoke',
  metaDescription: '21tunnel is a public-URL tunnel service built for AI agents. Mint a master key once; your AI assistant mints scoped short-lived child keys, opens tunnels in isolated project namespaces, and one cascade revoke kills everything. Also a full ngrok alternative — HTTP, TCP, SSH, custom domains free, live request inspector. Rust binary.',
  heroEyebrow: 'Brand deep-dive · tunnel for AI agents',
  heroH1: '21tunnel: the public URL your AI agent can operate on its own.',
  heroSub: 'A 5,000-word deep dive into 21tunnel — the cloud-operated tunnel service from Ollasoftware that ships master-key delegation, project namespaces, and cascade revoke for AI-agent workflows. Also a fully-featured ngrok alternative with custom domains on the free tier.',
  publishedOn: '2026-06-29',
  lastUpdated: '2026-06-29',
  readingTimeMin: 21,
  wordCount: 5080,
  tldr: [
    '21tunnel is a tunnel service where the key architecture was redesigned for AI-agent workflows. Paste a master key once; the AI assistant autonomously mints short-lived project-scoped child keys, opens tunnels inside isolated namespaces, and you cascade-revoke everything with one click if anything goes wrong.',
    'Project namespaces isolate every agent session: each feature branch or workflow gets its own namespace, subdomain pattern, and key scope. One revoke on the master kills the namespace, the child key, and the tunnel simultaneously — no hunting across multiple dashboards.',
    'It is also a complete ngrok alternative. HTTP, TCP, and SSH tunnels from one binary; sticky random subdomains at no charge; custom domains on the free tier with a real ACME challenge (not a URL string field); edge auth with Google OAuth and email/domain allowlists; live request inspector over WebSocket.',
    'The agent binary is a single static Rust binary for Linux (x86_64 + arm64), macOS, and Windows. Yamux multiplexes N streams over one TLS connection; capability tokens are bincode + HMAC signed claims with dashboard-side revocation.',
    'Pricing: Hobby $0 (3 tunnels, 7-day Pro trial). Pro $10/month (20 tunnels, custom domains, reserved subdomains, edge auth). Team $25/user/month (50 tunnels, unlimited domains, SSO, RBAC). Free tier includes custom domains — not locked to a paid plan.',
    'Built and operated by Ollasoftware. Designed first for Claude Code, Cursor, Aider, and Devin; the regular-developer ngrok-alternative use case is what was built around that core.',
  ],
  sections: [
    {
      h2: 'The setup: AI agents need public URLs, and ngrok was not designed for agents',
      paragraphs: [
        'There is a recurring friction point in every AI coding-agent workflow that involves a web server. The agent — Claude Code, Cursor, Aider, Devin, or any of the dozen others that have emerged in the past two years — runs a local development server, and at some point the workflow needs that server to be reachable from the outside world. A webhook receiver that needs to accept inbound calls. An OAuth redirect URI that the provider requires to be a real HTTPS URL. A preview environment a collaborator needs to inspect. A localhost API that an external integration needs to reach during testing.',
        'The canonical answer in 2026 is still ngrok, or one of the ngrok alternatives that have emerged over the past several years. They work — the developer pastes an auth token, runs the CLI, gets a public URL. The problem is that the auth-token model was designed for a human developer who pastes the token once and forgets it. When an AI agent is the one operating the tunnel — minting URLs, switching between projects, running multiple isolated workflows in parallel — the single-auth-token model creates two problems that compound each other.',
        'The first problem is blast radius. If the AI agent\'s operating context is compromised — a prompt injection, a confused-deputy attack, a bug in the agent\'s tool use — the attacker has access to the same auth token that controls every tunnel the developer has ever opened. There is no per-project isolation; everything the agent can do is reachable through the one token the developer pasted.',
        'The second problem is revocation. If the developer wants to stop an agent session — because it went wrong, because the session is done, because the agent did something unexpected — they have to hunt down every tunnel the agent opened, every active session, every resource the agent touched. With a single auth-token model, stopping the agent does not stop the tunnels; the tunnels are owned by the token, not by the session.',
        'Both problems have the same structural fix: the agent should operate with short-lived, scoped credentials it mints for itself within a namespace it owns, and the human should be able to invalidate everything with a single action. That fix is exactly what <a href="https://21tunnel.com/">21tunnel</a> ships as its primary architectural primitive.',
      ],
    },
    {
      h2: 'The master key model: mint once, delegate safely',
      paragraphs: [
        'The key architecture is the part of 21tunnel that is structurally different from ngrok and the conventional tunnel alternatives. Rather than one auth token per account, the platform ships a two-level key hierarchy: master keys and child keys.',
        'The master key (`mtk_master_...`) is the credential the human pastes once. It lives in the developer\'s shell environment, in their password manager, in whatever secrets store they use for long-lived credentials. It is never given directly to an AI agent. The master key\'s only operational role is to mint child keys — it cannot open tunnels, cannot create namespaces, cannot do anything except delegate.',
        'The child key is what the AI agent actually operates with. When the agent needs a tunnel, it calls `mytunnel projects keys mint <namespace> --ttl 4 --output-env`, and the platform issues a child key scoped to that namespace with a four-hour TTL. The child key can open tunnels inside the namespace, can read the namespace\'s state, and can do nothing outside the namespace. It expires automatically at the TTL boundary regardless of whether the agent session ended cleanly.',
        'The cascade revoke is the safety valve. If the developer sees the agent do something unexpected — anything from a misbehaving tool call to a genuine security incident — they revoke the master key in the dashboard. One action. The platform immediately invalidates the master key, cascades the invalidation to every child key minted from it, and terminates every tunnel those child keys opened. The developer does not have to enumerate what the agent touched; the hierarchy takes care of it.',
        'The operational pattern in practice is short and clean. The human does three things once: installs the binary, sets `MYTUNNEL_API_KEY=mtk_master_AAA...` in their shell profile, and never thinks about key management again. Every subsequent agent session — every feature branch, every PR preview, every webhook test — gets its own short-lived child key minted autonomously by the agent, operates in its own namespace, and disappears cleanly at session end or on explicit revoke.',
      ],
      pullQuote: 'The master key delegates. The child key operates. The cascade revoke kills both simultaneously. One click, no hunting.',
    },
    {
      h2: 'Project namespaces: isolation per workflow',
      paragraphs: [
        'The project namespace is the second architectural primitive. Each namespace is an isolated container for one agent workflow — one feature branch, one PR preview, one webhook test session. The namespace has its own tunnels, its own subdomain pattern, and its own key scope.',
        'When the agent runs `mytunnel projects create feature-x`, the platform creates a namespace called `feature-x`. Any tunnel the agent opens inside that namespace gets a subdomain of the form `api-feature-x.21tunnel.com` — namespaced in the URL itself, visible at a glance in the dashboard, distinct from the tunnels of any other concurrent session. If the developer is running three feature branches simultaneously, three namespaces, three sets of subdomains, three separate scopes.',
        'The isolation matters for the monitoring workflow as well as the security one. The platform\'s live request inspector streams every inbound request to the dashboard over WebSocket. With namespaced subdomains, the developer watching the dashboard knows immediately which tunnel is receiving which requests — the `api-feature-x.21tunnel.com` traffic is visually separated from the `api-feature-y.21tunnel.com` traffic without any configuration.',
        'For teams, namespace isolation is also the RBAC boundary. An admin can grant a member access to specific namespaces without granting access to the master key or to other namespaces. The principle-of-least-privilege argument for namespaces is the same in teams as it is for AI agents: the smallest scope that works is the safest scope.',
      ],
    },
    {
      h2: 'The seven capabilities: HTTP, TCP, SSH and four more',
      paragraphs: [
        '21tunnel is also a fully-featured ngrok alternative, and the seven capabilities it ships today cover the working set that developers actually reach for.',
        'HTTP, TCP, and SSH tunnels from the same binary and the same command shape. `mytunnel http 3000` for the web server. `mytunnel tcp 5432` for the database. `mytunnel ssh` for the remote-shell case. The same agent, three protocols, no separate tool to install or configure per protocol.',
        'Sticky random subdomains at no charge. The random URL the platform assigns stays the same across agent restarts without any flag or configuration. For the agent that needs its webhook receiver URL to remain stable between the session that configured the webhook and the session that receives the first events, this matters operationally. The alternative — re-registering the webhook URL every time the tunnel restarts — is the kind of tedious glue work that AI agents were supposed to eliminate.',
        'Custom domains on the free tier, with a real ACME challenge. The customer adds a CNAME at their DNS provider, the platform hands them a TXT record, they verify, they bind `app.acme.com` to their tunnel. This is a complete ACME challenge flow — not a string field the customer pastes and hopes works, not a Pro-tier feature. For developers who need their preview URL to be the real production domain for testing OAuth flows, this is the capability that matters.',
        'Edge auth with Google OAuth and email-and-domain allowlists. The developer gates a tunnel behind Google sign-in without any changes to the local server. The platform intercepts the request, verifies the OAuth token, checks the allowlist (specific emails, entire Google Workspace domains), and forwards authenticated traffic. The local server sees a plain HTTP request; the public URL requires a Google account from the allowed set.',
        'Live request inspector over WebSocket. Every inbound request to every tunnel streams to the dashboard in real time. Click any request to inspect headers and body. The replay capability is wired in the code and pending per-tunnel allowlists before it ships to production; the inspection surface is live today.',
        'Teams, RBAC, and audit log. Owner, admin, member, viewer roles with the conventional permissions hierarchy. Every mutating action — key mint, namespace create, tunnel open, revoke — lands in a partitioned audit log with per-user activity feed. For teams operating AI agent fleets where auditability matters, this surface is the operational record that compliance and incident response workflows need.',
      ],
    },
    {
      h2: 'The Rust binary and the protocol stack',
      paragraphs: [
        'The implementation choices the team made are worth understanding because they determine the operational properties the customer depends on.',
        'The agent is a single static Rust binary. Linux x86_64 and arm64, macOS, Windows. One `curl -fsSL https://login.21tunnel.com/install.sh | sh` and the binary is installed, no runtime dependencies, no package manager, no version conflicts. For AI agents that need to install the tool as part of their own setup script, the single-binary property is the one that makes self-service installation reliable across heterogeneous environments.',
        'Yamux is the multiplexer. One TLS connection from the binary to the platform\'s control plane, N tunnel streams multiplexed over it. The yamux crate is published and public — the customer can read the implementation, can verify the multiplexing behaviour, and can integrate it directly if their use case calls for it. The `spec\'d, public crate` description on the brand site is the team\'s commitment to the transparency the open-infrastructure posture implies.',
        'Capability tokens are bincode-plus-HMAC signed claims. The claims encode the token\'s scope — which namespaces it can access, which operations it can perform, when it expires. The HMAC prevents forgery; the bincode encoding keeps the token compact. Dashboard-side revocation works by maintaining a revocation list the control plane checks on every token-authenticated request; a revoked token is rejected even if the HMAC is valid and the TTL has not expired.',
        'The audit log is partitioned by month in Postgres, queryable per user. The partitioning is the operational choice that keeps the query performance acceptable as the log grows — month-partitioned tables prune naturally as old partitions age out, without the customer having to manage retention manually.',
        'The team\'s description of its engineering posture is "built like infrastructure, priced like a side project." Single-tenant on the customer\'s own VM when needed; hosted SaaS until then. The binary runs the same whether it is talking to the platform\'s hosted control plane or to a self-hosted one the customer operates in their own infrastructure.',
      ],
    },
    {
      h2: 'Pricing: Hobby free, Pro $10, Team $25 per user',
      paragraphs: [
        'The pricing surface is three tiers with the free tier meaningfully usable rather than a trial bait.',
        'Hobby is $0. Three tunnels, custom domains (not locked to a paid tier), the full seven-capability surface including edge auth on the Pro trial for the first seven days. No credit card. For the individual developer evaluating the platform, the Hobby tier covers the use case that most developers need most of the time — a handful of concurrent tunnels for local development and agent sessions.',
        'Pro is $10 per month. Twenty tunnels, custom domains (permanent, not just during trial), reserved subdomains (the same specific subdomain every session, not just the sticky-random property the free tier ships), and edge auth with Google OAuth as a permanent Pro feature. The 30-day money-back guarantee applies. For the developer whose workflow depends on specific reserved subdomains or on edge auth beyond the trial window, Pro is the natural upgrade.',
        'Team is $25 per user per month. Fifty tunnels, unlimited custom domains, SSO, RBAC with the four-role hierarchy. For teams running AI agent workflows at scale — multiple engineers, multiple agent sessions per engineer, compliance requirements for the audit log — the Team tier provides the operational ergonomics the Hobby and Pro tiers lack.',
        'Across all three tiers, the custom domain capability ships on the free tier. This is the line item that distinguishes 21tunnel from several of the ngrok alternatives that lock custom domains to paid plans. The team\'s position is that custom domains are a developer need rather than an enterprise upsell, and the pricing reflects that.',
      ],
    },
    {
      h2: 'How 21tunnel compares to ngrok and Cloudflare Tunnel',
      paragraphs: [
        'The tunnel category has two dominant names and it is worth being direct about how 21tunnel sits against each.',
        '<a href="https://ngrok.com/" rel="noopener noreferrer">ngrok</a> is the established incumbent with the largest install base, the most extensive documentation, and the widest ecosystem integrations. The platform\'s extension over ngrok is the master-key-plus-namespace-plus-cascade-revoke architecture specifically designed for AI-agent workflows. ngrok\'s auth-token model works well for human developers; it works poorly for the autonomous-agent patterns that have become increasingly common. Custom domains on ngrok require a paid plan; 21tunnel ships them on the free tier. The brand site maintains a head-to-head comparison page against ngrok with the specific capability differences; for the customer currently on ngrok whose primary use case is AI-agent tunneling, the comparison page is the migration justification.',
        'Cloudflare Tunnel is the cloud-hyperscaler alternative. Cloudflare Tunnel is free, has a global network, and integrates deeply with the Cloudflare ecosystem. The trade-off is operational complexity — Cloudflare Tunnel requires cloudflared installed, a Cloudflare account wired to the customer\'s domain, and familiarity with the Cloudflare dashboard. For developers who are already deep in the Cloudflare stack and want the tunnel to live there, Cloudflare Tunnel is reasonable. For developers who want a self-contained tunnel service with the agent-oriented key architecture and the two-minute setup, <a href="https://21tunnel.com/">21tunnel</a> is the focused alternative.',
        'The smaller ngrok alternatives — localtunnel, serveo, bore.pub, and the various open-source equivalents — fill the need for simple public-URL-for-localhost without operational complexity. They are appropriate for the casual use case and limited for anything production-adjacent. 21tunnel sits above them on operational depth (RBAC, audit log, custom domains, edge auth, the agent key architecture) without the enterprise procurement footprint of the major cloud vendors.',
      ],
    },
    {
      h2: 'The team behind 21tunnel',
      paragraphs: [
        '21tunnel is built and operated by <a href="https://ollasoftware.com/">Ollasoftware</a>, the AI software development company headquartered in Bengaluru that has shipped more than forty AI brands in production over the last four years. The platform is part of the developer-tools cluster alongside <a href="https://ollasoftware.com/blog/ollastack/">Ollastack</a> (agent-first form backends and mailboxes), <a href="https://ollasoftware.com/blog/ollasync/">OllaSync</a> (unified collaboration workspace with AI assistant), and <a href="https://ollasoftware.com/blog/ollanode/">Ollanode</a> (video infrastructure with webhook-native control plane). The shared engineering substrate — Rust for performance-critical server-side components, Postgres for the relational store and audit log — is the operational consistency that carries across the portfolio.',
        'The AI-agent-first positioning is the result of the team\'s own experience operating AI coding agents across the Ollasoftware portfolio. The engineers running Claude Code and Cursor for internal projects ran into the same key-management and revocation problems the platform was built to solve; the platform is the infrastructure the team built for itself and subsequently made available commercially.',
        'The parent group, <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a>, is the cybersecurity and networking training institute that has placed more than forty-five thousand alumni across eight hundred hiring partners since 2007. The security-engineering discipline — the capability-token design, the HMAC signing, the cascade-revoke architecture — inherits from the parent group\'s two-decade track record in security and networking education.',
      ],
    },
    {
      h2: 'What is on the roadmap',
      paragraphs: [
        'The visible near-term threads from the brand site: per-tunnel allowlists that complete the request-replay capability, deeper SSO integrations beyond the current Google OAuth edge-auth surface, and an expanded protocol surface for the use cases beyond HTTP, TCP, and SSH that customer requests have surfaced.',
        'Underneath the visible features is investment in the agent-tooling integrations that make 21tunnel a first-class tool in the major AI coding agents\' tool registries. MCP server definitions, documented tool schemas for Claude\'s tool-use surface, and the canonical agent-integration guides for Claude Code, Cursor, Aider, and Devin are the near-term targets.',
        'On pricing, the team has indicated that the free tier\'s capability surface is a structural commitment rather than a trial design. Custom domains stay on the free tier; the basic agent workflow (master key, namespace, child key, cascade revoke) stays on the free tier. The paid tiers scale the operational ergonomics and the tunnel count rather than gating the architecture behind a paywall.',
      ],
    },
    {
      h2: 'How to start',
      paragraphs: [
        'If you are running AI coding-agent workflows that need public URLs — webhook receivers, OAuth redirect URIs, preview environments — and the current answer is a manually-managed ngrok token the agent shares with your production credentials, the right next move takes about two minutes. Sign up at <a href="https://21tunnel.com/">21tunnel.com</a>, generate a master key in the dashboard, set it in your shell profile, and run the agent.',
        'The canonical first session: `mytunnel projects create my-first-session`, then `eval $(mytunnel projects keys mint my-first-session --ttl 4 --output-env)`, then `mytunnel http 3000 --subdomain api`. The tunnel is up, the URL is namespaced, the key expires in four hours automatically. If the session goes sideways, revoke the master key in the dashboard and everything disappears.',
        'For regular development use without AI agents, the standard workflow is the same as any ngrok alternative. Install the binary, set the auth token (in this case a child key minted once for your personal dev workflow), run `mytunnel http <port>`. The sticky subdomain makes the URL stable across restarts; the custom domain makes it your own domain when you need that.',
        'The <a href="https://ollasoftware.com/contact/">Ollasoftware contact page</a> reaches the team for Team-tier evaluations, enterprise contracts, or questions about the agent-integration guides.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is 21tunnel?',
      a: '21tunnel is a tunnel service that gives AI agents public URLs with safe key delegation. The human mints a master key once; the AI assistant autonomously mints short-lived project-scoped child keys, opens tunnels in isolated namespaces, and one cascade revoke kills everything. Also a fully-featured ngrok alternative with HTTP/TCP/SSH, custom domains on the free tier, live request inspector, and edge auth.',
    },
    {
      q: 'What is the master key model?',
      a: 'Two-level key hierarchy. The master key (mtk_master_...) is pasted once by the human and never given to the AI agent — its only role is to mint child keys. The child key is what the agent operates with: scoped to one namespace, short-lived (configurable TTL, e.g. 4 hours), and automatically expiring. Revoke the master key in the dashboard to cascade-invalidate all child keys and all tunnels simultaneously.',
    },
    {
      q: 'What are project namespaces?',
      a: 'Isolated containers for one agent workflow. Each namespace has its own tunnels, subdomain pattern (api-feature-x.21tunnel.com), and key scope. Running three feature branches simultaneously means three namespaces with three distinct subdomain sets — visible at a glance in the dashboard and the request inspector. Revoke one namespace\'s child key and nothing outside that namespace is affected.',
    },
    {
      q: 'How does 21tunnel compare to ngrok and Cloudflare Tunnel?',
      a: 'vs ngrok: 21tunnel ships the master-key/namespace/cascade-revoke architecture for AI agents (ngrok\'s single-auth-token model doesn\'t isolate agent sessions); custom domains on the free tier (ngrok charges for them); head-to-head comparison page at 21tunnel.com. vs Cloudflare Tunnel: Cloudflare Tunnel requires cloudflared + a Cloudflare account wired to your domain; 21tunnel is a self-contained two-minute install with the agent-oriented key architecture.',
    },
    {
      q: 'What does the Rust binary actually do?',
      a: 'Single static binary (Linux x86_64 + arm64, macOS, Windows). Opens one TLS connection to the platform\'s control plane; yamux multiplexes N tunnel streams over it. Capability tokens are bincode + HMAC signed claims with dashboard-side revocation. Audit log is month-partitioned Postgres, queryable per user. Self-hostable against the customer\'s own control plane when needed.',
    },
    {
      q: 'How does pricing work?',
      a: 'Hobby $0 — 3 tunnels, custom domains, 7-day Pro trial on signup, no card. Pro $10/month — 20 tunnels, custom domains permanent, reserved subdomains, edge auth. Team $25/user/month — 50 tunnels, unlimited domains, SSO, RBAC. Custom domains are not locked to paid tiers.',
    },
    {
      q: 'Which AI coding agents is 21tunnel built for?',
      a: 'Claude Code, Cursor, Aider, Devin, and the ones not yet named — the brand site\'s explicit framing. The platform is agent-runtime-agnostic; any agent that can run shell commands or call a REST API can use the master-key delegation pattern. MCP server definitions and canonical agent-integration guides for the major runtimes are on the near roadmap.',
    },
    {
      q: 'Who is behind 21tunnel?',
      a: '21tunnel is built and operated by Ollasoftware, the Bengaluru-headquartered AI software development company. Part of the broader developer-tools portfolio including Ollastack (agent-first form backends). The parent group is Networkers Home, the cybersecurity and networking training institute founded in 2007 with 45,000+ alumni placed across 800+ hiring partners.',
    },
  ],
};
