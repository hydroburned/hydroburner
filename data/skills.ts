export interface Skill {
  name: string;
  description: string;
  level: number; // 0-100
  tools: string[];
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Design',
    skills: [
      {
        name: 'Product Design',
        description: 'Creating intuitive, user-centered interfaces that solve complex problems.',
        level: 95,
        tools: ['Figma', 'Sketch', 'Adobe XD'],
      },
      {
        name: 'Design Systems',
        description: 'Building and maintaining scalable, consistent, and well-documented systems.',
        level: 90,
        tools: ['Figma Libraries', 'Storybook', 'Zeroheight'],
      },
      {
        name: 'Prototyping',
        description: 'Bringing ideas to life with interactive prototypes to test and validate concepts.',
        level: 85,
        tools: ['Figma', 'Principle', 'Framer'],
      },
    ]
  },
  {
    name: 'Strategy & Research',
    skills: [
       {
        name: 'User Research',
        description: 'Conducting interviews and tests to uncover user needs and inform strategy.',
        level: 80,
        tools: ['Maze', 'UserTesting.com', 'Dovetail'],
      },
      {
        name: 'Product Strategy',
        description: 'Aligning user needs with business goals to define product roadmaps and features.',
        level: 85,
        tools: ['Miro', 'Notion', 'Jira'],
      },
      {
        name: 'Data Analysis',
        description: 'Interpreting analytics and metrics to understand user behavior and measure design impact.',
        level: 75,
        tools: ['Google Analytics', 'Amplitude', 'Mixpanel'],
      },
    ]
  },
];