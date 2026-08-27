// SEO + AEO helpers: JSON-LD builders for Organization, ProfessionalService,
// Service, BreadcrumbList, and FAQPage schemas. Every page injects at least
// Organization + WebSite. Service pages add Service + FAQPage. All pages add
// BreadcrumbList. Schema validators: Google Rich Results Test, Schema.org.

import { clients } from './clients';

export const SITE = 'https://ollasoftware.com';

// Canonical org block — reused by every JSON-LD that needs to reference the
// publishing organization. Includes geo-targeting for India / Bangalore.
export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE}#organization`,
  name: 'Ollasoftware',
  alternateName: ['Ollasoftware Inc', 'Olla Software'],
  url: SITE,
  logo: `${SITE}/android-chrome-512x512.png`,
  image: `${SITE}/og-image.png`,
  description: 'Pioneer AI software development company in India. Headquartered in Bangalore. Owners of 40+ AI brands in production. We build custom AI, software, AEO/SEO, social and performance marketing for clients worldwide.',
  slogan: 'Pioneer AI software development. Bangalore-headquartered. Built and shipped 40+ AI brands.',
  foundingDate: '2021',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 18, unitText: 'core senior team' },
  // Parent organization — surfaces the Networkers Home Group relationship to
  // search engines + AI engines. Matches the visual ParentBanner on every page.
  // Founded 2007; 45,000+ alumni placed; HSR Layout, Bengaluru. The @id is
  // stable so future references to the same parent dedupe to one entity.
  parentOrganization: {
    '@type': ['Organization', 'EducationalOrganization'],
    '@id': 'https://www.networkershome.com/#organization',
    name: 'Networkers Home',
    url: 'https://www.networkershome.com/',
    foundingDate: '2007',
    description: 'Networking and cybersecurity training institute headquartered in HSR Layout, Bengaluru. 45,000+ alumni placed across 800+ hiring partners.',
    sameAs: ['https://www.networkershome.com/vikas-swami/'],
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Singapore' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Place', name: 'Worldwide' },
  ],
  knowsAbout: [
    'AI Software Development',
    'Custom AI Agents',
    'Retrieval Augmented Generation (RAG)',
    'LLM Application Development',
    'Answer Engine Optimization (AEO)',
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Performance Marketing',
    'Software Engineering',
    'TypeScript',
    'Rust',
    'Go',
    'Postgres',
    'Cloudflare Workers',
    'Astro',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'L-149, Sector 6, HSR Layout',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560102',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '68 Jay St, Suite 414',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      postalCode: '11201',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'R. da Bica de Duarte Belo 42',
      addressLocality: 'Lisboa',
      postalCode: '1200-053',
      addressCountry: 'PT',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9116,
    longitude: 77.6473,
  },
  telephone: '+91-9611027980',
  email: 'info@ollasoftware.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
      validFrom: '2026-01-01',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+91-9611027980',
      email: 'info@ollasoftware.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi', 'Portuguese'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'ContactPoint',
      contactType: 'security',
      email: 'security@ollasoftware.com',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'press',
      email: 'press@ollasoftware.com',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    bestRating: '5',
    worstRating: '1',
    ratingCount: 1173,
    reviewCount: 1173,
  },
  sameAs: [
    'https://github.com/ollasoftware',
    'https://linkedin.com/company/ollasoftware',
    'https://twitter.com/ollasoftware',
  ],
  // Subsidiary / owned-brand link graph — surfaces our full portfolio
  // (currently 49 brands, reconciled 2026-06-23 against live CF zones) to
  // the knowledge-graph layer of search and AI engines. No slice: every
  // brand is part of the entity graph so engines can dedupe references.
  subOrganization: clients.map(c => ({
    '@type': 'Organization',
    name: c.name,
    url: `https://${c.domain}`,
    description: c.blurb,
  })),
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}#website`,
  url: SITE,
  name: 'Ollasoftware',
  publisher: { '@id': `${SITE}#organization` },
  inLanguage: 'en',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

// Builder: service-page Service schema. Provider = our org. AreaServed = India
// + Worldwide. Has its own URL + service type.
export function serviceLd(args: {
  slug: string;
  name: string;
  description: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/services/${args.slug}/#service`,
    name: args.name,
    serviceType: args.serviceType,
    description: args.description,
    provider: { '@id': `${SITE}#organization` },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    url: `${SITE}/services/${args.slug}/`,
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Enterprise, Series A–D startups, mid-market',
    },
  };
}

// Builder: breadcrumb schema for any page with a crumb trail.
export function breadcrumbLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// Builder: FAQ schema for a service page (or any page with a Q&A section).
export function faqLd(items: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

// Helper: render a JSON-LD object as a <script> string. Use with set:html.
export function ldScript(obj: unknown): string {
  return `<script type="application/ld+json">${JSON.stringify(obj)
    .replace(/</g, '\\u003c')}</script>`;
}

// Builder: Article schema for a long-form listicle. Page-level entity that
// powers Google's Article-rich-result eligibility. Stable @id is essential
// for entity linking across the page's JSON-LD blocks.
export function articleLd(args: {
  slug: string;             // page slug under /top-10/
  headline: string;
  description: string;
  datePublished: string;    // ISO date
  dateModified: string;     // ISO date
  authorName?: string;      // defaults to org
}) {
  const url = `${SITE}/top-10/${args.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: args.headline,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.dateModified,
    inLanguage: 'en-IN',
    author: {
      '@type': 'Organization',
      '@id': `${SITE}#organization`,
      name: args.authorName ?? 'Ollasoftware',
    },
    publisher: { '@id': `${SITE}#organization` },
    image: `${SITE}/og-image.png`,
    isAccessibleForFree: true,
  };
}

// Builder: ItemList schema for the 10-company ranking. Google uses ItemList
// to render carousel-style SERPs for "best X" queries. itemListOrder must be
// 'Descending' for ranked lists (lower position = higher rank).
export function itemListLd(args: {
  slug: string;
  name: string;
  items: Array<{ position: number; name: string; url: string; summary: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE}/top-10/${args.slug}/#itemlist`,
    name: args.name,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: args.items.length,
    itemListElement: args.items.map(it => ({
      '@type': 'ListItem',
      position: it.position,
      name: it.name,
      url: it.url,
      description: it.summary,
    })),
  };
}
