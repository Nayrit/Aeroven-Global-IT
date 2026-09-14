"use client";

import type { ReactNode } from "react";
import { PointerProvider, Cursor } from "./Pointer";
import { CanvasField } from "./CanvasField";
import { PageTransition } from "./PageTransition";
import { Loader } from "./Loader";
import { ScrollProgress } from "./ScrollProgress";

export function Experience({ children }: { children: ReactNode }) {
  return (
    <PointerProvider>
      <div className="ambient" aria-hidden />
      <CanvasField />
      <div className="noise" aria-hidden />
      <Loader />
      <Cursor />
      <ScrollProgress />
      <PageTransition />
      {children}
    </PointerProvider>
  );
}
