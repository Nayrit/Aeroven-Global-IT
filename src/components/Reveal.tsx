"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Always animates on enter — not gated by OS reduce-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 80,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-1 align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "120%", rotate: 6, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease,
              delay: delay + i * 0.06,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function RevealClip({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(18% 18% 18% 18%)", scale: 1.12, opacity: 0.35 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Runs once on mount — use for above-the-fold so you always see motion. */
export function RiseIn({
  children,
  className,
  delay = 0,
  y = 40,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
