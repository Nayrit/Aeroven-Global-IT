"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";
import { Magnetic } from "./Magnetic";
import { Stamp } from "./Kinetic";
import { Scramble } from "./Scramble";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled || open ? "bg-[#05080c]/75 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-5">
          <Magnetic strength={0.2}>
            <Logo height={26} />
          </Magnetic>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor
                className={`text-[12px] uppercase tracking-[0.14em] transition-colors ${
                  pathname === link.href
                    ? "text-[#c51a1b]"
                    : "text-[#c9d0da] hover:text-white"
                }`}
              >
                <Scramble text={link.label} />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Magnetic>
              <Link
                href="/consultation"
                data-cursor="book"
                className="btn btn-primary hidden sm:inline-flex"
              >
                {nav.cta}
              </Link>
            </Magnetic>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[60] grid size-12 place-items-center"
              onClick={() => setOpen((v) => !v)}
              data-cursor={open ? "close" : "menu"}
            >
              <span className="flex w-7 flex-col gap-[7px]">
                <span
                  className={`h-px w-full bg-white transition-transform duration-300 ${
                    open ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-white transition-transform duration-300 ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
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
            className="fixed inset-0 z-40 overflow-hidden bg-[#05080c]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="pointer-events-none absolute -right-6 top-24 display text-[28vw] leading-none text-white/[0.04]">
              MENU
            </p>
            <div className="absolute right-10 top-28 hidden text-white/20 lg:block">
              <Stamp size={180} />
            </div>
            <div className="container flex h-full flex-col justify-end pb-16 pt-32">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.55 }}
                >
                  <Magnetic strength={0.12} className="w-full">
                    <Link
                      href={link.href}
                      data-cursor="open"
                      className="display flex w-full items-baseline justify-between gap-6 border-b border-white/10 py-3 text-white hover:text-[#c51a1b]"
                    >
                      <span className="text-[12vw] leading-none sm:text-[76px]">
                        <Scramble text={link.label} />
                      </span>
                      <span className="text-[13px] tracking-[0.16em] text-[#c51a1b]">
                        0{i + 1}
                      </span>
                    </Link>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
