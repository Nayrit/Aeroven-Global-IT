"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function KineticLine({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  return (
    <span
      ref={ref}
      className={`inline-flex ${className}`}
      onMouseMove={(e) => {
        if (reduce) return;
        const letters = ref.current?.querySelectorAll<HTMLElement>("[data-k]");
        letters?.forEach((el) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          const d = Math.hypot(dx, dy);
          const force = Math.max(0, 1 - d / 180);
          el.style.transform = `translate(${dx * force * -0.2}px, ${dy * force * -0.2}px)`;
        });
      }}
      onMouseLeave={() => {
        const letters = ref.current?.querySelectorAll<HTMLElement>("[data-k]");
        letters?.forEach((el) => {
          el.style.transform = "translate(0, 0)";
        });
      }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          data-k
          className="inline-block will-change-transform"
          style={{ transition: "transform 0.28s ease" }}
          initial={reduce ? false : { y: "110%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.018,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Stamp({
  text = "AEROVEN · ENGINEERED INTELLIGENCE · ",
  size = 148,
  className = "",
}: {
  text?: string;
  size?: number;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`stamp ${className}`}
      aria-hidden
    >
      <defs>
        <path
          id={id}
          d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
        />
      </defs>
      <text fill="currentColor" fontSize="12.5" fontWeight="600" letterSpacing="3.5">
        <textPath href={`#${id}`}>{text.repeat(2)}</textPath>
      </text>
    </svg>
  );
}

export function Counter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/(\d+(?:\.\d+)?)/);
  if (!match || match.index === undefined) {
    return <span className={className}>{value}</span>;
  }
  const target = Number(match[1]);
  const prefix = value.slice(0, match.index);
  const suffix = value.slice(match.index + match[0].length);
  return (
    <span className={className}>
      {prefix}
      <CountTo to={target} decimals={match[1].includes(".") ? 2 : 0} />
      {suffix}
    </span>
  );
}

function CountTo({ to, decimals }: { to: number; decimals: number }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const dur = 1400;
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(to * eased);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, reduce]);

  return (
    <span ref={ref}>
      {decimals ? n.toFixed(decimals) : Math.round(n)}
    </span>
  );
}
