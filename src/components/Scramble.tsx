"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "AEROVEN—*01";

export function Scramble({
  text,
  className = "",
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: "span" | "p";
}) {
  const [out, setOut] = useState(text);
  const frame = useRef<number>(0);

  const run = () => {
    cancelAnimationFrame(frame.current);
    const len = text.length;
    const start = performance.now();
    const dur = 420;
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

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <Tag className={className} onMouseEnter={run}>
      {out}
    </Tag>
  );
}
