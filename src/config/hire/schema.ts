import { personSchema } from '../person';
import type { HireContent } from './types';

const PERSON_ID = 'https://herruadi.com/#person';

// Person node scoped to /hire: same identity as everywhere else, with the
// role label and city this page is about.
export function hirePerson(content: HireContent) {
  return {
    ...personSchema,
    '@id': PERSON_ID,
    jobTitle: content.roleLabel,
    address: {
      '@type': 'PostalAddress',
      addressLocality: content.contact.location,
      addressCountry: 'ID',
    },
  };
}

export function hireService(content: HireContent, pageUrl: string) {
  return {
    '@type': 'Service',
    name: content.meta.title,
    serviceType: 'Dedicated product design (UI/UX)',
    description: content.meta.description,
    url: pageUrl,
    inLanguage: content.lang,
    provider: { '@id': PERSON_ID },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: content.pricing.title,
      itemListElement: content.pricing.packages.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        description: `${pkg.hours}. ${pkg.forWhom}`,
        priceCurrency: pkg.currency,
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: pkg.priceFrom,
          priceCurrency: pkg.currency,
          unitText: 'MON',
        },
        url: pageUrl,
      })),
    },
  };
}

// Built from the same array the accordion renders, so the markup and the
// structured data can never drift apart.
export function hireFaqPage(content: HireContent) {
  return {
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function hireSchemas(content: HireContent, pageUrl: string) {
  return [
    { '@context': 'https://schema.org', ...hirePerson(content) },
    { '@context': 'https://schema.org', ...hireService(content, pageUrl) },
    { '@context': 'https://schema.org', ...hireFaqPage(content) },
  ];
}
