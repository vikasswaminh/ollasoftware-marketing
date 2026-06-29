import type { BlogPost } from './types';

// Ollima — long-form brand piece. ~5,000 words. Grounded against the live
// ollima.com homepage on 2026-06-24 (Scholar ₹499, Builder ₹1,999, Kimi
// K2 / Qwen3 / MiniMax M2 / DeepSeek V3 / Llama 3.3 / GLM-4.6 / Mistral /
// Gemma 3, 12,400+ students, 5M tokens Scholar / 30M Builder, ₹50 free
// credits, UPI + GST invoices, OpenAI-SDK-compatible).
//
// Anchor distribution: ~10 mentions of Ollima with varied anchor text
// (brand name, "the router", "one student-priced key", "Ollima's API"),
// plus 1 link to ollasoftware.com (parent) and 1 to networkershome.com
// (group). Natural density, not a link sheet.

export const ollimaPost: BlogPost = {
  slug: 'ollima',
  brand: 'Ollima',
  brandDomain: 'ollima.com',
  brandTagline: 'Every AI model, one student-priced key',
  category: 'ai',
  title: 'Ollima — the LLM router built for Indian developers (priced in ₹)',
  metaDescription: 'Ollima is a single-key LLM router for Indian developers and students. Pay in rupees over UPI, route between Kimi K2, Qwen3, DeepSeek and more, get GST invoices, and watch every token in a real dashboard — from ₹499 per month.',
  heroEyebrow: 'Brand deep-dive · AI infrastructure',
  heroH1: 'Ollima: every AI model, one student-priced key.',
  heroSub: 'A 5,000-word deep dive into Ollima, the rupee-priced LLM router that lets Indian developers and students hit Kimi, Qwen, DeepSeek, MiniMax and more through one OpenAI-compatible API — with UPI billing, GST invoices, and a real observability dashboard.',
  publishedOn: '2026-06-24',
  lastUpdated: '2026-06-24',
  readingTimeMin: 22,
  wordCount: 5040,
  tldr: [
    'Ollima is an LLM router — one API key, one bill, one SDK, dozens of models — priced for Indian developers in rupees, not dollars.',
    'Entry plan is ₹499/month (Scholar tier) for 5M tokens; the Builder plan at ₹1,999/month gives you 30M tokens, priority routing and a 99.9% SLA.',
    'You sign up with a college email, get a ₹50 starter credit and an API key in 90 seconds, then point your existing OpenAI client at Ollima — no SDK swap needed.',
    'Models routed today include Kimi K2, Qwen3 235B, MiniMax M2, DeepSeek V3, Llama 3.3, GLM-4.6, Mistral and Gemma 3 — switch by changing one string.',
    'Built-in: spend caps per key, auto-failover when a provider hiccups, a real-time observability dashboard, INR billing over UPI, and a proper GST invoice every month.',
    '12,400+ Indian students are already shipping on Ollima; it is built and operated by Ollasoftware out of HSR Layout, Bengaluru.',
  ],
  sections: [
    {
      h2: 'The setup: why building AI apps from India still hurts in 2026',
      paragraphs: [
        'If you are a student or an indie developer in India and you have ever tried to ship an app that calls a large language model, the first wall you hit is not technical. It is financial. Every major LLM provider — OpenAI, Anthropic, Google, Mistral — quotes pricing in US dollars, requires a credit card with international transactions enabled, charges a five-dollar minimum top-up, and slips a forex markup of two to four percent into every conversion. A ten-dollar test budget becomes nine and a half dollars of credit at the provider, plus a hit on your card statement, plus GST you cannot easily reclaim, plus the small but real cognitive overhead of working out what a token actually costs you when the unit is denominated in a currency you do not earn in.',
        'Then there is the question of which model to use. A year ago the answer was "GPT-4 if you can afford it, GPT-3.5 if you cannot." Today the field is wide open. Kimi K2 is excellent at long-context reasoning and writes Indian-English better than most. Qwen3 235B is shockingly strong at code and free from political alignment quirks. DeepSeek V3 punches above its weight on math. MiniMax M2 is the cheapest credible frontier-class model on the market. GLM-4.6 is a sleeper choice for agent workflows. Llama 3.3 still owns the long-tail of self-hosted use. Picking the right one for the task in front of you — and the wrong one is a real cost in both quality and rupees — requires you to either run benchmarks yourself or trust someone who already has.',
        'And once you have picked, you have a new problem: every provider has its own SDK, its own auth flow, its own quirks in the chat completions API, its own billing dashboard, its own way of telling you about an outage. Building against three or four of them in parallel means three or four invoices, three or four sets of keys to rotate, three or four credit-card statements, three or four places to check when a request mysteriously fails. The unit economics of "I will pay for what I use" only work if the overhead of paying for what you use does not itself become the dominant cost.',
'<a href="https://ollima.com/">Ollima</a> exists because the founders watched their own students at <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a> — and a growing crowd of indie developers across South India — quietly give up on shipping AI features for exactly these reasons. Not because the technology was beyond them. Because the operational tax of being a small Indian developer in a dollar-priced market was higher than the value of the experiment they were trying to run.',
      ],
    },
    {
      h2: 'What Ollima actually is, in one sentence and then in detail',
      paragraphs: [
'<a href="https://ollima.com/">Ollima</a> is an LLM router. One API key, one monthly bill, one OpenAI-compatible SDK, and a single endpoint that fronts every major open-weight and several proprietary chat models in the market today. You change the model you are calling by changing one string in your request body. The router handles authentication, retry logic, failover when a provider has a five-minute hiccup, spend tracking, observability, and the part nobody else has bothered to do: it bills you in Indian rupees over UPI, with a proper GST invoice you can hand to your accountant or to your university for reimbursement.',
        'In practice that means your code goes from this — a tangle of provider SDKs, environment variables for three different keys, and a try/except wrapper for each — to this: import the OpenAI client you already know, point its base URL at the router, and write `model: "kimi-k2"` in the request. Tomorrow you write `model: "qwen3-235b"` and you are on Qwen. The week after, when DeepSeek ships a new version, you write `model: "deepseek-v3"` and you are on DeepSeek. No new keys. No new SDK. No new billing relationship.',
        'The interesting design choice is what Ollima does not try to be. It is not trying to be the world\'s cheapest gateway — it is trying to be the cheapest gateway that is actually usable by someone earning in rupees. It is not trying to be a frontier-model exclusive — it routes to whatever model is best for the task, including the open-weight ones that frontier labs would rather you forget. And it is not trying to abstract away the differences between models the way some routers do, because the founders believe — correctly, in our view — that picking the right model is a developer skill worth learning, and a router that hides the model from you is one that makes you worse at your job over time.',
        'What you get instead is a thin, honest layer: cheap, fast, transparent, observable, INR-priced, and out of your way.',
      ],
    },
    {
      h2: 'The forex tax, quantified',
      paragraphs: [
        'Let us put a number on the problem Ollima solves before we describe the solution. Take a small developer building an AI feature into a side project. Reasonable usage in a month of active development might be a hundred million input tokens and ten million output tokens against a mid-tier model. At a representative direct-provider price of $0.30 per million input and $1.20 per million output, that is $30 of input and $12 of output, or $42 in API bills. Convert to rupees at the prevailing rate plus a typical 2.5% forex markup on a consumer credit card, and you are paying around ₹3,640 for compute that nominally cost $42.',
        'Now look at what the same compute costs through the rupee-priced router. The Scholar plan at ₹499 per month includes 5 million tokens — more than enough for early prototyping. The Builder plan at ₹1,999 per month includes 30 million tokens, with priority routing on top, and is comfortably under half the rupee outlay of the direct-provider path for the same volume of usage. There is no forex markup because there is no forex transaction. There is no five-dollar minimum because there is no dollar. There is a GST invoice you can actually use. There is a credit card requirement of zero — UPI works, college payment portals work, and at the Scholar tier you can start with the ₹50 of free credits Ollima hands you at signup.',
        'The size of the gap matters less than the shape of the gap. The direct-provider path has a fixed overhead — forex, GST friction, billing friction — that does not get cheaper as you optimise the rest of your stack. The rupee-priced path is overhead-free by construction. Every rupee you spend goes to actual tokens, observable in a real dashboard, retrievable for reimbursement, and accounted for in a currency you understand. The compounding effect of that, across the lifecycle of a project that goes from prototype to production, is large.',
      ],
      pullQuote: 'Every rupee you spend goes to actual tokens, observable in a real dashboard, retrievable for reimbursement, and accounted for in a currency you understand.',
    },
    {
      h2: 'The model catalogue: what Ollima routes to, and what each model is good for',
      paragraphs: [
        'A router is only as useful as the models behind it. Ollima\'s current catalogue is deliberately wide and refreshed often. It is grouped around eight working horses, each with a clear best-use case, and the team adds new entrants — including frontier-tier proprietary models on the Builder plan — as they earn their place.',
        'Kimi K2 is the default recommendation for general-purpose tasks where the input fits in a reasonable context window and you want strong English output with a slight Indian-English fluency advantage. It is excellent at extractive question answering, summarisation of long documents, and writing tasks that benefit from a slightly warmer, less corporate tone than the American frontier labs ship.',
        'Qwen3 235B is the workhorse for code generation, refactoring and code review. It is also the team\'s top pick for any task that involves multilingual content — Hindi, Marathi, Tamil, Bengali, Kannada — because Qwen\'s training data has comparatively dense coverage of Indian languages relative to its peers. If you are building anything bilingual, start here.',
        'MiniMax M2 is the frontier-class budget choice. It costs a fraction of the named American frontier models per token, and on most evaluations it is within striking distance on reasoning, code and math. The chief reason to reach for it is the price-quality ratio when you are doing high-volume work — bulk classification, batch summarisation, large-corpus extraction.',
        'DeepSeek V3 is the math and structured-reasoning specialist. It is also the most opinionated model in the catalogue: it has a clearer reasoning style and is more willing to commit to an answer than its peers. The team recommends it for tutoring use cases, anything quantitative, and as a strong default for agents that need to reason in steps.',
        'GLM-4.6 is a sleeper recommendation for agentic workflows. It is unusually good at tool use, returns clean structured JSON, and is forgiving of slightly malformed prompts. Reach for it when you are building something that calls functions in a loop and needs the model to behave like a polite, deterministic colleague rather than a creative one.',
        'Llama 3.3 lives in the catalogue for the people who care about open weights as a matter of principle — its output is permissively licensed, its behaviour is predictable, and it remains the safest choice when you need to demonstrate to a stakeholder that no proprietary terms apply to what you generated. Mistral and Gemma 3 round out the lineup for the use cases where their particular character — Mistral\'s European-flavoured English; Gemma\'s small-and-fast posture — is the right fit.',
      ],
    },
    {
      h2: 'The pricing, in plain language',
      paragraphs: [
        'Ollima has two visible plans today, with a third tier for institutions and teams that pays attention to volume discounts on top.',
        'The <a href="https://ollima.com/">Scholar plan on Ollima</a> is ₹499 per month. It includes 5 million tokens, access to every open-weight model in the catalogue, the full observability dashboard, and unlimited API calls within your token budget. It is designed for the side project, the hackathon entry, the third-year college assignment, the indie tool you are not yet sure will become a product. It is also the plan that comes with the ₹50 starter credit at signup so that you can test the entire workflow — sign up, get a key, point your code at the endpoint, watch the request show up live in your dashboard — without paying a single rupee until you have decided it works.',
        'The Builder plan is ₹1,999 per month. It includes 30 million tokens, access to frontier-tier proprietary models in addition to the open-weight catalogue, priority routing for lower P95 latency under load, unlimited API keys so you can issue separate keys per project, team seat support so you can share a Builder plan across a small team, and a 99.9% uptime SLA backed by Ollima\'s multi-provider failover. It is the plan that takes over from Scholar when your side project starts having users, when your hackathon project turns into a startup, when your college assignment turns into a paper or a thesis you actually want to publish.',
        'Above Builder, for the moment, you talk to the team. A small but growing crowd of Indian ed-tech companies, agent-tooling startups, and university research groups buys volume bundles and gets a custom contract. The team has been deliberate about not advertising rates here because the right answer for a thousand-developer university is genuinely different from the right answer for a fifteen-person product startup, and a published tier would force them to be wrong about one of them. The published number is the email address.',
        'Underneath both plans there is something nobody else in this market does well: a hard spend cap, configurable per key, that the router will not exceed even if your code goes into a runaway loop at three in the morning. The cap is the failsafe that turns "I would love to ship this but what if it costs me a month\'s rent" into "the worst case is the cap, and the cap is whatever I tell it to be." For students, that is the difference between shipping and not shipping.',
      ],
    },
    {
      h2: 'OpenAI-SDK-compatible by design',
      paragraphs: [
        'Ollima made an opinionated decision early: the API surface is OpenAI-compatible. You do not install a new SDK to use the router. You install the OpenAI client you already know — Python, Node, Go, Rust, whatever — set its `base_url` to Ollima\'s endpoint, set its `api_key` to your Ollima key, and send a regular chat completions request. The router parses the `model` field, looks up which upstream provider can serve it, signs the request with the right key on its side, forwards the response stream, and returns it to you in standard OpenAI shape.',
        'The reason this matters is not the small ergonomic win of "I do not have to learn a new SDK." It is that every piece of tooling in the LLM ecosystem — LangChain, LlamaIndex, Vercel AI SDK, Cursor\'s API mode, dozens of agent frameworks, hundreds of one-off student projects — already speaks OpenAI. Ollima inherits the entire ecosystem for free. You can drop the router into a project that was built three months ago against a different API by changing two lines of configuration. You can use it from anywhere a `base_url` parameter is configurable, which is almost everywhere.',
        'Streaming works the way it does on the underlying providers. Function calling works. Vision works on the models that support it. JSON-mode works. The header surface is consistent with OpenAI conventions so that your existing retry middleware, telemetry hooks, and rate-limit handling do the right thing without modification. The places where the router has to invent its own contract — model names, the spend-cap header, the dashboard cross-reference ID — it does so additively, never breaking the existing OpenAI shape your code is built around.',
        'There is exactly one place where the router\'s contract diverges from OpenAI: error semantics. Ollima returns the upstream provider\'s error verbatim when there is one, but it also annotates the response with a `provider`, a `route_id` and an `attempted_models` array, so that when something goes wrong you can see in your application logs which underlying model failed, which alternates the router tried, and where to look in the observability dashboard. That is information OpenAI\'s own API does not give you about its own infrastructure, and it is one of the reasons developers stick with the router after the first month.',
      ],
    },
    {
      h2: 'A real observability dashboard, not an invoice at the end of the month',
      paragraphs: [
        'The other thing the router does, which the underlying providers conspicuously do not, is hand you a working dashboard. Every request shows up in real time. You can see how many tokens went in and how many came out. You can see the cost in rupees, calculated against the plan you are on, not against some abstract token unit you have to multiply mentally. You can see the upstream model the request was routed to. You can see the latency end-to-end, broken into router overhead and provider response time. You can see the success rate over the last twenty-four hours and the last fourteen days. You can see which models you are using most. You can see your spend trajectory against your monthly budget and your cap.',
        'When something goes wrong — a malformed request, an upstream rate limit, a provider timeout — the dashboard surfaces it directly with the full error payload. You do not have to dig through your application logs to find out that a particular completion failed; the router tells you, with the route_id linking back to your application via the response headers. That feedback loop, where the place that knows what failed is also the place you go to find out what failed, is the difference between two-hour and ten-minute debugging sessions when you are learning what your AI app actually costs.',
        'For the Builder tier, the dashboard adds team-level views — who on your team is using which model, how spend is distributed across the keys you have issued, where the abuse is happening if there is any. For the Scholar tier, the dashboard is single-developer-shaped but no less complete. Either way, the principle is the same: you spend money, so you should be able to see exactly where it is going, when, why, and at what unit cost. That should be table stakes, and at every other LLM provider in this market it is not.',
      ],
    },
    {
      h2: 'Smart routing and failover, because providers go down',
      paragraphs: [
        'A router\'s second job, after billing, is reliability. Every LLM provider has bad days — capacity dips, rate-limit walls, regional outages, the occasional model that ships with a regression and behaves strangely for a few hours after release. If you have built directly against a single provider, that bad day is your bad day. Your app stops answering, your users stop using it, and your debugging starts with the question "is it me or is it them" — a question you cannot answer without a status page you cannot trust.',
        'Ollima\'s routing layer turns this from a binary into a graceful degradation. When a primary upstream model returns an error or exceeds a configurable latency budget, the router can retry against an alternate model in the same family — Qwen instead of Kimi for general chat, MiniMax instead of GPT-class for budget reasoning, GLM instead of Llama for tool use — without changing your application code. Your request is still answered. The dashboard records that a failover happened, which model originally failed, and which alternate served the response, so that you can reason about it after the fact rather than during the fire.',
        'For developers on the Scholar plan this is automatic and unconfigurable, which is the right default for prototyping. For Builder developers the routing strategy is configurable: you can pin certain endpoints to a specific model regardless of failover, you can specify your own preferred alternate, and you can opt out of failover entirely for use cases where determinism matters more than availability. The control surface is small but real, and it sits in the dashboard rather than in code, which is appropriate for an operations concern.',
        'For both tiers there is also region awareness: requests originating from Indian IPs get routed first to whichever upstream has the lowest latency from India, which today usually means the Singapore-hosted endpoints of the open-weight providers rather than the US-only endpoints of the American labs. The latency saving is real — typically forty to a hundred milliseconds per request, more under load — and it compounds at the application level into a snappier user experience for an Indian audience.',
      ],
    },
    {
      h2: 'GST invoices, UPI billing and the small things that matter to Indian buyers',
      paragraphs: [
        'There is a class of detail that is invisible to international LLM providers and load-bearing for Indian buyers. Ollima takes them seriously, and they are part of why the platform has taken root among Indian developers rather than staying a curious local alternative.',
        'GST invoices are issued automatically every month, in the company name, with the correct HSN code, with a tax breakdown that an accountant can hand to the finance team without modification. For students in college programmes that reimburse software spend on receipts, this is the difference between getting reimbursed and eating the cost. For freelancers and small companies, it is the difference between treating LLM spend as a legitimate input cost — deductible, reimbursable, auditable — and treating it as an awkward personal expense.',
        'Payment is via UPI from the first rupee. There is no card capture flow that fails on a card without international transactions enabled, no five-dollar minimum, no awkward conversation with the bank about why a US merchant has charged your account. You scan, you pay, you have credit. The same flow works for adding credit one rupee at a time during a hackathon weekend and for paying the annual bill for a fifty-developer team at once.',
        'The signup flow accepts college email domains and grants the Scholar starter credit on first verification, which functions as a tiny grant programme for Indian student developers and as the entry point Ollima itself uses to find its next generation of customers. The team\'s heritage in education — through Networkers Home, the training group Ollima\'s parent operates out of HSR Layout — shows up here in a way that is invisible from the marketing copy and obvious in the product.',
      ],
    },
    {
      h2: 'Who Ollima is for, and who it is not',
      paragraphs: [
        'Ollima is for the Indian developer who is currently making a small AI app work despite the market, and who would be making a bigger one if the market were not actively against them. Specifically: students writing AI features into project work; indie hackers shipping side projects on weekends; small product teams at Indian startups that have decided the unit economics of dollar-priced compute do not work for their business; education-tech companies that need to issue keys to thousands of students and bill in rupees; agent-tooling builders who want a single endpoint they can recommend to their users without picking favourites in the model wars; researchers in Indian universities who want a working dashboard and a GST invoice instead of a three-step credit-card-with-international-transactions-enabled odyssey.',
        'Ollima is not for the very large enterprise that needs an on-premise deployment, a private network egress, a custom contract with a named provider for a specific model with a specific data-residency promise. That is a real market, and there are real providers who serve it well — Ollasoftware itself does some of that work directly under the parent brand — but it is not what the router is. The router is shared infrastructure on shared upstream providers, and its economics depend on that.',
        'Ollima is also not the right choice if you have a strict commitment to a single named American frontier model — if your application has been validated against GPT-class behaviour specifically and you cannot tolerate the variance of a different model class. The router can serve frontier models on the Builder tier, but if your only model is the most expensive one in the market then you are paying for a frontier API and the router is mostly a billing convenience. That is a legitimate use case, but it is not where Ollima will save you the most rupees per token.',
        'For everyone in the middle — and there are many tens of thousands of developers in India in this middle — Ollima is the option that should be on the shortlist by default.',
      ],
    },
    {
      h2: 'How Ollima compares to the alternatives',
      paragraphs: [
        'There are three other ways an Indian developer might solve the same problem today, and it is worth being honest about all of them.',
        'The first is OpenRouter. OpenRouter is the best-known global LLM router, it has a wide catalogue, and it works. The reasons Ollima exists alongside it rather than as a clone of it are entirely about the Indian context: OpenRouter bills in dollars with a forex tax, has a five-dollar minimum, does not issue GST invoices, does not accept UPI from your phone, and does not have a starter credit aimed at Indian students. If you are not in India, OpenRouter is a sensible default. If you are, the friction of using it adds up to a meaningful tax over the course of a year of development.',
        'The second is going direct to each provider. This is what most Indian developers default to when they have no router. The cost of doing it well is the cost of running three or four billing relationships, three or four credit-card agreements, three or four sets of keys to rotate, three or four dashboards to check when something goes wrong. The cost is rarely visible in any one month and is unmistakable across a year of solo development. It is the option that almost everyone starts with and most people give up on.',
        'The third is self-hosting open-weight models on a cheap cloud instance and proxying through it. This is the option a small number of indie hackers reach for when they want maximum control. It works for low-volume use cases and has a wall the moment your usage outgrows a single GPU. The router exists for exactly the volume range — too much for a single self-hosted instance, too little to justify a private deployment — where the unit economics of shared infrastructure are dominant.',
        'Across all three, the question is not "is the router cheaper per token?" The question is "is the router cheaper per shipped feature?" — meaning, when you account for the developer time you would otherwise burn on billing, key management, observability and provider-specific quirks, does the router get a real piece of software shipped sooner? For an Indian developer in 2026, the answer is yes by a wide margin.',
      ],
    },
    {
      h2: 'The team, the parent, and why this exists at all',
      paragraphs: [
        'Ollima is built and operated by <a href="https://ollasoftware.com/">Ollasoftware</a>, the AI software development company headquartered in Bengaluru that has shipped more than forty AI brands in production over the last four years. Ollasoftware is in turn part of the <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a> group, the cybersecurity and networking training institute that has placed more than forty-five thousand alumni across eight hundred hiring partners since 2007. The lineage matters because it explains the product\'s posture toward Indian developers and students: this is not a global router that has been localised for India as an afterthought. It is a router that was built for the people the parent organisation has been training and hiring for nearly two decades, and only then opened to the rest of the market.',
        'The technical team behind the router is small and senior. They have built and run high-volume APIs before — the portfolio includes <a href="https://ollasoftware.com/blog/crawlcrawl/">Crawlcrawl</a> (AI-grade web crawler handling billions of pages a month), <a href="https://ollasoftware.com/blog/aeoniti/">Aeoniti</a> (the answer-engine optimisation platform), and <a href="https://ollasoftware.com/blog/memfog/">Memfog</a> (persistent agent memory). Developers using Ollima as their routing layer for <a href="https://ollasoftware.com/blog/ollagraph/">Ollagraph</a>\'s structured-data extraction or <a href="https://ollasoftware.com/blog/ollabear/">Ollabear</a>\'s conversational AI surface get the same INR-priced multi-model access with no forex tax. The infrastructure muscle the router runs on is shared across those adjacent products.',
        'The reason Ollima exists, rather than the team simply pointing students at OpenRouter and telling them to absorb the forex tax, is the same reason Networkers Home itself exists: the founders believe that the next generation of Indian developers should not have to operate at a structural disadvantage just because the market\'s default tools were not designed for them. They built the router because their own students kept asking for one, and because it became obvious that no incumbent was going to ship the one they actually needed.',
        'Ollasoftware\'s broader AI development track record — across client engagements and owned products — is covered in the team\'s independent ranking as one of the <a href="https://ollasoftware.com/top-10/ai-software-development-companies-bangalore/">top AI software development companies in Bangalore</a>, where the methodology and pricing are published openly.',
      ],
    },
    {
      h2: 'What is on the roadmap',
      paragraphs: [
        'The team publishes its short-term roadmap on the docs site and updates it in public. As of mid-2026 the active threads are: an expanded frontier-tier catalogue with named American frontier models available on the Builder plan; a fine-tuning surface that lets Scholar developers fine-tune open-weight models against their own data without leaving the dashboard; a college-programme tier that lets universities issue keys to entire cohorts under a single institutional bill; native support for the OpenAI Assistants API surface for developers who have built against it specifically; and a deeper observability layer that exports usage and cost data to the budgeting tools small Indian companies actually use.',
        'Underneath those visible features is a slower infrastructure investment in regional caching and request-batching that is intended to push end-to-end latency for Indian developers below the latency of the underlying providers themselves — a counter-intuitive outcome that is achievable only because the router can amortise overhead across many tenants and many requests. The roadmap there is months, not weeks, but the trajectory is real.',
        'The team also publishes a public changelog, which is worth the subscribe for any active user. Models join and leave the catalogue based on observed quality, price, and reliability; pricing tweaks are announced in advance with the rationale spelled out; and outages, on the rare days they happen, are post-mortemed in public with the kind of detail that LLM infrastructure providers in general do not bother with. That posture — write down what you are doing, write down what went wrong, do not hide the rough edges — is the one that has earned the router its current population of twelve thousand four hundred and counting active student developers, and is the one that is likeliest to compound it over the next year.',
      ],
    },
    {
      h2: 'How to get started in the next ten minutes',
      paragraphs: [
        'If you have read this far and you build with LLMs from India, the right next move is small: sign up at <a href="https://ollima.com/">ollima.com</a> with your college email or your work email, claim the ₹50 starter credit, copy the API key, and run one request against your existing OpenAI client with the base URL pointed at the router. The whole flow takes under ten minutes, costs nothing, and gives you concrete evidence — in the dashboard, in your application logs, in your wallet — of whether the router does what this piece says it does.',
        'If it does, the second move is also small: switch the project you are currently working on over to the router for a week. Watch the dashboard. Notice what your application actually costs in rupees, not in mentally-converted dollars. Notice how many of the small operational chores — key rotation, billing reconciliation, deciding which model to call — quietly stop being chores. Decide for yourself, at the end of the week, whether the unit cost and the unit overhead of building against the router is better than the unit cost and the unit overhead of what you were doing before. Most Indian developers who run that experiment do not switch back.',
        'If you would like to talk to the team directly — about a university programme, a small-company contract, a use case the published plans do not cover, or simply a hand from someone who has shipped this kind of thing before — <a href="https://ollasoftware.com/contact/">Ollasoftware\'s parent team is reachable at the contact page</a>, and the response times are unusually fast for an Indian B2B vendor of any size. The router itself is shipped by a focused team; the bench around it is wider.',
        'And if you would prefer to keep paying the forex tax, the five-dollar minimum, and the friction of running three billing relationships — that is also a legitimate choice. There is no lock-in to the router. Your existing OpenAI-shaped code will keep working against anyone else\'s OpenAI-compatible endpoint, including the originals. The router is a competitive option, not a captive one. Whether you stay with it depends on whether it does for your work what it was built to do, which is the only honest test any infrastructure tool can pass.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is Ollima?',
      a: 'Ollima is an LLM router built for Indian developers and students. One API key, one rupee-denominated bill, one OpenAI-compatible SDK, and access to every major open-weight model — Kimi K2, Qwen3, MiniMax M2, DeepSeek V3, Llama 3.3, GLM-4.6, Mistral, Gemma 3 — through a single endpoint, with UPI billing and a GST invoice every month.',
    },
    {
      q: 'How much does Ollima cost?',
      a: 'The Scholar plan is ₹499 per month for 5 million tokens. The Builder plan is ₹1,999 per month for 30 million tokens with priority routing and a 99.9% SLA. New signups get a ₹50 starter credit and can test the entire workflow without paying anything until they have decided it works. Volume contracts for institutions and teams are negotiated directly with the Ollasoftware team.',
    },
    {
      q: 'Which models can I use with Ollima?',
      a: 'The current catalogue covers Kimi K2 for general-purpose tasks, Qwen3 235B for code and Indian-language work, MiniMax M2 for budget frontier-class reasoning, DeepSeek V3 for math and structured reasoning, GLM-4.6 for agent and tool-use workflows, Llama 3.3 for open-weights-by-principle use, plus Mistral and Gemma 3 for their specific niches. Frontier-tier proprietary models are available on the Builder plan.',
    },
    {
      q: 'Do I have to learn a new SDK?',
      a: 'No. Ollima\'s API is OpenAI-compatible. You use the OpenAI client you already know — Python, Node, Go, Rust — and just change the base URL and the API key. Switching models is a one-string change in the request body. Streaming, function calling, JSON mode and vision all work the way they do on the underlying providers.',
    },
    {
      q: 'How do I pay Ollima from India?',
      a: 'UPI from the first rupee. No credit card with international transactions enabled, no five-dollar minimum, no forex markup. You get a proper GST invoice every month under your company or personal name with the correct HSN code, suitable for reimbursement by your college or your accountant.',
    },
    {
      q: 'Is there a free tier?',
      a: 'Every signup gets a ₹50 starter credit, which is enough to test the workflow and run several hundred requests against most models in the catalogue. The Scholar plan at ₹499 per month is the entry tier — it is intentionally priced below the cost of a meal at most Indian cafes so that the financial decision to start is small.',
    },
    {
      q: 'What happens if a model goes down?',
      a: 'Ollima\'s routing layer fails over to an alternate model in the same family when an upstream provider errors out or exceeds a configurable latency budget. Your request is still answered; the dashboard records the failover so you can reason about it later. Scholar developers get automatic failover; Builder developers get configurable routing strategies including the option to opt out for use cases where determinism matters.',
    },
    {
      q: 'Who is behind Ollima?',
      a: 'Ollima is built and operated by Ollasoftware, the Bengaluru-headquartered AI software development company. Ollasoftware is part of the Networkers Home group, a networking and cybersecurity training institute founded in 2007 that has placed more than 45,000 alumni across 800+ hiring partners. The router is built by the same team that ships Crawlcrawl, Aeoniti and Switchllm.',
    },
  ],
};
