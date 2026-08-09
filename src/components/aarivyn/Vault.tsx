import { useState } from "react";
import { bounties, resources } from "@/data/aarivyn";
import { Section, SectionHeading } from "./Section";
import { Input } from "@/components/ui/input";

export function Gigs() {
  return (
    <Section id="gigs">
      <SectionHeading
        index="08"
        eyebrow="Gig Exchange"
        title="Active bounties & freelance directives"
        copy="Paid, scoped work routed from client engagements into the collective."
        accent="agency"
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {bounties.map((b, i) => (
          <div key={b.title} className="relative" style={{ perspective: "1200px" }}>
            <span className="absolute inset-x-3 -bottom-2 h-full rounded-2xl border border-border/60 bg-card/40" />
            <article
              className="glass-card relative p-6 transition-transform hover:-translate-y-1"
              style={{ transform: `rotateX(${4 - (i % 3) * 2}deg)` }}
            >
              <p className="bg-gradient-to-r from-agency to-agency-alt bg-clip-text font-display text-3xl font-bold text-transparent">
                {b.amount}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">{b.title}</h3>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-background/70 px-3 py-1">
                  {b.scope}
                </span>
                <span className="font-mono">{b.days}</span>
              </div>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}

function VaultCube() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full animate-float" aria-hidden="true">
      <g fill="none" stroke="color-mix(in oklab, var(--research) 45%, transparent)" strokeWidth="1.2">
        <path d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z" />
        <path d="M100 20 L100 100 M100 100 L170 60 M100 100 L30 60 M100 100 L100 180" />
        <path d="M65 40 L135 80 L135 160 M135 80 L65 120 L65 40" opacity="0.5" />
      </g>
    </svg>
  );
}

export function Vault() {
  const [q, setQ] = useState("");
  const filtered = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(q.toLowerCase()) ||
      r.type.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <Section id="vault">
      <div className="relative">
        <div className="pointer-events-none absolute right-0 -top-10 hidden h-64 w-64 opacity-40 lg:block">
          <VaultCube />
        </div>
        <SectionHeading
          index="09"
          eyebrow="Resource Vault"
          title="Roadmaps, snippets and research papers"
          copy="The collective's compounding library — searchable, versioned, open to members."
        />
      </div>

      <div className="mt-10 max-w-md">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search the vault…"
          className="bg-card/80 backdrop-blur"
        />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
          <article key={r.title} className="glass-card p-5 hover:-translate-y-1">
            <span className="font-mono text-[11px] tracking-[0.2em] text-research-alt">
              {r.type.toUpperCase()}
            </span>
            <h3 className="mt-3 text-base font-semibold text-foreground">{r.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{r.meta}</p>
          </article>
        ))}
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">No resources match that search.</p>
        ) : null}
      </div>
    </Section>
  );
}

export function SiteFooter() {
  const columns = [
    { title: "Domains", links: ["Research", "Agency", "Ecosystem"] },
    { title: "Thesis", links: ["Resources", "Research Papers", "Projects"] },
    { title: "Team", links: ["Contact"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Disclaimer"] },
  ];

  return (
    <footer className="border-t border-border bg-card/60 px-6 py-16 backdrop-blur">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-collective/35 bg-collective/10 px-3 py-1 text-xs text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-collective animate-pulse-dot" />
            All Systems Operational
          </span>
          <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-xs text-muted-foreground">
            Orbit 16 Active
          </span>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-6 w-6 rounded-md bg-gradient-to-br from-research to-research-alt" />
              <span className="font-display text-sm font-bold tracking-[0.22em] text-foreground">
                AARIVYN ONE
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AARIVYN ONE - Independent research &amp; delivery collective architecting frontier
              deep-tech systems.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-foreground">
                {c.title.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 AARIVYN ONE. Shaping the deep-tech future.
        </p>
      </div>
    </footer>
  );
}
