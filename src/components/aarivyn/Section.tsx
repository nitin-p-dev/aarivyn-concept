import { type ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
  accent = "research",
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
  accent?: "research" | "agency" | "collective";
}) {
  const dot =
    accent === "agency" ? "bg-agency" : accent === "collective" ? "bg-collective" : "bg-research";
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className="font-mono text-xs tracking-[0.28em] text-muted-foreground">
          {index} — {eyebrow.toUpperCase()}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{copy}</p> : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
