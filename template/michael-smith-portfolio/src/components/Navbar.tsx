import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "Work", "Resume"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 md:pt-4 px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-1.5 py-1.5 transition-all duration-300",
          isScrolled && "shadow-md shadow-black/10"
        )}
      >
        {/* Logo */}
        <div className="group relative w-8 h-8 flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
          <div className="absolute inset-0 accent-gradient transition-transform duration-500 group-hover:rotate-180" />
          <div className="absolute inset-[1.5px] bg-bg rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="font-display italic text-[12px] text-text-primary">JA</span>
          </div>
        </div>

        <div className="hidden md:block w-px h-4 bg-stroke mx-1" />

        {/* Nav Links */}
        <div className="flex items-center gap-0.5">
          {navLinks.map((link, i) => (
            <button
              key={link}
              className={cn(
                "text-[11px] sm:text-xs rounded-full px-3 sm:px-4 py-1 sm:py-1.5 transition-colors",
                i === 0 
                  ? "text-text-primary bg-stroke/50" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              )}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="w-px h-4 bg-stroke mx-1" />

        {/* Say Hi Button */}
        <button className="group relative text-[11px] sm:text-xs rounded-full px-3 sm:px-4 py-1 sm:py-1.5 transition-colors text-muted hover:text-text-primary">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-[-2px] accent-gradient rounded-full blur-[2px]" />
          </div>
          <div className="relative bg-surface rounded-full px-3 sm:px-4 py-1 sm:py-1.5 flex items-center gap-1">
            Say hi <span className="text-[9px]">↗</span>
          </div>
        </button>
      </motion.div>
    </nav>
  );
}
