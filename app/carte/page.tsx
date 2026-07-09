import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import FranceMap from "../components/carte/FranceMap";
import { WORKATIONS } from "@/lib/workations";

export const metadata: Metadata = {
  title: "Carte des workations en France | Nomad'Hub",
  description:
    "Visualisez sur une carte interactive tous les hébergements work-ready Nomad'Hub partout en France. Cliquez sur un point pour découvrir le workation correspondant.",
};

export default function CartePage() {
  return (
    <PageShell>
      <PageHero
        kicker="CARTE INTERACTIVE"
        title="Nos workations partout en France"
        subtitle="Explorez la carte et cliquez sur un point pour découvrir l'hébergement correspondant."
      />

      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <h2 className="text-center font-serif text-2xl font-bold text-brown md:text-[28px]">
          Explorez nos workations sur la carte de France
        </h2>
        <div className="mt-8">
          <FranceMap workations={WORKATIONS} />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] text-brown/60">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
            Workation pilote
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brown" />
            Autres workations
          </span>
        </div>
      </div>
    </PageShell>
  );
}
