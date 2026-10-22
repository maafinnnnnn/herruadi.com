import type { ImageMetadata } from 'astro';

// Shape of the /hire landing page content. The Indonesian page (id.ts)
// fills it in; /hire/global can ship an `en.ts` with the same shape and
// reuse every component untouched.

export interface HirePackage {
  id: string;
  name: string;
  /** Display price without unit, e.g. "Rp 10 jt". */
  priceLabel: string;
  /** Numeric floor in the page currency, used by JSON-LD. */
  priceFrom: number;
  currency: string;
  hours: string;
  forWhom: string;
  includes: string[];
  popular?: boolean;
}

export interface HireCompareRow {
  label: string;
  /** One value per package, same order as `pricing.packages`. */
  values: string[];
}

export interface HireVersusRow {
  label: string;
  outsourcing: string;
  direct: string;
}

export interface HireFaqItem {
  question: string;
  answer: string;
}

export interface HirePortfolioWork {
  kind: 'work';
  /** Content-collection id under src/content/work. */
  id: string;
  descriptor: string;
  ctaId: string;
}

export interface HirePortfolioExternal {
  kind: 'external';
  title: string;
  descriptor: string;
  href: string;
  ctaId: string;
  thumb: ImageMetadata;
  thumbAlt: string;
}

export interface HireExperience {
  name: string;
  meta: string;
  body: string;
}

export interface HireDisplay {
  lines: [string, string];
  /** Width of the longer line in em at the display weight/width. Fallback for the
   *  runtime fit (the script re-measures once fonts load), so edit it if you change the text. */
  fit: number;
}

export interface HireContent {
  lang: string;
  /** Open Graph locale, e.g. id_ID. */
  ogLocale: string;
  roleLabel: string;
  meta: { title: string; description: string };
  og: {
    /** Two lines; the second gets the highlight block. */
    title: [string, string];
    subtitle: string;
    domain: string;
  };

  contact: { email: string; whatsappNumber: string; location: string };

  /** WhatsApp message templates. Tokens: {name}, {price}. */
  wa: {
    package: string;
    freelance: string;
    custom: string;
    general: string;
  };

  ui: {
    newTab: string;
    popular: string;
    from: string;
    perMonth: string;
    includes: string;
    choosePackage: string;
    whatsapp: string;
    compareShow: string;
    compareHide: string;
    stickyWhatsapp: string;
    email: string;
  };

  hero: {
    eyebrow: string;
    word: string;
    headline: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    proof: string;
    modelNote: string;
    keywords: string[];
    /** Big decorative type above the H1. Two lines; the second gets the
     *  homepage highlight (.rr-hl): accent block, dark text. */
    display: HireDisplay;
  };

  audience: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: { title: string; body: string }[];
    photoAlt: string;
    captionName: string;
    captionRole: string;
  };

  pricing: {
    eyebrow: string;
    title: string;
    lead?: string;
    packages: HirePackage[];
    commonTitle: string;
    common: string[];
    freelance: { title: string; body: string; cta: string };
    custom: { title: string; body: string; cta: string };
    notes: string[];
  };

  compare: {
    title: string;
    rows: HireCompareRow[];
  };

  versus: {
    eyebrow: string;
    title: string;
    lead?: string;
    outsourcingHeading: string;
    directHeading: string;
    rows: HireVersusRow[];
    cta: string;
  };

  proof: {
    eyebrow: string;
    title: string;
    lead: string;
    stats: { value: string; label: string }[];
    portfolioTitle: string;
    portfolio: (HirePortfolioWork | HirePortfolioExternal)[];
    experienceTitle: string;
    experience: HireExperience[];
    cta: string;
  };

  process: {
    eyebrow: string;
    title: string;
    lead?: string;
    steps: { title: string; body: string }[];
  };

  faq: {
    eyebrow: string;
    title: string;
    items: HireFaqItem[];
    cardTitle: string;
    cardBody: string;
    cardCta: string;
  };

  closing: {
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
}
