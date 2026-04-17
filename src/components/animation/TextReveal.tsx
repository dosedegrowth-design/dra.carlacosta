"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlight?: string;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  highlight,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: "50%" },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {highlight && word.toLowerCase().includes(highlight.toLowerCase()) ? (
            <span className="text-accent italic">{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.span>
  );
}
