'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types';

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
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
            Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized solutions tailored to your needs with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a1f25] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 text-blue-400 text-3xl">
                <i className={`fas fa-${service.icon}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <i className="fas fa-check text-green-400 mr-3 text-sm" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {service?.technologies?.map((tech) => (
                  <span
                    key={tech}
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