import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import WorkationsExplorer from "../components/workations/WorkationsExplorer";
import { WORKATIONS } from "@/lib/workations";

export const metadata: Metadata = {
  title: "Workations en France — Séjours télétravail sélectionnés | Nomad'Hub",
  description:
    "Découvrez nos workations en France : hébergements work-ready sélectionnés, communauté qualifiée, séjours clés en main pour freelances, indépendants et équipes remote.",
};

export default function WorkationsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="CATALOGUE"
        title="Nos workations en France"
        subtitle="Des hébergements sélectionnés et work-ready, du solo freelance à l'équipe complète. Réservez votre place ou candidatez aux séjours en cours de constitution."
      />
      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <WorkationsExplorer workations={WORKATIONS} />
      </div>
    </PageShell>
  );
}
