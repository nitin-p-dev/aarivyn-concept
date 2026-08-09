import { useMemo, useState } from "react";
import { tracks } from "@/data/aarivyn";
import { Section, SectionHeading } from "./Section";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BASELINE = 40000;

export function Services() {
  const [duration, setDuration] = useState(6);
  const [team, setTeam] = useState(4);
  const [complexity, setComplexity] = useState(3);

  const investment = useMemo(() => {
    const raw =
      BASELINE * (duration / 6) * (0.55 + team * 0.11) * (0.72 + (complexity - 1) * 0.17);
    return Math.round(raw / 500) * 500;
  }, [duration, team, complexity]);

  const formatted = investment.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <Section id="services">
      <SectionHeading
        index="03"
        eyebrow="Enterprise R&D"
        title="Three delivery tracks, one accountable team"
        copy="Scope the engagement in the open. The calculator models a real quote against our $40,000 baseline investment."
        accent="agency"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tracks.map((t) => (
          <article key={t.id} className="glass-card p-6 hover:-translate-y-1">
            <span className="font-mono text-xs tracking-[0.2em] text-agency">{t.id}</span>
            <h3 className="mt-3 text-xl font-semibold text-foreground">{t.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
            <ul className="mt-5 space-y-2">
              {t.scope.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1 w-4 rounded-full bg-gradient-to-r from-agency to-agency-alt" />
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="glass-card grid-floor relative mt-10 overflow-hidden p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-agency/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-agency-alt/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-2xl font-semibold text-foreground">R&amp;D Scope Calculator</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Move the parameters — the deck recalculates the engagement envelope live.
            </p>

            <div className="mt-8 space-y-8">
              <ParamSlider
                label="Duration"
                value={duration}
                display={`${duration} months`}
                min={1}
                max={12}
                onChange={setDuration}
              />
              <ParamSlider
                label="Team Size"
                value={team}
                display={`${team} specialists`}
                min={2}
                max={12}
                onChange={setTeam}
              />
              <ParamSlider
                label="Complexity"
                value={complexity}
                display={["Contained", "Moderate", "Advanced", "Frontier", "Unmapped"][complexity - 1] ?? ""}
                min={1}
                max={5}
                onChange={setComplexity}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-background/70 p-6 backdrop-blur">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                ESTIMATED INVESTMENT
              </span>
              <p className="mt-3 bg-gradient-to-r from-agency to-agency-alt bg-clip-text font-display text-5xl font-bold text-transparent">
                {formatted}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Baseline $40,000 · {duration} mo · {team} specialists
              </p>
              <div className="mt-6 grid grid-cols-6 gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-6 -skew-y-12 rounded-sm ${
                      i < Math.round((investment / 160000) * 24)
                        ? "bg-gradient-to-br from-agency to-agency-alt"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Dialog>
              <DialogTrigger className="mt-8 w-full rounded-full bg-gradient-to-r from-agency to-agency-alt px-6 py-3 text-sm font-semibold text-card transition-transform hover:-translate-y-0.5">
                Start intake with these numbers
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Engagement intake</DialogTitle>
                  <DialogDescription>
                    Pre-filled from your calculator configuration. We reply within two working days.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-2">
                    <Label htmlFor="intake-org">Organisation</Label>
                    <Input id="intake-org" placeholder="Company or lab" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="intake-email">Work email</Label>
                    <Input id="intake-email" type="email" placeholder="you@company.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="intake-scope">Scope</Label>
                    <Textarea
                      id="intake-scope"
                      rows={4}
                      defaultValue={`Duration: ${duration} months\nTeam size: ${team} specialists\nComplexity: ${complexity}/5\nIndicative investment: ${formatted}`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
                  >
                    Send brief
                  </button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ParamSlider({
  label,
  display,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  display: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="font-mono text-xs text-agency">{display}</span>
      </div>
      <Slider
        className="mt-3"
        value={[value]}
        min={min}
        max={max}
        step={1}
        onValueChange={(v) => onChange(v[0] ?? min)}
      />
    </div>
  );
}
