import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Chatt-r',
    description: 'A full-featured chat application built with NextJS featuring real-time messaging, JWT authentication, and responsive design. Implemented secure user sessions and optimized for performance across devices.',
    techStack: ['NextJS', 'React', 'TypeScript', 'JWT Auth', 'Pusher.io (Websocket)'],
    deployedLink: 'https://chatt-r.vercel.app',
    duration: '100+ hours',
    imageUrl: '/images/chatt-r-preview.jpg'
  },
  {
    id: '2',
    title: 'Stacks Records',
    description: 'A full-stack vinyl record collection application that allows authenticated users to browse, listen to, add to, and maintain their digital record collections. Features secure authentication and favoriting records.',
    techStack: ['React', 'Express.js','OAuth', 'RESTful API', 'Node.js'],
    deployedLink: 'https://stacks-records.vercel.app',
    duration: '30 hours',
    imageUrl: '/images/stacks-records-preview.jpg'
  },
  {
    id: '3',
    title: 'FruitWise',
    description: 'A react application that helps users track and analyze fruit nutrition using the FruityVice API, featuring seasonal fruit displays, comprehensive searching, and personalized nutritional breakdowns. Users can favorite fruits, sort by nutritional values, and log their consumption with customizable serving sizes to monitor their dietary intake.',
    techStack: ['React', 'React Router', 'CSS', 'Data Visualization'],
    deployedLink: 'https://fruitwise.vercel.app',
    duration: '40 hours',
    imageUrl: '/images/fruitwise-preview.jpg'
  },
];