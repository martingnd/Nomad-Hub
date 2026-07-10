import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import FaqAccordion from "../components/faq/FaqAccordion";
import BackgroundDecor from "../components/decor/BackgroundDecor";
import { ChatIcon, BookIcon } from "../components/decor/icons";
import { FaqHeroIllustration } from "../components/decor/HeroIllustrations";
import { FAQ } from "@/lib/faq";

const DECOR = [
  { Icon: ChatIcon, className: "left-[8%] top-4", size: 30, rotate: -6, color: "#4A2F24", opacity: 0.06 },
  { Icon: BookIcon, className: "right-[10%] bottom-6", size: 28, color: "#C46A45", opacity: 0.08 },
];

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes | Nomad'Hub",
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
        illustration={<FaqHeroIllustration />}
      />
      <div className="relative overflow-hidden py-14 md:py-[72px]">
        <BackgroundDecor items={DECOR} />
        <div className="relative mx-auto max-w-site px-6 md:px-12">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion faq={FAQ} />
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageShell>
  );
}
