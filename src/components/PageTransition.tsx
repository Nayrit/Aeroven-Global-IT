"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function PageTransition() {
  const pathname = usePathname();
  const first = useRef(true);
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (reduce) return;
    setShow(true);
    const t = window.setTimeout(() => setShow(false), 700);
    return () => window.clearTimeout(t);
  }, [pathname, reduce]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[95] origin-left bg-[#c51a1b]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0, transformOrigin: "right" }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        />
      ) : null}
    </AnimatePresence>
  );
}
