"use client";

import { motion, useReducedMotion } from "framer-motion";

const RATIOS: Record<string, string> = {
  hero: "aspect-[16/10]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  card: "aspect-[4/3]",
};

export function ImageHolder({
  label = "Image",
  caption,
  ratio = "landscape",
  className = "",
  interactive = true,
}: {
  label?: string;
  caption?: string;
  ratio?: keyof typeof RATIOS;
  className?: string;
  interactive?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`image-holder ${RATIOS[ratio]} ${className}`}
      whileHover={
        reduce || !interactive
          ? undefined
          : { scale: 1.015, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
      }
    >
      <div className="image-holder-grid" aria-hidden />
      <div className="image-holder-shimmer" aria-hidden />
      <div className="relative z-[1] flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex size-10 items-center justify-center border border-dashed border-[#c51a1b]/40 text-[#c51a1b]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
            <path d="M3 16l5-4 4 3 3-2 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5d6673]">
          {label}
        </p>
        {caption ? (
          <p className="max-w-[220px] text-[12px] leading-relaxed text-[#8b93a0]">{caption}</p>
        ) : null}
      </div>
    </motion.div>
  );
}
