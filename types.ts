
export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  thumbnailUrl: string;
  company: string;
  domain: string;
  problem: string;
  role: string;
  team: string[];
  process: {
    title: string;
    description: string;
  }[];
  solution: {
    description: string;
    images: string[];
  };
  impact: string;
  learnings: string;
  links: ProjectLink[];
  tags: string[];
  impactMetrics?: Array<{
    value: string;
    label: string;
  }>;
}

export interface LiveProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  domain: string;
  platform: string;
}
