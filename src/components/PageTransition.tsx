"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition() {
  const pathname = usePathname();
  const first = useRef(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setShow(true);
    const t = window.setTimeout(() => setShow(false), 780);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[95] origin-left bg-[#c51a1b]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 0.75,
            times: [0, 0.35, 0.55, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ) : null}
    </AnimatePresence>
  );
}
