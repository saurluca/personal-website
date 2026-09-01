import type { Metadata } from 'next';

export const siteUrl = 'https://lucasaur.com';

export type SeoPage = 'home' | 'impressum' | 'datenschutz';

const titles: Record<SeoPage, string> = {
  home: 'Luca Saur – Websites für KMUs | Klar, schnell, in 4 Wochen',
  impressum: 'Impressum | Luca Saur',
  datenschutz: 'Datenschutzerklärung | Luca Saur',
};

const descriptions: Record<SeoPage, string> = {
  home: 'Websites für KMUs in Deutschland: klar, schnell und in 4 Wochen fertig. Kostenloser Entwurf in 7 Tagen.',
  impressum: 'Impressum und rechtliche Angaben gemäß § 5 DDG.',
  datenschutz:
    'Informationen zum Datenschutz gemäß DSGVO und TDDDG für die Website von Luca Saur.',
};

const pagePaths: Record<SeoPage, string> = {
  home: '/',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
};

export function pageMetadata(page: SeoPage): Metadata {
  const title = titles[page];
  const description = descriptions[page];
  const path = pagePaths[page];
  const canonical = `${siteUrl}${path === '/' ? '/' : path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: canonical,
      title,
      description,
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
  jobTitle: 'CTO und Webentwickler',
  description:
    'Ich baue Websites für KMUs in Deutschland: klar, schnell und in 4 Wochen fertig.',
  email: 'mail@lucasaur.com',
  sameAs: ['https://github.com/saurluca', 'https://linkedin.com/in/lucasaur'],
  knowsAbout: ['Webentwicklung', 'Webdesign', 'SEO'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Universität Osnabrück',
    sameAs: 'https://www.uni-osnabrueck.de/',
  },
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Prevery',
      url: 'https://www.prevery.de/',
    },
    {
      '@type': 'Organization',
      name: 'Databites',
      url: 'https://databites.de',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Osnabrück',
    addressCountry: 'DE',
  },
};

export const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Luca Saur – Websites für KMUs',
  description:
    'Professionelle Websites für kleine und mittlere Unternehmen in Deutschland.',
  url: siteUrl,
  serviceType: ['Webentwicklung', 'Webdesign'],
  areaServed: {
    '@type': 'Country',
    name: 'Germany',
  },
};
