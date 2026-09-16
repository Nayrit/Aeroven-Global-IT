"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHJKLMNOPQRSTUVWXYZ—*01";

export function Scramble({
  text,
  className = "",
  as: Tag = "span",
  auto = false,
}: {
  text: string;
  className?: string;
  as?: "span" | "p";
  auto?: boolean;
}) {
  const [out, setOut] = useState(text);
  const frame = useRef(0);

  const run = () => {
    cancelAnimationFrame(frame.current);
    const len = text.length;
    const start = performance.now();
    const dur = 520;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const locked = Math.floor(p * len);
      let next = "";
      for (let i = 0; i < len; i++) {
        next +=
          i < locked || text[i] === " "
            ? text[i]
            : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(next);
      if (p < 1) frame.current = requestAnimationFrame(tick);
      else setOut(text);
    };
    frame.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (!auto) return;
    const t = window.setTimeout(run, 280);
    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, auto]);

  return (
    <Tag className={className} onMouseEnter={run}>
      {out}
    </Tag>
  );
}
