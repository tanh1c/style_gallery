import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  direction?: "top" | "bottom";
}

export function BlurText({
  text,
  delay = 200,
  className = "",
  direction = "bottom",
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  const variants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "bottom" ? 50 : -50,
    },
    visible: (i: number) => ({
      filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
      opacity: [0, 0.5, 1],
      y: [direction === "bottom" ? 50 : -50, -5, 0],
      transition: {
        duration: 0.35,
        delay: (i * delay) / 1000,
        times: [0, 0.5, 1],
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.2em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
