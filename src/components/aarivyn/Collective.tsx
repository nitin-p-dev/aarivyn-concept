import { useState } from "react";
import { members, memberFilters } from "@/data/aarivyn";
import { Section, SectionHeading } from "./Section";
import { ParticleField } from "./ParticleField";
import { JoinModal, ClientBriefModal, InfoModal } from "./modals";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function Collective() {
  return (
    <Section id="collective">
      <SectionHeading
        index="04"
        eyebrow="Dual-Persona Collective"
        title="One network, two doorways"
        copy="Builders enter to learn, publish and get hired. Clients enter to route hard problems into a team that has already shipped them."
        accent="collective"
      />
      <div className="glass-card relative mt-14 overflow-hidden p-8">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <ParticleField variant="swirl" count={900} opacity={0.6} className="h-full w-full" />
        </div>
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <PersonaCard
            tag="BUILDER NODE"
            title="I want to build at the frontier"
            points={["Research streams & mentorship", "Squads, bounties and forge nodes", "Published work under your name"]}
            cta="Join the research network"
          />
          <div className="relative mx-auto hidden h-40 w-40 md:block">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="absolute inset-0 rounded-full border border-collective/40"
                style={{ transform: `scale(${1 - i * 0.18})`, opacity: 1 - i * 0.2 }}
              />
            ))}
            <span className="absolute inset-[38%] rounded-full bg-gradient-to-br from-agency to-research blur-[2px]" />
          </div>
          <PersonaCard
            tag="CLIENT NODE"
            title="I have a hard problem"
            points={["Scoped research sprints", "Production delivery teams", "Infrastructure audits"]}
            cta="Bring us a hard problem"
            accent
          />
        </div>
      </div>
    </Section>
  );
}

function PersonaCard({
  tag,
  title,
  points,
  cta,
  accent = false,
}: {
  tag: string;
  title: string;
  points: string[];
  cta: string;
  accent?: boolean;
}) {
  return (
    <div className="glass-card p-6">
      <span
        className={`font-mono text-[11px] tracking-[0.24em] ${accent ? "text-agency" : "text-collective"}`}
      >
        {tag}
      </span>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex gap-2 text-sm text-muted-foreground">
            <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent ? "bg-agency" : "bg-collective"}`} />
            {p}
          </li>
        ))}
      </ul>
      {accent ? (
        <ClientBriefModal
          trigger={cta}
          triggerClassName="mt-6 w-full rounded-full bg-gradient-to-r from-agency to-agency-alt px-5 py-2.5 text-sm font-semibold text-card transition-transform hover:-translate-y-0.5"
        />
      ) : (
        <JoinModal
          title="Join Collective"
          trigger={cta}
          triggerClassName="mt-6 w-full rounded-full bg-gradient-to-r from-collective to-collective-alt px-5 py-2.5 text-sm font-semibold text-card transition-transform hover:-translate-y-0.5"
        />
      )}
    </div>
  );
}

export function Members() {
  const [filter, setFilter] = useState("All Members");
  const shown = members.filter((m) => filter === "All Members" || m.domain === filter);

  return (
    <Section id="members">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          index="05"
          eyebrow="Members Directory"
          title="The constellation"
          copy="180+ researchers and engineers mapped by domain. Filter the network and reach the node you need."
          accent="collective"
        />
        <div className="relative hidden h-52 w-52 shrink-0 lg:block">
          <ParticleField variant="sphere" count={1100} opacity={0.85} className="h-full w-full" />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {memberFilters.map((f) => (
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

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((m) => (
          <article key={m.name} className="glass-card p-5 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-collective to-collective-alt font-display text-sm font-bold text-card ring-4 ring-collective/15">
                {initials(m.name)}
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
              <p className="text-sm text-muted-foreground">
                {m.name} works across {m.domain.toLowerCase()} streams inside AARIVYN ONE, pairing
                research output with production delivery.
              </p>
            </InfoModal>
          </article>
        ))}
      </div>
    </Section>
  );
}
