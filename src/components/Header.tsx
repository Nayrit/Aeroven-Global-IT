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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
        className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${
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
                className={`text-[14px] transition-colors ${
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
            <Link
              href="/consultation"
              className="btn btn-primary hidden sm:inline-flex"
            >
              {nav.cta}
            </Link>
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
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="display border-b border-black/10 py-4 text-[36px] text-[#14171c]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
