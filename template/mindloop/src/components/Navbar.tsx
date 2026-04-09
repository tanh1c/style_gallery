import { Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const navLinks = ["Home", "How It Works", "Philosophy", "Use Cases"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-28 py-4 bg-transparent">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <div className="relative w-7 h-7 border-2 border-foreground/60 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 border border-foreground/60 rounded-full" />
        </div>
        <span className="text-xl font-bold tracking-tight">Mindloop</span>
      </div>

      {/* Center-left: Nav links */}
      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link, i) => (
          <div key={link} className="flex items-center gap-4">
            <a
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link}
            </a>
            {i < navLinks.length - 1 && (
              <span className="text-muted-foreground/30 text-xs">•</span>
            )}
          </div>
        ))}
      </div>

      {/* Right: Social icons */}
      <div className="flex items-center gap-3">
        {[Instagram, Linkedin, Twitter].map((Icon, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
          >
            <Icon size={18} />
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
