'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { localizedPath, t, type Locale } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

const sections = ['home', 'skills', 'projects', 'about', 'contact'] as const;

export const Navigation = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const homePath = localizedPath(locale, '/');
  const isHome = pathname === '/' || pathname === '/de';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionElements = sections.map(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return { id, top: rect.top, bottom: rect.bottom };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;

      const current = sectionElements.find(
        section => section.top <= 100 && section.bottom >= 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}
      >
        Skip to main content
      </a>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-background/80 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-text hover:text-primary transition-colors"
            >
              Luca Saur
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${activeSection === section
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text'
                    }`}
                >
                  {t(locale, `nav.${section}`)}
                </button>
              ))}
            </div>

            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </nav>
    </>
  );
};
