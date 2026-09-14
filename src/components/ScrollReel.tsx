"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollReel({
  children,
  title,
  eyebrow,
}: {
  children: ReactNode;
  title: string;
  eyebrow: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["6vw", "-78%"]);

  return (
    <section ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container mb-10">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-4 text-[40px] text-white sm:text-[64px]">{title}</h2>
        </div>
        <motion.div style={{ x }} className="flex gap-8 will-change-transform">
          {children}
        </motion.div>
      </div>
    </section>
  );
}
