'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = projects.length - 1;

  // Auto scroll
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex(current => current >= totalSlides ? 0 : current + 1);
    }, 2000);


    return () => clearInterval(interval);
  }, [isHovering, totalSlides]);

  // Handle navigation
  const handlePrevious = () => {
    setCurrentIndex(current => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setCurrentIndex(current => Math.min(totalSlides, current + 1));
  };

  return (
    <section className="py-20 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
            Projects
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center cursor-pointer transform -translate-x-1/2 sm:-translate-x-1/3 md:-translate-x-1/4 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
              }`}
            disabled={currentIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          {/* Projects Container */}
          <div
            ref={containerRef}
            className="overflow-hidden justify-center items-center mx-4 sm:mx-6 md:mx-8"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className="flex items-center transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="max-w-3xl mx-auto">
                    <ProjectCard
                      project={project}
                      onOpenModal={setSelectedProject}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center cursor-pointer transform translate-x-1/2 sm:translate-x-1/3 md:translate-x-1/4 ${currentIndex >= totalSlides ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
              }`}
            disabled={currentIndex >= totalSlides}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === idx ? 'bg-blue-400' : 'bg-[#2a2f35]'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
} 