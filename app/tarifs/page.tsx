import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import PricingGrid from "../components/tarifs/PricingGrid";
import ReassuranceBand from "../components/tarifs/ReassuranceBand";
import BackgroundDecor from "../components/decor/BackgroundDecor";
import { PalmIcon, BackpackIcon, StarIcon, BuildingIcon } from "../components/decor/icons";

const DECOR = [
  { Icon: PalmIcon, className: "-left-2 top-4", size: 38, rotate: -8, color: "#4A2F24", opacity: 0.06 },
  { Icon: BackpackIcon, className: "right-[10%] top-2", size: 26, color: "#C46A45", opacity: 0.08 },
  { Icon: StarIcon, className: "left-[42%] bottom-4", size: 22, rotate: 6, color: "#7C8A6A", opacity: 0.08 },
  { Icon: BuildingIcon, className: "right-[26%] bottom-8", size: 28, color: "#4A2F24", opacity: 0.06 },
];

export const metadata: Metadata = {
  title: "Tarifs & abonnements Nomad'Hub - Explorer, Pro, Business+",
  description:
    "Choisissez l'offre qui vous correspond et accédez à une communauté de professionnels du remote partout en France : Explorer, Pro, Business+ et Entreprise+.",
};

export default function TarifsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="TARIFS"
        title="Rejoignez la communauté Nomad'Hub"
        subtitle="Choisissez l'offre qui vous correspond et accédez à une communauté de professionnels du remote partout en France."
      />
      <div className="relative overflow-hidden py-14 md:py-[72px]">
        <BackgroundDecor items={DECOR} />
        <div className="relative mx-auto max-w-site px-6 md:px-12">
          <h2 className="text-center font-serif text-2xl font-bold text-brown md:text-[28px]">
            Choisissez votre offre
          </h2>
          <div className="mt-8">
            <PricingGrid />
          </div>
          <div className="mt-16">
            <ReassuranceBand />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
