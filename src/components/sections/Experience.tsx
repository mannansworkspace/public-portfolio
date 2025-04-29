'use client';

import { motion } from 'framer-motion';
import type { Experience } from '@/types';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
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
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a1f25] rounded-xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {experience.position}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {experience.company}
                  </p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  {experience.duration.start} - {experience.duration.end}
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                {experience.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={tech + index}
                    className="text-xs bg-[#2a2f35] text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 