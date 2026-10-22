import type { HireContent, HirePackage } from './types';

/** wa.me link with the message URL-encoded. */
export function waUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`);
}

export function packagePrice(content: HireContent, pkg: HirePackage): string {
  return `${pkg.priceLabel}${content.ui.perMonth}`;
}

export function packageWaLink(content: HireContent, pkg: HirePackage): string {
  const message = fill(content.wa.package, {
    name: pkg.name,
    price: packagePrice(content, pkg),
  });
  return waUrl(content.contact.whatsappNumber, message);
}

export function waLink(content: HireContent, kind: 'freelance' | 'custom' | 'general'): string {
  return waUrl(content.contact.whatsappNumber, content.wa[kind]);
}
