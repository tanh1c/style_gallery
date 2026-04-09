/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const Logo = () => (
  <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.04356 6.35771L13.6437 0.666504L26.2438 6.35771L26.2438 19.6423L13.6437 25.3335L1.04356 19.6423L1.04356 6.35771Z"
      fill="white"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20 w-full px-6 py-[16px] lg:px-[120px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          <a href="#" className="font-manrope text-[14px] font-medium text-white transition-opacity hover:opacity-80">
            Home
          </a>
          <button className="flex items-center gap-1 font-manrope text-[14px] font-medium text-white transition-opacity hover:opacity-80">
            Services <ChevronDown size={14} />
          </button>
          <a href="#" className="font-manrope text-[14px] font-medium text-white transition-opacity hover:opacity-80">
            Reviews
          </a>
          <a href="#" className="font-manrope text-[14px] font-medium text-white transition-opacity hover:opacity-80">
            Contact us
          </a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-[8px] border border-[#d4d4d4] bg-white px-5 py-2 font-manrope text-[14px] font-semibold text-[#171717] transition-all hover:bg-gray-100">
            Sign In
          </button>
          <button className="rounded-[8px] bg-[#7b39fc] px-5 py-2 font-manrope text-[14px] font-semibold text-[#fafafa] shadow-lg transition-all hover:bg-[#6a2ee0]">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 flex flex-col bg-black p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-8 text-center">
              <a href="#" className="font-manrope text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#" className="font-manrope text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#" className="font-manrope text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <a href="#" className="font-manrope text-2xl font-medium text-white" onClick={() => setIsMenuOpen(false)}>Contact us</a>
              <div className="mt-8 flex flex-col gap-4">
                <button className="rounded-[8px] bg-white py-4 font-manrope text-lg font-semibold text-black">Sign In</button>
                <button className="rounded-[8px] bg-[#7b39fc] py-4 font-manrope text-lg font-semibold text-white">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <section className="relative z-10 mt-32 flex flex-col items-center px-6 text-center">
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex h-[38px] items-center gap-2 rounded-[10px] border border-[rgba(164,132,215,0.5)] bg-[rgba(85,80,110,0.4)] px-3 backdrop-blur-md"
        >
          <span className="rounded-[6px] bg-[#7b39fc] px-2 py-0.5 font-cabin text-[12px] font-medium text-white">
            New
          </span>
          <span className="font-cabin text-[14px] font-medium text-white">
            Say Hello to Datacore v3.2
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 font-instrument text-5xl leading-[1.1] text-white lg:text-[96px]"
        >
          Book your perfect stay instantly <br className="hidden lg:block" />
          <span className="italic">and</span> hassle-free
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-[662px] font-inter text-[18px] font-normal text-white/70"
        >
          Discover handpicked hotels, resorts, and stays across your favorite destinations. 
          Enjoy exclusive deals, fast booking, and 24/7 support.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="rounded-[10px] bg-[#7b39fc] px-8 py-4 font-cabin text-[16px] font-medium text-white transition-all hover:bg-[#6a2ee0]">
            Book a Free Demo
          </button>
          <button className="rounded-[10px] bg-[#2b2344] px-8 py-4 font-cabin text-[16px] font-medium text-[#f6f7f9] transition-all hover:bg-[#3a305a]">
            Get Started Now
          </button>
        </motion.div>
      </section>
    </main>
  );
}
