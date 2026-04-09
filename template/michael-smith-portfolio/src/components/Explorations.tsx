import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { id: 1, image: "https://picsum.photos/seed/exp1/600/600", rotation: -5 },
  { id: 2, image: "https://picsum.photos/seed/exp2/600/600", rotation: 8 },
  { id: 3, image: "https://picsum.photos/seed/exp3/600/600", rotation: -3 },
  { id: 4, image: "https://picsum.photos/seed/exp4/600/600", rotation: 12 },
  { id: 5, image: "https://picsum.photos/seed/exp5/600/600", rotation: -10 },
  { id: 6, image: "https://picsum.photos/seed/exp6/600/600", rotation: 5 },
];

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    // Pin the center content
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: contentRef.current,
      pinSpacing: false,
    });

    // Parallax for columns
    if (leftColRef.current) {
      gsap.to(leftColRef.current, {
        y: -300,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    if (rightColRef.current) {
      gsap.to(rightColRef.current, {
        y: 300,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg">
      {/* Pinned Center Content */}
      <div ref={contentRef} className="h-screen w-full flex items-center justify-center z-10">
        <div className="text-center max-w-2xl px-6">
          <span className="text-xs text-muted uppercase tracking-[0.3em] mb-6 block">Explorations</span>
          <h2 className="text-5xl md:text-8xl font-display text-text-primary mb-8">
            Visual <span className="italic">playground</span>
          </h2>
          <p className="text-muted text-sm md:text-base mb-10 max-w-md mx-auto">
            A collection of experiments, side projects, and visual studies that push the boundaries of my creative process.
          </p>
          <button className="group relative rounded-full text-xs uppercase tracking-widest px-8 py-4 border border-stroke transition-all hover:border-transparent">
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-[-1px] accent-gradient rounded-full" />
            </div>
            <span className="relative z-10 flex items-center gap-2">
              Follow on Dribbble <span>↗</span>
            </span>
          </button>
        </div>
      </div>

      {/* Parallax Layers */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto h-full grid grid-cols-2 gap-12 md:gap-40 px-6">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-24 pt-[20vh]">
            {items.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square w-full max-w-[320px] bg-surface border border-stroke rounded-2xl overflow-hidden pointer-events-auto cursor-zoom-in"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <img
                  src={item.image}
                  alt={`Exploration ${item.id}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-24 pt-[60vh]">
            {items.slice(3).map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square w-full max-w-[320px] bg-surface border border-stroke rounded-2xl overflow-hidden pointer-events-auto cursor-zoom-in"
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <img
                  src={item.image}
                  alt={`Exploration ${item.id}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
