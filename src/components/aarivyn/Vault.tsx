import { useState } from "react";
import {
  bounties,
  resources,
  resourceFilters,
  skillTags,
  coreMembers,
  coreMemberFilters,
} from "@/data/aarivyn";
import { Section, SectionHeading } from "./Section";
import { ParticleField } from "./ParticleField";
import { Input } from "@/components/ui/input";
import { ApplyModal, InfoModal } from "./modals";

export function Gigs() {
  const [skill, setSkill] = useState("All Skills");
  const shown = bounties.filter((b) => skill === "All Skills" || b.skill === skill);

  return (
    <Section id="gigs">
      <SectionHeading
        index="08"
        eyebrow="Gig Exchange"
        title="Active bounties & freelance directives"
        copy="Paid, scoped work routed from client engagements into the collective."
        accent="agency"
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {["All Skills", ...skillTags].map((f) => (
          <button
            key={f}
            onClick={() => setSkill(f)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              skill === f
                ? "border-transparent bg-gradient-to-r from-agency to-agency-alt text-card"
                : "border-border bg-card/70 text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((b, i) => (
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
              <ApplyModal
                channel="bounty-apply"
                title={`Apply · ${b.title}`}
                description={`${b.amount} · ${b.scope} · ${b.days}`}
                context={{ bounty: b.title, amount: b.amount }}
                roles={[b.skill]}
                trigger="Apply Directive"
                triggerClassName="mt-5 w-full rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              />
            </article>
          </div>
        ))}
        {shown.length === 0 ? (
          <p className="text-sm text-muted-foreground">No bounties match that skill.</p>
        ) : null}
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
  const [type, setType] = useState("All Types");
  const filtered = resources.filter((r) => {
    const matchesType = type === "All Types" || r.type === type;
    const needle = q.toLowerCase();
    return (
      matchesType &&
      (r.title.toLowerCase().includes(needle) ||
        r.type.toLowerCase().includes(needle) ||
        r.domain.toLowerCase().includes(needle))
    );
  });

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

      <div className="mt-4 flex flex-wrap gap-2">
        {resourceFilters.map((f) => (
          <button
            key={f}
            onClick={() => setType(f)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              type === f
                ? "border-transparent bg-gradient-to-r from-research-alt to-research text-card"
                : "border-border bg-card/70 text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
          <article key={r.title} className="glass-card p-5 hover:-translate-y-1">
            <span className="font-mono text-[11px] tracking-[0.2em] text-research-alt">
              {r.type.toUpperCase()}
            </span>
            <h3 className="mt-3 text-base font-semibold text-foreground">{r.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{r.meta}</p>
            <span className="mt-4 inline-block rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] text-muted-foreground">
              {r.domain}
            </span>
          </article>
        ))}
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">No resources match that search.</p>
        ) : null}
      </div>
    </Section>
  );
}

export function CoreMembers() {
  const [filter, setFilter] = useState("All Members");
  const shown = coreMembers.filter((m) => filter === "All Members" || m.group === filter);

  return (
    <section id="core-team" className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <ParticleField variant="sphere" count={900} opacity={0.55} className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          index="10"
          eyebrow="Core Members"
          title="CORE MEMBERS"
          copy="The builders and researchers driving AARIVYN forward."
          accent="collective"
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {coreMemberFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                filter === f
                  ? "border-transparent bg-gradient-to-r from-collective to-collective-alt text-card"
                  : "border-border bg-card/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {shown.map((m) => (
            <article key={m.name} className="glass-card p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-collective to-collective-alt font-display text-base font-bold text-card ring-4 ring-collective/15">
                  {m.name
                    .replace(/^Dr\.\s*/, "")
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{m.name}</h3>
                  <p className="text-xs text-muted-foreground">{m.title}</p>
                </div>
              </div>
              <span className="mt-4 inline-block rounded-full border border-collective/35 bg-collective/10 px-3 py-1 text-[11px] text-foreground">
                {m.domain}
              </span>
              <InfoModal
                title={m.name}
                description={`${m.title} · ${m.domain}`}
                triggerClassName="mt-5 w-full rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
                trigger="View Profile"
              >
                <p className="text-sm text-muted-foreground">{m.bio}</p>
              </InfoModal>
            </article>
          ))}
        </div>
      </div>
    </section>
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
