'use client';

import { motion } from 'framer-motion';
import type { Education } from '@/types';

interface EducationProps {
  education: Education[];
}

export default function Education({ education }: EducationProps) {
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
            Education
          </h2>
        </motion.div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1f25] rounded-xl p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-blue-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-400">
                  {edu.location}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-gray-400">
                  {edu.duration.start} - {edu.duration.end}
                </p>
                <p className="text-green-400 font-semibold mt-2">
                  CGPA: {edu?.cgpa}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Core Courses
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {edu?.courses?.map((course, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center bg-[#2a2f35] rounded-lg p-3"
                  >
                    <i className="fas fa-graduation-cap text-blue-400 mr-3" />
                    <span className="text-gray-300">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 