"use client";

import type { ReactNode } from "react";
import { PointerProvider, Cursor } from "./Pointer";
import { Aurora } from "./Aurora";
import { PageTransition } from "./PageTransition";
import { Loader } from "./Loader";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";

export function Experience({ children }: { children: ReactNode }) {
  return (
    <PointerProvider>
      <SmoothScroll />
      <Aurora />
      <div className="noise" aria-hidden />
      <Loader />
      <Cursor />
      <ScrollProgress />
      <PageTransition />
      {children}
    </PointerProvider>
  );
}
