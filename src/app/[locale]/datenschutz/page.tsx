import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Datenschutz } from '@/components/Datenschutz';
import { isLocale } from '@/lib/i18n';
import { pageMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, 'datenschutz');
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Datenschutz locale={locale} />;
}
