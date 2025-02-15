export interface LinkEntry {
  url: string;
  title: string;
  description: string;
}

export interface Section {
  title: string;
  slug: string;
  links: LinkEntry[];
}

export const linkList: Section[] = [
  {
    title: 'Ausländer',
    slug: 'auslaender',
    links: [
      {
        url: 'https://iab.de/presseinfo/nur-mit-einer-jaehrlichen-nettozuwanderung-von-400-000-personen-bleibt-das-arbeitskraefteangebot-langfristig-konstant/',
        title:
          'Nur mit einer jährlichen Nettozuwanderung von 400.000 Personen bleibt das Arbeitskräfteangebot langfristig konstant',
        description:
          'Eine Studie des Instituts für Arbeitsmarkt- und Berufsforschung (IAB) zeigt, dass Deutschland jährlich 400.000 Zuwanderer benötigt, um den Arbeitskräftebedarf zu decken.',
      },
      {
        url: 'https://www.diw.de/de/diw_01.c.935931.de/publikationen/diw_aktuell/2025_0105/deutschland_braucht_eine_nachhaltige_und_effektive_migrations-_und_integrationspolitik.html',
        title:
          'DIW: Deutschland braucht eine nachhaltige und effektive Migrations- und Integrationspolitik',
        description:
          'Nochmal eine aktuellere Meldung (Februar 2025) zur Bevölkerungsentwicklung und warum wir langfristig Zuwanderung brauchen.',
      },
      {
        url: 'https://mediendienst-integration.de/artikel/die-wichtigsten-fragen-zur-auslaenderkriminalitaet.html',
        title: 'Die wichtigsten Fragen zur Ausländerkriminalität',
        description:
          'Sind Ausländer krimineller als Deutsche? Die polizeiliche Kriminalstatistik scheint das zu belegen. Doch die Zahlen sind mit Vorsicht zu genießen.',
      },
      {
        url: 'https://www.spiegel.de/wissenschaft/mensch/migration-friedrich-merz-faellt-auf-den-psychotrick-der-afd-herein-a-f76a4721-bc6f-4a5e-aff8-845eaa45c058?sara_ref=re-xx-cp-sh',
        title: 'Friedrich Merz fällt auf den Psychotrick der AfD herein',
        description:
          'Die SPIEGEL-Online Kolumne von Chris Stöcker kann man immer lesen. Hier geht es darum, wie die CDU langsam aber sicher das Narrativ der AfD übernimmt, Deutschland sei vor allem wegen der Migration ein unsicheres Land. Spoiler Alarm: Nö.',
      },
      {
        url: 'https://krautreporter.de/flucht-und-grenzen/5546-es-gibt-keine-politik-die-unerlaubte-migration-stoppen-kann?shared=f1082fa2-419e-467c-92b5-3e9d5b23a16e',
        title: 'Es gibt keine Politik, die unerlaubte Migration stoppen kann',
        description:
          'Die Forschung sagt: Geschlossene Grenzen sind Symbolpolitik. Nur wenn man die deutsche Wirtschaft ruiniert, kommen weniger Migranten.',
      },
    ],
  },
  {
    title: 'Klima',
    slug: 'klima',
    links: [
      {
        url: 'https://www.ipcc.ch/report/ar6/syr/resources/spm-headline-statements',
        title: 'IPCC Synthesis Report 2023 - Headline Statements',
        description:
          'Die absolut kürzeste Zusammenfassung des neuesten IPCC Berichts. Quasi "Klimawandel für Dummies".',
      },
    ],
  },
  // Add more sections as needed
];
