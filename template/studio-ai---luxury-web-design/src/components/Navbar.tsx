import { ArrowUpRight, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl liquid-glass-strong flex items-center justify-center">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-xl font-heading italic text-white tracking-tight">Studio AI</span>
        </div>

        {/* Center: Nav Pills */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
          {["Home", "Services", "Work", "Process", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div>
          <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition-colors">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
