"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.05,
      autoRaf: true,
      anchors: true,
      respectReducedMotion: true,
    });

    document.documentElement.classList.add("lenis");
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return null;
}
