import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    icons: ['https://cdn.simpleicons.org/react',
      'https://cdn.simpleicons.org/typescript',
      'https://cdn.simpleicons.org/javascript',
      'https://cdn.simpleicons.org/html5',
      'https://cdn.simpleicons.org/css3']
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    icons: ['https://cdn.simpleicons.org/nodedotjs',
      'https://cdn.simpleicons.org/express',
      'https://cdn.simpleicons.org/postgresql']
  },
  {
    category: 'Tools & Others',
    technologies: ['Git', 'Responsive Design', 'Accessibility']
  }
];