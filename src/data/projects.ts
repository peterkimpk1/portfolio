import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Chatt-r',
    description: 'A full-featured chat application built with NextJS featuring real-time messaging, user authentication, and responsive design. Implemented secure user sessions and optimized for performance across devices.',
    techStack: ['NextJS', 'React', 'TypeScript', 'Authentication', 'Real-time messaging'],
    deployedLink: 'https://chatt-r.vercel.app',
    repoLink: 'https://github.com/peterkimpk1/chatt-r',
    duration: '100+ hours',
    gifUrl: '/gifs/chatt-r-demo.gif'
  },
  {
    id: '2',
    title: 'FruitWise',
    description: 'A React-based fruit logging application that won the demo competition. Features intuitive UI for tracking fruit consumption, data visualization, and personalized recommendations for healthy eating habits.',
    techStack: ['React', 'JavaScript', 'CSS3', 'Data Visualization', 'Local Storage'],
    deployedLink: 'https://fruitwise.vercel.app',
    repoLink: 'https://github.com/peterkimpk1/fruitwise',
    duration: '40 hours',
    gifUrl: '/gifs/fruitwise-demo.gif'
  },
  {
    id: '3',
    title: 'Stacks Records',
    description: 'A full-stack album sharing platform with OAuth integration. Users can discover, share, and discuss music albums with a community-driven approach. Features secure authentication and personalized music recommendations.',
    techStack: ['Full-stack', 'OAuth', 'Database', 'RESTful API', 'React', 'Node.js'],
    deployedLink: 'https://stacks-records.vercel.app',
    repoLink: 'https://github.com/peterkim/stacks-records',
    duration: '30 hours',
    gifUrl: '/gifs/stacks-records-demo.gif'
  }
];