import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import WorkationsExplorer from "../components/workations/WorkationsExplorer";
import BackgroundDecor from "../components/decor/BackgroundDecor";
import { PalmIcon, CompassIcon, BackpackIcon } from "../components/decor/icons";
import { WorkationsHeroIllustration } from "../components/decor/HeroIllustrations";
import { WORKATIONS } from "@/lib/workations";

const DECOR = [
  { Icon: PalmIcon, className: "-left-2 top-2", size: 40, rotate: -10, color: "#4A2F24", opacity: 0.06 },
  { Icon: CompassIcon, className: "right-[8%] top-8", size: 28, rotate: 8, color: "#C46A45", opacity: 0.08 },
  { Icon: BackpackIcon, className: "right-[30%] bottom-2", size: 26, color: "#7C8A6A", opacity: 0.08 },
];

export const metadata: Metadata = {
  title: "Workations en France - Séjours télétravail sélectionnés | Nomad'Hub",
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
        illustration={<WorkationsHeroIllustration />}
        cta={
          <Link
            href="/carte"
            className="inline-flex items-center gap-2.5 rounded-full bg-terracotta px-8 py-4 text-[15.5px] font-bold text-cream shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-colors hover:bg-terracotta-hover"
          >
            Voir la carte →
          </Link>
        }
      />
      <div className="relative overflow-hidden py-14 md:py-[72px]">
        <BackgroundDecor items={DECOR} />
        <div className="relative mx-auto max-w-site px-6 md:px-12">
          <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
            Toutes nos destinations
          </h2>
          <div className="mt-8">
            <WorkationsExplorer workations={WORKATIONS} />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
