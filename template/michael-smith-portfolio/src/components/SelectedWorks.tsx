import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    title: "Automotive Motion",
    category: "CGI / Motion",
    image: "https://picsum.photos/seed/auto/1200/800",
    span: "md:col-span-7",
  },
  {
    title: "Urban Architecture",
    category: "Design / 3D",
    image: "https://picsum.photos/seed/arch/800/800",
    span: "md:col-span-5",
  },
  {
    title: "Human Perspective",
    category: "Photography",
    image: "https://picsum.photos/seed/human/800/800",
    span: "md:col-span-5",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "https://picsum.photos/seed/brand/1200/800",
    span: "md:col-span-7",
  },
];

export default function SelectedWorks() {
  return (
    <section className="bg-bg py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-text-primary mb-6">
              Featured <span className="italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              A selection of projects I've worked on, from concept to launch.
            </p>
          </div>

          <button className="hidden md:inline-flex group relative rounded-full text-xs uppercase tracking-widest px-8 py-4 border border-stroke transition-all hover:border-transparent">
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-[-1px] accent-gradient rounded-full" />
            </div>
            <span className="relative z-10 flex items-center gap-2">
              View all work <span>→</span>
            </span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[450px]",
                project.span
              )}
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/70 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
                <div className="text-center">
                  <span className="block text-[10px] text-muted uppercase tracking-[0.3em] mb-4">
                    {project.category}
                  </span>
                  <div className="relative inline-block px-6 py-3 rounded-full bg-white text-bg overflow-hidden">
                    <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 font-medium text-sm">
                      View — <span className="font-display italic">{project.title}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
