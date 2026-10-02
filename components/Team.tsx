import Image from "next/image";
import { team } from "@/data/site";
import LinkedInIcon from "./LinkedInIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Meet the Engineers" title="Our Team" center />

        {/* 2 rows x 3 columns on desktop */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={0.08 * i}>
              <div className="group flex items-center gap-5 rounded-2xl border border-mist bg-cloud p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:bg-white hover:shadow-xl">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-red">{m.major}</p>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-steel transition hover:text-brand-orange"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
