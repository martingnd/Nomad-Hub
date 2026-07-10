import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import BackgroundDecor from "../components/decor/BackgroundDecor";
import { ProfileIcon, StarIcon, HeartIcon, GrowthIcon } from "../components/decor/icons";
import { AProposHeroIllustration } from "../components/decor/HeroIllustrations";

const DECOR = [
  { Icon: HeartIcon, className: "-left-2 top-6", size: 32, rotate: -8, color: "#4A2F24", opacity: 0.06 },
  { Icon: StarIcon, className: "right-[4%] bottom-4", size: 26, color: "#C46A45", opacity: 0.08 },
];

export const metadata: Metadata = {
  title: "À propos de Nomad'Hub - Notre mission",
  description:
    "Nomad'Hub réinvente le travail à distance en France : communauté, qualité, sérénité et productivité au cœur de chaque workation.",
};

const VALUES = [
  { Icon: ProfileIcon, bg: "bg-brown", text: "text-cream", title: "Communauté", body: "Un réseau de professionnels du remote qui s'entraident, échangent et avancent ensemble." },
  { Icon: StarIcon, bg: "bg-terracotta", text: "text-cream", title: "Qualité", body: "Des hébergements sélectionnés et vérifiés, à la hauteur de l'exigence d'un vrai cadre de travail." },
  { Icon: HeartIcon, bg: "bg-cream", text: "text-brown", title: "Sérénité", body: "Tout est organisé pour que vous n'ayez qu'à vous concentrer sur ce qui compte vraiment." },
  { Icon: GrowthIcon, bg: "bg-sage", text: "text-cream", title: "Productivité", body: "Un cadre pensé pour travailler mieux, pas juste ailleurs." },
];

export default function AProposPage() {
  return (
    <PageShell>
      <PageHero
        kicker="À PROPOS"
        title="Réinventer le travail à distance en France."
        subtitle="Nomad'Hub est né d'un constat simple : le télétravail isolé a un coût humain que les outils numériques ne résolvent pas."
        illustration={<AProposHeroIllustration />}
      />

      <div className="relative overflow-hidden py-14 md:py-[72px]">
        <BackgroundDecor items={DECOR} />
        <div className="relative mx-auto max-w-site px-6 md:px-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
            Notre histoire
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-brown/75">
            Nomad&apos;Hub est parti d&apos;un constat partagé par des milliers de freelances,
            indépendants et télétravailleurs en France : travailler à distance, c&apos;est souvent
            travailler seul, dans un logement pas toujours adapté, sans le cadre ni le collectif
            qui font avancer.
          </p>
          <p className="mt-4 text-[15px] leading-[1.7] text-brown/75">
            Nous avons voulu créer une autre manière de travailler en mobilité : des lieux
            sélectionnés et work-ready, une communauté qualifiée, et des séjours pensés comme de
            vraies parenthèses productives - pas juste des vacances avec un ordinateur.
          </p>
          <h2 className="mt-10 font-serif text-2xl font-bold text-brown md:text-[28px]">
            Notre mission
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-brown/75">
            Réinventer le travail à distance en France : donner aux professionnels du remote un
            cadre à la hauteur de leur exigence, et créer une communauté qui compte vraiment.
          </p>
        </div>
        </div>
      </div>

      <div className="bg-beige py-14 md:py-[72px]">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">Nos valeurs</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ Icon, bg, text, title, body }) => (
              <div key={title} className={`flex flex-col gap-3 rounded-[22px] p-6 ${bg}`}>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] ${
                    text === "text-cream" ? "border-cream/40" : "border-brown/25"
                  }`}
                >
                  <Icon width={20} height={20} className={text} strokeWidth={1.6} />
                </div>
                <h3 className={`font-serif text-base font-bold ${text}`}>{title}</h3>
                <p className={`text-[13.5px] leading-[1.55] ${text} opacity-80`}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
          L&apos;équipe fondatrice
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4 rounded-[22px] bg-beige p-10 text-center sm:flex-row sm:text-left">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/fondateur.jpeg"
              alt="Fondateur de Nomad'Hub"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <p className="text-[14.5px] leading-relaxed text-brown/70">
            Martin Guinard, fondateur de Nomad&apos;Hub.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
