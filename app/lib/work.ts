export interface TimelineEntry {
  period: string;
  kind: 'Work' | 'Esports';
  org: string;
  // Path under /public, e.g. '/logos/wobot.png'. Falls back to `initials`.
  logo?: string;
  // Set for single-colour dark logos so they turn white in dark mode.
  invertOnDark?: boolean;
  initials: string;
  // Roles at this organisation, oldest first.
  roles: string[];
  description: string;
  bullets?: string[];
}

// Newest first. The page draws a wavy line rising from the oldest entry
// (bottom) to the newest (top).
export const timeline: TimelineEntry[] = [
  {
    period: '2024 – Present',
    kind: 'Work',
    org: 'Wobot AI',
    logo: '/logos/wobot.png',
    initials: 'W',
    roles: ['SDE Intern', 'SDE-1', 'SDE-2'],
    description:
      'Part of the Product team at Wobot AI, a video intelligence company.',
    bullets: [
      'Agent onboarding',
      'IoT devices',
      'POS integration',
      'Mobile app',
      'And a lot more',
    ],
  },
  {
    period: '2018 – 2022',
    kind: 'Esports',
    org: 'PUBG Mobile',
    logo: '/logos/pubg-mobile.png',
    invertOnDark: true,
    initials: 'PUBG',
    roles: ['Esports athlete', 'Founding member (VR1 Esports)'],
    description:
      'Competed in PUBG Mobile esports during my graduation with VR1 Esports, a team of five.',
    bullets: [
      'Qualified for the PMCO Fall Grand Finals in 2020',
      'Won lots of tournaments along the way',
    ],
  },
];
