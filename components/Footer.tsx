import { MapPin, Navigation } from "lucide-react";
import { footer, navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand-red bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-heading text-3xl font-bold tracking-wide">
            {site.teamName}
            <span className="text-brand-orange">.</span>
          </p>
          <p className="mt-2 font-heading uppercase tracking-widest text-white/60">
            {site.projectTitle}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Senior Design Project {site.years}, sponsored by {site.sponsorCompany}.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Location
          </h4>
          <div className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
            <address className="not-italic leading-relaxed text-white/80">
              <strong className="text-white">{footer.college}</strong>
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <a
            href={footer.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-white"
          >
            <Navigation className="h-4 w-4" /> Get directions
          </a>

          <h4 className="mb-3 mt-8 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Quick Links
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-white/60">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl ring-1 ring-white/10">
          <iframe
            title="FAMU-FSU College of Engineering map"
            src={footer.mapEmbed}
            className="h-64 w-full grayscale transition hover:grayscale-0 lg:h-full lg:min-h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>{footer.copyright}</p>
          <p>{footer.college}</p>
        </div>
      </div>
    </footer>
  );
}
