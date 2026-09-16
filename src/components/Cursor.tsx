"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribeFinePointer(onStoreChange: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getFinePointer() {
  return window.matchMedia("(pointer: fine)").matches;
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);
  const hover = useRef(false);
  const labelText = useRef("");
  const ready = useSyncExternalStore(subscribeFinePointer, getFinePointer, () => false);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.add("has-custom-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const t = e.target as HTMLElement | null;
      const hit = t?.closest("a, button, [data-cursor]") as HTMLElement | null;
      hover.current = Boolean(hit);
      labelText.current = hit?.getAttribute("data-cursor") || "";
    };

    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.14;
      ringPos.y += (mouse.y - ringPos.y) * 0.14;
      const size = hover.current ? 72 : 40;
      if (dot.current) {
        const d = hover.current ? 10 : 6;
        dot.current.style.width = `${d}px`;
        dot.current.style.height = `${d}px`;
        dot.current.style.transform = `translate(${mouse.x - d / 2}px, ${mouse.y - d / 2}px)`;
      }
      if (ring.current) {
        ring.current.style.width = `${size}px`;
        ring.current.style.height = `${size}px`;
        ring.current.style.opacity = hover.current ? "1" : "0.55";
        ring.current.style.transform = `translate(${ringPos.x - size / 2}px, ${ringPos.y - size / 2}px)`;
      }
      if (label.current) {
        const show = Boolean(labelText.current);
        label.current.textContent = labelText.current;
        label.current.style.opacity = show ? "1" : "0";
        label.current.style.transform = `translate(${ringPos.x + 28}px, ${ringPos.y - 10}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[120] hidden rounded-full bg-[#c51a1b] md:block"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[119] hidden rounded-full border border-[#14171c]/35 md:block"
      />
      <div
        ref={label}
        className="pointer-events-none fixed left-0 top-0 z-[121] hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c51a1b] opacity-0 transition-opacity md:block"
      />
    </>
  );
}
