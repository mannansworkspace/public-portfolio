import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    shortDescription: 'A modern and responsive portfolio website showcasing my work and skills',
    thumbnail: '/images/projects/portfolio/preview1.webp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    description: 'A modern portfolio website built with Next.js and TypeScript, featuring smooth animations, 3D elements, and a responsive design. The website showcases my projects, skills, and experience in an engaging and interactive way.',
    features: [
      'Responsive design that works on all devices',
      'Smooth animations and transitions using Framer Motion',
      'Interactive 3D elements with Three.js',
      'Dark mode support',
      'Project showcase with detailed information',
      'Contact form with email integration'
    ],
    liveUrl: 'https://mannansportfolio.vercel.app/',
    githubUrl: 'https://github.com/your-username/portfolio',
    media: [
      {
        type: 'image',
        url: '/images/projects/portfolio/preview1.webp',
        alt: 'Portfolio Homepage'
      },
      {
        type: 'image',
        url: '/images/projects/portfolio/preview2.webp',
        alt: 'Projects Section'
      },
      {
        type: 'image',
        url: '/images/projects/portfolio/preview3.webp',
        alt: 'Skills Section'
      },
      {
        type: 'image',
        url: '/images/projects/portfolio/preview4.webp',
        alt: 'Contact Section'
      },
      {
        type: 'image',
        url: '/images/projects/portfolio/preview5.webp',
        alt: 'Contact Section'
      },
      {
        type: 'image',
        url: '/images/projects/portfolio/preview6.webp',
        alt: 'Contact Section'
      },
      {
        type: 'image',
        url: '/images/projects/portfolio/preview7.webp',
        alt: 'Contact Section'
      }
    ],
    featured: true,
    highlights: [
      'Modern and clean design',
      'Optimized performance',
      'SEO friendly',
      'Accessibility compliant'
    ],
    details: {
      challenge: 'Creating a portfolio that stands out while maintaining performance and accessibility',
      solution: 'Implemented modern web technologies with a focus on user experience and performance optimization',
      impact: 'Successfully created a portfolio that effectively showcases my work and skills while providing an engaging user experience'
    }
  }
];