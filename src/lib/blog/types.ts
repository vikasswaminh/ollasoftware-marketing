// Brand-blog data shape. Every olla brand we write a long-form piece on
// gets one file under src/lib/blog/<slug>.ts that conforms to this type.
// The blog post page reads these directly — no MDX, no CMS.

import type { ClientCategory } from '../clients';

export type BlogSubsection = {
  h3: string;
  paragraphs: string[];
};

export type BlogSection = {
  h2: string;
  paragraphs: string[];
  subsections?: BlogSubsection[];
  pullQuote?: string;
};

export type BlogFAQ = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;             // url slug, e.g. 'ollima'
  brand: string;            // display brand, e.g. 'Ollima'
  brandDomain: string;      // canonical brand domain, e.g. 'ollima.com'
  brandTagline: string;     // one-liner pulled from the brand homepage
  category: ClientCategory;
  title: string;            // <title>
  metaDescription: string;  // <meta name=description>
  heroEyebrow: string;
  heroH1: string;
  heroSub: string;
  publishedOn: string;      // ISO date
  lastUpdated: string;      // ISO date
  readingTimeMin: number;
  wordCount: number;        // approximate, for transparency
  tldr: string[];           // 4-6 bullets
  sections: BlogSection[];
  faqs: BlogFAQ[];
};
