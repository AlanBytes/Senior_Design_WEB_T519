import Image from "next/image";
import { site, sponsors } from "@/data/site";
import LinkedInIcon from "./LinkedInIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-cloud py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Supported By" title="Sponsors" center />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((s, i) => (
            <Reveal key={s.name} delay={0.12 * i}>
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-mist transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-gradient-to-r from-brand-red to-brand-orange transition-transform duration-500 group-hover:scale-x-100" />
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-cloud transition group-hover:ring-brand-orange/40">
                  <Image src={s.photo} alt={s.name} fill className="object-cover" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold uppercase tracking-wide text-ink">
                  {s.name}
                </h3>
                {s.title && <p className="mt-1 font-medium text-brand-red">{s.title}</p>}
                <p className="mt-1 text-sm text-steel">{site.sponsorCompany}</p>
                <a
                  href={s.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-mist px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-ink transition hover:border-brand-red hover:bg-brand-red hover:text-white"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
