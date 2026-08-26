'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedPath, stripLocale, type Locale } from '@/lib/locales';

export const LanguageSwitcher = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const nextLocale: Locale = locale === 'en' ? 'de' : 'en';
  const href = localizedPath(nextLocale, stripLocale(pathname));

  return (
    <Link
      href={href}
      className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text transition-colors border border-border rounded-md hover:border-primary/30"
      aria-label="Switch language"
    >
      {locale === 'en' ? 'DE' : 'EN'}
    </Link>
  );
};
