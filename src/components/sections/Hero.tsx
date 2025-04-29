'use client';

import { motion } from 'framer-motion';
import { PersonalInfo } from '@/types';
import AnimatedBackground from '@/components/three/AnimatedBackground';
import LoadingScreen from '@/components/three/LoadingScreen';
import { Suspense } from 'react';
import Image from 'next/image';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-[#0a0c10]">
      <Suspense fallback={<LoadingScreen />}>
        <AnimatedBackground />
      </Suspense>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar Container */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-md opacity-50" />

              {/* Avatar container with border */}
              <div className="relative w-full h-full rounded-full border-4 border-blue-400/50 overflow-hidden">
                <Image
                  src="/images/profile.webp"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Optional: Decorative dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400 blur-sm" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-400 blur-sm" />
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8">
            {personalInfo.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12">
            {personalInfo.bio}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12">
            {personalInfo.longBio}
          </p>

          <div className="flex gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
            {personalInfo.socialLinks.github && (
              <motion.a
                whileHover={{ y: -3 }}
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-github text-xl sm:text-2xl" />
              </motion.a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <motion.a
                whileHover={{ y: -3 }}
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-linkedin text-xl sm:text-2xl" />
              </motion.a>
            )}
            {personalInfo.socialLinks.upwork && (
              <motion.a
                whileHover={{ y: -3 }}
                href={personalInfo.socialLinks.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-upwork text-xl sm:text-2xl" />
              </motion.a>
            )}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <i className="fas fa-chevron-down text-blue-400 text-xl sm:text-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 