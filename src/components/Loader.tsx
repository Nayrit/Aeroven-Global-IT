"use client";

import { useEffect, useState } from "react";

/** Bulletproof intro — never blocks the site if motion fails. */
export function Loader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const out = window.setTimeout(() => setPhase("out"), 850);
    const done = window.setTimeout(() => setPhase("done"), 1300);
    return () => {
      window.clearTimeout(out);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#f5f3ee]"
      style={{
        opacity: phase === "out" ? 0 : 1,
        transition: "opacity 0.4s ease",
        pointerEvents: phase === "out" ? "none" : "auto",
      }}
      aria-hidden={phase !== "in"}
    >
      <div className="flex flex-col items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/aeroven-it.svg" alt="" className="h-8 w-auto" />
        <div className="h-[2px] w-40 overflow-hidden bg-black/10">
          <div
            className="h-full bg-[#c51a1b]"
            style={{
              transform: "scaleX(1)",
              transformOrigin: "left",
              animation: "loader-bar 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          />
        </div>
      </div>
    </div>
  );
}
