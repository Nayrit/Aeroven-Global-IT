"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";

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
          scrolled || open
            ? "bg-[#05080c]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-5">
          <Logo height={26} />
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor
                className={`text-[13px] tracking-[0.08em] uppercase transition-colors ${
                  pathname === link.href
                    ? "text-[#c51a1b]"
                    : "text-[#c9d0da] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/consultation"
              data-cursor
              className="btn btn-primary hidden sm:inline-flex"
            >
              {nav.cta}
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[60] grid size-11 place-items-center"
              onClick={() => setOpen((v) => !v)}
              data-cursor
            >
              <span className="flex w-6 flex-col gap-[6px]">
                <span
                  className={`h-px w-full bg-white transition-transform duration-300 ${
                    open ? "translate-y-[3.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-white transition-transform duration-300 ${
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
            className="fixed inset-0 z-40 bg-[#05080c]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container flex h-full flex-col justify-end pb-16 pt-32">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    data-cursor
                    className="display flex items-baseline justify-between gap-6 border-b border-white/10 py-4 text-white transition-colors hover:text-[#c51a1b]"
                  >
                    <span className="text-[11vw] leading-none sm:text-[72px]">
                      {link.label}
                    </span>
                    <span className="text-[13px] tracking-[0.16em] text-[#c51a1b]">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
