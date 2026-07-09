import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import EntrepriseForm from "../components/forms/EntrepriseForm";
import BackgroundDecor from "../components/decor/BackgroundDecor";
import PlaceholderPhoto from "../components/home/PlaceholderPhoto";
import { ProfileIcon, LaptopIcon, GrowthIcon, ChatIcon } from "../components/decor/icons";

const DECOR = [
  { Icon: LaptopIcon, className: "-left-2 top-2", size: 34, rotate: -6, color: "#4A2F24", opacity: 0.06 },
  { Icon: ProfileIcon, className: "right-[6%] bottom-4", size: 28, color: "#7C8A6A", opacity: 0.08 },
];

export const metadata: Metadata = {
  title: "Nomad'Hub pour les entreprises - Séminaires & workations d'équipe",
  description:
    "Workations d'équipe, retraites de travail et onboarding remote pour startups, agences digitales, PME remote et équipes hybrides. Solutions sur-mesure.",
};

const USE_CASES = [
  { Icon: ProfileIcon, bg: "bg-brown", text: "text-cream", title: "Cohésion d'équipe", body: "Renforcez les liens entre collaborateurs dans un cadre différent du bureau, propice aux échanges vrais." },
  { Icon: LaptopIcon, bg: "bg-terracotta", text: "text-cream", title: "Onboarding remote", body: "Intégrez vos nouvelles recrues à distance dans un cadre immersif et humain, dès leurs premières semaines." },
  { Icon: GrowthIcon, bg: "bg-beige", text: "text-brown", title: "Productivité collective", body: "Sortez du quotidien pour avancer plus vite sur des sujets stratégiques, en étant tous réunis au même endroit." },
  { Icon: ChatIcon, bg: "bg-sage", text: "text-cream", title: "Créativité & ateliers", body: "Un cadre inspirant pour vos ateliers de brainstorming, séminaires de réflexion ou lancements de projet." },
];

export default function EntreprisesPage() {
  return (
    <PageShell>
      <PageHero
        kicker="POUR ENTREPRISES"
        title="Une alternative aux séminaires classiques."
        subtitle="Workations d'équipe, retraites de travail et onboarding remote pour startups, agences digitales, PME remote et équipes hybrides."
      />

      <div className="relative overflow-hidden py-14 md:py-[72px]">
        <BackgroundDecor items={DECOR} />
        <div className="relative mx-auto max-w-site px-6 md:px-12">
          <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
            Ce que Nomad&apos;Hub apporte à vos équipes
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map(({ Icon, bg, text, title, body }) => (
              <div key={title} className={`flex flex-col gap-3 rounded-[22px] p-6 ${bg}`}>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] ${
                    text === "text-cream" ? "border-cream/40" : "border-brown/25"
                  }`}
                >
                  <Icon width={20} height={20} className={text} strokeWidth={1.6} />
                </div>
                <h3 className={`font-serif text-base font-bold ${text}`}>{title}</h3>
                <p className={`text-[13.5px] leading-[1.55] ${text} opacity-85`}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-beige py-14 md:py-[72px]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col">
            <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
              Des solutions sur-mesure
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-brown/75">
              Chaque équipe a des besoins différents : durée, destination, format, taille du groupe.
              Nous n&apos;avons pas d&apos;offre figée pour les entreprises - nous construisons avec
              vous le séjour qui correspond à vos objectifs, à partir de notre réseau
              d&apos;hébergements work-ready partout en France.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-brown/75">
              Contactez-nous pour un accompagnement personnalisé : nous revenons vers vous avec une
              proposition adaptée à votre équipe, votre budget et votre calendrier.
            </p>
            <div className="mt-8 flex-1 overflow-hidden rounded-[22px]">
              <PlaceholderPhoto caption="Photo à venir - équipe en workation" />
            </div>
          </div>
          <div className="rounded-[24px] bg-white/70 p-8">
            <h3 className="font-serif text-xl font-bold text-brown">Demander une proposition</h3>
            <p className="mt-2 text-[13.5px] text-brown/60">
              Formulaire de contact qualifié - nous revenons vers vous sous 48h.
            </p>
            <div className="mt-5">
              <EntrepriseForm />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
