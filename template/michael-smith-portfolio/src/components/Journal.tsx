import { motion } from 'motion/react';

const entries = [
  {
    title: "The art of minimal design",
    date: "Mar 12, 2026",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/minimal/200/200",
  },
  {
    title: "Future of web interactions",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/web/200/200",
  },
  {
    title: "Nuances in digital systems",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/nuance/200/200",
  },
  {
    title: "Building for the next billion",
    date: "Dec 04, 2025",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/billion/200/200",
  },
];

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-text-primary mb-6">
              Recent <span className="italic">thoughts</span>
            </h2>
            <p className="text-muted text-sm md:text-base">
              A collection of articles and insights on design, technology, and creativity.
            </p>
          </div>

          <button className="hidden md:inline-flex group relative rounded-full text-xs uppercase tracking-widest px-8 py-4 border border-stroke transition-all hover:border-transparent">
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-[-1px] accent-gradient rounded-full" />
            </div>
            <span className="relative z-10 flex items-center gap-2">
              View all articles <span>→</span>
            </span>
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-2 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-all cursor-pointer"
            >
              <div className="w-full sm:w-20 h-40 sm:h-20 rounded-[32px] sm:rounded-full overflow-hidden shrink-0">
                <img
                  src={entry.image}
                  alt={entry.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex-1 px-4 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-medium text-text-primary group-hover:text-text-primary/80 transition-colors">
                  {entry.title}
                </h3>
              </div>

              <div className="flex items-center gap-6 px-8 pb-4 sm:pb-0 text-[10px] text-muted uppercase tracking-widest">
                <span>{entry.readTime}</span>
                <div className="w-1 h-1 bg-stroke rounded-full" />
                <span>{entry.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
