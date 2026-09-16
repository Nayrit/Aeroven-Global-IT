"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      lerp: 0.07,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.15,
      autoRaf: true,
      anchors: true,
      // Do not disable for OS reduce-motion — this site is motion-led
      respectReducedMotion: false,
    });

    lenis.on("scroll", () => {
      window.dispatchEvent(new Event("scroll"));
    });

    document.documentElement.classList.add("lenis");
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
