import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { personJsonLd, serviceJsonLd, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Luca Saur – Websites und Technik für Handwerker | Klar, schnell, in 4 Wochen",
    template: "%s",
  },
  description:
    "Websites für Handwerker in Deutschland: klar, schnell und in 4 Wochen fertig. Kostenloser Entwurf in 7 Tagen.",
  authors: [{ name: "Luca Saur" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    apple: "/me.jpeg",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a8a",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
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
          <Navigation />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
