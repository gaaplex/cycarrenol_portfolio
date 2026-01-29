
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'High-Throughput Microservices Orchestrator',
    description: 'A distributed system designed to handle over 100k requests per second using Node.js and Redis. Implemented custom rate limiting and circuit breaking patterns.',
    technologies: ['Node.js', 'Redis', 'Docker', 'gRPC'],
    link: '#',
    github: 'https://github.com'
  },
  {
    id: '2',
    title: 'Real-time Event Streaming Pipeline',
    description: 'Architecture for ingesting IoT telemetry data, processing it in-flight, and storing it in a time-series database for analytics.',
    technologies: ['TypeScript', 'Kafka', 'PostgreSQL', 'TimescaleDB'],
    link: '#',
    github: 'https://github.com'
  },
  {
    id: '3',
    title: 'Secure Authentication Gateway',
    description: 'An enterprise-grade OAuth2/OIDC gateway with advanced session management and multi-factor authentication integration.',
    technologies: ['Express.js', 'Redis', 'OAuth2', 'JWT'],
    link: '#',
    github: 'https://github.com'
  },
  {
    id: '4',
    title: 'Automated CI/CD Pipeline for Scale',
    description: 'Reduced deployment times by 60% by implementing a custom containerized build environment with intelligent caching.',
    technologies: ['Github Actions', 'Kubernetes', 'Terraform', 'Helm'],
    link: '#',
    github: 'https://github.com'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Node.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Go', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'GraphQL', category: 'Framework' },
  { name: 'NestJS', category: 'Framework' },
];
