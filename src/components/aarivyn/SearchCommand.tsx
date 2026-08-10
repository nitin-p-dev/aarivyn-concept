import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { resources, members, forgeNodes, labProjects, bounties, squads } from "@/data/aarivyn";

const sectionFor: Record<string, string> = {};

export function SearchCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (hash: string) => {
    setOpen(false);
    window.location.hash = hash;
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search AARIVYN ONE"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded border border-border px-1 font-mono text-[10px] md:inline">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search resources, members, nodes, bounties…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Resources">
            {resources.map((r) => (
              <CommandItem key={r.title} value={`${r.type} ${r.title}`} onSelect={() => go("vault")}>
                {r.title}
                <span className="ml-auto text-xs text-muted-foreground">{r.type}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Members">
            {members.map((m) => (
              <CommandItem
                key={m.name}
                value={`${m.name} ${m.title} ${m.domain}`}
                onSelect={() => go("members")}
              >
                {m.name}
                <span className="ml-auto text-xs text-muted-foreground">{m.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Forge nodes">
            {forgeNodes.map((n) => (
              <CommandItem key={n.id} value={`${n.id} ${n.name}`} onSelect={() => go("forge")}>
                {n.name}
                <span className="ml-auto font-mono text-xs text-muted-foreground">{n.id}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Lab projects">
            {labProjects.map((p) => (
              <CommandItem key={p.name} value={`${p.name} ${p.trl}`} onSelect={() => go("lab")}>
                {p.name}
                <span className="ml-auto text-xs text-muted-foreground">{p.trl}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Bounties">
            {bounties.map((b) => (
              <CommandItem key={b.title} value={`${b.title} ${b.scope}`} onSelect={() => go("gigs")}>
                {b.title}
                <span className="ml-auto text-xs text-muted-foreground">{b.amount}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Squads">
            {squads.map((s) => (
              <CommandItem key={s.name} value={`${s.name} ${s.event}`} onSelect={() => go("lfg")}>
                {s.name}
                <span className="ml-auto text-xs text-muted-foreground">{s.event}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default sectionFor;
