import type { MetadataRoute } from 'next';
import { localizedPath } from '@/lib/locales';
import { siteUrl } from '@/lib/seo';

function url(path: string): string {
  return `${siteUrl}${path === '/' ? '/' : path}`;
}

function alternates(path: string) {
  return {
    languages: {
      en: url(localizedPath('en', path)),
      de: url(localizedPath('de', path)),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url('/'),
      lastModified: new Date('2026-01-31'),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: alternates('/'),
    },
    {
      url: url('/de'),
      lastModified: new Date('2026-01-31'),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: alternates('/'),
    },
    {
      url: url('/impressum'),
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: alternates('/impressum'),
    },
    {
      url: url('/de/impressum'),
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: alternates('/impressum'),
    },
    {
      url: url('/datenschutz'),
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: alternates('/datenschutz'),
    },
    {
      url: url('/de/datenschutz'),
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: alternates('/datenschutz'),
    },
  ];
}
