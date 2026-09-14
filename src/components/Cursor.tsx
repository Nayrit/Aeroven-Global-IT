"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const hover = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    document.body.classList.add("has-custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      const t = e.target as HTMLElement | null;
      hover.current = Boolean(
        t?.closest("a, button, input, textarea, select, [data-cursor]"),
      );
    };

    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.16;
      ringPos.y += (mouse.y - ringPos.y) * 0.16;
      const size = hover.current ? 64 : 36;
      if (dot.current) {
        const d = hover.current ? 14 : 8;
        dot.current.style.width = `${d}px`;
        dot.current.style.height = `${d}px`;
        dot.current.style.transform = `translate(${mouse.x - d / 2}px, ${mouse.y - d / 2}px)`;
      }
      if (ring.current) {
        ring.current.style.width = `${size}px`;
        ring.current.style.height = `${size}px`;
        ring.current.style.transform = `translate(${ringPos.x - size / 2}px, ${ringPos.y - size / 2}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full bg-white mix-blend-difference transition-[width,height] duration-200 md:block"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full border border-white/70 mix-blend-difference transition-[width,height] duration-300 md:block"
      />
    </>
  );
}
