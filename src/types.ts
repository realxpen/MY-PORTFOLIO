export type ProjectCategory = 'All' | 'Product' | 'Software' | 'AI' | 'Data' | 'Experiments';

export type ProjectStatus = 'In Active Development' | 'Production Prototype' | 'Shipped / Live' | 'Research & Lab' | 'Concept Architecture';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  role: string;
  category: 'Product' | 'Software' | 'AI' | 'Data' | 'Experiments';
  status: ProjectStatus;
  technologies: string[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  caseStudyAvailable?: boolean;
  caseStudyDetails?: {
    overview: string;
    challenge: string;
    solution: string;
    architecture: string[];
    keyFeatures: string[];
    learnings: string;
  };
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  skills: {
    name: string;
    description?: string;
    context?: string;
    badge?: string;
  }[];
}

export interface JourneyMilestone {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  category: 'Education' | 'Data & Analytics' | 'Software Engineering' | 'Product & Entrepreneurship';
  description: string;
  highlights: string[];
  skillsGained: string[];
}

export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  status: string;
  category: string;
  description: string;
  focusArea: string;
  nextMilestone: string;
  progressPercentage?: number;
  tags: string[];
  linkText?: string;
  linkAction?: string;
}

export interface ThinkingArticle {
  id: string;
  title: string;
  tagline: string;
  date: string;
  readTime: string;
  topic: 'AI & LLMs' | 'System Architecture' | 'Marketplace Economics' | 'African Tech Ecosystem' | 'Product Design';
  summary: string;
  content: string;
  keyTakeaways: string[];
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
  availabilityStatus: string;
}

export type PresentationType = 'All' | 'Keynote' | 'Technical Workshop' | 'Conference Talk' | 'Panel Discussion';

export interface PresentationTalk {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  type: 'Keynote' | 'Technical Workshop' | 'Conference Talk' | 'Panel Discussion';
  audience: string;
  abstract: string;
  keyTakeaways: string[];
  tags: string[];
  featured?: boolean;
  slidesUrl?: string;
  videoUrl?: string;
  deckOutline?: {
    slideNumber: number;
    title: string;
    description: string;
  }[];
}
