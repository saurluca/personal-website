import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { siteUrl } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Luca Saur - AI Solutions & Web Development | Automate Your Business',
    template: '%s',
  },
  description:
    'I automate your routine tasks through intelligent AI software and create professional websites. More time for your core business.',
  authors: [{ name: 'Luca Saur' }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    apple: '/me.jpeg',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e3a8a',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
