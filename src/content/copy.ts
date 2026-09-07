export const EMAIL = 'mail@lucasaur.com';
export const PHONE = '015221318257';
export const PHONE_HREF = 'tel:+4915221318257';
export const CAL_URL =
  'https://cal.com/lucasaur/30min?overlayCalendar=true';

export const navItems = [
  { id: 'home', label: 'Start' },
  { id: 'offer', label: 'Leistung' },
  { id: 'process', label: 'Ablauf' },
  { id: 'projects', label: 'Arbeit' },
  { id: 'faq', label: 'Fragen' },
  { id: 'contact', label: 'Kontakt' },
] as const;

export const copy = {
  nav: {
    skip: 'Zum Inhalt springen',
  },
  hero: {
    title: 'Eine Website, die Anfragen bringt.',
    subtitle:
      'Für Handwerker in Deutschland: klar, schnell und in 4 Wochen fertig.',
    description:
      'In 7 Tagen stelle ich Ihnen kostenlos einen Entwurf bereit. Erst danach entscheiden Sie.',
    cta: 'Kostenloses Gespräch buchen',
    imageAlt: 'Luca Saur, Websites für Handwerker',
  },
  audience: {
    title: 'Für wen',
    intro:
      'Ob Handwerk, Beratung oder Praxis: Sie brauchen eine Website, die man versteht und über die man Sie erreicht.',
    items: [
      {
        title: 'Handwerk',
        description:
          'Passt, wenn Kundinnen und Kunden Sie googeln und sofort sehen sollen, was Sie anbieten – mit Telefonnummer und Kontakt auf jeder Seite.',
      },
      {
        title: 'Dienstleistung',
        description:
          'Passt, wenn Sie Leistungen erklären, Vertrauen aufbauen und Anfragen bekommen wollen – statt einer Visitenkarte, die niemand anschreibt.',
      },
      {
        title: 'Praxis',
        description:
          'Passt, wenn Öffnungszeiten, Standort und Terminaufnahme klar sein müssen – auf dem Handy genauso wie am Rechner.',
      },
    ],
  },
  offer: {
    title: 'Was Ihre Website leistet',
    intro: 'Eine professionelle Website. Drei Ergebnisse.',
    items: [
      {
        title: 'Gefunden werden',
        description:
          'Klare Seitenstruktur, sinnvolle Texte und grundlegende SEO, damit Interessierte Sie finden.',
      },
      {
        title: 'Vertrauen aufbauen',
        description:
          'Ihr Angebot, Ihre Person und Ihre Arbeitsweise auf den Punkt – mobil und schnell.',
      },
      {
        title: 'Kontakt aufnehmen',
        description:
          'Formular, Telefon oder Terminbuchung: der Weg zu Ihnen ist eindeutig.',
      },
    ],
  },
  projects: {
    title: 'Bisherige Arbeit',
    intro:
      'Arbeit, die zeigt, wie ich baue: eigenes Produkt, ein Beispiel für eine Bäckerei, Plattformarbeit im Team.',
    prevery: {
      title: 'Prevery',
      description:
        'Gesundheits-App, die ich als CTO und Geschäftsführer entwickelt habe. EVE hilft Menschen, selbstbestimmt gesünder zu leben.',
      tech: 'App, Gesundheit, KI',
    },
    backhaus: {
      title: 'Backhaus',
      description:
        'Beispielwebsite für eine Bäckerei: Sortiment, Öffnungszeiten, Kontakt. So tritt ein lokaler Betrieb klar auf.',
      tech: 'Website, Bäckerei',
    },
    databites: {
      title: 'Databites',
      description:
        'Komplett Lösung für Bäckereien, an der ich mitgebaut habe: Filialen, Planung, Kommunikation.',
      tech: 'Geschäftsplattform, Web, Daten',
    },
    // certusai: {
    //   title: 'CertusAI',
    //   description:
    //     'Hackathon-Projekt: Assistent für Schweizer Recht. Gewinner von „Best Usage of Apertus“ bei den Swiss AI Weeks 2025. Zeigt, wie ich unter Zeitdruck etwas Nutzbares baue – kein Kundenauftrag.',
    //   tech: 'Hackathon, Web, Legal Tech',
    // },
    // its: {
    //   title: 'Intelligentes Tutoring-System',
    //   description:
    //     'Eigenes Lernprojekt: Aufgaben aus Kursmaterial, Feedback, Datenschutz im Blick. Kein Produkt für Handwerker, sondern Hintergrund in Web und Software.',
    //   tech: 'Webanwendung, Lernprojekt',
    // },
  },
  about: {
    title: 'Über mich',
    intro:
      'Ich komme aus Osnabrück. CTO und Geschäftsführer von Prevery. Cognitive Science, Praxis bei Databites und ein Forschungsaufenthalt an der ETH – ich baue Websites, die sitzen, nicht die beeindrucken sollen.',
    chips: [
      'Osnabrück',
      'CTO, Prevery',
      'B.Sc. Cognitive Science',
      'ETH Zürich',
      '2024-2026',
    ],
    prevery: {
      title: 'Prevery',
      role: 'CTO und Geschäftsführer',
      date: 'Aktuell',
      description:
        'Ich habe die Gesundheits-App EVE entwickelt: damit Menschen selbstbestimmt gesünder leben können.',
    },
    databites: {
      title: 'Databites',
      role: 'Web- und Softwareentwicklung',
      date: 'Seit 2024',
      description:
        'Ich baue produktive Web-Software für den Alltag in Betrieben – von der Oberfläche bis zur Logik dahinter.',
    },
    uni: {
      title: 'Universität Osnabrück',
      role: 'B.Sc. Cognitive Science',
      date: '2023 – 2025',
      description:
        'Studium mit Fokus darauf, wie Menschen Informationen verstehen – nützlich, wenn eine Website klar sein soll.',
    },
    eth: {
      title: 'ETH Zürich',
      role: 'Forschungspraktikum',
      date: '2025',
      description:
        'Mitentwicklung digitaler Lernwerkzeuge. Zeigt, dass ich auch in einem anspruchsvollen Umfeld liefern kann.',
    },
  },
  process: {
    title: 'Ablauf',
    intro: 'Klar strukturiert, ohne Überraschungen.',
    steps: [
      {
        number: '1',
        title: 'Erstgespräch',
        duration: '30 Min',
        description:
          'Wir schauen uns Ihr Angebot und Ihre heutige Website an. Sie gehen mit einem klaren nächsten Schritt raus – nicht mit einem Verkaufsgespräch.',
      },
      {
        number: '2',
        title: 'Kostenloser Entwurf',
        duration: '7 Tage',
        description:
          'In 7 Tagen stelle ich Ihnen kostenlos einen Entwurf bereit. So sehen Sie, was Sie bekommen – unverbindlich, bevor Sie sich entscheiden.',
      },
      {
        number: '3',
        title: 'Zweites Gespräch',
        duration: 'Festpreis',
        description:
          'Sie bekommen ein transparentes Festpreis-Angebot. Offene Fragen klären wir live. Keine versteckten Kosten. Gemeinsam legen wir fest, wie es weitergeht.',
      },
      {
        number: '4',
        title: 'Weitere Umsetzung',
        duration: 'Fixe Timeline',
        description:
          'Ich setze um, mit fixer Timeline. Zwischendurch sehen Sie den Stand und können gegensteuern.',
      },
      {
        number: '5',
        title: 'Live',
        duration: 'In 4 Wochen',
        description:
          'Ihre Website geht online. Sie wissen, wie Sie Inhalte anpassen und wie Sie mich bei Bedarf erreichen.',
      },
    ],
  },
  faq: {
    title: 'Häufige Fragen',
    items: [
      {
        question: 'Wie lange dauert ein typisches Projekt?',
        answer:
          'Die meisten Websites sind in ein bis vier Wochen fertig. Einfache Auftritte oft schneller, mehr Seiten oder besondere Funktionen brauchen entsprechend länger. Den Zeitplan legen wir vor der Umsetzung fest.',
      },
      {
        question: 'Was kostet eine Website?',
        answer:
          'Sie zahlen einen Festpreis, den Sie vor der Arbeit schriftlich bekommen. Die Höhe hängt vom Umfang ab – deshalb nenne ich online keine Pauschale. Zuerst stelle ich Ihnen in 7 Tagen kostenlos einen Entwurf bereit. Im Gespräch klären wir, was Sie brauchen, und Sie entscheiden in Ruhe.',
      },
      {
        question: 'Wer liefert Texte und Fotos?',
        answer:
          'Ich erstelle einen Entwurf für alles: Texte und frei nutzbare Bilder aus dem Internet. Wenn Sie etwas ändern wollen, machen wir das gemeinsam. Eigene Fotos binde ich gerne ein.',
      },
      {
        question: 'Ist Suchmaschinenoptimierung dabei – und was passiert nach dem Launch?',
        answer:
          'Grundlegendes SEO gehört dazu: klare Seiten, Meta-Angaben, sinnvolle Überschriften, schnelle Ladezeiten. Keine laufende SEO-Kampagne. Nach dem Launch können Sie die Seite selbst nutzen; kleinere Nachjustierungen klären wir im Angebot.',
      },
      {
        question: 'Arbeiten Sie nur mit bestimmten Branchen?',
        answer:
          'Nein. Handwerk, Dienstleistung und Praxis sind Beispiele. Wenn Sie eine klare Website brauchen für mehr Kunden und Internet Präsenz benötigen, bin ich ihr Mann.',
      },
    ],
  },
  contact: {
    title: 'Bereit für eine Website, die Anfragen bringt?',
    description:
      'Buchen Sie ein kostenloses Erstgespräch. 30 Minuten, unverbindlich. Danach wissen Sie, ob und wie wir zusammenarbeiten.',
    cta: 'Kostenloses Gespräch buchen',
    emailLabel: 'Oder per E-Mail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    copyright: '© 2026 Luca Saur. Alle Rechte vorbehalten.',
    impressum: 'Impressum',
    privacy: 'Datenschutz',
    book: 'Gespräch buchen',
    process: 'Ablauf',
  },
} as const;
