import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'End-to-end web solutions with modern technologies and best practices',
    icon: 'globe',
    features: [
      'Full-stack web applications',
      'E-commerce solutions',
      'Content Management Systems',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Responsive Design',
      'Single Page Applications',
      'Interactive UI/UX',
      'State Management',
      'Performance Optimization'
    ],
    technologies: ['ReactJs', 'NextJs', 'NodeJs', 'NestJs', 'Express', 'MongoDB', 'PostgreSQL' , 'Maps', 'Social Auth', 'Payment Gateways', 'Customize and  Responsive Designs']
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Robust and scalable backend solutions with modern architectures',
    icon: 'server',
    features: [
      'RESTful API Development',
      'GraphQL API Development',
      'Microservices Architecture',
      'Database Design & Optimization',
      'Authentication & Authorization',
      'Server Performance Optimization',
      'Error Handling & Logging',
      'API Testing & Validation',
      'Rate Limiting',
      'Caching Strategies',
      
    ],
    technologies: ['NodeJs', 'NestJS', 'Express', 'Prisma', 'TypeORM', 'MongoDB','Sequelize','Mongoose', "MongoDb", 'PostgreSQL', 'Socket.io', 'Redis', 'RabbitMQ', 'SSE' ]
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Modern and responsive frontend solutions with cutting-edge technologies',
    icon: 'laptop-code',
    features: [
      'Responsive Web Design',
      'Single Page Applications',
      'Interactive UI/UX',
      'State Management',
      'Performance Optimization'
    ],
    technologies: ['React', 'NextJs', 'TypeScript', 'Redux', 'Context API','Scss', 'TailwindCSS', 'Material-UI' , 'Bootstrap', 'Ant Design', 'Charts', 'Maps', 'Social Auth', 'Payment Gateways', 'Customize and  Responsive Designs']
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Streamlined deployment and infrastructure management',
    icon: 'cloud',
    features: [
      'CI/CD Pipeline Setup',
      'Cloud Infrastructure',
      'Container Orchestration',
      'Monitoring & Logging',
      'Security Implementation'
    ],
    technologies: ['AWS', 'Docker', 'GitHub Actions','CI/CD', 'Pulumi', 'Serverless', 'EC2', 'ECS', 'Load Balancer', 'Nginx', 'Jenkins', 'Terraform']
  }
]; 