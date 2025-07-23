export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: 'web' | 'mobile' | '3d' | 'ai';
  caseStudy?: {
    problem: string;
    solution: string;
    challenges: string[];
    outcomes: string[];
  };
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | '3d' | 'ai';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  slug: string;
} 