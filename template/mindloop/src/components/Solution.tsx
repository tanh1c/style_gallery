import { motion } from "framer-motion";
import { fadeUp } from "@/src/lib/animations";

export function Solution() {
  const features = [
    {
      title: "Curated Feed",
      description: "A personalized stream of high-quality content tailored to your interests and depth of inquiry.",
    },
    {
      title: "Writer Tools",
      description: "Powerful tools designed for clarity and impact, helping writers reach their audience effectively.",
    },
    {
      title: "Community",
      description: "Engage in meaningful conversations with a community of like-minded readers and thinkers.",
    },
    {
      title: "Distribution",
      description: "Seamless distribution across multiple channels, ensuring your message reaches the right people.",
    },
  ];

  return (
    <section className="py-32 md:py-44 px-8 md:px-28 border-t border-border/30">
      <motion.span
        {...fadeUp(0.1)}
        className="text-xs tracking-[3px] uppercase text-muted-foreground block mb-6"
      >
        SOLUTION
      </motion.span>
      
      <motion.h2
        {...fadeUp(0.2)}
        className="text-4xl md:text-6xl font-medium mb-16"
      >
        The platform for <span className="font-serif italic font-normal">meaningful</span> content
      </motion.h2>

      <motion.div
        {...fadeUp(0.3)}
        className="mb-20"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full aspect-[3/1] object-cover rounded-2xl"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            {...fadeUp(0.4 + i * 0.1)}
            className="flex flex-col"
          >
            <h3 className="font-semibold text-base mb-3">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
