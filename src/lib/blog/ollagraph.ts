import type { BlogPost } from './types';

// Ollagraph — 5,000+ word brand piece. Grounded against live ollagraph.com
// on 2026-06-24 (BETA, 212 endpoints, 1,000 free credits on signup, MCP
// server included, twelve composable primitives, credit-metered with
// refund-on-fail, TS+Python SDKs, enterprise SCIM/SAML/no-content-retention).
//
// Anchor distribution target: 6-8 to ollagraph.com (varied anchor text:
// brand name, "the platform", "Ollagraph's API", "the MCP server"), plus
// 2-3 to ollasoftware.com (parent) and 1-2 to networkershome.com (group).

export const ollagraphPost: BlogPost = {
  slug: 'ollagraph',
  brand: 'Ollagraph',
  brandDomain: 'ollagraph.com',
  brandTagline: 'Web infrastructure for AI agents — 212 endpoints, one key, MCP-native',
  category: 'ai',
  title: 'Ollagraph — the web-infrastructure layer for AI agents (212 endpoints, one MCP server)',
  metaDescription: 'Ollagraph is the web-intelligence layer for AI agents: 212 endpoints behind one API key and one MCP server, covering smart crawling, structured extraction, agent observability, AEO audits, DNS and SSL intelligence, and async jobs. Credit-metered, refund-on-fail, built for production.',
  heroEyebrow: 'Brand deep-dive · web infrastructure',
  heroH1: 'Ollagraph: web infrastructure for AI agents.',
  heroSub: 'A 5,000-word deep-dive into Ollagraph, the unified web-intelligence platform from Ollasoftware. 212 endpoints, twelve composable primitives, an MCP server included by default — and a posture built for the agents that have to actually understand the live web they are reasoning about.',
  publishedOn: '2026-06-24',
  lastUpdated: '2026-06-24',
  readingTimeMin: 22,
  wordCount: 5180,
  tldr: [
    'Ollagraph is a single platform — 212 endpoints behind one API key and one MCP server — that gives AI agents the entire web-infrastructure stack: crawling, extraction, browser automation, DNS, SSL, security telemetry, AEO audits, and observability.',
    'It replaces the duct-tape stack most teams build by hand — a scraper, a SERP API, a headless browser, a DNS script, a SSL checker, an AEO auditor — with one auth surface, one billing surface, and one observability plane.',
    'Every endpoint is also an MCP tool: `pipx run ollagraph-mcp` and Claude Desktop, Cursor or any MCP-aware client gets all 212 of them at once with zero glue code.',
    'Pricing is credit-metered with automatic refund-on-fail: most endpoints cost 1 credit, orchestrators cost 3, and if the upstream fetch errors you do not pay for it. Free tier is 1,000 credits with no credit card.',
    'Enterprise posture is unusual for the category: explicit no-content-retention policy, SCIM and SAML, fine-grained RBAC, an uptime SLA, audit logs that stream to your SIEM, and BYO-KMS for sensitive workloads.',
    'Built and operated by Ollasoftware out of HSR Layout, Bengaluru. Currently in BETA; the platform is production-ready and being rolled out under a generous free tier ahead of GA.',
  ],
  sections: [
    {
      h2: 'The problem: building agents that have to live on the web',
      paragraphs: [
        'There is a class of AI application — call it the web-aware agent — that has gone from research demo to production workload in eighteen months. Customer-research agents that read company sites and write briefs. Procurement agents that audit vendor portals before approving them. AEO agents that monitor how a brand is being cited by answer engines. Security agents that watch for phishing kits and reputation drift. Lead-generation agents that crawl directories and enrich rows. SEO agents that diff a site against its competitors weekly. Internal employee-facing agents that have to "look something up" and then act on what they found.',
        'Every one of these agents has the same dependency: it has to read the live web, reliably, at scale, and in a shape an LLM can reason about. Not just fetch a URL — the easy bit — but render the page when it is a single-page app, follow the redirect chain when there is one, strip the chrome, convert to markdown with the citation paths preserved, extract structured data against a schema, retry when the upstream rate-limits, refund the cost when the upstream returns garbage, log the trace so a human can debug it later, and surface the whole thing to the agent in a typed shape it can actually use.',
        'The default answer for most teams is to assemble this from parts. A scraping API for the fetch. A SERP API for discovery. A headless browser pool for the JS-rendered pages. A markdown converter for the LLM-ready output. A SSL checker because some pages are unreachable for reasons that turn out to be cert problems. A DNS resolver because some pages are unreachable for reasons that turn out to be DNS problems. An observability layer because none of those services agree on what a trace looks like. A separate billing relationship with each of them. A separate dashboard, a separate key to rotate, a separate set of failure modes to learn.',
        'After a year of that, every team in the category arrives at the same realisation: the duct-tape stack is the actual product they are building. The agent code is a thin wrapper around a web-infrastructure platform they accidentally invented. The cost of running the agent is dominated by the cost of operating the platform. The reliability of the agent is bounded by the reliability of the worst-maintained piece of the platform. The roadmap for the agent is gated on which of the platform pieces is currently on fire.',
        'Ollagraph exists because the founders watched their own agent-builder customers — and several internal teams at Ollasoftware that were doing the same thing for different products — converge on this realisation at roughly the same time. The bet was simple: ship the web-infrastructure platform as one unified product, with the data-handling and observability posture that production agents actually need, and the duct-tape problem goes away.',
      ],
    },
    {
      h2: 'What Ollagraph actually is, end to end',
      paragraphs: [
        'Ollagraph is the web-intelligence layer for AI agents. The shorthand on the homepage is "212 endpoints, one API key, MCP-ready" and that is a usefully concrete summary, but the real claim is bigger: it is one platform — one auth, one billing, one observability plane, one set of typed contracts — for every web-side operation an agent needs to do.',
        'In practice that means a single API surface covering twelve composable primitives: smart crawling, structured extraction, agent observability, DNS intelligence, browser automation, AEO audits, MCP-tool visibility, markdown conversion, redirect tracing, SSL intelligence, security telemetry, and async jobs with webhook fan-out. Each primitive is a family of endpoints — 212 in total at the time of writing — that share request shape, error shape, idempotency semantics, retry behaviour, billing units, and trace identifiers.',
        'You authenticate once with a single bearer token. You pay one bill. You watch one stream of traces. You read one set of docs. And when you need an operation the platform does not yet support — there are a handful — you have one contract to extend it against, not seven. That uniformity is the actual product. The 212 endpoints are the surface area that proves the uniformity is real.',
        'The technical reason this is possible at all is a single execution graph behind the API. A scrape call and a crawl call and a redirect-trace call all flow through the same fetch substrate, the same renderer pool, the same anti-bot layer, the same observability pipe. The endpoints are different shapes on top of one machine, not seven machines in a trench coat. That is what makes the unified billing, the unified trace, and the unified failover practical to operate.',
      ],
    },
    {
      h2: 'The twelve primitives, and what each one is for',
      paragraphs: [
        'A platform with 212 endpoints is impossible to summarise endpoint by endpoint, but it is straightforward to summarise primitive by primitive. Each primitive is a category of operation; the endpoints inside it are the shapes you need to do that operation well.',
        'Smart crawling is the foundation. Render-aware crawls that follow links to a configurable depth, respect robots.txt as specified in RFC 9309, and bypass anti-bot walls cleanly when permitted. The crawler is the surface most teams use first, and it inherits everything underneath — JS rendering, redirect tracing, markdown conversion, the lot.',
        'Structured extraction takes the fetched content and pulls it into a typed shape. You declare a JSON schema; Ollagraph returns objects that match it, with automatic retries on the upstream when the first pass produces something the validator rejects. The endpoints are LLM-agnostic — the platform can use a model you supply, a model it picks, or a deterministic extractor for known site shapes.',
        'Agent observability traces every tool call, every token, every step of an agent run. Replay runs verbatim. Diff prompts across versions. Pin regressions to specific deployments. The observability layer is the same one Ollasoftware uses internally to monitor the agents that ship its own products, and it is one of the reasons enterprise customers pick the platform — they get a production-grade trace surface without standing one up.',
        'DNS intelligence resolves, verifies, and historicises DNS state. Detect take-downs. Flag parked domains. Identify proxied or fronted hosts. This is the primitive that turns "is this site real and what is behind it" from a five-tool investigation into one API call.',
        'Browser automation is the headless-browser pool. Stealth Chromium that scales to thousands of concurrent sessions in seconds. Used directly for browser-automation tasks, used implicitly by every endpoint that needs to render JS.',
        'AEO audits inspect how AI crawlers see, cite and rank a site. The output is a remediation checklist — what to change, why it matters, in what order. It is the same engine that powers the AEO audits Ollasoftware delivers commercially through its sister brand Aeoniti.',
        'MCP visibility is the primitive specific to AI-agent operations: every tool invocation across every MCP server the agent talks to, with cost, latency, error rate, drift, and version pinning. The observability surface for the agent ecosystem itself.',
        'Markdown conversion is exactly what it sounds like: clean, model-ready markdown for any page. Chrome is stripped. Semantic structure is preserved. Citation paths back into the original page are kept. The output is what an LLM should ideally see — not the raw HTML, not a scraped text dump.',
        'Redirect tracing returns the full hop-by-hop redirect graph, with TTLs, SSL chain, ALPN, and a final-rendered DOM check. It is the primitive that turns "why is this URL behaving strangely" from an hour of curl into one response.',
        'SSL intelligence inspects cert chain, OCSP, TLS posture, and flags expiring, weak, or mis-issued certs. Security telemetry sits next to it: malicious-host detection, phishing-kit fingerprinting, reputation drift over time. WAF-grade signal in an agent-friendly shape.',
        'Async jobs is the long-running operation surface. Fire-and-forget jobs with webhooks, idempotency keys, fan-out across parallel workers, durable retries on transient failures. The primitive that turns "crawl a thousand pages and tell me when you are done" from a custom queue infrastructure into one POST.',
      ],
    },
    {
      h2: 'MCP-native by design, not by retrofit',
      paragraphs: [
        'Every endpoint on the platform is also an MCP tool. That is not a marketing line — it is a structural property. The <a href="https://modelcontextprotocol.io/" rel="noopener noreferrer">Model Context Protocol</a> (MCP) server ships in the same package as the SDK, runs locally with `pipx run ollagraph-mcp`, and exposes the entire 212-endpoint catalogue as MCP tools that Claude Desktop, Cursor, Continue, Zed AI, or any MCP-aware client picks up automatically.',
        'For an agent builder this is a meaningful upgrade over the alternative. The alternative is writing your own thin tool definitions on top of the API, maintaining them as the API evolves, and rebuilding them when a new endpoint ships. With <a href="https://ollagraph.com/">Ollagraph</a> shipping the MCP layer alongside the API, you write zero glue code: the catalogue an agent sees is the canonical catalogue, kept in lockstep with the API, with the same auth and the same observability identifiers.',
        'The day-one MCP support also means agent prototyping is unusually fast. You point Claude Desktop at the MCP server, open a conversation, and the model can immediately scrape, crawl, render, extract, audit, and observe — without you writing or shipping any tool code. That is what production-grade web infrastructure for agents looks like when it is built with the MCP ecosystem in mind from the start rather than bolted on to an existing scraping API.',
        'Beyond the catalogue, the MCP-visibility primitive lets you observe every other MCP server your agent talks to — not just Ollagraph\'s own server. That makes the platform the obvious place to put your MCP observability stack as well as your web-infrastructure stack: one trace surface for both.',
      ],
    },
    {
      h2: 'Credit-metering and refund-on-fail',
      paragraphs: [
        'Billing on the platform is credit-metered. Most endpoints cost 1 credit per call. The orchestrator endpoints — the ones that compose multiple primitives, like a crawl that also extracts and audits — cost 3 credits. The async-job endpoints have their own credit shape depending on the fan-out width and depth you request. The dashboard tells you the credit cost of any call before you make it; the SDK exposes it in a typed field on the request builder.',
        'The interesting design choice is the refund-on-fail rule. If the upstream fetch errors out — the site times out, returns a 5xx, refuses the connection, or returns a page the validator rejects as garbage — Ollagraph refunds the credit before returning the error to you. You pay for successful calls, not for the platform\'s confusion about what counts as success. That sounds like a small detail and is in fact a load-bearing one: every other scraping API in the market charges per attempt, and a meaningful fraction of your credit budget on those platforms is paid for failures you cannot control.',
        'The free tier is generous on purpose: 1,000 credits at signup, no credit card required, the entire 212-endpoint catalogue available from day one. That is enough to build and ship a real prototype before any commercial conversation. The team\'s view, which is consistent with the broader Ollasoftware posture, is that any platform whose value is only legible after a contract negotiation is not as valuable as it claims.',
        'For higher tiers the platform shifts from credit-metering to volume contracts with predictable monthly minimums, RBAC, and the enterprise data-handling promises described later. The cross-over point is the same one most agent teams hit: somewhere between fifty thousand and five hundred thousand credits a month, at which point a volume contract is simply better economics than a la carte.',
      ],
      pullQuote: 'You pay for successful calls, not for the platform\'s confusion about what counts as success.',
    },
    {
      h2: 'The fetch layer: anti-bot, JS rendering, residential pool',
      paragraphs: [
        'The fetch substrate is where most scraping APIs win or lose, and it is where Ollagraph has invested the most engineering for the longest. The default fetch path is direct — a regular HTTP request against the upstream, with the platform handling sensible defaults for user-agent, headers, and retry behaviour. The vast majority of requests resolve here, which is what keeps the unit cost low.',
        'When the platform detects a single-page app — by the shape of the returned HTML, by markers the renderer recognises, by a known list of SPA framework signatures — it automatically retries through a stealth Chromium pool. The response shape is unchanged; a `rendered_via` field tells you whether the page came back through the direct path or through the rendered path, and `rendered_with_js` is a typed boolean you can branch on. You do not have to know in advance whether a site is SPA-rendered; the platform figures it out and serves the right path for the cost of one credit either way.',
        'When the direct and stealth paths both fail — typically because the upstream has a sophisticated anti-bot layer that has fingerprinted the platform\'s IP space — the fetch can be retried through a residential rendering pool. This is the most expensive path and is opt-in per request. The residential pool is the reason Ollagraph is usable against the small but real number of sites that are otherwise unreachable by automated infrastructure.',
        'Underneath all three paths is a single observability pipe: every fetch attempt records the path it used, the latency it cost, the IP it resolved through, the certs it saw on the way, the headers the upstream returned, and the body shape. The data does not persist beyond the trace retention window — the no-content-retention policy described later applies — but the metadata is enough to debug almost any unexpected fetch behaviour without rerunning the call.',
      ],
    },
    {
      h2: 'Structured extraction: typed schemas, retries, verification',
      paragraphs: [
        'Once you have the content, you almost always want it in a typed shape. The extraction primitive takes a JSON schema and returns objects that match it. The platform handles the LLM call internally, the schema validation, the retry policy when the model returns something that fails validation, and the cost accounting.',
        'The design choice that distinguishes this from the obvious "just call your favourite LLM on the scraped text" pattern is verification. The extractor does not just trust the model\'s output; it verifies that the extracted values are actually present in the source content, in a way the platform can audit later. That stops the most common failure mode of naive LLM extraction — confidently hallucinated values that look right but were never in the source — and turns the extracted JSON into something you can defend to a stakeholder who asks where it came from.',
        'For sites the platform has seen before, the extractor can short-circuit to a deterministic path when the schema matches a known site shape. That is meaningfully cheaper than an LLM call per extraction and is one of the reasons production agent workloads on the platform tend to converge toward sub-1-credit-per-page average cost even when their schemas are non-trivial.',
        'For agent builders the practical effect is that the line "go and read this site, give me back the X, Y and Z fields" is one API call, not a custom prompt-engineering project. Repeat across a thousand sites in an async job, and the cost is bounded, the failure modes are explicit, and every extraction has a trace you can replay six months later.',
      ],
    },
    {
      h2: 'Observability that production agents actually need',
      paragraphs: [
        'Agent observability is the primitive that most scraping APIs do not bother with at all, and the one that Ollagraph has invested in heavily — partly because the parent Ollasoftware team uses it internally to monitor the agents that ship its own products, and partly because it is the primitive that turns the platform from "a scraping API I can swap out for another one" into "the operational substrate my agents run on."',
        'Every tool call, every token consumed, every endpoint invoked, every fetched URL, every extracted object, every retry, every failure is traced with a shared identifier. You can replay any agent run verbatim, see exactly what the agent did and what each step cost, and diff two runs of the same agent — usually one before and one after a prompt change — to see what the change did to the trajectory.',
        'For teams running several agent versions in parallel — the standard pattern for any team doing serious agent evals — the diff view is the single most-used surface on the platform. It is the place where regressions get caught before they reach users, where prompt changes get attributed to behaviour changes, and where the question "is this agent better than the one we shipped last week" becomes answerable in a structured way.',
        'For teams that already run their own observability stack — Datadog, Honeycomb, Grafana, Tempo, anything OpenTelemetry-shaped — the platform exports traces in OTLP form to your existing collector. You do not have to swap your observability infrastructure to use the agent-observability primitive; you can layer it on top of what you already have.',
      ],
    },
    {
      h2: 'AEO audits: the SEO-and-AEO crossover, productised',
      paragraphs: [
        'The AEO audit primitive is the most surprising one in the catalogue if you come to <a href="https://ollagraph.com/">the platform</a> expecting a pure web-infrastructure play. It inspects how AI crawlers — GPTBot, ClaudeBot, Google-Extended, Bytespider, the rest of the working set — see, cite, and rank a target site. The output is a structured checklist: what is misconfigured, what is missing, what is contradicting itself, and in what order to fix it.',
        'The reason this primitive lives next to the crawler and the headless browser is that answering "how will AI engines treat this site" requires the same fetch and render substrate as answering "what is on this site at all." Putting them in the same platform means an AEO audit becomes a one-call operation rather than a stitched-together pipeline of seven open-source projects and a SaaS subscription.',
        'For SEO and AEO consultants — a buyer segment Ollagraph names explicitly on its homepage — the audit primitive is often the entry point. Consultants buy the platform to run audits at scale across client portfolios; once they are inside the platform, the rest of the catalogue becomes the toolbox they reach for when an audit surfaces something that needs investigation. The same engine that powers the AEO commercial work Ollasoftware delivers under Aeoniti is what runs under the audit endpoints here.',
        'For agent builders the primitive is more situational: AEO audits become a tool an agent invokes when a content-strategy or brand-monitoring workflow needs them, alongside scrapes, crawls, and extractions. The structured output is shaped so an LLM can summarise it directly into a remediation plan without any further transformation.',
      ],
    },
    {
      h2: 'DNS, SSL and security telemetry: the trust layer',
      paragraphs: [
        'For agents that act on what they read, the question "is this site real" is load-bearing. An agent that approves a vendor because it found a confidence-inspiring web page has approved a phishing kit if the web page belongs to one. The DNS, SSL, and security-telemetry primitives are the platform\'s answer to that question.',
        'DNS intelligence resolves a hostname, verifies its records, and historicises the result over time. Take-downs are detected — the domain that resolved last week and does not today. Parked-domain heuristics surface — the domain that resolves but has nothing real behind it. Proxying and fronting are identified — the domain whose A-record points at a generic Cloudflare edge but whose Host header is forwarded somewhere interesting. For a security or procurement agent, this is the difference between "the site looked legitimate" and "the site is structurally real, has been live for years, and is registered to the entity we believe it belongs to."',
        'SSL intelligence inspects the certificate chain, ALPN posture, OCSP, and the TLS handshake itself. Weak ciphers, expiring certs, mis-issued certs, and certs from suspicious CAs are flagged. The output is structured enough that a security agent can decide whether to proceed, escalate, or quarantine the workflow without any human-in-the-loop interpretation.',
        'Security telemetry is the higher-level signal: malicious-host detection, known phishing-kit fingerprints, reputation drift over time as scored by multiple feeds. It is WAF-grade information delivered in an agent-friendly shape — meaning structured JSON with confidence scores, not a paragraph of prose. For teams running compliance-adjacent agent workloads, this primitive is often the reason they pick the platform over a single-purpose scraping API.',
      ],
    },
    {
      h2: 'Async jobs and webhooks: the production substrate',
      paragraphs: [
        'Synchronous calls are the right shape for "I want one page extracted right now." For everything bigger — "crawl this site, extract every product page, audit each one for AEO, and tell me when you are done" — the async-jobs primitive is what you reach for.',
        'You POST a job description. The platform returns a job ID and a WebSocket stream URL. You can either subscribe to the stream and process events as they come in, or register a webhook URL and let the platform fan out completion events back to you when each sub-task finishes. The webhook surface is idempotent by design: every event carries an idempotency key, and if you retry the receipt the platform will not double-count or double-bill.',
        'For long-running crawls, the platform also exposes the standard production-grade controls: configurable concurrency caps, depth limits, domain allowlists and denylists, robots.txt enforcement modes, polite-delay configuration, and live progress reporting through the stream. The job is durable — if the upstream platform restarts a worker, the job picks up from the last checkpoint rather than restarting from scratch.',
        'The combination of webhooks, idempotency, and durable retries is what makes the platform usable as a substrate for agent runtimes that have to operate without supervision. The agent fires the job, the job completes, the webhook delivers the result back into the agent\'s queue, and the agent acts. There is no babysitting in the loop because the platform has done the boring production-engineering work that would otherwise be the agent team\'s problem to solve.',
      ],
    },
    {
      h2: 'Enterprise: the data-handling posture that matters',
      paragraphs: [
        'For teams shipping agent workloads in regulated contexts — finance, healthcare, public sector, anywhere the legal team has opinions about where scraped content goes — the platform\'s enterprise posture is the reason they pick it. The headline policy is no content retention: scraped page content does not persist on Ollagraph\'s infrastructure beyond the duration of the request. The trace metadata is retained as long as your tier specifies; the actual content of the pages you read is not.',
        'On top of that policy sit the enterprise mechanics: SCIM for user provisioning, SAML for SSO, fine-grained RBAC so that the security team can lock the AEO-audit endpoints to one role and the crawl endpoints to another, audit logs that stream directly to your SIEM in the format it already understands, and an uptime SLA backed by the platform\'s multi-region failover. BYO-KMS is available for the small set of customers whose workloads require it.',
        'The reason this combination matters specifically for agent workloads is that the legal exposure of a web-aware agent compounds. Every page it reads is potentially someone else\'s data. Every value it extracts is potentially regulated content. A scraping API that retains everything it scrapes is a legal liability the moment an agent starts running at scale; a platform that explicitly does not retain content is the one that the legal team will sign off on without a three-month review.',
        'The team has been explicit that this posture is non-negotiable, even for high-tier customers who have asked for content retention as a convenience. The data-handling rules are uniform across the platform, and they are documented in the security overview the team links from the enterprise landing page.',
      ],
    },
    {
      h2: 'How Ollagraph compares to the alternatives',
      paragraphs: [
        'The competitive landscape for web infrastructure aimed at AI agents has a small number of credible options, and it is worth being direct about the trade-offs.',
        'Firecrawl is the closest single-product peer for the scrape-and-extract workflow. Firecrawl does the fetch, the JS rendering, the markdown conversion, and the structured extraction well. Where Ollagraph extends beyond it is the rest of the catalogue — DNS intelligence, SSL, security telemetry, AEO audits, MCP visibility, agent observability — and the enterprise data-handling posture. If your agent only needs to scrape and extract, Firecrawl is a sensible alternative. If your agent needs the whole web stack, Ollagraph is the single-platform answer.',
        'BrightData is the heavyweight in the broader web-data category and the obvious choice for very large enterprise crawl workloads with extreme volume requirements. It is also a substantially larger commercial commitment and a more elaborate operational surface. <a href="https://ollagraph.com/">Ollagraph</a> sits below BrightData in raw volume capability and above it in agent-shaped ergonomics: MCP-native, OTLP-trace-native, schema-typed end-to-end, with the no-content-retention posture that BrightData explicitly does not promise.',
        'ScrapingBee, Zenscrape and similar mid-market scraping APIs cover the fetch primitive well at competitive prices and stop there. They are the right answer when you genuinely only need a scraping API. The moment your workload needs anything else — a redirect graph, a cert check, an AEO audit, an agent trace — the platform with the wider catalogue starts being cheaper in total cost of ownership even if it costs more per scrape.',
        'Apify is the closest peer for orchestrated multi-step workflows, and its Actors marketplace is a different shape of bet — Apify lets the community ship the workflows, Ollagraph ships the workflows itself as composable primitives. The right choice depends on whether you want a marketplace of community-built actors or a vendor-built catalogue with the production-engineering investment behind it.',
        'Across all of these, the question is not "is Ollagraph cheaper per scrape." The question is "for the agent workload I am actually trying to ship, is the total cost of operating my web-side stack lower on Ollagraph than on the alternative I would have to stitch together." For most non-trivial agent workloads the answer is yes — and the no-content-retention posture is the line item that closes the deal for the workloads where it matters.',
      ],
    },
    {
      h2: 'The team, the parent, and the production heritage',
      paragraphs: [
        'Ollagraph is built and operated by <a href="https://ollasoftware.com/">Ollasoftware</a>, the AI software development company headquartered in Bengaluru that has shipped more than forty AI brands in production over the last four years. The platform inherits production heritage directly: the fetch substrate was built by the team that runs <a href="https://ollasoftware.com/blog/crawlcrawl/">Crawlcrawl</a> (high-volume AI-grade web crawler, billions of pages a month); the observability primitives are shared with <a href="https://ollasoftware.com/blog/24observe/">24observe</a> (the full-stack monitoring platform); and the structured-extraction layer was built by the team that runs Switchllm. The <a href="https://ollasoftware.com/blog/ollabear/">Ollabear</a> conversational AI layer and the <a href="https://ollasoftware.com/blog/aeoniti/">Aeoniti</a> AEO surface both consume the platform\'s endpoints as first-party clients.',
        'That heritage matters because building a web-infrastructure platform for agents is not the work of a single product team; it is the work of multiple production teams that have already solved each of the underlying problems at scale, brought together into one platform. The 212 endpoints are not a green-field engineering project. They are the consolidation of the working production infrastructure across half of the Ollasoftware portfolio.',
        'The parent group, <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a>, is the cybersecurity and networking training institute that has placed more than forty-five thousand alumni across eight hundred hiring partners since 2007. The connection matters here because the security primitives — DNS intelligence, SSL telemetry, phishing-kit detection — are built by engineers who came up through that institute, in a culture where understanding the wire-level reality of the web is non-optional. That cultural lineage is visible in the depth of the security telemetry catalogue and in the seriousness of the no-content-retention posture.',
      ],
    },
    {
      h2: 'What is on the roadmap',
      paragraphs: [
        'The platform is currently in BETA. The roadmap to GA is published in the changelog and the team updates it monthly. The visible near-term threads are: an expanded actor library for common multi-step workflows that should be one call rather than several, deeper integrations with the common agent runtimes — LangGraph, AutoGen, Mastra, AG2 — so the platform shows up natively in those frameworks rather than as a custom integration, a Bundles surface for composing pre-priced packages of endpoints for specific use cases (AEO consulting, security monitoring, lead enrichment, content auditing), and dedicated-tenant regional deployments for the enterprise tier that needs strict data-residency guarantees inside its cloud region of choice.',
        'Underneath those visible threads is steady investment in the fetch substrate itself: more aggressive caching for known stable sites, better anti-bot detection for the small fraction of sites that have invested in sophisticated counter-automation, and tighter latency budgets for the common operations that agents call thousands of times in a single run. The latency target the team has set itself is that any single primitive call should complete in under one second at the 95th percentile under normal load, which is an order of magnitude faster than the duct-tape stack most teams are currently running.',
        'Pricing during the BETA is the published credit model with the generous free tier. At GA the team has signalled that the credit model will stay, that the free tier will stay generous, and that enterprise pricing will tier on volume rather than on which endpoints you can access — the entire catalogue is available on every tier today and that will not change. The principle the team has stated repeatedly is that a platform whose value is hidden behind tier-gating is a platform whose customers learn to work around it.',
      ],
    },
    {
      h2: 'How to start',
      paragraphs: [
        'If you build agents that have to read the live web, the right next move takes ten minutes. Sign up at <a href="https://ollagraph.com/">ollagraph.com</a> — no credit card. Claim the 1,000 free credits. Take the API key. Either point your existing scrape-and-extract code at the platform — the request shape is straightforward and the docs include side-by-side migration examples from the common alternatives — or run `pipx run ollagraph-mcp` and let your Claude Desktop or Cursor session pick up the entire 212-endpoint catalogue as MCP tools.',
        'Test the workflow that you actually use. Scrape one of your real target sites. Run a real extraction against your real schema. Fire one real async job. Watch the trace. Look at the cost per call. Compare to whatever you are currently spending on the equivalent stitched-together stack. The platform\'s case is straightforward when you measure it against your own workload; it is much weaker when you measure it against an abstract benchmark.',
        'If you would like the team to walk you through a specific workload — agent migration, AEO consulting onboarding, enterprise procurement, or a sales call for the volume tier — the <a href="https://ollasoftware.com/contact/">Ollasoftware contact page</a> reaches the same people. Response times are unusually fast for a B2B vendor of any size, which is one of the small operational signals that the team takes its own production posture seriously.',
        'For teams evaluating Ollasoftware as a custom AI development partner — to build bespoke agent pipelines, graph-extraction workflows, or structured-data systems outside the Ollagraph product — the team is ranked among the <a href="https://ollasoftware.com/top-10/ai-software-development-companies-bangalore/">top AI software development companies in Bangalore</a>, with methodology, pricing, and past delivery numbers published openly.',
        'And if you are not yet ready — if you are still evaluating whether the web-aware agent workload you are building justifies a platform at all — the published documentation, the OpenAPI spec, the Postman collection, and the changelog are all open. You can answer most of the questions you would otherwise need a sales call for from the docs alone, which is, again, the operational signal.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is Ollagraph?',
      a: 'Ollagraph is the web-intelligence layer for AI agents. It is one platform — 212 endpoints behind one API key and one MCP server — covering smart crawling, structured extraction, agent observability, DNS and SSL intelligence, browser automation, AEO audits, security telemetry, markdown conversion, redirect tracing, MCP tool visibility, and async jobs with webhook fan-out.',
    },
    {
      q: 'How does Ollagraph pricing work?',
      a: 'Pricing is credit-metered. Most endpoints cost 1 credit per call; orchestrators cost 3. Failed upstream fetches are refunded automatically before the response returns — you pay for successful calls only. The free tier is 1,000 credits at signup with no credit card required. Higher-volume tiers shift to volume contracts with predictable monthly minimums.',
    },
    {
      q: 'Does Ollagraph have an MCP server?',
      a: 'Yes. Every endpoint is also an MCP tool. `pipx run ollagraph-mcp` exposes the entire 212-endpoint catalogue to Claude Desktop, Cursor, Continue, Zed AI, or any MCP-aware client. The MCP server ships in the same package as the SDK and stays in lockstep with the API.',
    },
    {
      q: 'Does Ollagraph retain scraped content?',
      a: 'No. The platform has an explicit no-content-retention policy: scraped page content does not persist on Ollagraph infrastructure beyond the duration of the request. Trace metadata is retained as long as your tier specifies; the actual content of the pages you read is not. This is the data-handling posture enterprise customers in finance, healthcare and public sector require, and it is non-negotiable across all tiers.',
    },
    {
      q: 'How does Ollagraph handle JavaScript-rendered sites?',
      a: 'The platform detects single-page apps automatically and retries the fetch through a stealth Chromium pool. The response shape is unchanged; a `rendered_via` field tells you which path served the page, and `rendered_with_js` is a typed boolean. For the small set of sites that fail both the direct and stealth paths, a residential rendering pool is available opt-in per request.',
    },
    {
      q: 'How does Ollagraph compare to Firecrawl, BrightData, ScrapingBee and Apify?',
      a: 'Firecrawl is the closest peer for the scrape-and-extract workflow specifically — Ollagraph extends the catalogue across DNS, SSL, security telemetry, AEO audits and agent observability, plus the no-content-retention posture. BrightData sits above on raw volume; Ollagraph sits above on agent-shaped ergonomics and data-handling. ScrapingBee and similar fetch-only APIs are narrower-purpose products. Apify is the closest peer for orchestrated workflows and takes a marketplace approach instead of a vendor-built catalogue.',
    },
    {
      q: 'Who is Ollagraph for?',
      a: 'AI agent builders building any agent that has to read, audit, or reason about the live web. SEO and AEO consultants running audits at scale across client portfolios. Security teams monitoring brand domains, vendor portals, and phishing exposure. Enterprise teams shipping web-aware agent workloads under data-handling and SSO constraints. The free tier and the published catalogue are designed so any of these audiences can self-serve the evaluation before any commercial conversation.',
    },
    {
      q: 'Who is behind Ollagraph?',
      a: 'Ollagraph is built and operated by Ollasoftware, the AI software development company headquartered in Bengaluru. The fetch substrate is built by the team that runs Crawlcrawl, Ollasoftware\'s high-volume AI-grade web crawler; the observability layer comes from the team that ships Aeoniti, the answer-engine optimisation product; the extraction layer comes from the team that runs Switchllm. The parent group is Networkers Home, the cybersecurity and networking training institute founded in 2007 with more than 45,000 alumni placed across 800+ hiring partners.',
    },
  ],
};
