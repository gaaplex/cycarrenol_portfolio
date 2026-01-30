
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Colombian Store',
    description: 'high-performance web application built with Node.js as a foundational server-side exercise. It utilizes a custom-built routing system to serve a dynamic storefront for iconic Colombian products.',
    technologies: ['Node.js', 'Express.js', 'Docker', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/gaaplex/colombianStore',
    github: 'https://github.com/gaaplex/colombianStore'
  }
];

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
