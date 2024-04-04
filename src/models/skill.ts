export type Skill = {
  name: string;
  id: string;
  url: string;
  category: SkillCategory;
  isHighlight: boolean;
  level: number;
};

export type SkillCategory =
  | 'highlights'
  | 'frontend'
  | 'backend'
  | 'styling'
  | 'testing'
  | 'tools'
  | 'discipline'
  | 'hosting'
  | 'others'
  | 'database';

export type CategorizedSkill = {
  category: SkillCategory;
  skills: Skill[];
};

export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    category: 'frontend',
    url: 'https://react.dev/',
    isHighlight: true,
    level: 5,
  },
  {
    id: '2',
    name: 'NextJS',
    category: 'frontend',
    url: 'https://nextjs.org/',
    isHighlight: true,
    level: 5,
  },
  {
    id: '3',
    name: 'Tailwind',
    category: 'frontend',
    url: 'https://tailwindcss.com/',
    isHighlight: true,
    level: 5,
  },
  {
    id: '4',
    name: 'TypeScript',
    category: 'frontend',
    url: 'https://www.typescriptlang.org/',
    isHighlight: true,
    level: 5,
  },
  {
    id: '5',
    name: 'Redux',
    category: 'frontend',
    url: 'https://redux.js.org/',
    isHighlight: false,
    level: 2,
  },
  {
    id: '6',
    name: 'Vercel',
    category: 'hosting',
    url: 'https://vercel.com/',
    isHighlight: false,
    level: 4,
  },
  {
    id: '7',
    name: 'Heroku',
    category: 'hosting',
    url: 'https://www.heroku.com/',
    isHighlight: false,
    level: 3,
  },
  {
    id: '8',
    name: 'AWS',
    category: 'hosting',
    url: 'https://aws.amazon.com/',
    isHighlight: false,
    level: 4,
  },
  {
    id: '9',
    name: 'Github',
    category: 'tools',
    url: 'https://github.com/',
    isHighlight: false,
    level: 5,
  },
  {
    id: '10',
    name: 'React Native',
    category: 'frontend',
    url: 'https://reactnative.dev/',
    isHighlight: false,
    level: 1,
  },
  {
    id: '11',
    name: 'VSCode',
    category: 'tools',
    url: 'https://code.visualstudio.com/',
    isHighlight: false,
    level: 1,
  },
  {
    id: '12',
    name: 'Playwright',
    category: 'testing',
    url: 'https://playwright.dev/',
    isHighlight: true,
    level: 4,
  },
  {
    id: '13',
    name: 'K6',
    category: 'testing',
    url: 'https://k6.io/',
    isHighlight: false,
    level: 1,
  },
  {
    id: '14',
    name: 'GraphQL',
    category: 'frontend',
    url: 'https://graphql.org/',
    isHighlight: false,
    level: 1,
  },
  {
    id: '15',
    name: 'NodeJS',
    category: 'backend',
    url: 'https://nodejs.org/en/',
    isHighlight: false,
    level: 2,
  },
];
