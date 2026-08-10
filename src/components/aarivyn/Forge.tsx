import { useState } from "react";
import { forgeNodes, squads, forgeNeeds, hackathonEvents, skillTags } from "@/data/aarivyn";
import { Section, SectionHeading } from "./Section";
import { ParticleField } from "./ParticleField";
import { ModalShell, TagPicker, SubmitButton, ApplyModal, submitDirective } from "./modals";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function PitchModal() {
  const [roles, setRoles] = useState<string[]>([]);
  return (
    <ModalShell
      title="Pitch a forge node"
      description="Describe the problem, the shape of the proof, and the roles you need to recruit."
      triggerClassName="rounded-full border border-border bg-card/80 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
      trigger="+ Pitch Idea"
    >
      {(close) => (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            submitDirective("forge-pitch", {
              title: f.get("pitch-title"),
              idea: f.get("pitch-body"),
              roles,
            });
            close();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="pitch-title">Node title</Label>
            <Input
              id="pitch-title"
              name="pitch-title"
              required
              maxLength={120}
              placeholder="e.g. Sparse attention kernels"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pitch-body">The idea</Label>
            <Textarea
              id="pitch-body"
              name="pitch-body"
              rows={5}
              maxLength={2000}
              placeholder="Problem, hypothesis, first experiment"
            />
          </div>
          <div className="grid gap-2">
            <Label>Roles you need</Label>
            <TagPicker options={skillTags} value={roles} onChange={setRoles} accent="research" />
          </div>
          <SubmitButton>Submit pitch</SubmitButton>
        </form>
      )}
    </ModalShell>
  );
}

export function Forge() {
  return (
    <Section id="forge">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          index="06"
          eyebrow="R&D & Startup Forge"
          title="Open project nodes"
          copy="Blueprints in progress. Claim a node, pitch a new one, and recruit co-founders who care about the same frontier."
        />
        <PitchModal />
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {forgeNodes.map((n) => {
            const needs = forgeNeeds[n.id] ?? [];
            return (
              <article key={n.id} className="glass-card p-5 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-research-alt">
                    {n.id}
                  </span>
                  <span className="rounded-full border border-border bg-background/70 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                    {n.status}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{n.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{n.collaborators} collaborators</p>
                <div className="relative mt-4 h-20 overflow-hidden rounded-lg border border-dashed border-research/35 bg-gradient-to-br from-research/10 to-agency/10">
                  <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden="true">
                    <g
                      fill="none"
                      stroke="color-mix(in oklab, var(--research) 55%, transparent)"
                      strokeWidth="1"
                    >
                      <path d="M10 60 H60 V25 H110 V55 H165 V18" />
                      <path d="M25 12 V40 H85 V70 H150" opacity="0.6" />
                      <circle cx="60" cy="25" r="2.5" />
                      <circle cx="110" cy="55" r="2.5" />
                      <circle cx="85" cy="40" r="2.5" />
                      <rect x="140" y="30" width="26" height="16" rx="2" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {needs.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-research/35 bg-research/10 px-3 py-1 text-[11px] text-foreground"
                    >
                      Needs: {r}
                    </span>
                  ))}
                </div>
                <ApplyModal
                  channel="forge-apply"
                  title={`Collaborate on ${n.name}`}
                  description={`${n.id} · ${n.status} · ${n.collaborators} collaborators`}
                  context={{ node: n.id }}
                  roles={needs}
                  trigger="Apply / Collaborate"
                  triggerClassName="mt-5 w-full rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
                />
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function Hackathon() {
  return (
    <section id="hackathon" className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <ParticleField variant="wave" count={1300} opacity={0.7} className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          index="07"
          eyebrow="Hackathon LFG"
          title="LOOKING FOR GROUP"
          copy="Squads forming now. Bring a skill, take a seat, ship in 48 hours."
          accent="agency"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {hackathonEvents.map((e) => (
            <article key={e.name} className="glass-card p-6">
              <p className="font-mono text-[11px] tracking-[0.2em] text-agency">
                {e.window.toUpperCase()}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{e.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.focus}</p>
              <ApplyModal
                channel="squad-builder"
                title={`Build a squad · ${e.name}`}
                description="Tell us the roles you're missing and we'll route matching members."
                context={{ event: e.name }}
                roles={skillTags}
                trigger="Build a squad"
                triggerClassName="mt-5 w-full rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              />
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {squads.map((s, i) => (
            <article
              key={s.name}
              className="glass-card p-6 hover:-translate-y-1"
              style={{ transform: `translateY(${(i % 2) * 14}px)` }}
            >
              <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                {s.event.toUpperCase()}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Needs: {s.need}</p>
              <p className="mt-1 font-mono text-xs text-agency">{s.slots}</p>
              <ApplyModal
                channel="squad-join"
                title={`Join ${s.name}`}
                description={`${s.event} · ${s.slots}`}
                context={{ squad: s.name, event: s.event }}
                roles={s.need.split(" + ")}
                trigger="+ Join Squad"
                triggerClassName="mt-6 w-full rounded-full bg-gradient-to-r from-agency to-agency-alt px-5 py-2.5 text-sm font-semibold text-card transition-transform hover:-translate-y-0.5"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
