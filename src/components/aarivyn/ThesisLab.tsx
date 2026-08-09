import { pillars, labProjects } from "@/data/aarivyn";
import { Section, SectionHeading } from "./Section";

function IsoCity() {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full animate-float" role="img" aria-label="Isometric infrastructure wireframe">
      <defs>
        <linearGradient id="isoStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--research-alt)" />
          <stop offset="100%" stopColor="var(--research)" />
        </linearGradient>
      </defs>
      <g stroke="color-mix(in oklab, var(--foreground) 18%, transparent)" fill="none" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i}>
            <line x1={10 + i * 25} y1={160 - i * 14} x2={210 + i * 25} y2={260 - i * 14} />
            <line x1={210 - i * 25} y1={260 - i * 14} x2={410 - i * 25} y2={160 - i * 14} />
          </g>
        ))}
      </g>
      {[
        [150, 150, 46, 70],
        [200, 128, 40, 56],
        [246, 158, 44, 84],
        [110, 178, 38, 46],
        [292, 182, 34, 50],
      ].map(([x, y, w, h], i) => (
        <g key={i} stroke="url(#isoStroke)" strokeWidth="1.4" fill="color-mix(in oklab, var(--card) 70%, transparent)">
          <path d={`M${x} ${y} l${w! / 2} ${w! / 4} l0 ${h} l${-w! / 2} ${-w! / 4} z`} />
          <path d={`M${x! + w!} ${y} l${-w! / 2} ${w! / 4} l0 ${h} l${w! / 2} ${-w! / 4} z`} />
          <path d={`M${x} ${y} l${w! / 2} ${-w! / 4} l${w! / 2} ${w! / 4} l${-w! / 2} ${w! / 4} z`} />
        </g>
      ))}
    </svg>
  );
}

export function Thesis() {
  return (
    <Section id="thesis">
      <SectionHeading
        index="01"
        eyebrow="Architectural Thesis"
        title="Learning is only valuable when it becomes capability."
      />
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <div className="glass-card grid-floor relative overflow-hidden p-6">
          <div className="pointer-events-none absolute inset-0 bg-mesh-glow opacity-60" />
          <div className="relative aspect-[4/3]">
            <IsoCity />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We believe in building infrastructure that matters - research that informs strategy,
            talent that executes with precision, and delivery mechanisms that scale impact.
          </p>
          <div className="mt-8 grid gap-4">
            {pillars.map((p, i) => (
              <div key={p.title} className="glass-card flex gap-4 p-5">
                <span className="font-mono text-xs text-research-alt">0{i + 1}</span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Lab() {
  return (
    <Section id="lab">
      <SectionHeading
        index="02"
        eyebrow="Lab Showcase"
        title="Research streams tracked by readiness level"
        copy="Every stream is measured, versioned and published — from bench prototype to deployed infrastructure."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {labProjects.map((p, i) => (
          <article
            key={p.name}
            className="glass-card relative overflow-hidden p-6 hover:-translate-y-1"
            style={{ transform: `translateY(${(i % 2) * 12}px)` }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-research/20 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
              <span className="shrink-0 rounded-full border border-research/40 bg-research/10 px-3 py-1 font-mono text-[11px] text-research-alt">
                {p.trl}
              </span>
            </div>
            <p className="relative mt-1 text-sm text-muted-foreground">{p.stage}</p>
            <div className="relative mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-research-alt to-research"
                style={{ width: `${p.progress}%` }}
              />
            </div>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
