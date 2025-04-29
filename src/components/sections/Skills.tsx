'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';
import Image from 'next/image';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
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
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a1f25] rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {skillCategory.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {skillCategory.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-[#2a2f35] rounded-lg p-3 hover:bg-[#3a3f45] transition-colors"
                  >
                    {skill.icon && (
                      <div className="w-6 h-6 relative">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-gray-300">{skill.name}</span>
                      {skill.description && (
                        <p className="text-xs text-gray-400 mt-1">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 