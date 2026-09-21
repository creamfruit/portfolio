// All portfolio content lives here so the components stay clean.
// Edit this file to update your bio, projects, skills or stats — nothing
// else in the codebase needs to change.
import { withBase } from './basePath';

export const profile = {
  name: 'Chong Li Sean',
  tagline: 'Data Analytics · Software Engineering',
  blurb:
    "Business, Finance & Technology student at Nanyang Polytechnic who works from data to decisions. I build the interfaces, the backend systems, and the analysis behind them — then verify every result before trusting it.",
  email: 'seanchong2008@gmail.com',
  github: 'https://github.com/creamfruit',
  linkedin: 'https://www.linkedin.com/in/li-sean-chong-2ab712363/',
};

export const primaryTools = [
  { name: 'Figma', use: 'UI & component-system prototyping' },
  { name: 'Tableau', use: 'Analytics dashboards' },
  { name: 'Python / FastAPI', use: 'Backend & data systems' },
  { name: 'SQL', use: 'Querying & analysis' },
  { name: 'Adobe Photoshop', use: 'Visual media' },
  { name: 'Claude Code', use: 'AI-assisted development' },
];

export const skillGroups = [
  {
    label: 'Analytics',
    items: [
      'SQL',
      'Tableau',
      'Simulation modelling',
      'Transaction-derived pricing',
      'Weighted probability distributions',
      'Data validation & integrity checks',
    ],
  },
  {
    label: 'Testing',
    items: [
      'Regression suites (140+ tests)',
      'Automated simulation harnesses (800+ runs)',
      'Git',
      'Hypothesis-driven verification',
    ],
  },
  {
    label: 'Backend',
    items: [
      'FastAPI',
      'REST API design',
      'SQLite & schema design',
      'Auth & role-based access',
      'Server-side validation',
    ],
  },
  {
    label: 'Frontend',
    items: [
      'Vanilla JavaScript',
      'DOM state management',
      'CSS animation & sprite sheets',
      '9-slice UI systems',
      'Responsive layout',
    ],
  },
  {
    label: 'Design',
    items: ['Figma', 'Pixel art', 'UI design', 'Photo & video editing'],
  },
];

// Real, resume-verified numbers only — nothing here is invented.
export const runetedStats = [
  { value: 140, suffix: '+', label: 'regression tests in the suite' },
  { value: 800, suffix: '+', label: 'simulated fights for balance' },
  { value: 3000, suffix: '', label: 'arenas checked for generation bugs' },
  { value: 79, suffix: '', label: 'structured build phases' },
  { value: 11, suffix: '', label: 'item rarity tiers' },
];

export const runeted = {
  slug: 'runeted',
  name: 'Runeted',
  tagline: 'Real-Time Action RPG',
  status: 'Self-initiated · In progress',
  description:
    'A solo-developed full-stack action RPG that evolved from a turn-based prototype into a real-time combat system — a server-authoritative game engine, a player-driven economy with market-derived pricing, and an in-progress AI layer for local-LLM NPCs.',
  stack: ['Python', 'FastAPI', 'JavaScript', 'SQLite', 'Figma', 'Tableau'],
  bullets: [
    'Built a multi-currency economy with an auction house and peer-to-peer trading, deriving live exchange rates from completed transaction data rather than hardcoded values, and bounding generated item statistics with a validation layer.',
    'Verified game balance empirically rather than by intuition: modelled combat outcomes across level and archetype matrices with 800+ simulated fights, and checked procedural generation across 3,000 arenas with zero unreachable tiles or boundary breaches.',
    'Maintained a 140+ test regression suite covering combat resolution, economy integrity and cross-account data isolation — every change checked against measured results before being trusted.',
    'Built a server-authoritative engine in Python/FastAPI handling real-time combat, collision resolution and A* pathfinding, with all state validated server-side to protect the live economy from client-side exploitation.',
    'Designed and coded the full front end in vanilla JavaScript and CSS, directing AI-assisted development across 79 structured phases with living architecture documentation.',
    "Designed the UI's item system in Figma as a single component with real rarity tiers and hover/idle states, matching production dimensions exactly so every visual variant stays in sync with the shipped game.",
  ],
  // Real layer names from the Figma file's rarity/state component system.
  figmaFileUrl:
    'https://www.figma.com/design/5egeJE1emzYjLcTDVhTXEV/Runeted-Slot-Frames?t=QPkWojMGmnfShivQ-1',
  rarityTiers: [
    { name: 'Common', color: '#9CA3AF' },
    { name: 'Uncommon', color: '#4ADE80' },
    { name: 'Rare', color: '#60A5FA' },
    { name: 'Epic', color: '#A78BFA' },
    { name: 'Legendary', color: '#FBBF24' },
    { name: 'Mythic', color: '#F87171' },
    { name: 'Supreme', color: '#F472B6' },
    { name: 'Relic', color: '#818CF8' },
    { name: 'Exalted', color: '#2DD4BF' },
    { name: 'Transcendent', color: '#FB923C' },
    { name: 'Primordial', color: '#22D3EE' },
  ],
  // Real classes from character creation — a class amplifies one archetype
  // and grants a signature skill; it never restricts what you can equip.
  classes: [
    {
      name: 'Warden',
      blurb: "Turns the enemy's aggression into its own undoing.",
      atk: 6,
      def: 9,
      spd: 5,
      color: '#60A5FA',
      icon: <path d="M12 2 20 5v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V5l8-3Z" />,
    },
    {
      name: 'Reaper',
      blurb: 'Wins long fights by taking back what it deals out.',
      atk: 8,
      def: 6,
      spd: 5,
      color: '#F87171',
      icon: (
        <>
          <path d="M5 3v18" />
          <path d="M5 4c5 0 9 3.2 9 8s-4 8-9 8" />
        </>
      ),
    },
    {
      name: 'Channeler',
      blurb: 'Builds toward one decisive window and spends it well.',
      atk: 9,
      def: 4,
      spd: 6,
      color: '#A78BFA',
      icon: (
        <path d="M12 2v6M12 16v6M4.2 4.2l4.2 4.2M15.6 15.6l4.2 4.2M2 12h6M16 12h6M4.2 19.8l4.2-4.2M15.6 8.4l4.2-4.2" />
      ),
    },
    {
      name: 'Duelist',
      blurb: 'Fast, precise, and punishing against a slow opponent.',
      atk: 8,
      def: 4,
      spd: 9,
      color: '#4ADE80',
      icon: (
        <>
          <path d="M4 20 20 4" />
          <path d="M20 20 4 4" />
        </>
      ),
    },
    {
      name: 'Berserker',
      blurb: 'Trades safety for damage and makes the gamble pay.',
      atk: 10,
      def: 3,
      spd: 6,
      color: '#FB923C',
      icon: <path d="M4 20 12 4l8 16-8-4-8 4Z" />,
    },
    {
      name: 'Wanderer',
      blurb: 'Belongs to no school, and can afford combinations no specialist can.',
      atk: 6,
      def: 6,
      spd: 7,
      color: '#FBBF24',
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 9.5 10 10l-.5 4.5L14 14l.5-4.5Z" />
        </>
      ),
    },
  ],
};

export const runetedScreens = [
  { src: withBase('/images/runeted/hub.png'), alt: 'Runeted hub menu', caption: 'Hub' },
  { src: withBase('/images/runeted/combat.png'), alt: 'Real-time combat', caption: 'Real-time combat' },
  { src: withBase('/images/runeted/character-creation.png'), alt: 'Character creation', caption: 'Character creation' },
  { src: withBase('/images/runeted/equipment.png'), alt: 'Equipment screen', caption: 'Equipment & rarity' },
  { src: withBase('/images/runeted/runes.png'), alt: 'Rune loadout screen', caption: 'Rune loadout' },
  { src: withBase('/images/runeted/victory-loot.png'), alt: 'Victory screen with loot', caption: 'Victory & loot' },
  { src: withBase('/images/runeted/risk-reward.png'), alt: 'Bank or push your luck', caption: 'Risk vs. reward' },
  { src: withBase('/images/runeted/wandering-merchant.png'), alt: 'Wandering merchant dialog', caption: 'Wandering merchant' },
  { src: withBase('/images/runeted/merchant-map.png'), alt: 'World map with merchant', caption: 'World map' },
];

export const projects = [
  {
    slug: 'runeted',
    name: 'Runeted',
    tagline: 'Real-time action RPG — engine, economy & UI, solo-built',
    tags: ['Python', 'FastAPI', 'JavaScript', 'Figma', 'Tableau'],
    href: '/projects/runeted',
  },
  {
    slug: 'reconnect-sg',
    name: 'Re:Connect SG',
    tagline:
      'Gamified web platform matching elderly and youth for social connection',
    tags: ['HTML/CSS/JS', 'Python', 'SQL'],
    href: '/projects/reconnect-sg',
  },
];

export const reconnectSG = {
  slug: 'reconnect-sg',
  name: 'Re:Connect SG',
  tagline: 'Group academic project',
  description:
    'A group project exploring how a web platform can encourage interaction between elderly and youth through gamification and digital matching features.',
  stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
  bullets: [
    'Designed and implemented the youth–elderly matching feature and an in-platform chat function connecting matched users.',
    'Debugged and resolved system integration issues to keep user flows functionally stable across the platform.',
    'Contributed to wireframing and UX planning for the matching and messaging flows.',
  ],
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/creamfruit' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/li-sean-chong-2ab712363/',
  },
  { label: 'Email', href: 'mailto:seanchong2008@gmail.com' },
];
