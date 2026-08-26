'use client';

import Image from 'next/image';
import { t, type Locale } from '@/lib/i18n';

export const Hero = ({ locale }: { locale: Locale }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="home" className="min-h-screen flex items-center pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight">
              {t(locale, 'hero.title')}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
              {t(locale, 'hero.subtitle')}
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {t(locale, 'hero.description')}
            </p>
            <button
              onClick={scrollToContact}
              aria-label={t(locale, 'hero.cta')}
              className="px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              {t(locale, 'hero.cta')}
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/me.jpeg"
              alt="Luca Saur - AI Solutions & Web Development Expert"
              width={500}
              height={625}
              priority
              className="w-full max-w-lg h-[500px] object-cover rounded-lg"
              style={{ aspectRatio: '4/5', width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center 35%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
