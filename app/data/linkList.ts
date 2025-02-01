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
    slug: 'politics',
    links: [
      {
        url: 'https://iab.de/presseinfo/nur-mit-einer-jaehrlichen-nettozuwanderung-von-400-000-personen-bleibt-das-arbeitskraefteangebot-langfristig-konstant/',
        title:
          'Nur mit einer jährlichen Nettozuwanderung von 400.000 Personen bleibt das Arbeitskräfteangebot langfristig konstant',
        description:
          'Eine Studie des Instituts für Arbeitsmarkt- und Berufsforschung (IAB) zeigt, dass Deutschland jährlich 400.000 Zuwanderer benötigt, um den Arbeitskräftebedarf zu decken.',
      },
      {
        url: 'https://verfassungsblog.de/der-mythos-von-der-notlage/',
        title: 'Der Mythos von der Notlage',
        description:
          'Kann man sich eigentlich auf eine "Notlage" berufen, um die Europarecht zu brechen? Ein Beitrag des Verfassungsblogs.',
      },
    ],
  },
  {
    title: 'KI',
    slug: 'ai',
    links: [
      {
        url: 'https://stratechery.com/2025/deepseek-faq/',
        title: 'Deepseek FAQ',
        description: 'Ben Thompson mit einem FAQ zum "Deepseek-Schock".',
      },
    ],
  },
  // Add more sections as needed
];
