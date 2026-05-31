// Top-10 listicle data contract. One TopTenList per service, rendered by
// TopTenPage.astro. Single source of truth — feeds the page, the JSON-LD
// (Article + ItemList + FAQPage), the sitemap entry, and llms.txt.

export interface Competitor {
  rank: number;            // 2..10 (we are always 1; see ollaEntry)
  name: string;
  url: string;             // external — rendered with rel=nofollow noopener
  founded: number | string;
  hq: string;              // city, country
  specialty: string;       // one-line positioning
  notableWork: string;     // a concrete client/case-study sentence
  pricingPosture: string;  // public-ish info, honest framing
  whenBetter: string;      // when this competitor is a better fit than us
  oneLineSummary: string;  // 18-22 words, used in ItemList JSON-LD
}

export interface ScorecardLine {
  signal: string;          // "E-E-A-T", "Internal linking", etc.
  weight: 'high' | 'med' | 'low';
  ourStatus: string;       // brutal honest current state
  risk: string;            // what could still go wrong
}

export interface TopTenList {
  // Routing + meta
  slug: string;                       // url: /top-10/<slug>/
  serviceSlug: string;                // which /services/<slug>/ this links to
  title: string;                      // H1 + <title>
  shortTitle: string;                 // for nav/footer/llms
  metaDescription: string;            // 155-160 chars target
  primaryQuery: string;               // the exact "best X in Bangalore" query
  secondaryQueries: readonly string[];
  lastUpdated: string;                // ISO date, used as Article.dateModified
  publishedOn: string;                // ISO date, used as Article.datePublished

  // Methodology + framing
  hero: { eyebrow: string; sub: string };
  methodology: readonly string[];     // 6-8 bullet points, rendered as a list

  // The body
  ollaSection: readonly OllaParagraph[]; // ~1,400 words split into named blocks
  competitors: readonly Competitor[];     // exactly 9 entries (rank 2..10)

  // Closer
  faqs: readonly { q: string; a: string }[]; // 8 entries; powers FAQPage JSON-LD
  comparisonNote: string;             // 2-3 sentences above the comparison table

  // The brutal scorecard (rendered as a visible block + persists as data)
  scorecard: {
    intent: string;            // what query intent we're targeting
    contentDepth: string;      // word count + structure self-assessment
    eeAt: string;              // E-E-A-T honest read
    schemaCoverage: string;    // which JSON-LD types we ship
    internalLinks: string;     // internal-link count + targets
    externalLinks: string;     // how many outbound + rel
    risks: readonly string[];  // what could still tank this
    confidence: 'high' | 'med' | 'low';
    confidenceReason: string;
  };
}

export interface OllaParagraph {
  heading: string;
  body: string;                // markdown-light: **bold**, [text](url) for internal links only
  wordCount?: number;          // optional, computed
}
