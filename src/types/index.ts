export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  deployedLink?: string;
  repoLink?: string;
  duration: string;
  imageUrl?: string;
}

export interface Skill {
  category: string;
  technologies: string[];
  icons?: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}