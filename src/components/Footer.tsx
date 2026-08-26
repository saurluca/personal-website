'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { localizedPath, t, type Locale } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const homePath = localizedPath(locale, '/');
  const impressumPath = localizedPath(locale, '/impressum');
  const datenschutzPath = localizedPath(locale, '/datenschutz');
  const isHome = pathname === '/' || pathname === '/de';

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      router.push(homePath);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">{t(locale, 'footer.copyright')}</p>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4">
              {['about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm text-text-secondary hover:text-text transition-colors"
                >
                  {t(locale, `nav.${section}`)}
                </button>
              ))}
            </div>
            <Link
              href={impressumPath}
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {t(locale, 'footer.impressum')}
            </Link>
            <Link
              href={datenschutzPath}
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {t(locale, 'footer.privacy')}
            </Link>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
};
