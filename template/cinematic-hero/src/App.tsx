import { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  Menu, 
  X, 
  Star, 
  Clock, 
  Calendar, 
  Play, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Movies", "TV Series", "Editor's Pick", "Interviews", "User Reviews"
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 z-0 h-full w-full object-cover"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Bottom Blur Overlay */}
      <div className="fixed inset-0 z-1 pointer-events-none backdrop-blur-xl bottom-blur-mask" />

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6">
        {/* Logo */}
        <div 
          className="animate-blur-fade-up text-xl md:text-2xl font-bold tracking-tighter"
          style={{ animationDelay: '0ms' }}
        >
          CINEMATIC
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className="animate-blur-fade-up text-sm font-medium text-white/80 transition-colors hover:text-white"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Nav Actions */}
        <div className="flex items-center gap-3">
          {/* Search Button (sm+) */}
          <button
            className="liquid-glass animate-blur-fade-up hidden sm:flex items-center gap-2 rounded-full px-4 py-2 md:px-6"
            style={{ animationDelay: '350ms' }}
          >
            <Search size={18} />
            <span className="text-sm font-medium">Search</span>
          </button>

          {/* User Button (sm+) */}
          <button
            className="liquid-glass animate-blur-fade-up hidden sm:flex h-10 w-10 items-center justify-center rounded-full"
            style={{ animationDelay: '400ms' }}
          >
            <User size={18} />
          </button>

          {/* Mobile Menu Button (below lg) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="liquid-glass animate-blur-fade-up flex lg:hidden h-10 w-10 items-center justify-center rounded-full"
            style={{ animationDelay: '350ms' }}
          >
            <div className="relative h-6 w-6">
              <Menu 
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  isMenuOpen ? 'rotate-180 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`} 
              />
              <X 
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  isMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-50 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute left-0 right-0 top-[72px] z-40 px-4 py-6 transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          <div className="flex flex-col p-2">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className={`py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link}
              </a>
            ))}
          </div>
          
          {/* Mobile-only Search/User (below sm) */}
          <div className="sm:hidden border-t border-gray-800 p-4 flex gap-3">
            <button className="liquid-glass flex-1 flex items-center justify-center gap-2 rounded-full py-3">
              <Search size={18} />
              <span className="text-sm font-medium">Search</span>
            </button>
            <button className="liquid-glass h-12 w-12 flex items-center justify-center rounded-full">
              <User size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-end h-[calc(100vh-80px)] px-4 pb-8 sm:px-6 sm:pb-12 md:px-12 md:pb-16">
        <div className="flex flex-col md:flex-row items-end gap-8">
          {/* Left Side Content */}
          <div className="flex-1 w-full">
            {/* Metadata Row */}
            <div 
              className="animate-blur-fade-up flex flex-wrap items-center gap-4 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm text-white/90"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-2">
                <Star size={16} className="fill-white sm:w-5 sm:h-5" />
                <span className="font-medium">8.7/10 IMDB</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>132 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>April, 2025</span>
              </div>
            </div>

            {/* Title */}
            <h1 
              className="animate-blur-fade-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] mb-4 md:mb-6 leading-tight"
              style={{ animationDelay: '400ms' }}
            >
              Step Through.<br />Work Smarter.
            </h1>

            {/* Description */}
            <p 
              className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl leading-relaxed"
              style={{ animationDelay: '500ms' }}
            >
              A voyage through forgotten realms, where past and future intertwine.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button 
                className="animate-blur-fade-up flex items-center justify-center gap-2 bg-white text-black rounded-full font-semibold px-6 py-3 sm:px-8 sm:py-4 transition-transform hover:scale-105 active:scale-95"
                style={{ animationDelay: '600ms' }}
              >
                <Play size={18} className="fill-black" />
                Watch Now
              </button>
              <button 
                className="liquid-glass animate-blur-fade-up rounded-full font-semibold px-6 py-3 sm:px-8 sm:py-4 transition-transform hover:scale-105 active:scale-95"
                style={{ animationDelay: '700ms' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side Navigation Arrows */}
          <div className="flex gap-3 w-full md:w-auto justify-start md:justify-end">
            <button 
              className="liquid-glass animate-blur-fade-up flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-90"
              style={{ animationDelay: '800ms' }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="liquid-glass animate-blur-fade-up flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-90"
              style={{ animationDelay: '900ms' }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
