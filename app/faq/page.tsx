import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import FaqAccordion from "../components/faq/FaqAccordion";
import { FAQ } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes | Nomad'Hub",
  description:
    "Toutes les réponses à vos questions sur les workations Nomad'Hub : abonnements, réservation, paiement, annulation.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };

  return (
    <PageShell>
      <PageHero
        kicker="FAQ"
        title="Questions fréquentes"
        subtitle="Tout ce qu'il faut savoir sur les workations, la communauté et les abonnements Nomad'Hub."
      />
      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion faq={FAQ} />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageShell>
  );
}
