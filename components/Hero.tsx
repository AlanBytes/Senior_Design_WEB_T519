"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { site } from "@/data/site";

// Floating LEGO-style bricks, kept to the right side so they never cover the text.
const bricks = [
  { x: "74%", y: "16%", w: 2, color: "bg-brand-orange", delay: 0.6 },
  { x: "88%", y: "26%", w: 2, color: "bg-neutral-500", delay: 1.5 },
  { x: "80%", y: "42%", w: 4, color: "bg-brand-red", delay: 0 },
  { x: "90%", y: "60%", w: 3, color: "bg-brand-red", delay: 1.2 },
  { x: "73%", y: "66%", w: 2, color: "bg-white/80", delay: 0.9 },
  { x: "80%", y: "82%", w: 4, color: "bg-brand-orange", delay: 0.3 },
];

function Brick({ w, color }: { w: number; color: string }) {
  return (
    <div className="relative">
      <div className="flex gap-1.5 px-1.5">
        {Array.from({ length: w }).map((_, i) => (
          <span key={i} className={`h-3 w-6 rounded-t-md ${color} brightness-110`} />
        ))}
      </div>
      <div className={`h-10 rounded-md ${color} shadow-xl`} style={{ width: w * 30 + 6 }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pb-16 pt-24"
    >
      {/* background grid + glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-red/25 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-orange/20 blur-[120px]" />

      {bricks.map((b, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden opacity-70 lg:block"
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0, y: -40, rotate: -10 }}
          animate={{ opacity: 0.7, y: [0, -18, 0], rotate: [-6, 6, -6] }}
          transition={{
            opacity: { duration: 0.8, delay: b.delay },
            y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: b.delay },
            rotate: { duration: 8 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Brick w={b.w} color={b.color} />
        </motion.div>
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          {site.school} · Senior Design {site.years}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-heading text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          {site.titleLines.map((line, i) => (
            <span
              key={line}
              className={`block ${
                i === 1
                  ? "bg-gradient-to-r from-brand-red via-brand-red to-brand-orange bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 flex flex-wrap gap-4"
        >
          <a
            href="#project"
            className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3.5 font-heading font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-red/30 transition hover:shadow-brand-orange/40 hover:brightness-110"
          >
            View Project
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#deliverables"
            className="inline-flex items-center gap-2 rounded-md border border-white/25 px-7 py-3.5 font-heading font-semibold uppercase tracking-wider text-white transition hover:border-brand-orange hover:text-brand-orange"
          >
            <FileText className="h-4 w-4" />
            Deliverables
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#abstract"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown />
      </motion.a>
    </section>
  );
}
