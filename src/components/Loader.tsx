"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LETTERS = "AEROVEN".split("");

export function Loader() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setN(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const hide = window.setTimeout(() => setShow(false), 2400);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[#05080c]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-[#c51a1b]" style={{ width: `${n}%` }} />
          <div className="flex h-full flex-col justify-between px-6 py-8 sm:px-10">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#8a96a8]">
              Aeroven Global
            </p>
            <div className="flex items-end justify-between gap-4">
              <div className="flex overflow-hidden">
                {LETTERS.map((ch, i) => (
                  <motion.span
                    key={ch}
                    className="display text-[16vw] leading-[0.8] text-white sm:text-[110px]"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.08 * i,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
              <p className="display text-[18vw] leading-none text-[#c51a1b] sm:text-[120px]">
                {String(n).padStart(3, "0")}
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
