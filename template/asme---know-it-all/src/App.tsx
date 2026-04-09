import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';
import AboutSection from './components/AboutSection';
import FeaturedVideoSection from './components/FeaturedVideoSection';
import PhilosophySection from './components/PhilosophySection';
import ServicesSection from './components/ServicesSection';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isFadingOut = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrame: number;
    let fadeStartTime: number | null = null;
    let fadeDirection: 'in' | 'out' | null = null;

    const animateFade = (timestamp: number) => {
      if (!fadeStartTime) fadeStartTime = timestamp;
      const progress = (timestamp - fadeStartTime) / 500;
      
      if (fadeDirection === 'in') {
        const opacity = Math.min(progress, 1);
        video.style.opacity = opacity.toString();
        if (opacity < 1) {
          animationFrame = requestAnimationFrame(animateFade);
        } else {
          fadeDirection = null;
          fadeStartTime = null;
        }
      } else if (fadeDirection === 'out') {
        const opacity = Math.max(1 - progress, 0);
        video.style.opacity = opacity.toString();
        if (opacity > 0) {
          animationFrame = requestAnimationFrame(animateFade);
        } else {
          fadeDirection = null;
          fadeStartTime = null;
          isFadingOut.current = false;
        }
      }
    };

    const fadeIn = () => {
      cancelAnimationFrame(animationFrame);
      fadeStartTime = null;
      fadeDirection = 'in';
      animationFrame = requestAnimationFrame(animateFade);
    };

    const fadeOut = () => {
      if (isFadingOut.current) return;
      isFadingOut.current = true;
      cancelAnimationFrame(animationFrame);
      fadeStartTime = null;
      fadeDirection = 'out';
      animationFrame = requestAnimationFrame(animateFade);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {}); // Handle potential autoplay block
      fadeIn();
    };

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !isFadingOut.current && video.style.opacity !== '0') {
        fadeOut();
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      isFadingOut.current = false;
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadeIn();
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Initial check if video is already ready
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="min-h-screen overflow-hidden relative flex flex-col">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          muted
          autoPlay
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
        />

        {/* Navbar */}
        <nav className="relative z-20 px-6 py-6">
          <div className="liquid-glass rounded-full pill max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Globe className="text-white" size={24} />
              <span className="text-white font-semibold text-lg">Asme</span>
              <div className="hidden md:flex items-center gap-8 ml-8">
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white text-sm font-medium hover:text-white/80 transition-colors">Sign Up</button>
              <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%] md:-translate-y-[20%]">
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-instrument mb-8">
            Know it then <em className="italic">all</em>.
          </h1>

          <div className="max-w-xl w-full mb-8">
            <div className="liquid-glass rounded-full pill pl-6 pr-2 py-2 flex items-center gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-white/40 text-sm"
              />
              <button className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <p className="text-white text-sm leading-relaxed px-4 max-w-lg mb-10">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>

          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Manifesto
          </button>
        </div>

        {/* Social Icons Footer */}
        <div className="relative z-10 flex justify-center gap-4 pb-12">
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Instagram size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Twitter size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Globe size={20} />
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </main>
  );
}
