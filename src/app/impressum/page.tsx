import { Impressum } from '@/components/Impressum';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('impressum');

export default function ImpressumPage() {
  return <Impressum />;
}
