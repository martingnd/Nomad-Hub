import type { Metadata } from "next";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import EntrepriseForm from "../components/forms/EntrepriseForm";
import { ProfileIcon, LaptopIcon, GrowthIcon, ChatIcon } from "../components/decor/icons";

export const metadata: Metadata = {
  title: "Nomad'Hub pour les entreprises — Séminaires & workations d'équipe",
  description:
    "Workations d'équipe, retraites de travail et onboarding remote pour startups, agences digitales, PME remote et équipes hybrides. Solutions sur-mesure.",
};

const USE_CASES = [
  { Icon: ProfileIcon, title: "Cohésion d'équipe", body: "Renforcez les liens entre collaborateurs dans un cadre différent du bureau, propice aux échanges vrais." },
  { Icon: LaptopIcon, title: "Onboarding remote", body: "Intégrez vos nouvelles recrues à distance dans un cadre immersif et humain, dès leurs premières semaines." },
  { Icon: GrowthIcon, title: "Productivité collective", body: "Sortez du quotidien pour avancer plus vite sur des sujets stratégiques, en étant tous réunis au même endroit." },
  { Icon: ChatIcon, title: "Créativité & ateliers", body: "Un cadre inspirant pour vos ateliers de brainstorming, séminaires de réflexion ou lancements de projet." },
];

export default function EntreprisesPage() {
  return (
    <PageShell>
      <PageHero
        kicker="POUR ENTREPRISES"
        title="Une alternative aux séminaires classiques."
        subtitle="Workations d'équipe, retraites de travail et onboarding remote pour startups, agences digitales, PME remote et équipes hybrides."
      />

      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
          Ce que Nomad&apos;Hub apporte à vos équipes
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map(({ Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3 rounded-[22px] bg-sage p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-cream/40">
                <Icon width={20} height={20} className="text-cream" strokeWidth={1.6} />
              </div>
              <h3 className="font-serif text-base font-bold text-cream">{title}</h3>
              <p className="text-[13.5px] leading-[1.55] text-cream/85">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-beige py-14 md:py-[72px]">
        <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
              Des solutions sur-mesure
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-brown/75">
              Chaque équipe a des besoins différents : durée, destination, format, taille du groupe.
              Nous n&apos;avons pas d&apos;offre figée pour les entreprises — nous construisons avec
              vous le séjour qui correspond à vos objectifs, à partir de notre réseau
              d&apos;hébergements work-ready partout en France.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-brown/75">
              Contactez-nous pour un accompagnement personnalisé : nous revenons vers vous avec une
              proposition adaptée à votre équipe, votre budget et votre calendrier.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/70 p-8">
            <h3 className="font-serif text-xl font-bold text-brown">Demander une proposition</h3>
            <p className="mt-2 text-[13.5px] text-brown/60">
              Formulaire de contact qualifié — nous revenons vers vous sous 48h.
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
