import { Moon, Sun } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { heroMetrics } from "@/data/aarivyn";
import { SearchCommand } from "./SearchCommand";
import { useTheme } from "./theme";

const links = [
  { href: "#thesis", label: "Thesis" },
  { href: "#lab", label: "Lab" },
  { href: "#services", label: "Services" },
  { href: "#collective", label: "Collective" },
  { href: "#forge", label: "Forge" },
  { href: "#vault", label: "Vault" },
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
        <nav className="hidden items-center gap-7 lg:flex">
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
          <a
            href="#services"
            className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-semibold tracking-wide text-background transition-opacity hover:opacity-90 sm:inline-block"
          >
            Bring us a hard problem
          </a>
        </div>
      </div>
    </header>
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
          <a
            href="#collective"
            className="rounded-full bg-gradient-to-r from-research-alt to-research px-6 py-3 text-sm font-semibold text-card shadow-[0_18px_40px_-20px] shadow-research-alt transition-transform hover:-translate-y-0.5"
          >
            Join the research network
          </a>
          <a
            href="#services"
            className="rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            Bring us a hard problem
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {heroMetrics.map((m) => (
            <div key={m.label} className="glass-card px-4 py-5 text-center">
              <dt className="font-display text-3xl font-bold text-foreground">{m.value}</dt>
              <dd className="mt-1 text-xs tracking-wide text-muted-foreground">{m.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
