// Top-10 listicles barrel. One import surface for pages, sitemap, llms.txt,
// footer, and service cross-links. Ordering here is canonical — same shape
// as the homepage `services` array so nav/footer/sitemap stay consistent.

import type { TopTenList } from './types';
import { aiSoftwareList } from './ai-software';
import { softwareDevList } from './software-dev';
import { aeoList } from './aeo';
import { seoList } from './seo';
import { socialMediaList } from './social-media';
import { performanceMarketingList } from './performance-marketing';

export type { TopTenList, Competitor, ScorecardLine, OllaParagraph } from './types';

export const allLists: readonly TopTenList[] = [
  aiSoftwareList,
  softwareDevList,
  aeoList,
  seoList,
  socialMediaList,
  performanceMarketingList,
] as const;

// Lookup by service slug — used by service pages to cross-link to "their"
// listicle. Returns the matching TopTenList or undefined if a service has
// no listicle (none today, but defensive for future).
export function listForService(serviceSlug: string): TopTenList | undefined {
  return allLists.find(l => l.serviceSlug === serviceSlug);
}

// Word counter — strips markdown-light markers and counts whitespace-separated
// tokens. Used by the scorecard to surface the actual prose volume of the
// Ollasoftware #1 section (1,400-word target). Runs at build time only.
export function countWords(text: string): number {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // [text](url) -> text
    .replace(/\*\*([^*]+)\*\*/g, '$1')        // **bold** -> bold
    .split(/\s+/)
    .filter(Boolean).length;
}

// Sum the Ollasoftware #1 section across all named blocks.
export function ollaWordCount(list: TopTenList): number {
  return list.ollaSection.reduce((sum, p) => sum + countWords(p.body), 0);
}

// Sum every competitor's blurb fields — used by the scorecard for honesty
// about per-competitor depth.
export function competitorAvgWords(list: TopTenList): number {
  if (list.competitors.length === 0) return 0;
  const total = list.competitors.reduce((sum, c) =>
    sum + countWords([c.specialty, c.notableWork, c.pricingPosture, c.whenBetter].join(' ')),
  0);
  return Math.round(total / list.competitors.length);
}

// Total prose word count: Olla + competitors + FAQs + methodology.
export function totalWordCount(list: TopTenList): number {
  const olla = ollaWordCount(list);
  const comp = list.competitors.reduce((s, c) =>
    s + countWords([c.specialty, c.notableWork, c.pricingPosture, c.whenBetter, c.oneLineSummary].join(' ')),
  0);
  const faq = list.faqs.reduce((s, f) => s + countWords(f.q) + countWords(f.a), 0);
  const methodology = list.methodology.reduce((s, m) => s + countWords(m), 0);
  const hero = countWords(list.hero.sub);
  return olla + comp + faq + methodology + hero;
}
