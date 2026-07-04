import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import PricingGrid from "../components/tarifs/PricingGrid";
import ReassuranceBand from "../components/tarifs/ReassuranceBand";

export const metadata: Metadata = {
  title: "Tarifs & abonnements Nomad'Hub — Explorer, Pro, Business+",
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
      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <PricingGrid />
        <div className="mt-16">
          <ReassuranceBand />
        </div>
      </div>
    </PageShell>
  );
}
