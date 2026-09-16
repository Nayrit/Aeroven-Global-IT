"use client";

import Image from "next/image";
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
  src,
  alt,
}: {
  label?: string;
  caption?: string;
  ratio?: keyof typeof RATIOS;
  className?: string;
  interactive?: boolean;
  src?: string;
  alt?: string;
}) {
  const reduce = useReducedMotion();

  if (src) {
    return (
      <motion.div
        className={`media-frame ${RATIOS[ratio]} ${className}`}
        whileHover={
          reduce || !interactive
            ? undefined
            : { scale: 1.01, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
        }
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={ratio === "hero"}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`image-holder ${RATIOS[ratio]} ${className}`}
      whileHover={
        reduce || !interactive
          ? undefined
          : { scale: 1.01, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
      }
    >
      <div className="image-holder-grid" aria-hidden />
      <div className="relative z-[1] flex flex-col items-center gap-2 px-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b93a0]">
          {label}
        </p>
        {caption ? (
          <p className="max-w-[200px] text-[12px] leading-relaxed text-[#a0a7b2]">
            {caption}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
