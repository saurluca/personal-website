import type { Metadata } from 'next';
import { defaultLocale, localizedPath, type Locale } from '@/lib/locales';

export const siteUrl = 'https://lucasaur.com';

export type SeoPage = 'home' | 'impressum' | 'datenschutz';

const titles: Record<SeoPage, Record<Locale, string>> = {
  home: {
    en: 'Luca Saur - AI Solutions & Web Development | Automate Your Business',
    de: 'Luca Saur - KI Lösungen & Webentwicklung | Automatisierung für Ihr Unternehmen',
  },
  impressum: {
    en: 'Impressum | Luca Saur',
    de: 'Impressum | Luca Saur',
  },
  datenschutz: {
    en: 'Privacy Policy | Luca Saur',
    de: 'Datenschutzerklärung | Luca Saur',
  },
};

const descriptions: Record<SeoPage, Record<Locale, string>> = {
  home: {
    en: 'I automate your routine tasks through intelligent AI software and create professional websites. More time for your core business.',
    de: 'Ich automatisiere Ihre Routineaufgaben durch intelligente KI-Software und erstelle professionelle Websites. Mehr Zeit für Ihr Kerngeschäft.',
  },
  impressum: {
    en: 'Legal notice (Impressum) pursuant to § 5 DDG.',
    de: 'Impressum und rechtliche Angaben gemäß § 5 DDG.',
  },
  datenschutz: {
    en: 'Informationen zum Datenschutz gemäß DSGVO und TDDDG für die Website von Luca Saur.',
    de: 'Informationen zum Datenschutz gemäß DSGVO und TDDDG für die Website von Luca Saur.',
  },
};

const pagePaths: Record<SeoPage, string> = {
  home: '/',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
};

export function pageMetadata(locale: Locale, page: SeoPage): Metadata {
  const title = titles[page][locale];
  const description = descriptions[page][locale];
  const path = localizedPath(locale, pagePaths[page]);
  const canonical = `${siteUrl}${path === '/' ? '/' : path}`;
  const enUrl = `${siteUrl}${localizedPath('en', pagePaths[page])}`;
  const deUrl = `${siteUrl}${localizedPath('de', pagePaths[page])}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        de: deUrl,
        'x-default': `${siteUrl}${localizedPath(defaultLocale, pagePaths[page])}`,
      },
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? ['en_US'] : ['de_DE'],
      images: [
        {
          url: '/me.jpeg',
          width: 1200,
          height: 630,
          alt: 'Luca Saur',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/me.jpeg'],
    },
  };
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luca Saur',
  url: siteUrl,
  image: `${siteUrl}/me.jpeg`,
  jobTitle: 'Software Developer',
  description:
    'I automate routine tasks through intelligent AI software and create professional websites. Specialized in AI solutions, chatbots, sales forecasting, and modern web development.',
  email: 'mail@lucasaur.com',
  sameAs: ['https://github.com/saurluca', 'https://linkedin.com/in/lucasaur'],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Full-Stack Development',
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'DevOps',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University of Osnabrück',
    sameAs: 'https://www.uni-osnabrueck.de/',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Databites',
    url: 'https://databites.de',
  },
  offers: {
    '@type': 'Service',
    serviceType: 'AI Solutions & Web Development',
    description:
      'Custom AI solutions, intelligent chatbots, sales forecasting, and professional website development',
    areaServed: 'Germany, Switzerland',
  },
};

export const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Luca Saur - AI Solutions & Web Development',
  description:
    'Custom AI solutions and professional websites. Automate routine tasks, intelligent chatbots, sales forecasting, and modern web development.',
  url: siteUrl,
  serviceType: ['AI Solutions', 'Web Development', 'Business Automation'],
  areaServed: {
    '@type': 'Country',
    name: ['Germany', 'Switzerland'],
  },
};
