import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const text1 = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const text2 = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

  const words1 = text1.split(" ");
  const words2 = text2.split(" ");

  const highlightedWords = ["curiosity", "meets", "clarity"];

  return (
    <section ref={containerRef} className="pt-0 pb-32 md:pb-44 px-8 md:px-28 text-center">
      {/* Video */}
      <div className="flex justify-center mb-32">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[800px] h-[800px] object-cover rounded-3xl"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Paragraph 1 */}
      <div className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] max-w-5xl mx-auto leading-tight">
        {words1.map((word, i) => {
          const start = i / words1.length;
          const end = (i + 1) / words1.length;
          const opacity = useTransform(scrollYProgress, [start * 0.4, end * 0.4], [0.15, 1]);
          const isHighlighted = highlightedWords.some(h => word.toLowerCase().includes(h.toLowerCase()));

          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className={isHighlighted ? "text-foreground" : "text-hero-subtitle"}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </div>

      {/* Paragraph 2 */}
      <div className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 max-w-4xl mx-auto leading-relaxed">
        {words2.map((word, i) => {
          const start = i / words2.length;
          const end = (i + 1) / words2.length;
          const opacity = useTransform(scrollYProgress, [0.4 + start * 0.4, 0.4 + end * 0.4], [0.15, 1]);

          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className="text-hero-subtitle"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}
