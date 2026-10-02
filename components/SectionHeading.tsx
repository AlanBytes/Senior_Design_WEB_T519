import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  dark?: boolean;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, dark, center }: Props) {
  return (
    <Reveal className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-4xl font-bold uppercase tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand-red to-brand-orange ${
          center ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
