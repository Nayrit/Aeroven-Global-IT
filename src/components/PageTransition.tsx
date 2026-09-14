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
    const t = window.setTimeout(() => setShow(false), 820);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[95] flex items-end overflow-hidden bg-[#c51a1b]"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="display w-full px-6 pb-10 text-[18vw] leading-[0.8] text-white sm:text-[120px]">
            AEROVEN
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
