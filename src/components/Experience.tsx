"use client";

import type { ReactNode } from "react";
import { PageTransition } from "./PageTransition";
import { Loader } from "./Loader";
import { ScrollProgress } from "./ScrollProgress";
import { SmoothScroll } from "./SmoothScroll";
import { SoftCursor } from "./SoftCursor";

export function Experience({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <Loader />
      <ScrollProgress />
      <PageTransition />
      <SoftCursor />
      {children}
    </>
  );
}
