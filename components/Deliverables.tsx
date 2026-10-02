"use client";

import { Eye, FileText } from "lucide-react";
import { useCallback, useState } from "react";
import { deliverables } from "@/data/site";
import DocumentViewer, { type ViewerDoc } from "./DocumentViewer";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Deliverables() {
  const [open, setOpen] = useState<ViewerDoc | null>(null);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="deliverables" className="bg-cloud py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Documentation" title="Deliverables" />

        <div className="grid gap-5 md:grid-cols-2">
          {deliverables.map((d, i) => (
            <Reveal key={d.title} delay={0.06 * i}>
              <button
                type="button"
                onClick={() => setOpen(d)}
                className="group flex w-full flex-col gap-4 rounded-xl bg-white p-6 text-left shadow-sm ring-1 ring-mist transition hover:shadow-xl hover:ring-brand-orange/50 sm:flex-row sm:items-center"
              >
                <div className="flex flex-1 items-start gap-4">
                  <div className="rounded-lg bg-ink p-3 text-brand-orange transition group-hover:bg-gradient-to-br group-hover:from-brand-red group-hover:to-brand-orange group-hover:text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-ink">
                      {d.title}
                    </h3>
                    {d.description && <p className="text-sm text-steel">{d.description}</p>}
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-steel/70">
                      {d.file.split(".").pop()}
                      {d.updated && ` · Last updated: ${d.updated}`}
                    </p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-red to-brand-orange px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-white shadow-md shadow-brand-red/20 transition group-hover:brightness-110 group-active:scale-95">
                  <Eye className="h-4 w-4" />
                  View
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <DocumentViewer doc={open} onClose={close} />
    </section>
  );
}
