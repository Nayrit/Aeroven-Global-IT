"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { PageTransition } from "./PageTransition";
import { Loader } from "./Loader";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";
import { Atmosphere } from "./Atmosphere";
import { CanvasField } from "./CanvasField";
import { Cursor } from "./Cursor";

export function Experience({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="never">
      <Atmosphere />
      <CanvasField />
      <SmoothScroll />
      <Loader />
      <ScrollProgress />
      <PageTransition />
      <Cursor />
      <div className="relative z-10">{children}</div>
    </MotionConfig>
  );
}
