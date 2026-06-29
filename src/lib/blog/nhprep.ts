import type { BlogPost } from './types';

// NHPrep — 5,000+ word brand piece. Grounded against live nhprep.com on
// 2026-06-29. India's #1 Network Engineering Platform. ₹7,999/yr (73% off).
// 157+ courses, 1,519+ lessons, 75+ labs, 1,668 quiz Qs, AI mock interviews.
// Covers CCNA/CCNP/CCIE, Palo Alto, FortiGate, CEH, AWS, Azure. Operated by
// Networkers Home (parent brand, founded 2007, CCIE #22239).

export const nhprepPost: BlogPost = {
  slug: 'nhprep',
  brand: 'NHPrep',
  brandDomain: 'nhprep.com',
  brandTagline: "India's #1 Network Engineering Platform — ₹7,999/year",
  category: 'education',
  title: 'NHPrep — the ₹7,999 platform that puts CCNA, CCNP, CCIE, and AI training in one place',
  metaDescription: "NHPrep is India's #1 network engineering preparation platform at ₹7,999/year — 157+ courses, 75+ hands-on labs, AI mock interviews in 8 languages, and dedicated AI for Network Engineers tracks. Built by Networkers Home, the Bengaluru institute with 45,000+ alumni placed since 2007.",
  heroEyebrow: 'Brand deep-dive · network engineering platform',
  heroH1: 'NHPrep: every cert track you need, one subscription, ₹22/day.',
  heroSub: 'A 5,000-word deep dive into NHPrep — the cloud network engineering preparation platform from Networkers Home that bundles CCNA, CCNP, CCIE, Palo Alto, FortiGate, CEH, AWS, Azure, and AI for Network Engineers into a single ₹7,999/year subscription with 75+ hands-on labs and AI mock interviews in 8 languages.',
  publishedOn: '2026-06-29',
  lastUpdated: '2026-06-29',
  readingTimeMin: 22,
  wordCount: 5120,
  tldr: [
    'NHPrep is a network engineering certification preparation platform operating at ₹7,999/year — roughly ₹22 per day, or ₹666 per month. A single subscription unlocks 157+ courses, 1,519+ lessons, 75+ hands-on lab exercises, and 1,668 quiz questions across every major certification track.',
    'The certification coverage is comprehensive: CCNA, CCNP, CCIE (all track variants), Palo Alto PCNSA/PCNSE, FortiGate NSE 4/5, CEH, AWS Solutions Architect, Azure Administrator. No separate subscriptions per vendor track; one price covers the entire catalogue.',
    'Three learning modalities work in parallel rather than in sequence. Five hundred-plus hours of structured video instruction provides the conceptual baseline. Seventy-five-plus hands-on labs in live network environments let students apply that knowledge under real packet conditions. AI mock interviews — 375 questions across five specialisation tracks in eight languages — simulate the pressure of the actual technical interview.',
    'Sixty quiz categories structured as spaced-repetition practice with 1,668 questions close the gap between knowing and retaining. The AI mock interview feature covers CCNA, CCNP, Security, Automation, and Cloud tracks in Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, and English.',
    'NHPrep is operated by Networkers Home, the Bengaluru networking and cybersecurity training institute founded in 2007 by Vikas Swami (Dual CCIE #22239). Forty-five thousand-plus alumni placed at 800+ hiring partners including Cisco, HCL, Akamai, and Barracuda are the external validation of the teaching quality the platform digitises.',
    'The AI-for-engineers curriculum layer — AI for Network Engineers, Network Automation with AI, AI-Powered Network Security — is the content surface that separates NHPrep from preparation platforms that treat certification as the terminal destination rather than the foundation for what the industry is actually building.',
  ],
  sections: [
    {
      h2: 'The problem: network engineering certification is expensive, fragmented, and slow',
      paragraphs: [
        'Getting certified as a network engineer in India in 2026 involves navigating a landscape designed around Western pricing and Western time horizons. A single Cisco authorised training course — the kind delivered by a partner instructor in a training centre — runs somewhere between ₹40,000 and ₹1,20,000 depending on the certification level. CCNA preparation typically consumes three to six months; CCNP takes twelve to eighteen. CCIE is a multi-year project. Add the exam fees, which Cisco charges in US dollars, and the full cost of a CCIE from zero is a six-figure investment in any currency.',
        'The fragmentation makes the cost worse. Cisco tracks, Palo Alto tracks, FortiGate tracks, AWS cloud, Azure cloud, CEH ethical hacking — each vendor has its own training ecosystem, its own cost structure, its own preparation resource set. A network security engineer who needs CCNP Security plus Palo Alto PCNSE plus CEH is navigating three separate training tracks with three separate price tags, three separate course structures, and three separate preparation communities.',
        'The hands-on lab access problem is the one that fails students at the exam itself. Packet Tracer and GNS3 are the standard free alternatives; they simulate the protocol behaviour but not the physical device characteristics that show up on lab exams and in production environments. Authorised Cisco hardware lab access — the kind the CCIE lab exam actually uses — is expensive to operate and most individual students cannot afford continuous access.',
        'NHPrep was built as the structural solution to all three problems simultaneously. One subscription, comprehensive coverage across vendors, live hands-on lab environments. The ₹7,999/year price point was set not as a minimum viable price but as the maximum price that makes access reasonable for an engineering graduate at the beginning of their career in India.',
      ],
    },
    {
      h2: 'The catalogue: 157+ courses and 1,519+ lessons structured by track',
      paragraphs: [
        'The course catalogue at <a href="https://nhprep.com/">nhprep.com</a> is structured around the certification tracks most relevant to the Indian networking industry rather than around a generic technology taxonomy.',
        'The Cisco tracks are the largest slice. CCNA covers the full 200-301 blueprint — routing, switching, wireless, security fundamentals, automation, and cloud basics. CCNP tracks branch by specialisation: Enterprise, Security, Data Center, Wireless, Service Provider. CCIE preparation spans the written qualification and the lab content across the same specialisation tracks, with the understanding that CCIE lab preparation is a multi-month intensive that benefits from the live lab infrastructure.',
        'Security vendor tracks sit alongside the Cisco catalogue rather than as a separate product. <a href="https://www.paloaltonetworks.com/services/education/certification" rel="noopener noreferrer">Palo Alto</a> content covers PCNSA (associate) and PCNSE (engineer) — the two certifications that have become a hiring requirement at most enterprise security operations teams in India. FortiGate content covers NSE 4 and NSE 5, the tracks relevant to enterprise firewall administration and advanced security management. Both sets of content were developed against the current exam blueprints rather than inherited from older training materials.',
        'The ethical hacking and cybersecurity content covers CEH (Certified Ethical Hacker) — the <a href="https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/" rel="noopener noreferrer">EC-Council</a> certification that most information security job descriptions in India list as a requirement or preference. The AWS and Azure content covers the cloud administrator and solutions architect tracks that network engineers need as on-premises infrastructure migrates to hybrid and cloud-native architectures.',
        'The new AI curriculum layer is the content surface that the team added in direct response to what the industry is hiring for. AI for Network Engineers introduces the tooling — large language model APIs, automation frameworks, network-aware AI applications — to an audience that has the domain knowledge but not yet the AI tooling fluency. Network Automation with AI covers the implementation side: Python automation, Ansible, Terraform, and the AI-augmented operations workflows replacing manual configuration management. AI-Powered Network Security covers the threat-intelligence, SIEM, and SOC automation applications that are actively deployed in enterprise security operations.',
      ],
      pullQuote: '157+ courses. One subscription. ₹22 per day. Every major vendor track included — Cisco, Palo Alto, FortiGate, AWS, Azure, CEH, AI for Network Engineers.',
    },
    {
      h2: 'The hands-on labs: 75+ exercises in live network environments',
      paragraphs: [
        'The lab infrastructure is the operational differentiator that most online preparation platforms cannot match. NHPrep ships 75+ structured lab exercises in live network environments — not simulations, not emulators with known divergences from production hardware, but real protocol-level environments where the packet behaviour is the same as the exam and the production network.',
        'The lab exercises follow a structured progression. Foundation labs establish the routing and switching fundamentals: OSPF, EIGRP, BGP, VLAN, STP, etherchannel. Intermediate labs build toward the CCNP-level configurations: route redistribution, traffic engineering, QoS policy, multicast. Advanced labs address the CCIE-level complexity: multi-protocol designs, service provider edge cases, security policy at scale.',
        'Security labs are integrated throughout rather than sequenced as a separate track. Palo Alto lab exercises cover security policy, NAT, VPN, and threat prevention at the configuration level the PCNSE exam tests. FortiGate labs cover HA failover, SSL inspection, and application control. The CEH labs cover the ethical hacking methodology at the hands-on level — scanning, enumeration, exploitation in controlled environments — that is structurally different from reading about the methodology in a course video.',
        'Cloud labs address the networking-specific AWS and Azure content: VPC design, Transit Gateway, ExpressRoute, Site-to-Site VPN, network security groups. These are not introductory cloud-provider labs; they are designed for the network engineer who needs to extend their mental model of network design into the cloud-provider abstraction layer.',
        'The 24/7 real lab infrastructure access is the availability commitment. The labs are not time-boxed sessions that have to be booked in advance; they are available continuously. For students who study in the early morning before work or late evening after it — the pattern that characterises most working professionals pursuing certifications alongside employment — continuous availability is the difference between a lab exercise completed and one deferred indefinitely.',
      ],
    },
    {
      h2: 'The AI mock interview: 375 questions, five tracks, eight languages',
      paragraphs: [
        'The technical interview is the stage where preparation platforms traditionally leave students without structured support. Course videos and quiz banks prepare the student for the certification exam. The technical interview — with its unpredictable question sequencing, follow-up pressure, and regional language expectations — is a different skill that requires different preparation.',
        'The AI mock interview feature was built specifically for this gap. The system generates 375 practice questions across five specialisation tracks: CCNA, CCNP, Security, Automation, and Cloud. The questions are categorised by difficulty level and by the specific topic area they test. The student selects a track, the system presents questions, and the AI evaluates the response quality.',
        'The eight-language support is the design choice that reflects how technical interviews actually work in India. English is the expected language for multinational hiring — Cisco, HCL, Akamai — but regional language interviews are common at Indian system integrators, telecom operators, and government IT departments. Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, and Marathi coverage means the student can practice in the language the actual interview will use, not in a second language that adds cognitive load to an already pressured situation.',
        'The five-track design reflects the certifications that hiring managers actually ask about. A student preparing for a CCNP Enterprise role at a network integrator needs different interview preparation than a student preparing for a Security Operations analyst role. Track-specific question banks let the student concentrate preparation time on the specific domain they are interviewing for rather than spreading across the full catalogue.',
        'The 60 quiz categories that span the 1,668 questions add a third preparation layer alongside the mock interviews. The quiz bank is designed for spaced-repetition practice — the study method that research consistently shows produces more durable knowledge retention than massed review. The categories map to exam blueprint sections, so the student can target their practice at the specific blueprint areas where they are weakest rather than re-reviewing content they already know.',
      ],
    },
    {
      h2: 'The three learning modalities: 500+ hours of video, labs, and AI interviews',
      paragraphs: [
        'The pedagogical architecture of NHPrep is three modalities that address three different aspects of learning rather than three different content formats delivering the same content.',
        'Video instruction (500+ hours) addresses conceptual comprehension. The instructor delivers the "what and why" of each technology — the protocol mechanics, the design rationale, the failure modes, the real-world deployment patterns. This is the content that builds the mental model that makes everything else make sense.',
        'Hands-on labs (75+) address procedural competence. The student doesn\'t just know what OSPF does — they have configured OSPF in a live environment, debugged adjacency failures, verified routing table contents, confirmed traffic flow. The procedural memory built in the lab is the knowledge that survives under exam pressure and production incident pressure in a way that conceptual knowledge alone does not.',
        'AI mock interviews (375 questions × 5 tracks × 8 languages) address communicative fluency. The student doesn\'t just know the technology and can configure it — they can explain it clearly under pressure in the language the interviewer is using, answer follow-up questions, and recover when the first answer is challenged. This is the competence that exam scores don\'t measure and that employers actually test for.',
        'The three modalities are designed to work in parallel rather than in sequence. The optimal study pattern is not: complete all 500 hours of video, then do all 75 labs, then run all 375 mock interview questions. It is: watch the OSPF videos, do the OSPF labs, do the OSPF interview questions, then move to the next topic. The platform\'s course structure is designed around this parallel-modality rhythm.',
      ],
    },
    {
      h2: 'The AI for Network Engineers curriculum: what the industry is actually hiring for',
      paragraphs: [
        'The single most significant structural change in the network engineering job market over the last three years is the addition of AI fluency as a hard requirement in mid-senior-level job descriptions. The change is visible in the JD data: roles that listed "Python scripting desirable" in 2021 list "LLM API integration, AI-assisted network automation, AI SOC workflows" as requirements in 2026. The job market moved; most preparation platforms\' curricula have not.',
        'NHPrep\'s AI curriculum layer addresses this gap with three distinct courses rather than a single "AI basics" module appended to the existing catalogue.',
        'AI for Network Engineers is the foundational course. It starts from the premise that the student is a credentialed network engineer who has never worked with LLM APIs, prompt engineering, or AI application development. The course covers the tooling layer — OpenAI, Anthropic Claude, and the open-weight alternatives — at the level of practical integration rather than architectural theory. By the end of the course, the student has integrated an AI assistant into a network operations workflow and understands the practical constraints — latency, token cost, reliability — that govern production AI deployments.',
        'Network Automation with AI covers the implementation side. The intersection of network automation (Python, Ansible, Terraform, Napalm, Nornir) and AI (LLM-assisted configuration generation, AI-driven anomaly detection, automated remediation workflows) is where the highest-value network engineering work is happening in 2026. The course covers both sides of the intersection and the integration patterns that connect them.',
        'AI-Powered Network Security covers the SOC and threat-intelligence applications. SIEM correlation at LLM-augmented scale, AI-driven threat hunting, automated incident classification, and the specific tooling that enterprise security operations teams have deployed in the last eighteen months. This course is designed for the network security engineer making the transition to a SOC analyst role or a security architecture role where AI tooling literacy is the new baseline requirement.',
        'Together, the three courses position the graduate for the network engineering roles that are the best-compensated and most in-demand in the current market — roles that require the combination of infrastructure domain knowledge and AI tooling fluency that the traditional certification path does not develop.',
      ],
      pullQuote: 'The network engineering job market moved to AI. NHPrep\'s three AI courses — AI for Network Engineers, Automation with AI, AI-Powered Security — put the credential and the tooling fluency in the same curriculum.',
    },
    {
      h2: 'The pricing: ₹7,999 per year, or less than a restaurant meal per week',
      paragraphs: [
        'The ₹7,999/year price point is the most important single number on the NHPrep platform. It was set at 73% below the original ₹29,999 list price as the permanent launch pricing — not a temporary discount that expires at a countdown clock, but the price at which the platform is designed to operate.',
        'At ₹7,999/year the per-day cost is ₹22. For context: a coffee at a Bengaluru café costs ₹80–150. A single chapter of an authorised Cisco press study guide costs more than a month of NHPrep. A single session with a private certification tutor costs more than three months. The pricing is designed to remove "I can\'t afford structured preparation" as an excuse for any network engineering student anywhere in India with a smartphone and a data connection.',
        'The per-month equivalent is ₹666. This is the number relevant for students who are used to thinking in monthly education spend. At ₹666 per month, a student who is serious about CCNP certification over a twelve-month period is spending less on structured preparation than most students spend on commuting to a physical training centre.',
        'The ₹22,000 savings figure (₹29,999 minus ₹7,999) is real. The original list price reflects the actual cost of building and maintaining 157+ courses, 75+ lab exercises, and the AI mock interview system. The launch pricing makes that cost irrelevant to the access decision — the savings are larger than the total cost of most alternative preparation options the student would have compared against.',
      ],
    },
    {
      h2: 'Who NHPrep is built for: five profiles',
      paragraphs: [
        'The platform serves five distinct student profiles whose needs overlap enough for a single content catalogue to address all of them.',
        'The fresh engineering graduate entering the job market at CCNA level is the base-of-funnel student. They have the academic network theory foundation and need the certification credential plus the hands-on lab exposure that will make the credential credible in an interview. The 500-hour video catalogue and the 75+ labs are the core value. The AI mock interview system closes the gap between knowing the technology and being able to discuss it under pressure.',
        'The working IT support professional transitioning to networking is the most time-constrained student. They have a job, they study in the evenings and on weekends, and they need a curriculum that works in 45-minute sessions rather than full-day blocks. The modular course structure — each lesson covering one specific topic — is designed for this student. The 24/7 lab availability means they can complete a lab exercise at 10pm after dinner.',
        'The experienced network engineer pursuing CCNP or CCIE is the student with the technical foundation who needs structured deep-coverage content at the advanced level. They are not starting from zero; they need the advanced lab exercises, the CCIE-level topology content, and the breadth across vendor tracks. The platform\'s lab infrastructure is the competitive advantage for this student — the environments where CCIE-level routing scenarios run are the ones they cannot reproduce cheaply at home.',
        'The network security engineer pursuing Palo Alto, FortiGate, or CEH is the security-specialised student. This student may have the Cisco foundations and needs the security vendor certifications that are moving from "preferred" to "required" in enterprise security job descriptions. The integrated security content — Palo Alto labs inside the same platform as CCNP Security content — saves the student from managing multiple preparation platforms.',
        'The mid-career engineer needing AI and automation fluency is the student the new curriculum layer was built for. They have the certifications; the gap is the AI tooling layer that the current hiring market is adding as a requirement. The three AI courses plus the automation content give this student a structured path to the credentials that validate the AI fluency the market is asking for.',
      ],
    },
    {
      h2: 'The Networkers Home backing: 45,000 alumni and 19 years of teaching',
      paragraphs: [
        'NHPrep is operated by <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a>, the Bengaluru cybersecurity and networking training institute founded in 2007. Understanding the parent brand is important for understanding what NHPrep is and is not.',
        'Networkers Home was founded by Vikas Swami, who holds a Dual CCIE (#22239). Dual CCIE designations — requiring the lab exam pass in two separate Cisco technology tracks — are held by fewer than a thousand engineers globally at any given time. The technical bar the founder clears is the bar the curriculum is held to. The platform is not a repackaging of third-party content; it is a digital version of the curriculum a dual CCIE has been teaching in person for nineteen years.',
        'The 45,000+ alumni figure is the external validation that the teaching works. Alumni placed at Cisco, HCL, Akamai, Barracuda, Aryaka, Movate, and 800+ other hiring partners represent nineteen years of career outcomes data. The hiring partner relationship is not a marketing claim; it is an active placement pipeline where employers request candidates from Networkers Home\'s current graduates.',
        'The 4.7-star Google rating across 1,173 reviews and the 4.5-star JustDial rating across 1,345 reviews are the largest public quality signals available for Indian IT training institutes. The volume of reviews — more than 2,500 across two platforms — makes the ratings robust against individual outliers. A 4.7-star rating at 1,173 reviews is a different signal than a 4.7-star rating at 40 reviews.',
        'The 171,000 YouTube subscribers represent the free content layer that students and practitioners engage with before and after certification. The YouTube content is the top-of-funnel for the NHPrep subscriber; it is also the ongoing professional development resource for engineers who have completed their certifications and want to stay current on technology changes.',
        'NHPrep\'s relationship to Networkers Home is the digitisation of nineteen years of in-person teaching expertise into a platform that can reach students who cannot attend in-person in Bengaluru. The 24/7 availability and the cloud delivery model eliminate the geographic constraint. The content quality and the lab infrastructure reflect the parent institute\'s production standard rather than a minimum-viable digital version of it.',
      ],
    },
    {
      h2: 'How NHPrep fits in the Ollasoftware portfolio',
      paragraphs: [
        'NHPrep is part of the broader portfolio managed by <a href="https://ollasoftware.com/">Ollasoftware</a>, the Bengaluru AI software development company. The portfolio context is relevant because it explains the technical infrastructure behind the platform\'s AI features.',
        'The AI mock interview system, the course recommendation engine, and the AI-augmented quiz bank draw on the same AI application development capabilities that Ollasoftware ships in its client projects. The infrastructure brands in the portfolio — <a href="https://ollasoftware.com/blog/crawlcrawl/">Crawlcrawl</a> for AI-scale web data, <a href="https://ollasoftware.com/blog/aeoniti/">Aeoniti</a> for AEO content strategy — represent the AI development expertise that is applied to the NHPrep product surface. The full story of the parent training institute is covered at <a href="https://ollasoftware.com/blog/networkershome/">Networkers Home</a>.',
        'For the student choosing a certification platform, the Ollasoftware backing means the AI features are built by engineers who build AI products professionally rather than appended by a traditional training company as a marketing feature. The AI mock interview system was designed by the same team that ships AI applications commercially; the feature quality reflects commercial AI product standards rather than a proof-of-concept. Once you have your certifications, <a href="https://ollasoftware.com/blog/freefreecv/">FreeFreeCV</a> — the free AI resume builder from the same group — helps you clear the ATS filters that gate most enterprise hiring pipelines.',
      ],
    },
    {
      h2: 'How to start: one step, ₹7,999',
      paragraphs: [
        'The preparation decision for network engineering certification is usually deferred, not rejected. The student knows they need the CCNA. They know CCNP follows. They know the job market increasingly requires Palo Alto or FortiGate credentials alongside the Cisco ones. The deferral is usually one of two things: uncertainty about which platform to commit to, or price hesitation.',
        'NHPrep addresses both directly. On platform selection: the 60-quiz-category bank and the sample lab exercises are accessible on the platform before purchase, and the Networkers Home YouTube channel (171,000 subscribers) provides a large sample of the teaching style and content quality. On price: ₹7,999/year is the decision that is permanent, not a trial that auto-upgrades to a higher price at expiry.',
        'The practical starting sequence for a fresh student: enrol at <a href="https://nhprep.com/">nhprep.com</a>, set a 90-day target for CCNA, map the video curriculum to a weekly schedule (500 hours / 12 weeks = roughly 6 hours per day for 5 days per week, or 3 hours per day for a 20-week pace), complete one lab exercise per video module, and run the CCNA AI mock interview weekly to identify gaps. Adjust for CCNP at month four.',
        'For the experienced engineer adding AI credentials: enrol, start with Network Automation with AI, complete the Python-Ansible-Terraform sequence in weeks one and two, then move to AI for Network Engineers for the LLM integration content, then AI-Powered Network Security for the SOC automation layer. The 500+ hours of foundational video is available if any gaps in the prerequisite knowledge surface; the labs apply immediately to the automation content.',
        'The <a href="https://www.networkershome.com/" rel="noopener">Networkers Home</a> contact team is reachable for guidance on curriculum selection, lab access questions, and career pathway questions for students choosing between specialisation tracks.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is NHPrep?',
      a: "NHPrep is India's #1 network engineering certification preparation platform at ₹7,999/year (₹22/day). A single subscription covers 157+ courses, 1,519+ lessons, 75+ hands-on labs, 1,668 quiz questions, and AI mock interviews across CCNA, CCNP, CCIE, Palo Alto, FortiGate, CEH, AWS, Azure, and AI for Network Engineers. Operated by Networkers Home, founded 2007 by Dual CCIE #22239.",
    },
    {
      q: 'Which certifications does NHPrep cover?',
      a: 'Cisco: CCNA, CCNP (Enterprise, Security, Data Center, Wireless, Service Provider), CCIE (written + lab content). Security: Palo Alto PCNSA/PCNSE, FortiGate NSE 4/NSE 5, CEH. Cloud: AWS Solutions Architect, Azure Administrator. AI: AI for Network Engineers, Network Automation with AI, AI-Powered Network Security. All in one subscription.',
    },
    {
      q: 'What does "hands-on lab" mean on NHPrep?',
      a: '75+ structured lab exercises in live network environments — not Packet Tracer simulations or GNS3 emulations with known divergences. Real protocol-level environments where packet behaviour matches the exam and production hardware. Available 24/7 with no session time limits. Covers OSPF, BGP, EIGRP, STP, VLANs, route redistribution, QoS, Palo Alto security policy, FortiGate HA, AWS VPC networking, and more.',
    },
    {
      q: 'How does the AI mock interview work?',
      a: '375 practice questions across five tracks (CCNA, CCNP, Security, Automation, Cloud) in eight languages (Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, English). Select a track, answer questions, AI evaluates response quality and identifies knowledge gaps. Designed for the specific pressure of technical interviews rather than the structured recall of certification exams.',
    },
    {
      q: 'What is the pricing?',
      a: '₹7,999/year — 73% below the ₹29,999 list price. Equivalent to ₹666/month or ₹22/day. No separate fees per certification track; one subscription covers the full 157+ course catalogue. The savings vs. list price (₹22,000) are larger than the total cost of most alternative preparation options.',
    },
    {
      q: 'Who is behind NHPrep?',
      a: 'Networkers Home, the Bengaluru networking and cybersecurity training institute founded in 2007 by Vikas Swami (Dual CCIE #22239). 45,000+ alumni placed at 800+ hiring partners including Cisco, HCL, Akamai, Barracuda, Aryaka. 4.7★ Google (1,173 reviews), 4.5★ JustDial (1,345 reviews), 171K YouTube subscribers. NHPrep is the digital version of nineteen years of in-person teaching expertise.',
    },
    {
      q: 'Is NHPrep right for experienced engineers, or only beginners?',
      a: 'Both. Fresh engineering graduates use the CCNA curriculum + labs + AI mock interviews as the entry point. Working professionals use the modular structure (lessons designed for 45-minute sessions) and 24/7 lab availability. Experienced engineers preparing for CCNP or CCIE use the advanced lab topology content. Mid-career engineers needing AI and automation credentials use the three AI curriculum courses.',
    },
    {
      q: 'What AI courses are included?',
      a: "Three dedicated AI courses: (1) AI for Network Engineers — LLM API integration and AI application tooling for engineers with no prior AI background. (2) Network Automation with AI — Python, Ansible, Terraform, and AI-augmented operations workflows. (3) AI-Powered Network Security — SIEM automation, AI threat hunting, SOC workflows. These are the certifications the current hiring market is adding as requirements alongside traditional Cisco credentials.",
    },
  ],
};
