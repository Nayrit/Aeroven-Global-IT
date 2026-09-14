"use client";

import { useRef, type ReactNode } from "react";

export function HorizontalReel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, scroll: 0 });

  return (
    <div
      ref={ref}
      data-cursor="drag"
      className={`horizontal-reel ${className}`}
      onPointerDown={(e) => {
        const el = ref.current;
        if (!el) return;
        drag.current = { down: true, x: e.clientX, scroll: el.scrollLeft };
        el.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!drag.current.down || !ref.current) return;
        ref.current.scrollLeft =
          drag.current.scroll - (e.clientX - drag.current.x);
      }}
      onPointerUp={() => {
        drag.current.down = false;
      }}
    >
      {children}
    </div>
  );
}
