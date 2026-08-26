import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Impressum } from '@/components/Impressum';
import { isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, 'impressum');
}

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Impressum locale={locale} />;
}
