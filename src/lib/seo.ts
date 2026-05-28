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
  logo: `${SITE}/favicon.svg`,
  image: `${SITE}/favicon.svg`,
  description: 'Pioneer AI software development company in India. Headquartered in Bangalore. Owners of 40+ AI brands in production. We build custom AI, software, AEO/SEO, social and performance marketing for clients worldwide.',
  slogan: 'Pioneer AI software development. Bangalore-headquartered. Built and shipped 40+ AI brands.',
  foundingDate: '2021',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 18 },
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
      streetAddress: '12th Main, Indiranagar',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560038',
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
    latitude: 12.9716,
    longitude: 77.5946,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hi@ollasoftware.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi', 'Portuguese'],
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
  sameAs: [
    'https://github.com/ollasoftware',
    'https://linkedin.com/company/ollasoftware',
    'https://twitter.com/ollasoftware',
  ],
  // Subsidiary / owned-brand link graph — surfaces our 40+ AI brands to the
  // knowledge-graph layer of search and AI engines.
  subOrganization: clients.slice(0, 24).map(c => ({
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
