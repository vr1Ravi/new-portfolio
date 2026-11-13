import {
  FaJava,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiD3Dotjs,
  SiNodedotjs,
  SiExpress,
  SiHono,
  SiFastapi,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiGooglecloud,
  SiDocker,
  SiGooglegemini,
  SiVite,
  SiPostman,
  SiGit,
  TbSql,
  TbBrandReactNative,
  TbApi,
  TbHierarchy2,
  TbVectorTriangle,
  TbLink,
  TbGraph,
  TbDatabaseSearch,
  TbSparkles,
} from '@/app/ui/icons';

// export const newProject = {
//   title: 'Recipe App',
//   description:
//     'A Recipe Web App, enabling users to search for recipes, access tutorials, and save favorites. Implemented skeleton loading, pagination for better UX and Gmail authentication for user management and security.',
//   icon: '🍜',
//   image: '/project3.png',
//   techStack: ['mongodb', 'react.js', 'jwt', 'tailwind', 'express.js'],
//   href: 'https://recipe-app-vr1ravi.vercel.app/',

// };
export const newProject = null;

export const skillGroups = [
  {
    name: 'Languages',
    items: [
      { title: 'JavaScript', Icon: SiJavascript },
      { title: 'TypeScript', Icon: SiTypescript },
      { title: 'Java', Icon: FaJava },
      { title: 'Python', Icon: SiPython },
      { title: 'SQL', Icon: TbSql },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { title: 'React.js', Icon: SiReact },
      { title: 'Next.js', Icon: SiNextdotjs },
      { title: 'React Native', Icon: TbBrandReactNative },
      { title: 'Redux Toolkit', Icon: SiRedux },
      { title: 'Tailwind CSS', Icon: SiTailwindcss },
      { title: 'D3.js', Icon: SiD3Dotjs },
    ],
  },
  {
    name: 'Backend & Systems',
    items: [
      { title: 'Node.js', Icon: SiNodedotjs },
      { title: 'Express.js', Icon: SiExpress },
      { title: 'Hono', Icon: SiHono },
      { title: 'FastAPI', Icon: SiFastapi },
      { title: 'REST APIs', Icon: TbApi },
      { title: 'GraphQL', Icon: SiGraphql },
      { title: 'Microservices', Icon: TbHierarchy2 },
    ],
  },
  {
    name: 'Databases & Cloud',
    items: [
      { title: 'PostgreSQL', Icon: SiPostgresql },
      { title: 'MongoDB', Icon: SiMongodb },
      { title: 'Redis', Icon: SiRedis },
      { title: 'SQLite', Icon: SiSqlite },
      { title: 'pgvector', Icon: TbVectorTriangle },
      { title: 'GCP', Icon: SiGooglecloud },
      { title: 'Docker', Icon: SiDocker },
    ],
  },
  {
    name: 'GenAI & Tools',
    items: [
      { title: 'LangChain', Icon: TbLink },
      { title: 'LangGraph', Icon: TbGraph },
      { title: 'RAG', Icon: TbDatabaseSearch },
      { title: 'Gemini', Icon: SiGooglegemini },
      { title: 'Anthropic', Icon: TbSparkles },
      { title: 'Git', Icon: SiGit },
      { title: 'Vite', Icon: SiVite },
      { title: 'Postman', Icon: SiPostman },
    ],
  },
];
