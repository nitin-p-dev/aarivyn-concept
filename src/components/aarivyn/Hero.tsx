import { Moon, Sun } from "lucide-react";
import { ParticleField } from "./ParticleField";
import {
  heroMetrics,
  memberSkillGroups,
  members,
  researchStreams,
  deployments,
  agencyBriefs,
} from "@/data/aarivyn";
import { SearchCommand } from "./SearchCommand";
import { useTheme } from "./theme";
import { JoinModal, ClientBriefModal, InfoModal } from "./modals";

const links = [
  { href: "#thesis", label: "Thesis" },
  { href: "#lab", label: "Research" },
  { href: "#services", label: "Agency" },
  { href: "#collective", label: "Collective" },
  { href: "#forge", label: "Forge" },
  { href: "#hackathon", label: "LFG" },
  { href: "#gigs", label: "Gigs" },
  { href: "#vault", label: "Vault" },
  { href: "#core-team", label: "Core Team" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
    >
      {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-6 w-6 rounded-md bg-gradient-to-br from-research to-research-alt" />
          <span className="font-display text-sm font-bold tracking-[0.22em] text-foreground">
            AARIVYN ONE
          </span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <SearchCommand />
          <ThemeToggle />
          <JoinModal
            trigger="Join AARIVYN"
            triggerClassName="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold tracking-wide text-background transition-opacity hover:opacity-90 sm:inline-block"
          />
        </div>
      </div>
    </header>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-card/70 px-4 py-3 text-sm">
      <span className="text-foreground">{label}</span>
      <span className="font-mono text-xs text-muted-foreground">{value}</span>
    </div>
  );
}

function MetricModal({ metric }: { metric: { value: string; label: string } }) {
  const body =
    metric.label === "Active Members" ? (
      <>
        {memberSkillGroups.map((g) => (
          <div key={g.group} className="space-y-2">
            <p className="font-mono text-[11px] tracking-[0.2em] text-research-alt">
              {g.group.toUpperCase()} · {g.count}
            </p>
            {members
              .filter((m) => m.domain === g.group)
              .map((m) => (
                <MetricRow key={m.name} label={m.name} value={m.title} />
              ))}
          </div>
        ))}
      </>
    ) : metric.label === "Active Research Streams" ? (
      <>
        {["AI", "Quantum", "Distributed"].map((d) => (
          <div key={d} className="space-y-2">
            <p className="font-mono text-[11px] tracking-[0.2em] text-research-alt">
              {d.toUpperCase()} SYSTEMS
            </p>
            {researchStreams
              .filter((s) => s.domain === d)
              .map((s) => (
                <MetricRow key={s.name} label={s.name} value={s.lead} />
              ))}
          </div>
        ))}
      </>
    ) : metric.label === "Deployments" ? (
      <>
        {deployments.map((d) => (
          <MetricRow key={d.name} label={`${d.name} · ${d.trl}`} value={d.client} />
        ))}
      </>
    ) : (
      <>
        {agencyBriefs.map((b) => (
          <div key={b.org} className="rounded-xl border border-border bg-card/70 px-4 py-3">
            <p className="text-sm font-semibold text-foreground">{b.org}</p>
            <p className="mt-1 text-xs text-muted-foreground">{b.track}</p>
            <span className="mt-2 inline-block rounded-full border border-agency/35 bg-agency/10 px-3 py-1 text-[11px] text-foreground">
              {b.status}
            </span>
          </div>
        ))}
      </>
    );

  return (
    <InfoModal
      title={`${metric.value} ${metric.label}`}
      description="Live breakdown from the collective's operating record."
      triggerClassName="glass-card w-full px-4 py-5 text-center transition-transform hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px] hover:shadow-research"
      trigger={
        <>
          <span className="block font-display text-3xl font-bold text-foreground">
            {metric.value}
          </span>
          <span className="mt-1 block text-xs tracking-wide text-muted-foreground">
            {metric.label}
          </span>
        </>
      }
    >
      {body}
    </InfoModal>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-24 pb-28">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-[42rem] max-w-5xl opacity-70">
        <ParticleField variant="swirl" count={1400} opacity={0.75} className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-collective animate-pulse-dot" />
          Independent research &amp; delivery collective
        </span>
        <h1 className="mt-7 text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
          We build what comes next
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A collective of researchers, builders, and visionaries architecting deep-tech systems.
          From cutting-edge research to production systems that scale.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <JoinModal
            title="Join the research network"
            trigger="Join the research network"
            triggerClassName="rounded-full bg-gradient-to-r from-research-alt to-research px-6 py-3 text-sm font-semibold text-card shadow-[0_18px_40px_-20px] shadow-research-alt transition-transform hover:-translate-y-0.5"
          />
          <ClientBriefModal
            trigger="Bring us a hard problem"
            triggerClassName="rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
          />
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {heroMetrics.map((m) => (
            <MetricModal key={m.label} metric={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
