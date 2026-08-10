import { useState, type ReactNode } from "react";
import { toast } from "sonner";
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
import { skillTags, interestAreas } from "@/data/aarivyn";

/** Mock submission handler — swap for an API/webhook call when a backend is added. */
export function submitDirective(channel: string, payload: Record<string, unknown>) {
  // eslint-disable-next-line no-console
  console.info("[aarivyn:directive]", channel, payload);
  toast.success("Directive received", {
    description: "Routed to the relevant stream lead. Expect a reply within two working days.",
  });
}

export function TagPicker({
  options,
  value,
  onChange,
  accent = "collective",
}: {
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  accent?: "research" | "agency" | "collective";
}) {
  const active =
    accent === "agency"
      ? "border-transparent bg-gradient-to-r from-agency to-agency-alt text-card"
      : accent === "research"
        ? "border-transparent bg-gradient-to-r from-research-alt to-research text-card"
        : "border-transparent bg-gradient-to-r from-collective to-collective-alt text-card";

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(on ? value.filter((v) => v !== o) : [...value, o])}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              on ? active : "border-border bg-card/70 text-muted-foreground hover:text-foreground"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
    >
      {children}
    </button>
  );
}

export function ModalShell({
  trigger,
  triggerClassName,
  title,
  description,
  children,
}: {
  trigger: ReactNode;
  triggerClassName?: string;
  title: string;
  description?: string;
  children: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>
        {children(() => setOpen(false))}
      </DialogContent>
    </Dialog>
  );
}

/** Builder onboarding — used by the header CTA and the hero primary button. */
export function JoinModal({
  trigger,
  triggerClassName,
  title = "Join AARIVYN",
}: {
  trigger: ReactNode;
  triggerClassName?: string;
  title?: string;
}) {
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  return (
    <ModalShell
      trigger={trigger}
      triggerClassName={triggerClassName}
      title={title}
      description="Build your profile, tag your skills and get routed into streams, squads and bounties."
    >
      {(close) => (
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            submitDirective("join", {
              name: f.get("join-name"),
              email: f.get("join-email"),
              portfolio: f.get("join-portfolio"),
              skills,
              interests,
            });
            close();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="join-name">Name</Label>
            <Input id="join-name" name="join-name" required maxLength={100} placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="join-email">Email</Label>
            <Input
              id="join-email"
              name="join-email"
              type="email"
              required
              maxLength={255}
              placeholder="you@domain.com"
            />
          </div>
          <div className="grid gap-2">
            <Label>Primary skill tags</Label>
            <TagPicker options={skillTags} value={skills} onChange={setSkills} />
          </div>
          <div className="grid gap-2">
            <Label>Interest areas</Label>
            <TagPicker
              options={interestAreas}
              value={interests}
              onChange={setInterests}
              accent="research"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="join-portfolio">Portfolio link</Label>
            <Input
              id="join-portfolio"
              name="join-portfolio"
              maxLength={300}
              placeholder="github.com/you"
            />
          </div>
          <SubmitButton>Submit application</SubmitButton>
        </form>
      )}
    </ModalShell>
  );
}

/** Client brief intake — used by every "Bring us a hard problem" surface. */
export function ClientBriefModal({
  trigger,
  triggerClassName,
  defaultScope,
}: {
  trigger: ReactNode;
  triggerClassName?: string;
  defaultScope?: string;
}) {
  return (
    <ModalShell
      trigger={trigger}
      triggerClassName={triggerClassName}
      title="Client brief intake"
      description="Describe the problem. We reply within two working days with a scoping route."
    >
      {(close) => (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            submitDirective("client-brief", {
              org: f.get("brief-org"),
              email: f.get("brief-email"),
              scope: f.get("brief-scope"),
            });
            close();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="brief-org">Organisation</Label>
            <Input id="brief-org" name="brief-org" required maxLength={120} placeholder="Company or lab" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="brief-email">Work email</Label>
            <Input
              id="brief-email"
              name="brief-email"
              type="email"
              required
              maxLength={255}
              placeholder="you@company.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="brief-scope">Scope</Label>
            <Textarea
              id="brief-scope"
              name="brief-scope"
              rows={5}
              maxLength={2000}
              defaultValue={defaultScope}
              placeholder="Problem, constraints, timeline"
            />
          </div>
          <SubmitButton>Send brief</SubmitButton>
        </form>
      )}
    </ModalShell>
  );
}

/** Generic apply / collaborate directive used by forge nodes, squads and bounties. */
export function ApplyModal({
  trigger,
  triggerClassName,
  title,
  description,
  channel,
  context,
  roles,
}: {
  trigger: ReactNode;
  triggerClassName?: string;
  title: string;
  description?: string;
  channel: string;
  context: Record<string, unknown>;
  roles?: string[];
}) {
  const [picked, setPicked] = useState<string[]>([]);
  return (
    <ModalShell
      trigger={trigger}
      triggerClassName={triggerClassName}
      title={title}
      description={description}
    >
      {(close) => (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            submitDirective(channel, {
              ...context,
              name: f.get("apply-name"),
              email: f.get("apply-email"),
              note: f.get("apply-note"),
              roles: picked,
            });
            close();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="apply-name">Name</Label>
            <Input id="apply-name" name="apply-name" required maxLength={100} placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="apply-email">Email</Label>
            <Input
              id="apply-email"
              name="apply-email"
              type="email"
              required
              maxLength={255}
              placeholder="you@domain.com"
            />
          </div>
          {roles && roles.length ? (
            <div className="grid gap-2">
              <Label>Role you'd cover</Label>
              <TagPicker options={roles} value={picked} onChange={setPicked} accent="agency" />
            </div>
          ) : null}
          <div className="grid gap-2">
            <Label htmlFor="apply-note">Why you</Label>
            <Textarea
              id="apply-note"
              name="apply-note"
              rows={4}
              maxLength={1000}
              placeholder="Relevant work, links, availability"
            />
          </div>
          <SubmitButton>Send directive</SubmitButton>
        </form>
      )}
    </ModalShell>
  );
}

/** Read-only detail modal (metric breakdowns, dossiers, member profiles). */
export function InfoModal({
  trigger,
  triggerClassName,
  title,
  description,
  children,
}: {
  trigger: ReactNode;
  triggerClassName?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <ModalShell
      trigger={trigger}
      triggerClassName={triggerClassName}
      title={title}
      description={description}
    >
      {() => <div className="space-y-3">{children}</div>}
    </ModalShell>
  );
}
