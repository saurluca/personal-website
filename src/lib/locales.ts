export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(en|de)(?=\/|$)/, '') || '/';
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return normalized === '/' ? '/de' : `/de${normalized}`;
}
