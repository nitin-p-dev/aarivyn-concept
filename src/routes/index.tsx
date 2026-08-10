import { createFileRoute } from "@tanstack/react-router";
import { AmbientCanvas } from "@/components/aarivyn/ParticleField";
import { ThemeProvider } from "@/components/aarivyn/theme";

import { Nav, Hero } from "@/components/aarivyn/Hero";
import { Thesis, Lab } from "@/components/aarivyn/ThesisLab";
import { Services } from "@/components/aarivyn/Services";
import { Collective, Members } from "@/components/aarivyn/Collective";
import { Forge, Hackathon } from "@/components/aarivyn/Forge";
import { Gigs, Vault, CoreMembers, SiteFooter } from "@/components/aarivyn/Vault";
import { Toaster } from "@/components/ui/sonner";

const title = "AARIVYN ONE — Deep-tech research & delivery collective";
const description =
  "A collective of researchers, builders, and visionaries architecting deep-tech systems — from cutting-edge research to production systems that scale.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <AmbientCanvas />
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Lab />
        <Services />
        <Collective />
        <Members />
        <Forge />
        <Hackathon />
        <Gigs />
        <Vault />
        <CoreMembers />
      </main>
      <SiteFooter />
      <Toaster />
    </ThemeProvider>
  );
}

