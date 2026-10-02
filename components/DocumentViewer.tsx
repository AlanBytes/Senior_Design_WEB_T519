"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, Loader2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type ViewerDoc = { title: string; file: string };

const fileUrl = (file: string) => encodeURI(file);
const fileName = (file: string) => file.split("/").pop() ?? file;
const extension = (file: string) => file.split(".").pop()?.toLowerCase() ?? "";

// Word documents can't be shown by the browser natively, so they are rendered
// to HTML with docx-preview inside an isolated iframe (keeps its CSS separate).
function DocxFrame({ doc }: { doc: ViewerDoc }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  async function render() {
    const frame = frameRef.current?.contentDocument;
    if (!frame) return;
    try {
      const [{ renderAsync }, res] = await Promise.all([
        import("docx-preview"),
        fetch(fileUrl(doc.file)),
      ]);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await renderAsync(await res.blob(), frame.body, frame.head, {
        inWrapper: true,
        breakPages: true,
      });
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative h-full w-full">
      <iframe
        ref={frameRef}
        title={doc.title}
        srcDoc='<!doctype html><html><head><style>body{margin:0;background:#e3e5e8}.docx-wrapper{background:#e3e5e8!important;padding:24px!important}.docx-wrapper>section.docx{box-shadow:0 4px 18px rgba(0,0,0,.18)!important;margin-bottom:24px!important}</style></head><body></body></html>'
        onLoad={render}
        className="h-full w-full bg-mist"
      />
      {status !== "ready" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-cloud text-steel">
          {status === "loading" ? (
            <>
              <Loader2 className="h-8 w-8 animate-spin text-brand-red" />
              <p>Loading document…</p>
            </>
          ) : (
            <p>This document can&apos;t be previewed. Use the Download button above.</p>
          )}
        </div>
      )}
    </div>
  );
}

function Preview({ doc }: { doc: ViewerDoc }) {
  const ext = extension(doc.file);
  if (ext === "pdf") {
    // The browser's PDF viewer includes its own download and print controls.
    return <iframe title={doc.title} src={`${fileUrl(doc.file)}#view=FitH`} className="h-full w-full" />;
  }
  if (ext === "docx") return <DocxFrame doc={doc} />;
  return (
    <div className="flex h-full items-center justify-center p-8 text-center text-steel">
      Preview isn&apos;t available for .{ext} files. Use the Download button above.
    </div>
  );
}

export default function DocumentViewer({
  doc,
  onClose,
}: {
  doc: ViewerDoc | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [doc, onClose]);

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={doc.title}
        >
          <motion.div
            className="flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b-4 border-brand-red bg-ink px-4 py-3 text-white sm:px-5">
              <h3 className="min-w-0 flex-1 truncate font-heading text-lg font-bold uppercase tracking-wide sm:text-xl">
                {doc.title}
              </h3>
              <a
                href={fileUrl(doc.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-white/70 transition hover:text-white sm:inline-flex"
              >
                <ExternalLink className="h-4 w-4" /> Open
              </a>
              <a
                href={fileUrl(doc.file)}
                download={fileName(doc.file)}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-red to-brand-orange px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110"
              >
                <Download className="h-4 w-4" /> Download
              </a>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-md p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="min-h-0 flex-1 bg-mist">
              <Preview doc={doc} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
