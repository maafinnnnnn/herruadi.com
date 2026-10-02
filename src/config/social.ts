// Single source of truth for social profile URLs. Used by the footer,
// the about page, and structured data (Person.sameAs).
export interface SocialLink {
  name: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/herruadivian' },
  { name: 'Dribbble', url: 'https://dribbble.com/herruadi' },
  { name: 'Medium', url: 'https://medium.com/@herruadi' },
  { name: 'X', url: 'https://x.com/herruadiiii' },
  { name: 'Instagram', url: 'https://www.instagram.com/herruadiiii' },
  { name: 'Threads', url: 'https://www.threads.com/@herruadiiii' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@herruadiiii' },
];

// Flat list of URLs, ready to drop into a Person schema's `sameAs`.
export const sameAs = socialLinks.map((link) => link.url);
