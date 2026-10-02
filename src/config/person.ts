import { sameAs } from './social';

// Core Person node, reused as the standalone Person schema (homepage,
// about page) and embedded as author/creator in BlogPosting and
// CreativeWork schemas. Deliberately has no `@context` of its own —
// that's only added where it's rendered as a top-level schema.
export const personSchema = {
  '@type': 'Person',
  name: 'Herru Adi',
  alternateName: 'Herru Adivian',
  url: 'https://herruadi.com',
  jobTitle: 'Senior Product Designer & Strategic Design Partner',
  description:
    'Strategic design partner. End-to-end product design, from problem framing to shipped UI.',
  knowsAbout: ['Design Strategy', 'Service Design', 'Product Design', 'UX Research', 'Design Systems'],
  sameAs,
};
