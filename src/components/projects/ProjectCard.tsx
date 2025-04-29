'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!project) return null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col w-full max-w-md mx-auto"
      onClick={() => onOpenModal(project)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        )}
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title || 'Project thumbnail'}
            fill
            className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
            quality={95}
            loading="eager"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white line-clamp-1">
          {project.title || 'Untitled Project'}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          {project.shortDescription || 'No description available'}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-full">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
} 