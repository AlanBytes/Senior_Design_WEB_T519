import { Boxes, Cog, Cpu, ImageIcon, Zap } from "lucide-react";
import { project } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = { cog: Cog, zap: Zap, cpu: Cpu, boxes: Boxes };

export default function Project() {
  return (
    <section id="project" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-red/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="The Design" title="Project" dark />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="mb-5 inline-block rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-brand-orange">
              {project.status}
            </span>
            <p className="text-lg leading-relaxed text-white/70">{project.intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Replace with a render/CAD image: <Image src="/project/render.png" ... /> */}
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-charcoal to-ink">
              <div className="text-center text-white/40">
                <ImageIcon className="mx-auto mb-3 h-12 w-12" />
                <p className="font-heading uppercase tracking-widest">Design render coming soon</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.subsystems.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={0.1 * i}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-brand-red/60 hover:bg-white/[0.06]">
                  <div className="mb-5 inline-flex rounded-lg bg-gradient-to-br from-brand-red to-brand-orange p-3 text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/60">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
