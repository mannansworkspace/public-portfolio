import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechVision Solutions',
    position: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    duration: {
      start: '2023',
      end: 'Present'
    },
    technologies: [
      'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
      'Docker', 'AWS', 'GraphQL', 'GitHub Actions'
    ],
    summary: 'Leading the development of enterprise-level web applications, implementing microservices architecture, and mentoring junior developers. Successfully improved application performance by 45% and reduced deployment time by 60%.'
  },
  {
    id: '2',
    company: 'Digital Innovations Inc',
    position: 'Full Stack Developer',
    location: 'New York, NY',
    duration: {
      start: '2021',
      end: '2023'
    },
    technologies: [
      'React', 'TypeScript', 'Node.js', 'Express',
      'MongoDB', 'Redis', 'Docker', 'AWS'
    ],
    summary: 'Developed and maintained multiple web applications, implemented robust authentication systems, and optimized database performance. Reduced API response time by 50% and improved user engagement by 35%.'
  },
  {
    id: '3',
    company: 'WebTech Solutions',
    position: 'Frontend Developer',
    location: 'Austin, TX',
    duration: {
      start: '2019',
      end: '2021'
    },
    technologies: [
      'React', 'Redux', 'JavaScript', 'CSS',
      'HTML', 'Bootstrap', 'jQuery'
    ],
    summary: 'Built responsive user interfaces, implemented state management solutions, and improved website accessibility. Enhanced website performance by 40% and reduced page load time by 50%.'
  }
];