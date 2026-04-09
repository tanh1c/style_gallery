import { motion } from "framer-motion";
import { fadeUp } from "@/src/lib/animations";

export function SearchChanged() {
  const platforms = [
    {
      name: "ChatGPT",
      description: "The pioneer of conversational AI, redefining how we interact with information.",
      icon: "https://picsum.photos/seed/chatgpt/200/200",
    },
    {
      name: "Perplexity",
      description: "A search engine that provides direct answers with cited sources.",
      icon: "https://picsum.photos/seed/perplexity/200/200",
    },
    {
      name: "Google AI",
      description: "The next evolution of search, integrating generative AI into every query.",
      icon: "https://picsum.photos/seed/googleai/200/200",
    },
  ];

  return (
    <section className="pt-52 md:pt-64 pb-6 md:pb-9 px-8 md:px-28 text-center">
      <motion.h2
        {...fadeUp(0.1)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-8"
      >
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>
      
      <motion.p
        {...fadeUp(0.2)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24 leading-relaxed"
      >
        The way we find information is no longer about keywords. It's about intent, context, and the depth of the answers we seek.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.3 + i * 0.1)}
            className="flex flex-col items-center"
          >
            <div className="w-[200px] h-[200px] mb-6 flex items-center justify-center">
              <img
                src={platform.icon}
                alt={platform.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
            <h3 className="font-semibold text-base mb-2">{platform.name}</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        {...fadeUp(0.6)}
        className="text-muted-foreground text-sm"
      >
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  );
}
