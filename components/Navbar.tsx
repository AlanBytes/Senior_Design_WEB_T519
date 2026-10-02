"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { logos, navLinks, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll-spy: highlight the section currently in the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/95 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <a href="#home" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 grid-cols-2 gap-0.5 rounded-md bg-gradient-to-br from-brand-red to-brand-orange p-1.5 transition-transform group-hover:rotate-12">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="rounded-full bg-white/90" />
              ))}
            </span>
            <span className="font-heading text-2xl font-bold tracking-wide text-white">
              {site.teamName}
            </span>
          </a>

          {/* Partner logos: replace the files in /public/logos with the official artwork. */}
          <div className="hidden items-center gap-4 border-l border-white/20 pl-4 sm:flex">
            {logos.map((l) => (
              <a key={l.alt} href={l.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={120}
                  height={32}
                  className="h-8 w-auto opacity-90 transition hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </div>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative px-3 py-2 font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                  active === id ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-red to-brand-orange"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 font-heading font-semibold uppercase tracking-wider ${
                    active === id ? "text-brand-orange" : "text-white/80"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
