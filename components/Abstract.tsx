"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { abstract } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Abstract() {
  return (
    <section id="abstract" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <SectionHeading title="Abstract" />
          {abstract.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p className="mb-6 text-lg leading-relaxed text-steel">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 self-center lg:col-span-2">
          {abstract.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 * i}>
              <div className="group rounded-xl border border-mist bg-cloud p-6 transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl">
                <div className="font-heading text-5xl font-bold text-brand-red transition-colors group-hover:text-brand-orange">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-heading text-sm font-semibold uppercase tracking-wider text-steel">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
