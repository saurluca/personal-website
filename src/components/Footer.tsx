'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CAL_URL, copy } from '@/content/copy';

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  const scrollToProcess = () => {
    if (!isHome) {
      router.push('/#process');
      return;
    }

    const element = document.getElementById('process');
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
          <p className="text-sm text-text-secondary">{copy.footer.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={scrollToProcess}
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {copy.footer.process}
            </button>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {copy.footer.book}
            </a>
            <Link
              href="/impressum"
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {copy.footer.impressum}
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              {copy.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
