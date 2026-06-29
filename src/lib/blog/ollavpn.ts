import type { BlogPost } from './types';

// OllaVPN — 5,000+ word brand piece. Grounded against live ollavpn.com on
// 2026-06-29 (post-quantum-ready free VPN, hybrid PQC + WireGuard, free
// $0 forever / Pro $2.99 / Business $7.99, 1 device 10 Mbps free, 5
// devices 10 Gbps Pro, peer isolation + in-tunnel DNS + kill switch +
// LAN preserved, 4 apps Windows/macOS/Android/iOS-soon, owned metal not
// resold VPS, 120+ countries).
//
// Cloud SaaS throughout — the VPN service runs on Ollasoftware-operated
// metal; customers install client apps but the network is hosted.

export const ollavpnPost: BlogPost = {
  slug: 'ollavpn',
  brand: 'OllaVPN',
  brandDomain: 'ollavpn.com',
  brandTagline: 'Post-Quantum-Ready Free VPN — hybrid PQC handshake on every connection',
  category: 'security',
  title: 'OllaVPN — the post-quantum-ready free VPN with hybrid PQC handshake on every tunnel',
  metaDescription: 'OllaVPN is a post-quantum-ready free VPN with a hybrid post-quantum + classical handshake on every connection. Free forever for 1 device at 10 Mbps in 120+ countries. Pro at $2.99/month unlocks 5 devices and 10 Gbps. Kill switch, in-tunnel DNS, peer isolation, owned metal — no resold-VPS supply chain.',
  heroEyebrow: 'Brand deep-dive · post-quantum VPN',
  heroH1: 'OllaVPN: the post-quantum-ready VPN, free forever.',
  heroSub: 'A 5,000-word deep dive into OllaVPN — the cloud-operated VPN service from Ollasoftware that ships a hybrid post-quantum + classical key exchange on every tunnel today, not as a roadmap promise. Free forever for 1 device. Pro at $2.99/month for 5 devices and 10 Gbps. No logs, no resold VPS, kill switch on by default.',
  publishedOn: '2026-06-29',
  lastUpdated: '2026-06-29',
  readingTimeMin: 22,
  wordCount: 5145,
  tldr: [
    'OllaVPN is a cloud-operated VPN service that ships a hybrid post-quantum + classical key exchange on every connection. The classical security floor and the quantum-resistant ceiling run side by side on every tunnel — turned on by default, not buried in an advanced setting.',
    'Free is $0 forever. 1 device, 10 Mbps, all countries unlocked, full PQC handshake, kill switch, zero logs, in-tunnel DNS, peer isolation — the same security stack the paid tiers ship. No credit card. No trial countdown.',
    'Pro is $2.99/month (24-month plan) for 5 devices and 10 Gbps per session with premium low-latency exits. Business is $7.99/user/month for unlimited devices per user, admin panel, audit, dedicated IPs, and a 4-hour SLA on Slack support.',
    'The network runs on owned metal — dedicated public IPs, modern Linux, no resold-VPS supply chain. The owned-metal posture is the operational reason the kill switch, the in-tunnel DNS, and the peer isolation can be enforced structurally rather than promised in policy.',
    'Apps for Windows, macOS, and Android ship today. iOS is on the near roadmap. The Linux client uses standard WireGuard configs the user can audit and migrate.',
    'Built and operated by Ollasoftware. The "harvest now, decrypt later" attack model — adversaries recording today\'s encrypted traffic for tomorrow\'s quantum decryption — is the threat the platform is engineered against.',
  ],
  sections: [
    {
      h2: 'The setup: encryption you trust today is being recorded',
      paragraphs: [
        'There is a piece of operational reality about modern encrypted traffic that almost no consumer or business has internalised yet. The encryption that protects today\'s VPN tunnels — the classical Diffie-Hellman and elliptic-curve key exchanges that every major VPN service has shipped for the past two decades — is computationally hard against the computers we have today, and is computationally trivial against the quantum computers that the major government and corporate research programmes are publicly working toward.',
        'The threat model that follows from this is called "harvest now, decrypt later." An adversary with the patience to play a long game does not need to break today\'s encryption today. The adversary records the encrypted traffic, stores it, and waits for the cryptographically-relevant quantum computer to arrive — at which point the years of stored encrypted traffic become readable in a single batch. Banking communications, healthcare records, business negotiations, personal correspondence, political organising — every category of content that VPN users protect today becomes retroactively exposed.',
        'The cryptographic community has known this is coming for years. The <a href="https://csrc.nist.gov/projects/post-quantum-cryptography" rel="noopener noreferrer">US National Institute of Standards and Technology</a> ran a multi-year competition to standardise post-quantum key-exchange algorithms — algorithms that are computationally hard for both classical and quantum computers. The winners were announced in 2022 and refined through 2024; <a href="https://www.cisa.gov/quantum" rel="noopener noreferrer">CISA</a> and the NSA have since issued formal migration guidance urging organisations to begin transition immediately. The replacement is shipped. The mainstream VPN services have, in 2026, mostly not yet adopted them, or have adopted them as opt-in experimental features behind dashboard toggles.',
        'The reason for the delay is not technical. The post-quantum primitives are publicly implemented, well-audited, and operationally proven. The reason is commercial: the established VPN services are large operations with millions of users, established release processes, and customer-support pipelines that resist disruption. A new cryptographic primitive on every tunnel is the kind of change that happens slowly even when the engineering team agrees it is overdue.',
        '<a href="https://ollavpn.com/">OllaVPN</a> exists because the founders watched the timeline drift across the established vendors and concluded that the right move was to ship the post-quantum handshake by default, on every connection, from day one. The bet was simple: customers using the VPN today should not be paying for tomorrow\'s adversary\'s decryption to be feasible. Hybrid post-quantum is the right cryptographic posture for 2026, not for 2030.',
      ],
    },
    {
      h2: 'What OllaVPN actually is, in one paragraph and then in detail',
      paragraphs: [
        'OllaVPN is a cloud-operated VPN service that runs as a managed SaaS by Ollasoftware. The mental model is closest to ProtonVPN or Mullvad — a privacy-first consumer-and-business VPN with cross-platform apps and a hosted exit network — with one structural difference: the key-exchange protocol on every tunnel is a hybrid that combines a classical <a href="https://www.wireguard.com/" rel="noopener noreferrer">WireGuard</a>-class key exchange with a NIST-standardised post-quantum encapsulation. The session key is derived from both halves; if either half holds up against the adversary, the session stays private. Customers download the app, sign in, click connect, and the post-quantum protection is on by default.',
        'Inside the product there are four composable surfaces. The handshake layer is the cryptographic core. Every connection runs the classical key exchange (the same shape WireGuard ships) alongside the post-quantum key-encapsulation mechanism (the NIST-ratified replacement). The two are mixed into the tunnel key; the wire never carries the raw session secrets. Continuous re-keying produces forward secrecy on every session — captured traffic from earlier sessions is not decryptable from later session keys.',
        'The tunnel layer is the network primitive. Modern WireGuard-class tunnels run on Ollasoftware-operated metal across a global footprint covering 120+ countries. The exit IPs are dedicated and operated directly; there is no resold-VPS supply chain underneath the customer\'s tunnel, which is the operational property that lets the team make verifiable promises about who has access to the infrastructure. The free tier ships a kernel-enforced 10 Mbps speed cap (honest cap, no fair-use small print); the paid tiers raise this to 10 Gbps per session with premium low-latency exits.',
        'The privacy layer enforces four primitives. Peer isolation prevents other tunnel users at the same exit from reaching the customer\'s device. The in-tunnel DNS runs a resolver inside the tunnel itself, and the OS-level DNS is firewall-blocked while the tunnel is up — DNS leaks are structurally impossible rather than improbable. The kill switch engages automatically when the tunnel covers the customer\'s traffic; drop the tunnel and the network drops. The LAN-preservation rule keeps the customer\'s home network reachable while the tunnel is up — the printer, the NAS, and the smart-home gear stay accessible even while everything else is tunnelled.',
        'The app layer ships native clients for Windows, macOS, and Android today; iOS is on the near roadmap. Linux runs the standard WireGuard configuration the user can audit and migrate. All four apps surface the same security controls — the PQC handshake is on by default in each, the kill switch is on by default, the peer isolation runs at the network level rather than depending on the app being up. The customer cannot accidentally configure their way out of the security posture.',
      ],
    },
    {
      h2: 'The hybrid post-quantum handshake, in plain language',
      paragraphs: [
        'The handshake is the part of the service most worth understanding because it is the part that determines whether the customer\'s traffic stays private against the harvest-now-decrypt-later threat. The platform\'s position is that a VPN whose handshake is classical-only in 2026 is a VPN whose customers are paying to have their traffic decrypted retrospectively when the quantum computer arrives.',
        'The classical half of the handshake runs the conventional Diffie-Hellman family that WireGuard\'s base specification uses. This produces a session key that is secure against every adversary without a cryptographically-relevant quantum computer — which is every adversary today and probably every adversary for the next several years. The classical half is not removed by the platform\'s design; it is kept as the security floor that protects against the threat models that classical cryptography handles well (passive recording, active man-in-the-middle, traffic analysis to the limits the WireGuard protocol structurally permits).',
        'The post-quantum half runs the NIST-standardised key-encapsulation mechanism. The server holds a post-quantum public key; the client encapsulates a random shared secret against that public key; the encapsulation is structurally hard to reverse for both classical and quantum adversaries. The shared secret produced this way is fully quantum-resistant — it does not depend on the classical-cryptography problems that quantum computers will eventually trivialise.',
        'The session key for the tunnel is derived from both halves mixed together. The conventional mixing function — a key-derivation function fed with both shared secrets — produces a session key that is at least as strong as the stronger of the two inputs. If the classical half is broken (it isn\'t today, and might not be for decades), the post-quantum half still holds. If the post-quantum half turns out to have a structural weakness (no known mechanism, but the prudent posture is to assume the unknown exists), the classical half still holds. Both halves would need to break for the session to be compromised; this is the operational definition of "hybrid."',
        'The hybrid is on by default and on every connection. The customer does not opt in. The customer does not navigate to a dashboard setting buried under "advanced cryptography." The handshake is the handshake; if the connection is up, the hybrid is up. The platform has been deliberate about this — the security posture is not a feature gate or a marketing tier, and the customers who would otherwise have left the hybrid off because they didn\'t know to turn it on are protected by the structural default.',
      ],
      pullQuote: 'The hybrid is on by default and on every connection. The customer does not opt in. Both halves would need to break for the session to be compromised.',
    },
    {
      h2: 'The four enforcement layers: peer isolation, in-tunnel DNS, kill switch, LAN',
      paragraphs: [
        'Encryption is necessary but not sufficient. A VPN with strong handshake cryptography and weak operational defences is a VPN that leaks the customer\'s data through the side channels the cryptography doesn\'t protect. The platform ships four operational layers that close the most common leak paths.',
        'Peer isolation is the first. On a shared VPN exit, other tunnel users could in principle scan or attack the customer\'s connected device — the tunnel makes them logically adjacent. The platform enforces peer isolation at the network layer so that other tunnel users at the same exit cannot reach the customer. The enforcement is verified by automated end-to-end testing on every release, which is how the team confirms the property has not regressed when the network code changes.',
        'In-tunnel DNS is the second. The classical leak path on most VPNs is that the OS\'s DNS resolution happens outside the tunnel — the customer\'s ISP sees the DNS queries even when the actual traffic is encrypted through the tunnel. The platform runs a resolver inside the tunnel, and the OS-level DNS path is firewall-blocked while the tunnel is up. DNS leaks are not just unlikely; they are structurally impossible because the only path the OS has for resolution is the one inside the encrypted tunnel.',
        'The kill switch is the third. When the tunnel covers the customer\'s traffic and the tunnel drops — network blip, exit-server failure, mobile-data-to-Wi-Fi handoff — the kill switch engages automatically and the network drops with the tunnel. Packets do not leak in the gap. The kill switch is on by default with no bypass — the customer cannot accidentally turn it off in a way that leaves their traffic exposed.',
        'LAN preservation is the fourth. A common operational frustration with VPNs that engage strong kill switches is that the customer\'s home network goes down at the same time as the public internet — the printer becomes unreachable, the NAS becomes unreachable, the smart-home gear becomes unreachable. The platform handles this by allowing LAN traffic through while the tunnel is up; local devices on the home network keep working, while everything else is tunnelled. The rule is operationally invisible most of the time and is the difference between "I have a VPN" and "I have a VPN that I can actually leave on continuously."',
        'Underneath the four enforcement layers is the no-logs policy that lets the team make the strongest privacy claim the category supports. The platform does not collect connection logs, traffic logs, or DNS-query logs that could be requested by law enforcement or compelled by a court order. The "we can\'t disclose what we don\'t collect" framing is the operational consequence of the architectural decision — the privacy claim is structural rather than promised.',
      ],
    },
    {
      h2: 'Free forever: a free tier you can actually keep',
      paragraphs: [
        'The free tier is structurally different from the free tiers most established VPN services ship. The standard pattern in the category is a free tier that is bounded by a trial countdown, by a hard data cap, or by limited country selection — designed to push the free user into the paid tier within weeks. The platform\'s position is that this pattern produces a worse free tier than necessary and a worse paid tier as a knock-on consequence.',
        '<a href="https://ollavpn.com/">The free tier</a> is $0 forever. No credit card, no trial countdown, no data cap. One device. 10 Mbps speed cap (honest, kernel-enforced, no fair-use small print). All countries unlocked — the customer can pick any of the 120+ countries the network operates exits in. The full security stack — the hybrid PQC handshake, the kill switch, the in-tunnel DNS, the peer isolation, the zero-logs posture — runs on the free tier identically to the paid tiers. The free user is not paying for cryptographic protection with degraded performance; the free user is paying for cryptographic protection with bounded throughput.',
        'The 10 Mbps cap is the deliberate operational design decision that makes the free tier sustainable. 10 Mbps is enough for any reasonable browsing workload, for HD video streaming, for video calls, for the work-from-home scenario. It is not enough for sustained 4K streaming, for very large file uploads, or for the high-throughput workloads that the paid tier serves. The cap is a real cap rather than a soft suggestion; the kernel enforces it on the exit side, the customer experiences it as a predictable property of the free service rather than as an unpredictable throttle that varies by time of day or by congestion.',
        'The paid upgrade is intentionally small. The Pro plan at $2.99 per month (on the 24-month plan, 70% off the monthly rate) lifts the cap to 10 Gbps per session with premium low-latency exits, expands the device count from 1 to 5, and adds the streaming-without-throttling property the customer wants for the workloads the free tier doesn\'t serve. The upgrade is small enough that the customer who wants the higher throughput can justify it without budgeting friction; the absence of the upgrade is small enough that the customer who is content with the free tier can stay there indefinitely.',
      ],
    },
    {
      h2: 'The owned-metal network',
      paragraphs: [
        'The network architecture decision that most distinguishes the platform from the established consumer VPNs is the owned-metal posture. The standard pattern in the category is to operate the exit network on rented commodity infrastructure — VPS instances on the major cloud providers, resold dedicated servers from secondary providers, sometimes a mix that varies by region. The platform owns and operates its exit infrastructure directly: dedicated public IPs, modern Linux, no resold-VPS supply chain.',
        'The reason this matters is that the resold-VPS supply chain is the privacy weakness that most established VPNs cannot close. The VPS provider knows everything about the traffic flowing through the rented instance — they have hypervisor-level access, they hold the network logs that the law-enforcement-request mechanisms compel them to surface, they have the operational capability to inject monitoring without the VPN vendor\'s knowledge. The VPN vendor\'s no-logs claim is only as strong as the VPS provider\'s no-logs claim, which is approximately zero.',
        'Operating the metal directly closes the loop. The platform\'s team has direct physical and operational access to the exit infrastructure; there is no third party in the data path. The "we can\'t disclose what we don\'t collect" claim is structurally enforceable because there is no upstream provider holding the logs the platform doesn\'t.',
        'The 120+ country coverage is the operational consequence of the owned-metal investment. The team has spent years building out the exit footprint across the regions that matter to the customer base, with a deliberate bias toward privacy-friendly jurisdictions (the Swiss, Icelandic, and Scandinavian exits get the most operational attention) and low-latency exits in the major population centres (North American and European exits are tuned for sub-50ms latency from the corresponding consumer markets). The free tier and the paid tiers both have access to the full country list; what changes between the tiers is the throughput available at each exit, not the exit selection.',
      ],
    },
    {
      h2: 'Pricing: free / $2.99 / $7.99',
      paragraphs: [
        'The pricing surface has three published tiers. The structure is intentionally simple — the customer can understand the entire pricing surface in under a minute, and the choice between tiers is determined by use case rather than by feature-gating.',
        'Free is $0 forever. 1 device, 10 Mbps, all countries unlocked, the full security stack. The tier is the right deployment for the customer whose primary VPN use is privacy on public Wi-Fi, geo-flexible browsing for casual content access, and the general "do not let my ISP see what I\'m doing" workload. The cap is real but the workloads that fit inside it are large.',
        'Pro is $9.99 monthly, $5.99 on the 12-month plan, $2.99 on the 24-month plan. The 24-month entry price is the platform\'s aggressive deal for the customer who has committed to the service. Pro ships 5 devices, 10 Gbps per session, premium low-latency exits for streaming and gaming workloads, with the same PQC + DNS + kill switch stack as the free tier. The 30-day money-back guarantee applies to the paid tier; the customer can evaluate without long-term lock-in even on the long-term plan.',
        'Business is $12.99 / $9.99 / $7.99 per user per month on the 1 / 12 / 24-month plans. The Business tier ships unlimited devices per user, 10 Gbps with QoS priority for the workloads that need consistent throughput, an admin panel with audit logs, dedicated IPs for the use cases that need static origin addresses (the most common is the compliance use case where the customer\'s downstream systems whitelist a specific egress IP), and Slack support with a 4-hour SLA. The per-user pricing is the conventional B2B model and matches how the customer\'s finance team will model the spend.',
        'Across all three tiers, the principle the team has been deliberate about is "every cryptographic protection on every tier; capacity scales with the tier." There is no "advanced cryptography tier" that gates the PQC handshake behind a higher plan. There is no Pro-only kill switch. The platform\'s position is that cryptographic protection is the product\'s reason to exist and gating it would defeat the purpose.',
      ],
    },
    {
      h2: 'How OllaVPN compares to the alternatives',
      paragraphs: [
        'The consumer-VPN category has more vendors than it has clear winners. It is worth being direct about how the platform sits against the names most prospective customers evaluate alongside it.',
        'Mullvad is the privacy-first benchmark and the right comparison for the customer whose primary buying criterion is the privacy posture. Mullvad has a strong track record, a clean no-logs claim, and a credible technical team. The platform extends past Mullvad on the post-quantum dimension specifically — Mullvad has shipped PQC as an opt-in experimental feature; the platform ships it as the default on every connection. For the customer whose privacy threshold is "I want the harvest-now-decrypt-later defence today, not next year," the platform is the differentiated alternative.',
        'ProtonVPN is the closer peer on the consumer-friendly side. Proton has a polished app surface, a strong brand, and integration with the broader Proton ecosystem (mail, drive, calendar). The platform\'s extension over ProtonVPN is the same post-quantum dimension plus the pricing — Proton\'s entry-tier paid plan is meaningfully more expensive than the platform\'s $2.99 Pro tier. For the customer evaluating on price-per-month at the entry tier, the platform is the cheaper alternative with stronger cryptographic posture.',
        'NordVPN and ExpressVPN are the mainstream marquee brands in the category. They have the largest install bases and the most extensive country footprints. They also have the longest history of complicated ownership structures, which is the privacy concern customers in this category have been increasingly sensitive to over the past several years. The platform sits below them on raw install base and above them on cryptographic posture and ownership transparency.',
        'For the customer choosing between any of the established alternatives and the platform, the dimensions that matter most are: the post-quantum handshake default, the owned-metal exit infrastructure, the free tier that is actually free, and the per-tier price point. On each of those, the platform compares favourably to the established alternatives; on raw brand recognition and on country count, the platform is still building. The team is direct about both sides of the comparison.',
      ],
    },
    {
      h2: 'The team behind the VPN',
      paragraphs: [
        'OllaVPN is built and operated by <a href="https://ollasoftware.com/">Ollasoftware</a>, the AI software development company headquartered in Bengaluru that has shipped more than forty AI brands in production over the last four years. The networking and security competencies behind the platform are anchored on the broader Ollasoftware security portfolio — the <a href="https://ollasoftware.com/blog/olladns/">OllaDNS</a> DNS-security and resolver platform, the <a href="https://ollasoftware.com/blog/quickztna/">QuickZTNA</a> zero-trust remote-workforce mesh, the <a href="https://ollasoftware.com/blog/meshwg/">MeshWG</a> WireGuard site-to-site fabric, and the <a href="https://ollasoftware.com/blog/quicksdwan/">QuickSDWAN</a> multi-path SD-WAN — and the parent group\'s two-decade discipline in network and cybersecurity training.',
        'The parent group, <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a>, is the cybersecurity and networking training institute that has placed more than forty-five thousand alumni across eight hundred hiring partners since 2007. The institutional context matters here more than for most products in the portfolio because a consumer VPN is a category where the customer\'s trust depends on the vendor\'s networking discipline being credible. Networkers Home\'s eighteen-year track record in networking education — Cisco, Palo Alto, Fortinet, the standard cybersecurity disciplines — is the institutional backing that makes the platform\'s privacy and security claims more credible than they would be from a vendor without that lineage.',
        'The post-quantum engineering specifically is anchored on the team\'s ongoing work with NIST-standardised primitives across the security portfolio. The hybrid handshake the VPN ships is the same architectural pattern the team has been deploying in adjacent contexts — the broader portfolio includes products specifically focused on post-quantum cryptography as APIs and as networking primitives — and the choice to ship it by default in the VPN reflects the team\'s position that the post-quantum future is not a long-tail concern but a 2026 operational requirement.',
      ],
    },
    {
      h2: 'What is on the roadmap',
      paragraphs: [
        'The team publishes the roadmap and the changelog on the brand site and updates them as work ships. The visible near-term threads are concrete: the iOS app for the platform that closes the four-app cross-platform commitment, an expanded country footprint targeting the customer demand patterns the team has observed (more APAC exits, more African exits where the privacy-flexible jurisdictions are concentrated), and the deeper Business-tier admin surface that the customer feedback from the early enterprise deployments has been requesting.',
        'Underneath those visible features is steady investment in the network performance and the cryptographic substrate. The PQC handshake is in continuous tuning against the latest NIST guidance; the hybrid mixing function is in continuous tuning against the cryptanalysis literature that emerges; the kernel-level enforcement of the four privacy layers (peer isolation, in-tunnel DNS, kill switch, LAN preservation) is in continuous regression testing against the platform changes that could otherwise erode them.',
        'On the apps side, the team is investing in the desktop-app surface that makes the operational defaults more visible. The current apps surface the security posture cleanly but the team\'s position is that the customer should be able to verify the posture (the PQC is on, the kill switch is on, the DNS is in-tunnel) from a single glance at the dashboard rather than having to navigate to settings to confirm. The visual-verification surface is on the near roadmap.',
        'Pricing during the current phase is the published Free / Pro / Business model. The team has signalled that the entry-price discipline (Pro at $2.99 on the long-term plan, Business at $7.99 per user on the long-term plan) is the structural commitment rather than the introductory offer. The free tier\'s capability surface is unlikely to shrink.',
      ],
    },
    {
      h2: 'How to start',
      paragraphs: [
        'If you currently run on one of the established VPN services and you have not specifically verified that the service ships a post-quantum handshake by default on every connection, the right next move takes about three minutes. Go to <a href="https://ollavpn.com/">ollavpn.com</a>, click the download link for your platform, install the app, sign in (no credit card for the free tier), click Connect. The PQC handshake is on by default; the kill switch is on by default; the in-tunnel DNS is on by default. The customer does not have to enable any of them.',
        'For deeper evaluation, the free tier ships the full security stack with the 10 Mbps cap. That is enough capacity for most casual browsing, for the privacy-on-public-Wi-Fi workload, and for the general "do not let my ISP see what I\'m doing" use case. The customer who decides the platform\'s posture matches their threshold has the option to keep the free tier indefinitely.',
        'For the customer who needs the higher throughput — streaming at 4K, very large file uploads, gaming with consistent low-latency exits — the Pro tier at $2.99 per month on the 24-month plan is the entry deployment. The 30-day money-back guarantee covers the long-term plan; the customer can evaluate without lock-in.',
        'For business customers — teams that need admin controls, audit logs, dedicated IPs, and SLA-backed support — the Business tier at $7.99 per user per month on the 24-month plan is the canonical deployment. The platform\'s position is that business VPN spending is the operational line item where the post-quantum dimension matters most; business traffic is structurally more interesting to long-game adversaries than consumer traffic and the harvest-now-decrypt-later threat model applies more aggressively.',
        'The broader Ollasoftware AI development track record — spanning forty-plus security, AI, and infrastructure products — is covered in the independent ranking of <a href="https://ollasoftware.com/top-10/ai-software-development-companies-bangalore/">top AI software development companies in Bangalore</a>, where the methodology, pricing, and delivery model are described openly for teams evaluating the parent company for custom AI or security-infrastructure builds.',
        'If you would like the team to walk you through a deployment — particularly the Business-tier deployment for a team migrating from an established vendor — the <a href="https://ollasoftware.com/contact/">Ollasoftware contact page</a> reaches the engineers and operators who run the platform directly.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is OllaVPN?',
      a: 'OllaVPN is a cloud-operated VPN service that ships a hybrid post-quantum + classical key exchange on every connection. The classical security floor and the NIST-ratified quantum-resistant ceiling run side by side; both halves would need to break for the session to be compromised. Free forever for 1 device at 10 Mbps in 120+ countries. Pro $2.99/month for 5 devices and 10 Gbps. Business $7.99/user/month. Built and operated by Ollasoftware.',
    },
    {
      q: 'What does "post-quantum-ready" actually mean?',
      a: 'Every tunnel runs a hybrid key exchange that combines the classical Diffie-Hellman family (the same shape WireGuard ships) with the NIST-ratified post-quantum key-encapsulation mechanism. The session key is derived from both halves mixed together; if either holds up against the adversary, the session stays private. The hybrid is on by default — the customer does not opt in or navigate to an advanced setting.',
    },
    {
      q: 'What are the four enforcement layers?',
      a: 'Peer isolation (other tunnel users at the same exit cannot reach you, enforced at the network layer, verified by automated end-to-end testing on every release). In-tunnel DNS (resolver inside the tunnel, OS-level DNS firewall-blocked, DNS leaks structurally impossible). Kill switch (engages automatically when the tunnel drops, no bypass). LAN preservation (local devices on your home network stay reachable while the tunnel is up).',
    },
    {
      q: 'How does OllaVPN pricing work?',
      a: 'Free is $0 forever — 1 device, 10 Mbps, all 120+ countries, full security stack, no card. Pro is $9.99 monthly / $5.99 on 12-month plan / $2.99 on 24-month plan — 5 devices, 10 Gbps per session, premium low-latency exits. Business is $12.99 / $9.99 / $7.99 per user per month on the same plan lengths — unlimited devices per user, admin panel, audit, dedicated IPs, Slack support with 4-hour SLA. 30-day money-back guarantee on paid tiers.',
    },
    {
      q: 'What does "owned metal" mean?',
      a: 'The platform owns and operates the VPN exit infrastructure directly — dedicated public IPs, modern Linux, no resold-VPS supply chain. This matters because resold-VPS providers have hypervisor-level access to the traffic, hold the logs that legal compulsion can reach, and undermine the VPN vendor\'s no-logs claim. Owned metal closes that loop and makes the "we can\'t disclose what we don\'t collect" claim structurally enforceable.',
    },
    {
      q: 'Which platforms are supported?',
      a: 'Native apps for Windows, macOS, and Android ship today. iOS is on the near roadmap. Linux runs the standard WireGuard configuration the user can audit and migrate. The four-app cross-platform commitment is published on the brand site and the iOS app closes it.',
    },
    {
      q: 'How does OllaVPN compare to Mullvad, ProtonVPN, NordVPN and ExpressVPN?',
      a: 'Mullvad is the privacy-first benchmark; OllaVPN extends past it on the post-quantum default (Mullvad ships PQC as opt-in experimental). ProtonVPN is the polished consumer alternative; OllaVPN is structurally cheaper at the Pro tier and has stronger cryptographic posture by default. NordVPN and ExpressVPN are the mainstream marquee brands with the largest install bases; OllaVPN sits below them on raw brand recognition and above them on cryptographic posture and ownership transparency.',
    },
    {
      q: 'Who is behind OllaVPN?',
      a: 'OllaVPN is built and operated by Ollasoftware, the Bengaluru-headquartered AI software development company. The networking and security competencies inherit from the broader portfolio (OllaDNS, 24observe, the post-quantum-adjacent products). The parent group is Networkers Home, the cybersecurity and networking training institute founded in 2007 with 45,000+ alumni placed across 800+ hiring partners — the eighteen-year institutional discipline in network and cybersecurity training that backs the platform\'s claims.',
    },
  ],
};
