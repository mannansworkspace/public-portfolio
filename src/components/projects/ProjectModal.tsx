'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#1a1f25] rounded-xl overflow-hidden w-[95vw] h-[90vh] lg:w-[85vw] lg:h-[85vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-gray-800 shrink-0">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white truncate pr-4">{project.title}</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white p-2 -m-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="flex-1 min-h-0">
            <div className="h-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
              {/* Left Column - Project Details */}
              <div className="h-[40vh] lg:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <div className="p-4 sm:p-6 space-y-6">
                  {project.description && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Description</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                    </div>
                  )}

                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Features</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex flex-col sm:flex-row gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors text-sm sm:text-base"
                        >
                          View Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors text-sm sm:text-base"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  )}

                  {project.details && (
                    <div className="space-y-4">
                      {project.details.challenge && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Challenge</h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.details.challenge}</p>
                        </div>
                      )}
                      {project.details.solution && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Solution</h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.details.solution}</p>
                        </div>
                      )}
                      {project.details.impact && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Impact</h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.details.impact}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Media Gallery */}
              {project.media && project.media.length > 0 && (
                <div className="h-[45vh] lg:h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                  <div className="p-4 sm:p-6 space-y-4">
                    {project.media.map((item, index) => (
                      <div
                        key={index}
                        className="relative w-full aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden bg-[#1a1f25]"
                      >
                        {isLoading && (
                          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
                        )}
                        {item.type === 'image' ? (
                          <Image
                            src={item.url}
                            alt={item.alt || `${project.title} preview ${index + 1}`}
                            fill
                            className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                            quality={90}
                            priority={index === 0}
                            onLoad={() => setIsLoading(false)}
                          />
                        ) : (
                          <video
                            src={item.url}
                            controls
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 