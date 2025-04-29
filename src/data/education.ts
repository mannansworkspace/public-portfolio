import { Education } from '@/types';

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Tech University",
    duration: {
      start: "2017",
      end: "2021"
    },
    location: "Boston, MA",
    cgpa: "3.85",
    description: "Specialized in Software Engineering and Web Development with a focus on modern technologies and best practices.",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Web Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Computer Architecture"
    ]
  },
  {
    degree: "Advanced Certification in Full Stack Development",
    institution: "Code Academy",
    duration: {
      start: "2022",
      end: "2022"
    },
    location: "Online",
    cgpa: "4.0",
    description: "Intensive program focusing on modern web technologies and full-stack development practices.",
    courses: [
      "Advanced JavaScript and TypeScript",
      "React and Next.js Development",
      "Node.js and Express",
      "Database Design",
      "Cloud Computing",
      "Testing and QA",
      "Agile Development"
    ]
  }
];