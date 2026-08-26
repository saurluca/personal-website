import Link from 'next/link';
import { localizedPath, type Locale } from '@/lib/i18n';

const EMAIL = 'mail@lucasaur.com';
const linkClass = 'text-primary hover:underline';

const copy = {
  de: {
    back: 'Zurück zur Startseite',
    title: 'Impressum',
    subtitle: 'Angaben gemäß § 5 DDG',
    ddgTitle: 'Angaben gemäß § 5 DDG',
    country: 'Deutschland',
    emailLabel: 'E-Mail',
    responsibleTitle: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
    responsibleBody: 'Luca Saur\nAnschrift wie oben',
    contentTitle: 'Haftung für Inhalte',
    contentBody:
      'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte kann jedoch keine Gewähr übernommen werden.',
    linksTitle: 'Haftung für Links',
    linksBody:
      'Diese Website enthält Links zu externen Websites Dritter (z. B. GitHub, LinkedIn). Für deren Inhalte ist stets der jeweilige Anbieter verantwortlich.',
    copyrightTitle: 'Urheberrecht',
    copyrightBody:
      'Die vom Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.',
    disputeTitle: 'Verbraucherstreitbeilegung',
    disputeBody:
      'Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).',
    privacyLink: 'Datenschutzerklärung',
  },
  en: {
    back: 'Back to home',
    title: 'Impressum',
    subtitle: 'Information pursuant to § 5 DDG',
    ddgTitle: 'Information pursuant to § 5 DDG',
    country: 'Germany',
    emailLabel: 'Email',
    responsibleTitle: 'Responsible for content pursuant to § 18 (2) MStV',
    responsibleBody: 'Luca Saur\nAddress as above',
    contentTitle: 'Liability for content',
    contentBody:
      'The content of this website was created with the greatest possible care. However, no guarantee can be given for the accuracy, completeness, or timeliness of the content provided.',
    linksTitle: 'Liability for links',
    linksBody:
      'This website contains links to external third-party websites (e.g. GitHub, LinkedIn). The respective provider is always responsible for their content.',
    copyrightTitle: 'Copyright',
    copyrightBody:
      'The content and works created by the site operator on this website are subject to German copyright law.',
    disputeTitle: 'Consumer dispute resolution',
    disputeBody:
      'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board (§ 36 VSBG).',
    privacyLink: 'Privacy Policy',
  },
} as const;

export const Impressum = ({ locale }: { locale: Locale }) => {
  const t = copy[locale];
  const homePath = localizedPath(locale, '/');
  const datenschutzPath = localizedPath(locale, '/datenschutz');

  return (
    <main className="pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-3xl mx-auto space-y-10 text-text-secondary">
        <header className="space-y-4">
          <Link
            href={homePath}
            className="text-sm text-text-secondary hover:text-primary transition-colors"
          >
            ← {t.back}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-text">{t.title}</h1>
          <p className="text-lg text-text-secondary">{t.subtitle}</p>
          {locale === 'en' ? (
            <p className="text-sm text-text-secondary italic">
              This is a convenience translation. The German version is legally
              authoritative.
            </p>
          ) : null}
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">{t.ddgTitle}</h2>
          <address className="not-italic whitespace-pre-line leading-relaxed">
            Luca Saur{'\n'}
            Lange Straße 13{'\n'}
            49080 Osnabrück{'\n'}
            {t.country}
          </address>
          <p>
            {t.emailLabel}:{' '}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">{t.responsibleTitle}</h2>
          <p className="whitespace-pre-line leading-relaxed">{t.responsibleBody}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">{t.contentTitle}</h2>
          <p className="leading-relaxed">{t.contentBody}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">{t.linksTitle}</h2>
          <p className="leading-relaxed">{t.linksBody}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">{t.copyrightTitle}</h2>
          <p className="leading-relaxed">{t.copyrightBody}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">{t.disputeTitle}</h2>
          <p className="leading-relaxed">{t.disputeBody}</p>
        </section>

        <p>
          <Link href={datenschutzPath} className={linkClass}>
            {t.privacyLink}
          </Link>
        </p>
      </article>
    </main>
  );
};
