import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import { LaptopIcon, ChatIcon, CalendarIcon, CompassIcon } from "../components/decor/icons";
import BackgroundDecor from "../components/decor/BackgroundDecor";

const PROBLEM_DECOR = [
  { Icon: LaptopIcon, className: "right-[6%] top-6", size: 34, rotate: -6, color: "#4A2F24", opacity: 0.06 },
  { Icon: CompassIcon, className: "left-[46%] bottom-4", size: 26, rotate: 8, color: "#C46A45", opacity: 0.08 },
  { Icon: CalendarIcon, className: "right-[24%] bottom-10", size: 24, color: "#7C8A6A", opacity: 0.08 },
];

export const metadata: Metadata = {
  title: "Le concept Nomad'Hub - Travailler ailleurs, sans compromis",
  description:
    "Nomad'Hub organise des workations en France : hébergements work-ready, communauté Slack par abonnement, séjours clés en main pour freelances et équipes remote.",
};

const FREELANCE_PROBLEMS = [
  "Un télétravail isolé, coupé du collectif",
  "Une baisse de moral et de motivation à force de travailler seul",
  "Un logement personnel peu adapté (bruit, manque de bureau dédié)",
  "Un manque de cadre et de discipline au quotidien",
  "Une difficulté à rencontrer d'autres professionnels du remote",
];

const SOLUTIONS = [
  {
    Icon: LaptopIcon,
    bg: "bg-brown",
    text: "text-cream",
    title: "Hébergements sélectionnés et work-ready",
    body: "Wifi fibre, espaces de travail dédiés, calme - chaque hébergement est choisi pour qu'on puisse vraiment y travailler.",
  },
  {
    Icon: ChatIcon,
    bg: "bg-terracotta",
    text: "text-cream",
    title: "Communauté Slack par abonnement",
    body: "Un réseau actif de professionnels du remote, avec des avantages qui évoluent selon votre palier d'abonnement.",
  },
  {
    Icon: CalendarIcon,
    bg: "bg-cream",
    text: "text-brown",
    title: "Workations organisés clés en main",
    body: "Hébergement, espaces, activités, communauté - tout est pensé et organisé, vous n'avez qu'à vous concentrer sur votre travail.",
  },
  {
    Icon: CompassIcon,
    bg: "bg-sage",
    text: "text-cream",
    title: "Productivité et expérience locale",
    body: "Un vrai cadre de travail combiné à la découverte du territoire, des activités et du réseau - la promesse du travail-vacances.",
  },
];

export default function ConceptPage() {
  return (
    <PageShell>
      <PageHero
        kicker="LE CONCEPT"
        title="Travailler autrement, sans sacrifier la performance."
        subtitle="Des lieux sélectionnés, une communauté qualifiée, une expérience pensée pour travailler mieux."
      />

      <div className="relative overflow-hidden mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <BackgroundDecor items={PROBLEM_DECOR} />
        <h2 className="relative font-serif text-2xl font-bold text-brown md:text-[28px]">
          Le problème du télétravail isolé
        </h2>
        <div className="relative mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-[22px] bg-beige p-8">
            <p className="text-[12px] font-bold uppercase tracking-wide text-terracotta">
              Côté freelances & indépendants
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {FREELANCE_PROBLEMS.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-brown/80">
                  <span className="mt-2 h-[5px] w-[5px] flex-shrink-0 rounded-full bg-terracotta" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[22px] border border-sage/30 p-8">
            <p className="text-[12px] font-bold uppercase tracking-wide text-sage">
              Côté hébergeurs (à venir)
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-brown/60">
              De l&apos;autre côté, des hébergeurs de qualité peinent à remplir leurs
              biens hors-saison et recherchent une clientèle plus fiable et plus
              qualitative. Nomad&apos;Hub a vocation à devenir le pont entre ces deux
              mondes.
            </p>
            <p className="mt-3 text-[13px] italic text-brown/45">
              Le programme hébergeurs partenaires arrive en V2 - aucune inscription
              n&apos;est ouverte pour le moment.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-beige py-14 md:py-[72px]">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
            La solution Nomad&apos;Hub
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map(({ Icon, bg, text, title, body }) => (
              <div key={title} className={`flex flex-col gap-4 rounded-[22px] p-7 ${bg}`}>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] ${
                    text === "text-cream" ? "border-cream/40" : "border-brown/25"
                  }`}
                >
                  {title.includes("Slack") ? (
                    <img src="/logo/slack-logo.svg" alt="Slack" className="h-6 w-6" />
                  ) : (
                    <Icon width={22} height={22} className={text} strokeWidth={1.6} />
                  )}
                </div>
                <h3 className={`font-serif text-lg font-bold ${text}`}>{title}</h3>
                <p className={`text-[14px] leading-[1.55] ${text} opacity-80`}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-site px-6 py-14 text-center md:px-12 md:py-[72px]">
        <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
          Prêt à changer de cadre ?
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/workations"
            className="rounded-full bg-terracotta px-7 py-3.5 text-[14.5px] font-bold text-cream transition-colors hover:bg-terracotta-hover"
          >
            Découvrir nos workations
          </Link>
          <Link
            href="/communaute"
            className="rounded-full border-[1.5px] border-brown px-7 py-3.5 text-[14.5px] font-bold text-brown transition-colors hover:bg-brown hover:text-cream"
          >
            Découvrir la communauté
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
