import { forgeNodes, squads } from "@/data/aarivyn";
import { Section, SectionHeading } from "./Section";
import { ParticleField } from "./ParticleField";
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

export function Forge() {
  return (
    <Section id="forge">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          index="06"
          eyebrow="R&D Forge"
          title="Open project nodes"
          copy="Blueprints in progress. Claim a node, pitch a new one, and build it with people who care about the same frontier."
        />
        <Dialog>
          <DialogTrigger className="rounded-full border border-border bg-card/80 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card">
            Pitch an idea
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Pitch a forge node</DialogTitle>
              <DialogDescription>
                Describe the problem and the shape of the proof. Reviewed weekly by stream leads.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-2">
                <Label htmlFor="pitch-title">Node title</Label>
                <Input id="pitch-title" placeholder="e.g. Sparse attention kernels" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="pitch-body">The idea</Label>
                <Textarea id="pitch-body" rows={5} placeholder="Problem, hypothesis, first experiment" />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
              >
                Submit pitch
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {forgeNodes.map((n) => (
            <article key={n.id} className="glass-card p-5 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-research-alt">{n.id}</span>
                <span className="rounded-full border border-border bg-background/70 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {n.status}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-foreground">{n.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{n.collaborators} collaborators</p>
              <div className="mt-4 h-20 rounded-lg border border-dashed border-research/35 bg-gradient-to-br from-research/10 to-agency/10" />
            </article>
          ))}
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
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <button className="mt-6 w-full rounded-full bg-gradient-to-r from-agency to-agency-alt px-5 py-2.5 text-sm font-semibold text-card transition-transform hover:-translate-y-0.5">
                Join Squad
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
