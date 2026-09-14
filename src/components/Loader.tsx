"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), 1600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#05080c]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative grid place-items-center">
            <div className="absolute size-32 rounded-full border border-[#c51a1b]/40 orbit" />
            <div
              className="absolute size-44 rounded-full border border-[#004b9c]/25 orbit"
              style={{ animationDuration: "18s", animationDirection: "reverse" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/aeroven-it.svg"
              alt=""
              className="relative h-8 w-auto"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
