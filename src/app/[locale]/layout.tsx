import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { isLocale, locales } from '@/lib/i18n';
import { personJsonLd, serviceJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <div className="min-h-screen bg-background">
          <Navigation locale={locale} />
          {children}
          <Footer locale={locale} />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
