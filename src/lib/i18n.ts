import translations from '@/content/translations';
import { type Locale } from '@/lib/locales';

export { locales, defaultLocale, isLocale, stripLocale, localizedPath } from '@/lib/locales';
export type { Locale } from '@/lib/locales';

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale] ?? translations.en;

  for (const k of keys) {
    if (typeof value !== 'object' || value === null || !(k in value)) {
      value = translations.en;
      for (const k2 of keys) {
        if (typeof value !== 'object' || value === null || !(k2 in value)) {
          return key;
        }
        value = (value as Record<string, unknown>)[k2];
      }
      break;
    }
    value = (value as Record<string, unknown>)[k];
  }

  return typeof value === 'string' ? value : key;
}
