"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type PointerState = {
  label: string;
  hovering: boolean;
};

const PointerContext = createContext<PointerState>({
  label: "",
  hovering: false,
});

function subscribeFinePointer(onStoreChange: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getFinePointer() {
  return window.matchMedia("(pointer: fine)").matches;
}

export function usePointer() {
  return useContext(PointerContext);
}

export function PointerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PointerState>({
    label: "",
    hovering: false,
  });
  const last = useRef(state);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      const t = e.target as HTMLElement | null;
      const hit = t?.closest(
        "[data-cursor], a, button, input, textarea, select",
      ) as HTMLElement | null;
      const attr = hit?.getAttribute("data-cursor");
      const label = attr && attr !== "true" ? attr : "";
      const hovering = Boolean(hit);
      if (label !== last.current.label || hovering !== last.current.hovering) {
        last.current = { label, hovering };
        setState({ label, hovering });
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <PointerContext.Provider value={state}>{children}</PointerContext.Provider>
  );
}

export function Cursor() {
  const { hovering, label } = usePointer();
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const on = useSyncExternalStore(subscribeFinePointer, getFinePointer, () => false);

  useEffect(() => {
    if (!on) return;
    document.body.classList.add("has-custom-cursor");
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...mouse };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    let raf = 0;
    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.14;
      ringPos.y += (mouse.y - ringPos.y) * 0.14;
      if (dot.current) {
        dot.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [on]);

  if (!on) return null;

  const size = hovering ? (label ? 104 : 62) : 22;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full bg-white mix-blend-difference md:block"
        style={{ width: hovering ? 7 : 5, height: hovering ? 7 : 5 }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden items-center justify-center rounded-full border border-white mix-blend-difference transition-[width,height] duration-300 md:flex"
        style={{ width: size, height: size }}
      >
        {label ? (
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white">
            {label}
          </span>
        ) : null}
      </div>
    </>
  );
}
