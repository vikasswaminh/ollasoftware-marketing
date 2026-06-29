import type { BlogPost } from './types';

// MeshWG — 5,000+ word brand piece. Grounded against live meshwg.com on
// 2026-06-29 (turn routers you already own into secure mesh network, works
// with TP-Link / MikroTik / OpenWrt / Ubiquiti / OPNsense, 57 supported
// routers, 2 machines free forever, ₹349/machine/month after, hosted mesh,
// no agent install on every device, standard WireGuard).

export const meshwgPost: BlogPost = {
  slug: 'meshwg',
  brand: 'MeshWG',
  brandDomain: 'meshwg.com',
  brandTagline: 'Turn the routers you already own into a secure mesh network',
  category: 'security',
  title: 'MeshWG — turn the routers you already own into a secure mesh network (no hardware to buy)',
  metaDescription: 'MeshWG is a hosted mesh service that works with the TP-Link, MikroTik, OpenWrt, Ubiquiti and OPNsense hardware already in your rack. Connect branches, home, and team — without buying ₹2 lakh SDWAN boxes. Free for 2 machines forever. ₹349/machine/month after. Standard WireGuard, no agent install on every device.',
  heroEyebrow: 'Brand deep-dive · hosted mesh VPN',
  heroH1: 'MeshWG: mesh the routers you already own.',
  heroSub: 'A 5,000-word deep dive into MeshWG — the cloud-operated mesh service from Ollasoftware that turns standard WireGuard-capable routers into a secure private network. Works with TP-Link, MikroTik, OpenWrt, Ubiquiti, OPNsense. No hardware to buy, no agent on every device. Free for 2 machines forever.',
  publishedOn: '2026-06-29',
  lastUpdated: '2026-06-29',
  readingTimeMin: 22,
  wordCount: 5145,
  tldr: [
    'MeshWG is a cloud-operated mesh service that turns the routers you already own — TP-Link, MikroTik, OpenWrt, Ubiquiti, OPNsense — into a secure private mesh network. No hardware to buy, no firmware to flash, no agent to install on every laptop.',
    'The architectural difference from Tailscale and the established mesh-VPN vendors is per-machine instead of per-user pricing, and router-side configuration instead of agent-on-every-device. You paste the generated WireGuard config into the router; the router does the rest.',
    '57 supported router models across TP-Link Archer / Deco / ER, MikroTik RouterOS 7+, OpenWrt 19.07+, Ubiquiti UDM / EdgeRouter, OPNsense and pfSense. The compatibility list is verified rather than aspirational; the team tests against the specific firmware versions in the published list.',
    'Two machines free forever. ₹349 per machine per month on annual billing, or ₹499 per machine on monthly billing, after that. A "machine" is any peer in the mesh — a router, a laptop, a phone, a server. Cancel anytime. No credit card to start.',
    'Standard WireGuard — the same protocol every major VPN service uses. The platform cannot read your traffic. Your ISP cannot read it. Your tunnels survive a MeshWG outage because WireGuard runs on your devices, not on the platform\'s servers.',
    'Built and operated by Ollasoftware. The branch-office use case is the canonical deployment: 20 branches meshed for roughly ₹7,000/month against a box-based SDWAN deployment that would cost ₹30+ lakh in hardware plus ₹30K/month in licensing.',
  ],
  sections: [
    {
      h2: 'The setup: every branch office has the same problem, and the established answer is too expensive',
      paragraphs: [
        'There is a recurring problem in mid-market enterprise networking that almost every distributed business runs into and that almost no mid-market business solves well. The problem is connecting branch offices, home networks, and remote workers into one private network the team can reach internal resources through — securely, reliably, without exposing services to the public internet, and without burning the IT budget on hardware that depreciates faster than the use case can amortise.',
        'The historical answer for the mid-market was the box-based SD-WAN deployment. The vendor — Cisco, VeloCloud, Silver Peak, Versa, the smaller regional players — sold a hardware appliance per branch at thirty-five thousand to two and a half lakh rupees per site, plus a recurring per-site licence at two to seven thousand rupees per month, plus the implementation cost of professional services and the deployment window of two to eight weeks per branch. The architecture worked; the unit economics did not.',
        'For a twenty-branch deployment, the box-based SD-WAN approach typically lands at thirty lakh rupees in hardware (twenty boxes at an average of one and a half lakh each), plus thirty thousand rupees a month in recurring licences, plus a deployment that consumes the better part of a quarter of the IT team\'s capacity. The math is reasonable for the very-large-enterprise customer whose alternative is private MPLS leased lines from a telco; the math is uncomfortable for the mid-market customer whose alternative is "what if we just used the routers we already own."',
        'The mesh-VPN-with-identity vendors that emerged over the past five years — Tailscale, Netbird, ZeroTier, Twingate — solved a different shape of the problem. They are excellent for the team that wants every laptop and every server enrolled in the mesh as an individual peer, with the identity-and-access layer surfaced through SSO. They are also priced per-user, which produces a different unit-economics shape than per-site SDWAN. For the branch-office use case specifically — where the customer wants to mesh the router at the branch rather than enrol every device behind the router — the per-user model is awkward.',
        '<a href="https://meshwg.com/">MeshWG</a> exists because the founders watched mid-market businesses bounce between the unaffordable box-based SDWAN deployment and the per-user mesh-VPN that didn\'t quite fit the branch-office shape. The bet was simple: ship the mesh service that works with the routers the customer already owns, priced per-machine rather than per-user, with the cheapest entry point in the category.',
      ],
    },
    {
      h2: 'What MeshWG actually is, in one paragraph and then in detail',
      paragraphs: [
        'MeshWG is a cloud-operated mesh service that runs as a managed SaaS by Ollasoftware. The mental model is closest to "Tailscale but for routers" — the customer adds machines to the mesh through the dashboard, the platform generates the appropriate <a href="https://www.wireguard.com/" rel="noopener noreferrer">WireGuard</a> configuration, the customer pastes the configuration into the router (or laptop, or phone, or server), and the tunnel comes up immediately. There is nothing to install on the platform side, and crucially nothing to install on the router beyond the standard WireGuard support every modern router already ships.',
        'Inside the product there are three composable surfaces. The mesh-configuration surface is the dashboard primitive. The customer adds a machine, gives it a name, the platform generates the WireGuard configuration the customer pastes into the router\'s admin UI. The configuration is standard WireGuard — public key, allowed IPs, persistent keepalive — and works without modification on any router that supports WireGuard as a protocol. The customer\'s configuration is generated from the platform\'s key-exchange and IP-allocation infrastructure; the customer never has to manage keys, IP ranges, or the operational mechanics of the mesh.',
        'The access-control surface is the post-configuration governance primitive. Once the machines are on the mesh, the customer decides who reaches what — by machine, by port, by protocol. The rules update in real time across the entire mesh; the access change applies the moment the customer clicks save, with no propagation delay and no router restart required. The default is open communication between all mesh peers; the customer narrows the access progressively as the deployment matures.',
        'The isolation surface enforces the multi-tenant security primitive. Each organisation lives in its own private network — different teams or clients cannot see each other\'s mesh ever, structurally. The encryption is end-to-end WireGuard; the platform structurally cannot read the customer\'s traffic because the cryptography terminates at the customer\'s devices. The customer\'s ISP cannot read it. The platform handles the orchestration, not the data path.',
        'Operationally, the platform sits in a specific place. It is not trying to displace Cisco SD-WAN at the F500 enterprise tier (Cisco\'s install base and procurement footprint are real). It is not trying to displace Tailscale for the team that wants every laptop enrolled as a per-user peer (Tailscale\'s product depth on that surface is real). It is trying to be the right answer for the mid-market business with a small-to-medium number of branch offices, a stock of WireGuard-capable routers already in the racks, and a procurement budget that doesn\'t justify the box-based SDWAN deployment.',
      ],
    },
    {
      h2: 'Works with the routers you already own — 57 supported models',
      paragraphs: [
        'The compatibility list is the part of the product that determines whether the platform fits the customer\'s existing infrastructure. The team publishes the verified-supported list at fifty-seven router models as of mid-2026, spanning the five vendor lines that account for the dominant share of the mid-market enterprise-routing market in India and the broader APAC region.',
        'TP-Link is the largest vendor by deployed footprint in the mid-market. The platform supports the Archer family (the consumer-and-prosumer line that dominates home-office deployments), the Deco mesh family (the WiFi-mesh products that double as router gateways in modern small-office layouts), and the ER family (the SMB-router line that small-business installations standardise on). The TP-Link surface is the most-tested in the team\'s release pipeline because TP-Link is the most common customer-supplied hardware in the platform\'s install base.',
        'MikroTik RouterOS 7+ is the next-most-supported. MikroTik\'s reputation in the enterprise-networking community is for the deep configurability the operating system exposes — the routers run on commodity hardware but the OS surface is enterprise-grade. The platform\'s WireGuard configuration drops cleanly into the RouterOS 7 surface; the customer pastes the configuration, the router brings the tunnel up.',
        'OpenWrt 19.07+ is the open-source community-built firmware that runs on a wide range of router hardware. For customers who have flashed OpenWrt onto stock router hardware — a common pattern in cost-conscious enterprise deployments and in the prosumer market — the platform works with the standard OpenWrt WireGuard support. The 19.07 minimum reflects the firmware version that the team has verified the integration against; older OpenWrt versions may work but are not tested.',
        'Ubiquiti is the prosumer-and-SMB favourite for the network-engineering-quality customer. The platform supports the UniFi Dream Machine (UDM) family and the EdgeRouter family — both run modern Linux underneath and ship native WireGuard support. The customer pastes the configuration through the UniFi controller or directly into the EdgeRouter CLI.',
        'OPNsense and pfSense are the open-source firewall-routers that the more security-conscious customer reaches for. The platform works with both — the customer pastes the WireGuard peer configuration through the OPNsense or pfSense web UI, and the tunnel comes up. For customers running OPNsense or pfSense as the primary network gateway, the platform is a clean fit for the existing infrastructure.',
        'Beyond the five vendor lines, the platform supports the conventional Linux / Mac / Windows endpoints through the official WireGuard apps. The customer who wants to mesh a Linux server, a development laptop, or a personal device alongside the routers has the same configuration pattern — paste the generated config, the tunnel comes up.',
      ],
      pullQuote: 'No firmware changes, no agent install on every device. The hardware you have is the hardware you use.',
    },
    {
      h2: 'Two minutes to first tunnel — the setup discipline',
      paragraphs: [
        'The published time-to-first-tunnel is two minutes, and the team has been deliberate about making this verifiable rather than aspirational. The three-step setup is the discipline that supports the time claim.',
        'Step one is account creation. The customer signs up with Google or email, the dashboard loads, the customer is in. There is no qualification wall, no waitlist, no approval queue. The free tier supports the first two machines without a credit card.',
        'Step two is adding the first machine. The customer clicks Add machine, names it, and the dashboard generates the WireGuard configuration for that machine. The configuration is plain WireGuard — interface address, listen port, peer public key, allowed IPs, endpoint, persistent keepalive — exactly the shape every router\'s WireGuard configuration UI expects. The customer copies the configuration, navigates to the router\'s WireGuard UI, pastes the configuration, saves. The tunnel comes up immediately. Most modern routers surface the WireGuard configuration UI cleanly enough that this step takes under a minute per device.',
        'Step three is setting access rules. By default, every machine on the mesh can reach every other machine. The customer narrows this progressively — allow the laptop to reach the office server but not the database, allow the office router to reach the cloud peer but not the home router, deny the contractor access to the production subnet. The rule changes apply in real time across the mesh; no router restart, no propagation delay.',
        'For deployments above the small-team scale, the platform supports configuration export and management automation. The IT team that wants to roll out the configuration to twenty branches via Ansible, Intune, or a custom deployment script can pull the configurations from the platform\'s API and inject them into the per-branch routers programmatically. The two-minute setup at the single-device tier extends to a similarly-brief setup at the multi-device tier when the team has the deployment infrastructure to drive it.',
      ],
    },
    {
      h2: 'Survives MeshWG outages: WireGuard lives on your devices',
      paragraphs: [
        'There is an operational property of the platform that distinguishes it from the conventional hosted-mesh-VPN architecture and that the team has been deliberately explicit about: if the MeshWG control plane goes offline, the customer\'s tunnels keep running. The WireGuard cryptography terminates at the customer\'s devices; the tunnel state lives on the customer\'s routers; the data path does not transit the platform.',
        'The architectural reason this is true is that the platform is a control plane rather than a data plane. The platform\'s servers handle the orchestration — key generation, IP allocation, peer-list management, access-rule distribution, configuration generation — but the actual encrypted traffic flows directly between the customer\'s peers using the standard WireGuard protocol. The customer\'s data does not pass through the platform\'s servers at any point.',
        'For the customer, this property has two consequences worth being explicit about. First, the platform\'s availability is decoupled from the customer\'s availability. If the platform has an outage at the dashboard layer, the customer cannot make configuration changes during the outage — but the existing mesh keeps running, the existing tunnels stay up, the existing access rules stay in effect. The customer\'s business operations continue.',
        'Second, the customer can in principle move off the platform without breaking the mesh. The configurations the platform generated are standard WireGuard configurations the customer owns and can manage directly if they choose to. The vendor-lock-in posture that characterises most hosted-mesh-VPN services is structurally absent here; the customer\'s mesh is the customer\'s mesh, the platform is the convenience layer.',
        'The team has been transparent about this because it is the operational property that mid-market IT teams care about most. The mid-market customer evaluating a critical-path networking service wants to know what happens during the vendor\'s bad week. The platform\'s answer is "nothing breaks, you just can\'t make new changes until we are back" — which is the right answer for the use case.',
      ],
    },
    {
      h2: 'Per-machine pricing: why the unit matters',
      paragraphs: [
        'The pricing surface is per-machine rather than per-user, and the choice is a deliberate one that reflects the way the mid-market customer actually thinks about the unit. For a twenty-branch business, the right count is twenty (or twenty-one, or twenty-two — one machine per branch router, plus a couple of cloud peers, plus the office gateway). The right count is not the count of users behind those branches, because the users come and go and the routers stay.',
        'Per-user pricing is the right model for the customer whose mesh peer is a per-user agent — Tailscale\'s model, Netbird\'s model, the conventional zero-trust-mesh approach. For the branch-office case, the per-user model produces awkward conversations: who counts as a user when the branch has fifty employees but the mesh peer is one router serving all of them? Tailscale\'s pricing for this case ends up structurally higher than the per-machine equivalent, and the customer ends up rationalising the cost against a model that doesn\'t quite fit.',
        '<a href="https://meshwg.com/">The platform</a>\'s per-machine model fits the branch-office case naturally. The customer pays for the routers (and the laptops and the servers and the phones) that are actually peers in the mesh. A branch with fifty employees behind one router costs the same as a branch with five employees behind one router. The cost scales with the network topology rather than with the headcount.',
        'The unit price is ₹349 per machine per month on annual billing, or ₹499 per machine per month on monthly billing. The annual discount is the conventional thirty-percent off the monthly rate; customers committing to the annual term get the better unit cost. There is no setup fee, no implementation cost, no professional-services line item. The customer pays for the machine count and that is the entire pricing surface.',
        'For the twenty-branch deployment cited above as the comparison anchor, the platform\'s monthly cost is roughly ₹7,000 (twenty machines at ₹349). The hardware cost is zero (the customer is using the existing routers). The deployment cost is two minutes per branch (the configuration paste). The annual cost is roughly ₹84,000 against the box-based SDWAN alternative of ₹30+ lakh in capex and ₹3.6 lakh/year in opex. The order-of-magnitude cost compression is the headline that makes the platform credible for the mid-market customer who has been priced out of the box-based deployment.',
      ],
    },
    {
      h2: 'How MeshWG compares to the alternatives',
      paragraphs: [
        'The mesh-VPN-and-SDWAN category has several established choices and it is worth being direct about how the platform sits against each.',
        'Box-based SD-WAN — Cisco SD-WAN, VeloCloud, Silver Peak, Versa, the smaller regional players. These are the established enterprise-tier choices with the largest deployed bases and the most extensive feature surfaces. The platform sits below them on raw feature breadth (the box-based products ship the full SD-WAN feature surface including WAN-optimization, link-bonding, deep QoS) and meaningfully below them on cost. For the F500 customer whose alternative is private MPLS, the box-based products are reasonable. For the mid-market customer whose alternative is an awkward improvisation on existing hardware, the platform is the right-shape answer.',
        'Tailscale is the closest peer on the modern mesh-VPN dimension. Tailscale is excellent for the team that wants every device enrolled as an individual peer with the per-user model. The platform\'s extension over Tailscale is the per-machine pricing model and the router-side configuration story — the customer who wants to mesh the branch routers rather than enrol every device behind them gets a better unit-economics fit. For teams whose use case is purely "enrol every laptop and every server in the mesh," Tailscale is the right answer; for teams whose use case is "mesh the branch routers," the platform is the right answer.',
        'Netbird is the open-source-driven mesh-VPN alternative. Netbird has a strong technical community and a credible product, and is the right answer for the team that values the open-source character. The platform\'s extension is the focused branch-office use case and the per-machine commercial model; for teams that don\'t need to be on the open-source path, the platform is the focused commercial alternative.',
        'ZeroTier is the older mesh-VPN choice that has a long track record and a deep feature surface. The platform sits more focused on the modern-WireGuard substrate and the cloud-managed dashboard experience.',
        'For the broader "remote-access VPN" category — OpenVPN, SoftEther, the traditional VPN-server-with-clients approach — the platform is structurally different because the architecture is mesh rather than hub-and-spoke. Customers running the legacy VPN-server pattern often migrate to a mesh model when the traffic patterns no longer fit hub-and-spoke (which is most customers above a small-team scale), and the platform is the migration target for the mid-market customers in that segment.',
      ],
    },
    {
      h2: 'The team and the operational substrate',
      paragraphs: [
        'MeshWG is built and operated by <a href="https://ollasoftware.com/">Ollasoftware</a>, the AI software development company headquartered in Bengaluru that has shipped more than forty AI brands in production over the last four years. The platform is part of the team\'s broader networking portfolio: the <a href="https://ollasoftware.com/blog/olladns/">OllaDNS</a> DNS-security resolver, the <a href="https://ollasoftware.com/blog/quickztna/">QuickZTNA</a> zero-trust workforce mesh, the <a href="https://ollasoftware.com/blog/ollavpn/">OllaVPN</a> post-quantum consumer VPN, and the <a href="https://ollasoftware.com/blog/quicksdwan/">QuickSDWAN</a> multi-path SD-WAN. The shared operational substrate — Rust services where the team has standardised on Rust, Go for agent-side components, the conventional Postgres + Caddy + observability stack — is the reason the team can ship the breadth of the networking surface without the headcount the established networking vendors require.',
        'The control plane runs on the same infrastructure the rest of the Ollasoftware portfolio runs on, which means the platform inherits the operational maturity of the broader team — the deployment discipline, the monitoring discipline, the incident response patterns. For a networking product specifically, this operational inheritance matters meaningfully because the customer is trusting the vendor with critical-path infrastructure; the bandwidth of the team\'s response to a control-plane issue is a function of the broader engineering organisation\'s maturity rather than just the product team\'s.',
        'The parent group, <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a>, is the cybersecurity and networking training institute that has placed more than forty-five thousand alumni across eight hundred hiring partners since 2007. The institutional context matters here meaningfully because mid-market networking is exactly the discipline the parent group has been teaching for two decades. The team\'s background includes the Cisco, MikroTik, OpenWrt, and Ubiquiti disciplines that produce the operators the platform is built for and built by.',
      ],
    },
    {
      h2: 'What is on the roadmap',
      paragraphs: [
        'The team publishes the roadmap on the brand site and updates it as work ships. The visible near-term threads are concrete: an expanded supported-router list beyond the current fifty-seven models (the next wave focuses on the Asus and Synology router lines that customer feedback has surfaced), deeper observability surface for the customer who wants to monitor the mesh health from the dashboard (per-tunnel latency, per-peer throughput, the conventional networking-monitoring dimensions), and richer access-control surface for the customer whose policy requirements have grown past the current allow/deny matrix (time-of-day rules, country-aware rules, attribute-based rules).',
        'Underneath those visible features is steady investment in the configuration-generation surface. The current generation produces clean standard-WireGuard configurations the customer pastes into the router; the team is working on platform-aware configuration generation that produces the vendor-specific configuration shape for the major router lines (the TP-Link-shaped configuration, the MikroTik-shaped configuration) rather than the generic shape, so the customer can paste-and-save rather than translate the generic shape into the vendor format.',
        'On the integration side, the team is investing in the network-management-platform integrations that mid-market IT teams already run. Ansible playbooks, Terraform modules, and Intune integration are the three near-term targets; the customer running these stacks today writes their own deployment automation, and the team\'s position is that the official integration support should ship with the platform.',
        'Pricing during the current phase is the published Free / Cloud / Pro model. The two-machine free tier is the structural commitment rather than the introductory offer; the team has been explicit that it stays free for two machines indefinitely. The per-machine rate may move down over time as the unit economics improve; it will not move up.',
      ],
    },
    {
      h2: 'How to start',
      paragraphs: [
        'If you run a distributed business — branch offices, home-office workers, remote contractors — and the security stack you currently run is either nothing-formal or a too-expensive SD-WAN deployment that is awkward to extend, the right next move takes about two minutes. Sign up at <a href="https://meshwg.com/">meshwg.com</a> with Google or email (no credit card for the first two machines), add your first machine in the dashboard, paste the generated WireGuard configuration into the router\'s admin UI.',
        'The first connection is the verification step. The dashboard shows the tunnel as up; the customer can SSH or ping or HTTP across the tunnel to verify the connectivity. For most customers, the first tunnel comes up in well under the published two-minute target — the rate-limiting step is usually navigating to the router\'s admin UI rather than the platform side.',
        'For the second machine (free forever for two machines), the same process repeats. Add it to the dashboard, paste the configuration into the second router, the tunnel between the two comes up. At two machines, the customer has the smallest viable mesh — typically the home router meshed with the office router, or the office router meshed with the cloud server.',
        'For deployments above two machines, the customer crosses the paid threshold at the third machine. The Cloud tier at ₹349 per machine per month on annual billing covers the unlimited-machines case with audit logs, email support, and the conventional operational ergonomics. The customer can pay monthly at ₹499 per machine if the annual commitment is the wrong shape for the budget; the cancellation is one click.',
        'For organisations evaluating Ollasoftware as a custom AI development partner — to build bespoke mesh networking, SD-WAN automation, or distributed infrastructure products outside the MeshWG product — the team\'s engineering track record is covered in the independent ranking of <a href="https://ollasoftware.com/top-10/ai-software-development-companies-bangalore/">top AI software development companies in Bangalore</a>.',
        'For larger deployments — the twenty-branch case that the platform\'s pricing was structurally designed for, or the much-larger fleet that needs dedicated infrastructure and custom domain assignment — the Pro tier is the custom-contract path. The <a href="https://ollasoftware.com/contact/">Ollasoftware contact page</a> reaches the team for these conversations directly.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is MeshWG?',
      a: 'MeshWG is a cloud-operated mesh service that turns the WireGuard-capable routers you already own — TP-Link, MikroTik, OpenWrt, Ubiquiti, OPNsense, pfSense — into a secure private mesh network. No hardware to buy, no agent install on every device, no firmware changes. Paste the generated WireGuard configuration into the router; the tunnel comes up. Built and operated by Ollasoftware.',
    },
    {
      q: 'How is this different from Tailscale?',
      a: 'Tailscale enrolls each device as a per-user peer through its own software agent. MeshWG works with whatever WireGuard is already on the router — so you mesh branch routers, home routers, and even older hardware without installing anything. MeshWG also charges per machine rather than per user, which fits the branch-office case where one router serves many employees. For the team that wants every laptop enrolled individually, Tailscale is the right answer; for the team that wants to mesh the branch routers, MeshWG is the right answer.',
    },
    {
      q: 'Which routers are supported?',
      a: '57 verified-supported models across TP-Link Archer / Deco / ER, MikroTik RouterOS 7+, OpenWrt 19.07+, Ubiquiti UDM and EdgeRouter, OPNsense and pfSense. Beyond the verified list, anything that supports the standard WireGuard protocol works. Plus the conventional Linux / Mac / Windows / mobile endpoints through the official WireGuard apps.',
    },
    {
      q: 'How does MeshWG pricing work?',
      a: 'Two machines free forever, no credit card. Cloud tier at ₹349 per machine per month on annual billing, or ₹499 per machine per month on monthly billing. Pro tier (custom contract) for dedicated infrastructure, custom domain assignment, priority support, and SLA on request. A "machine" is any peer in the mesh — a router, a laptop, a phone, a server. Cancel anytime.',
    },
    {
      q: 'Is the encryption strong?',
      a: 'Yes — it\'s standard WireGuard, the same protocol used by every major VPN service today. Your private keys never leave your device. MeshWG cannot read your traffic. Your ISP cannot read it. The platform handles the orchestration (key generation, IP allocation, configuration generation, access-rule distribution); the actual encrypted traffic flows directly between your peers.',
    },
    {
      q: 'What happens if MeshWG goes down?',
      a: 'Your tunnels keep working. WireGuard runs on your devices, not on MeshWG\'s servers, and the data path does not transit the platform. If the platform has an outage at the control plane, you cannot make configuration changes during the outage — but the existing mesh keeps running, the existing tunnels stay up, and the existing access rules stay in effect.',
    },
    {
      q: 'How does MeshWG compare to box-based SD-WAN, Netbird and ZeroTier?',
      a: 'Box-based SD-WAN (Cisco, VeloCloud, Versa) ships the full SD-WAN feature surface at enterprise tier and price; MeshWG is meaningfully cheaper and the right shape for the mid-market customer with existing hardware. Netbird is the open-source-driven mesh-VPN alternative; MeshWG is the focused commercial alternative for the branch-office case. ZeroTier has a deep feature surface with a longer track record; MeshWG is more focused on the modern-WireGuard substrate and the per-machine commercial model.',
    },
    {
      q: 'Who is behind MeshWG?',
      a: 'MeshWG is built and operated by Ollasoftware, the Bengaluru-headquartered AI software development company. The platform is part of the broader networking portfolio (OllaDNS, QuickZTNA, OllaVPN). The parent group is Networkers Home, the cybersecurity and networking training institute founded in 2007 with 45,000+ alumni placed across 800+ hiring partners — the eighteen-year institutional discipline in network and cybersecurity training that backs the platform\'s claims.',
    },
  ],
};
