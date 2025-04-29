'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
  ];

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0c10]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text"
            >
              Portfolio
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300 p-2 -mr-2 hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <i className="fas fa-bars text-xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-64 bg-[#0a0c10] border-l border-gray-800 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800">
                  <h2 className="text-lg font-semibold text-white">Navigation</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fas fa-times text-xl" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-6 py-3 text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      whileHover={{ x: 4 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 