/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay for better text readability if needed, though prompt doesn't specify one */}
        {/* <div className="absolute inset-0 bg-black/10" /> */}

        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col">
          {/* Navigation Bar */}
          <nav className="w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between z-50">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-gray-900 tracking-tight">
                SkyElite
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-900 hover:text-gray-700 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-20 left-4 right-4 md:hidden z-40"
              >
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 flex flex-col gap-4 border border-white/20">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content Area */}
          <main className="flex-1 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center -mt-80"
            >
              <span className="block text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                PRIVATE JETS
              </span>
              
              <div className="relative inline-block mb-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                  Premium.
                </h1>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-brand-dark leading-none tracking-tighter -mt-[12px]">
                  Accessible.
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Your dedication deserves recognition.
              </p>

              <div className="flex flex-row items-center justify-center gap-4">
                <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors duration-300">
                  Discover
                </button>
                <button className="px-4 py-2 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-hover transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          </main>
        </div>
      </section>
    </div>
  );
}
