import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

function url(path: string): string {
  return `${siteUrl}${path === '/' ? '/' : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url('/'),
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/impressum'),
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: url('/datenschutz'),
      lastModified: new Date('2026-08-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
