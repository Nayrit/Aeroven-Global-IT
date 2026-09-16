"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";
import { Magnetic } from "./Magnetic";

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const lastY = useRef(0);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setHidden(false);
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const goingDown = y > lastY.current + 6;
      const goingUp = y < lastY.current - 6;
      if (!open) {
        if (goingDown && y > 96) setHidden(true);
        else if (goingUp || y < 48) setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [...nav.links, nav.careersLink];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-[transform,background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled || open
            ? "border-b border-black/8 bg-[#f5f3ee]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <Logo height={24} />
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-active={pathname === link.href}
                className={`nav-link text-[14px] transition-colors ${
                  pathname === link.href
                    ? "text-[#c51a1b]"
                    : "text-[#5d6673] hover:text-[#14171c]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Magnetic strength={0.16}>
                <Link href="/consultation" className="btn btn-primary">
                  {nav.cta}
                </Link>
              </Magnetic>
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[60] grid size-11 place-items-center lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-6 flex-col gap-[6px]">
                <span
                  className={`h-px w-full bg-[#14171c] transition-transform duration-300 ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-[#14171c] transition-transform duration-300 ${
                    open ? "-translate-y-[3.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[#f5f3ee] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container flex h-full flex-col justify-end pb-16 pt-28">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="display block border-b border-black/10 py-4 text-[32px] text-[#14171c] sm:text-[36px]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 * links.length,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 sm:hidden"
              >
                <Link href="/consultation" className="btn btn-primary w-full">
                  {nav.cta}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
