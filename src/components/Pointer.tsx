"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type PointerState = {
  x: number;
  y: number;
  label: string;
  hovering: boolean;
};

const PointerContext = createContext<PointerState>({
  x: 0,
  y: 0,
  label: "",
  hovering: false,
});

export function usePointer() {
  return useContext(PointerContext);
}

export function PointerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PointerState>({
    x: 0,
    y: 0,
    label: "",
    hovering: false,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const hit = t?.closest(
        "[data-cursor], a, button, input, textarea, select",
      ) as HTMLElement | null;
      const attr = hit?.getAttribute("data-cursor");
      const label = attr && attr !== "true" ? attr : "";
      setState({
        x: e.clientX,
        y: e.clientY,
        label,
        hovering: Boolean(hit),
      });
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <PointerContext.Provider value={state}>{children}</PointerContext.Provider>
  );
}

export function Cursor() {
  const { x, y, hovering, label } = usePointer();
  const ring = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const [on, setOn] = useState(false);

  target.current = { x, y };

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setOn(true);
    document.body.classList.add("has-custom-cursor");
    const ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let raf = 0;
    const tick = () => {
      ringPos.x += (target.current.x - ringPos.x) * 0.16;
      ringPos.y += (target.current.y - ringPos.y) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!on) return null;

  const size = hovering ? (label ? 96 : 58) : 20;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full bg-white mix-blend-difference md:block"
        style={{
          width: hovering ? 8 : 5,
          height: hovering ? 8 : 5,
          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden items-center justify-center rounded-full border border-white/80 mix-blend-difference transition-[width,height] duration-300 md:flex"
        style={{ width: size, height: size }}
      >
        {label ? (
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
            {label}
          </span>
        ) : null}
      </div>
    </>
  );
}
