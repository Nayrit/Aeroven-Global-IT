"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { PageTransition } from "./PageTransition";
import { Loader } from "./Loader";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

/**
 * Marketing site: force motion on.
 * (macOS “Reduce motion” was zeroing out every Framer animation.)
 */
export function Experience({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="never">
      <SmoothScroll />
      <Loader />
      <ScrollProgress />
      <PageTransition />
      {children}
    </MotionConfig>
  );
}
