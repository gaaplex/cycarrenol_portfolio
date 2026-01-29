
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Database' | 'DevOps' | 'Framework';
}
