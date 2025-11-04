export interface Skill {
  name: string;
  description: string;
  level?: number; // 0-100
  tools?: string[];
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
      {
        name: 'Visual Design (UI)',
        description: 'Crafting pixel-perfect, aesthetically pleasing interfaces that reinforce brand identity.',
        level: 90,
        tools: ['Adobe Suite', 'Color Theory', 'Typography'],
      },
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
        {
            name: 'Communication & Storytelling',
            description: 'Simplifying complexity for both technical and business stakeholders.',
            level: 95,
            tools: ['Presentations', 'Storytelling', 'Alignment']
        },
        {
            name: 'Leadership & Mentoring',
            description: 'Onboarding junior designers and facilitating team knowledge sharing.',
            level: 90,
            tools: ['Team Building', 'Feedback', 'Mentoring']
        },
        {
            name: 'Proactivity & Ownership',
            description: 'Taking initiative and driving solutions from ideation to launch.',
            level: 95,
            tools: ['Initiative', 'Problem Solving', 'Roadmapping']
        },
        {
            name: 'Stakeholder Management',
            description: 'Aligning work with business goals, with empathy for all product aspects.',
            level: 90,
            tools: ['Negotiation', 'Empathy', 'Collaboration']
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
        description: 'Interpreting analytics to understand user behavior and measure design impact.',
        level: 75,
        tools: ['Amplitude', 'Mixpanel', 'GA'],
      },
      {
        name: 'Competitive Analysis',
        description: 'Evaluating market landscape to identify opportunities and strategic advantages.',
        level: 80,
        tools: ['SWOT', 'Market Research', 'Reports'],
      },
    ]
  },
];