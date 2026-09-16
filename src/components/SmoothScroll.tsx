"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      lerp: 0.075,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      autoRaf: true,
      anchors: true,
      respectReducedMotion: true,
    });

    // Keep Framer Motion scroll hooks in sync with Lenis
    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    document.documentElement.classList.add("lenis");
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return null;
}
