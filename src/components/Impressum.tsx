import Link from 'next/link';
import { EMAIL, PHONE, PHONE_HREF } from '@/content/copy';

const linkClass = 'text-primary hover:underline';

export const Impressum = () => {
  return (
    <main className="pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-3xl mx-auto space-y-10 text-text-secondary">
        <header className="space-y-4">
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-primary transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-text">Impressum</h1>
          <p className="text-lg text-text-secondary">Angaben gemäß § 5 DDG</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">Angaben gemäß § 5 DDG</h2>
          <address className="not-italic whitespace-pre-line leading-relaxed">
            Luca Saur{'\n'}
            Rotkehlchenweg 12{'\n'}
            70734 Fellbach
          </address>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">Kontakt</h2>
          <p>
            E-Mail:{' '}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </p>
          <p>
            Telefon:{' '}
            <a href={PHONE_HREF} className={linkClass}>
              {PHONE}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <address className="not-italic whitespace-pre-line leading-relaxed">
            Luca Saur{'\n'}
            Rotkehlchenweg 12{'\n'}
            70734 Fellbach
          </address>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">Haftung für Inhalte</h2>
          <p className="leading-relaxed">
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            bereitgestellten Inhalte kann jedoch keine Gewähr übernommen werden.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">Haftung für Links</h2>
          <p className="leading-relaxed">
            Diese Website enthält Links zu externen Websites Dritter (z. B.
            GitHub, LinkedIn). Für deren Inhalte ist stets der jeweilige Anbieter
            verantwortlich.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">Urheberrecht</h2>
          <p className="leading-relaxed">
            Die vom Seitenbetreiber erstellten Inhalte und Werke auf dieser
            Website unterliegen dem deutschen Urheberrecht.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            Verbraucherstreitbeilegung
          </h2>
          <p className="leading-relaxed">
            Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
          </p>
        </section>

        <p>
          <Link href="/datenschutz" className={linkClass}>
            Datenschutzerklärung
          </Link>
        </p>
      </article>
    </main>
  );
};
