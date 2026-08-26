import Link from 'next/link';
import { localizedPath, type Locale } from '@/lib/i18n';

const EMAIL = 'mail@lucasaur.com';
const linkClass = 'text-primary hover:underline';

export const Datenschutz = ({ locale }: { locale: Locale }) => {
  const homePath = localizedPath(locale, '/');
  const impressumPath = localizedPath(locale, '/impressum');

  return (
    <main className="pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-3xl mx-auto space-y-10 text-text-secondary">
        <header className="space-y-4">
          <Link
            href={homePath}
            className="text-sm text-text-secondary hover:text-primary transition-colors"
          >
            ← {locale === 'de' ? 'Zurück zur Startseite' : 'Back to home'}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-text">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-text-secondary">
            Informationen gemäß DSGVO und TDDDG
          </p>
          {locale === 'en' ? (
            <p className="text-sm text-text-secondary italic">
              This privacy policy is provided in German.
            </p>
          ) : null}
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">1. Verantwortlicher</h2>
          <address className="not-italic whitespace-pre-line leading-relaxed">
            Luca Saur{'\n'}
            Lange Straße 13{'\n'}
            49080 Osnabrück{'\n'}
            Deutschland
          </address>
          <p>
            E-Mail:{' '}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
          </p>
          <p>
            Weitere Pflichtangaben finden Sie im{' '}
            <Link href={impressumPath} className={linkClass}>
              Impressum
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            2. Datenschutz auf einen Blick
          </h2>
          <p>
            <strong className="text-text">Allgemeine Hinweise</strong>
            <br />
            Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>
          <p>
            <strong className="text-text">Diese Website</strong>
            <br />
            lucasaur.com ist die persönliche Website von Luca Saur. Sie stellt
            berufliche Informationen sowie Angebote im Bereich KI-Lösungen und
            Webentwicklung vor. Es gibt keine Registrierung und kein
            Benutzerkonto.
          </p>
          <p>
            Beim Besuch der Website werden technische Zugriffsdaten und anonyme
            Nutzungsstatistiken über den Hosting-Anbieter Vercel verarbeitet
            (siehe Abschnitt 3 und 4). Die gewählte Sprache wird ausschließlich
            lokal in Ihrem Browser gespeichert.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">3. Hosting</h2>
          <p>
            Diese Website wird bei <strong className="text-text">Vercel</strong>{' '}
            gehostet. Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA.
          </p>
          <p>
            Beim Aufruf der Website werden aus technischen Gründen insbesondere
            folgende Daten verarbeitet:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>IP-Adresse (kurzzeitig in Server-Log-Dateien)</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene URL</li>
            <li>Browsertyp und -version (User-Agent)</li>
            <li>Referrer-URL</li>
          </ul>
          <p>
            Diese Verarbeitung ist technisch notwendig, um die Website
            auszuliefern sowie Stabilität und Sicherheit zu gewährleisten.
          </p>
          <p>
            <strong className="text-text">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse am sicheren und störungsfreien
            Betrieb der Website).
          </p>
          <p>
            <strong className="text-text">Auftragsverarbeitung:</strong> Mit
            Vercel besteht ein Vertrag über Auftragsverarbeitung (AVV). Die
            Datenübertragung in die USA erfolgt unter anderem auf Grundlage des{' '}
            <strong className="text-text">EU-U.S. Data Privacy Framework (DPF)</strong>{' '}
            gemäß Art. 45 DSGVO. Vercel Inc. ist unter dem DPF zertifiziert.
            Ergänzend können Standardvertragsklauseln der EU-Kommission (Art. 46
            Abs. 2 lit. c DSGVO) Anwendung finden.
          </p>
          <p>
            Weitere Informationen:{' '}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            4. Cookies, lokale Speicherung und Analyse
          </h2>
          <p>
            <strong className="text-text">Cookies</strong>
            <br />
            Diese Website setzt keine Tracking- oder Marketing-Cookies. Da keine
            nicht-notwendigen Cookies verwendet werden, ist ein Cookie-Banner
            nach § 25 Abs. 2 TDDDG nicht erforderlich.
          </p>
          <p>
            <strong className="text-text">Lokale Speicherung (localStorage)</strong>
            <br />
            Ihr Browser speichert lokal die Sprachauswahl (Englisch oder
            Deutsch), damit die Website beim nächsten Besuch in der gewählten
            Sprache angezeigt werden kann. Diese Information wird nicht an uns
            übermittelt.
          </p>
          <p>
            <strong className="text-text">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an einer funktionierenden
            Spracheinstellung) sowie § 25 Abs. 2 TDDDG (technisch notwendige
            Speicherung).
          </p>
          <p>
            Sie können diese Daten jederzeit in den Browser-Einstellungen löschen
            (Einstellungen → Cookies und Website-Daten / Local Storage).
          </p>
          <p>
            <strong className="text-text">Vercel Web Analytics</strong>
            <br />
            Ich nutze Vercel Web Analytics, einen datenschutzfreundlichen
            Analysedienst der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
            91723, USA. Der Dienst verwendet{' '}
            <strong className="text-text">keine Cookies</strong> und erstellt{' '}
            <strong className="text-text">keine nutzerübergreifenden Profile</strong>.
            Besucher werden anhand eines Hashes aus dem eingehenden Request
            identifiziert; dieser Hash wird nicht dauerhaft gespeichert und nach
            spätestens <strong className="text-text">24 Stunden</strong>{' '}
            automatisch verworfen.
          </p>
          <p>Bei jedem Seitenaufruf können folgende anonyme Daten erfasst werden:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Zeitstempel des Aufrufs</li>
            <li>aufgerufene URL und dynamischer Pfad</li>
            <li>Referrer-URL</li>
            <li>gefilterte Query-Parameter (keine personenbezogenen Werte)</li>
            <li>Geolokalisierung (Land, Region, Stadt – keine IP-Adresse)</li>
            <li>Betriebssystem und Version, Browser und Version, Gerätetyp</li>
            <li>Version des Analytics-Scripts</li>
          </ul>
          <p>
            Es werden ausschließlich aggregierte Statistiken erzeugt. Eine direkte
            Identifizierung einzelner Personen ist nach Angaben von Vercel
            technisch nicht vorgesehen.
          </p>
          <p>
            <strong className="text-text">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an einer datenschutzfreundlichen
            Auswertung der Websitenutzung zur Verbesserung des Angebots). Die
            eingesetzten Mittel (kein Cookie-Einsatz, keine IP-Speicherung, kurze
            Session-Lebensdauer) beschränken den Eingriff auf das für den Zweck
            notwendige Minimum.
          </p>
          <p>
            <strong className="text-text">Auftragsverarbeitung:</strong> Mit
            Vercel Inc. besteht ein Vertrag über Auftragsverarbeitung (AVV), der
            auch den Betrieb von Vercel Web Analytics umfasst.
          </p>
          <p>
            <strong className="text-text">Drittlandübertragung:</strong> Die
            Datenverarbeitung erfolgt auf Servern der Vercel Inc. in den USA. Die
            Übertragung wird unter anderem durch das EU-U.S. Data Privacy
            Framework (DPF) gemäß Art. 45 DSGVO sowie durch
            Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO
            abgesichert (siehe Abschnitt 3).
          </p>
          <p>
            Weitere Informationen:{' '}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              vercel.com/docs/analytics/privacy-policy
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">5. Externe Links</h2>
          <p>
            Diese Website enthält Links zu externen Angeboten. Erst wenn Sie einen
            Link anklicken, verlassen Sie diese Website; bis dahin werden durch
            mich keine Inhalte der Drittanbieter eingebunden. Auf die
            anschließende Datenverarbeitung habe ich keinen Einfluss. Es gelten
            die Datenschutzhinweise der jeweiligen Anbieter.
          </p>
          <p>Verlinkt sind insbesondere:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-text">GitHub</strong> (GitHub, Inc., USA) –
              Quellcode und Projektseiten.{' '}
              <a
                href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Datenschutzhinweise
              </a>
            </li>
            <li>
              <strong className="text-text">LinkedIn</strong> (LinkedIn Ireland
              Unlimited Company, Irland) – berufliches Profil.{' '}
              <a
                href="https://www.linkedin.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Datenschutzhinweise
              </a>
            </li>
            <li>
              <strong className="text-text">Cal.com</strong> (Cal.com, Inc., USA)
              – Terminbuchung. Der Button „Meeting buchen“ öffnet eine externe
              Seite von Cal.com.{' '}
              <a
                href="https://cal.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Datenschutzhinweise
              </a>
            </li>
            <li>
              <strong className="text-text">Projektwebsites</strong>,
              insbesondere{' '}
              <a
                href="https://databites.de/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                databites.de
              </a>
            </li>
          </ul>
          <p>
            <strong className="text-text">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an einer einfachen
            Kontaktaufnahme und Information über Projekte).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            6. Kontaktaufnahme per E-Mail
          </h2>
          <p>
            Wenn Sie mich per E-Mail kontaktieren, wird Ihre Anfrage
            einschließlich der daraus hervorgehenden personenbezogenen Daten
            (z.&nbsp;B. Name, E-Mail-Adresse, Inhalt der Nachricht) zum Zweck der
            Bearbeitung Ihres Anliegens gespeichert und verarbeitet. Diese Daten
            gebe ich nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            <strong className="text-text">Rechtsgrundlage:</strong> Art. 6 Abs. 1
            lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) oder
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung
            von Anfragen).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            7. Ihre Rechte als betroffene Person
          </h2>
          <p>
            <strong className="text-text">Lokal gespeicherte Sprachauswahl:</strong>{' '}
            Diese Daten liegen ausschließlich auf Ihrem Gerät. Ich habe keinen
            Zugriff darauf und kann sie weder einsehen noch löschen. Sie
            verwalten diese Daten selbst über Ihre Browser-Einstellungen (siehe
            Abschnitt 4).
          </p>
          <p>
            Hinsichtlich personenbezogener Daten, die im Zusammenhang mit dem
            Betrieb dieser Website verarbeitet werden, haben Sie jederzeit das
            Recht auf:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong className="text-text">Auskunft</strong> über Ihre
              gespeicherten Daten (Art. 15 DSGVO)
            </li>
            <li>
              <strong className="text-text">Berichtigung</strong> unrichtiger
              Daten (Art. 16 DSGVO)
            </li>
            <li>
              <strong className="text-text">Löschung</strong> Ihrer Daten (Art. 17
              DSGVO)
            </li>
            <li>
              <strong className="text-text">Einschränkung</strong> der
              Verarbeitung (Art. 18 DSGVO)
            </li>
            <li>
              <strong className="text-text">Datenübertragbarkeit</strong> (Art. 20
              DSGVO), soweit anwendbar
            </li>
            <li>
              <strong className="text-text">Widerspruch</strong> gegen die
              Verarbeitung (Art. 21 DSGVO)
            </li>
          </ul>
          <p>
            Wenden Sie sich hierfür bitte an{' '}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
            . Darüber hinaus haben Sie das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Die für
            Niedersachsen zuständige Behörde ist:
          </p>
          <p>
            Die Landesbeauftragte für den Datenschutz Niedersachsen
            <br />
            Prinzenstraße 5
            <br />
            30159 Hannover
            <br />
            <a
              href="https://lfd.niedersachsen.de"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              lfd.niedersachsen.de
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            8. SSL- bzw. TLS-Verschlüsselung
          </h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers mit „https://“ beginnt und ein
            Schloss-Symbol angezeigt wird.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">9. Speicherdauer</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              localStorage (Sprache): bis Sie die Daten in Ihrem Browser löschen
            </li>
            <li>
              Server-Log-Dateien (Vercel): nach den Richtlinien von Vercel, in
              der Regel nur für einen begrenzten Zeitraum
            </li>
            <li>
              Analytics: anonymisierte, aggregierte Daten bei Vercel nach deren
              Aufbewahrungsfristen
            </li>
            <li>
              E-Mail-Anfragen: solange dies zur Bearbeitung erforderlich ist bzw.
              gesetzliche Aufbewahrungspflichten bestehen
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">
            10. Keine Pflicht zur Bereitstellung von Daten
          </h2>
          <p>
            Der Besuch dieser Website erfordert keine Registrierung und keine
            Angabe personenbezogener Daten an mich. Ohne lokale Speicherung kann
            die Sprachauswahl nicht dauerhaft gespeichert werden. Eine
            Kontaktaufnahme per E-Mail ist freiwillig; ohne die dafür nötigen
            Angaben kann ich Anfragen möglicherweise nicht beantworten.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-text">11. Änderungen</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung anzupassen, wenn sich
            die Website oder rechtliche Anforderungen ändern. Die jeweils aktuelle
            Fassung ist unter{' '}
            <Link href="/datenschutz" className={linkClass}>
              /datenschutz
            </Link>{' '}
            abrufbar.
          </p>
        </section>

        <p className="text-sm">Stand: August 2026</p>
      </article>
    </main>
  );
};
