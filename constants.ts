
import { Project, Skill } from './types';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch('https://api.github.com/users/gaaplex/repos?sort=created&direction=desc');
    const data = await response.json();
    
    return data
      .filter((repo: any) => !repo.fork && repo.name !== 'cycarrenol_portfolio')
      .map((repo: any) => ({
        id: String(repo.id),
        title: repo.name.split(/[-_]/).map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        description: repo.description || 'Professional software project focused on backend logic and scalability.',
        link: repo.homepage || repo.html_url,
        github: repo.html_url
      }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};


export const SKILLS: Skill[] = [
  { name: 'Node.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Express.js', category: 'Framework' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'GraphQL', category: 'Framework' },
  { name: 'NestJS', category: 'Framework' },
];
