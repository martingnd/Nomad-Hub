import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import SlackMatrix from "../components/communaute/SlackMatrix";
import BackgroundDecor from "../components/decor/BackgroundDecor";
import { ChatIcon, ProfileIcon, GrowthIcon, ThumbsUpIcon } from "../components/decor/icons";
import { CommunauteHeroIllustration } from "../components/decor/HeroIllustrations";

const DECOR = [
  { Icon: ChatIcon, className: "-left-2 top-4", size: 34, rotate: -6, color: "#4A2F24", opacity: 0.06 },
  { Icon: ProfileIcon, className: "right-[8%] top-2", size: 28, color: "#C46A45", opacity: 0.08 },
  { Icon: GrowthIcon, className: "right-[32%] bottom-2", size: 26, rotate: 6, color: "#7C8A6A", opacity: 0.08 },
];

export const metadata: Metadata = {
  title: "La communauté Nomad'Hub - Réseau remote & accès Slack",
  description:
    "Rejoignez la communauté Nomad'Hub : accès Slack, networking, opportunités professionnelles, retours d'expérience et accès prioritaire aux workations.",
};

const BENEFITS = [
  { Icon: ChatIcon, bg: "bg-brown", text: "text-cream", title: "Accès au Slack Nomad'Hub", body: "Des dizaines de canaux thématiques pour échanger, s'entraider et rester connecté au quotidien." },
  { Icon: ProfileIcon, bg: "bg-terracotta", text: "text-cream", title: "Networking & opportunités", body: "Rencontrez d'autres professionnels du remote, échangez sur vos projets, trouvez des collaborations." },
  { Icon: GrowthIcon, bg: "bg-beige", text: "text-brown", title: "Retours d'expérience & ressources", body: "Des membres partagent leurs retours, des outils et bonnes pratiques pour le travail à distance." },
  { Icon: ThumbsUpIcon, bg: "bg-sage", text: "text-cream", title: "Accès prioritaire aux workations", body: "Les membres abonnés accèdent en priorité aux places sur les workations les plus demandées." },
];

export default function CommunautePage() {
  return (
    <PageShell>
      <PageHero
        kicker="COMMUNAUTÉ"
        title="Une communauté, pas juste un séjour."
        subtitle="Le Slack Nomad'Hub rassemble des freelances, indépendants et équipes remote partout en France - organisé par catégories, avec un accès qui évolue selon votre abonnement."
        illustration={<CommunauteHeroIllustration />}
      />

      <div className="relative overflow-hidden py-14 md:py-[72px]">
        <BackgroundDecor items={DECOR} />
        <div className="relative mx-auto max-w-site px-6 md:px-12">
          <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
            Rejoignez notre communauté Nomad&apos;Hub
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ Icon, bg, text, title, body }) => (
              <div key={title} className={`flex flex-col gap-3 rounded-[22px] p-6 ${bg}`}>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] ${
                    text === "text-cream" ? "border-cream/40" : "border-brown/25"
                  }`}
                >
                  {title.includes("Slack") ? (
                    <img src="/logo/slack-logo.svg" alt="Slack" className="h-5 w-5" />
                  ) : (
                    <Icon width={20} height={20} className={text} strokeWidth={1.6} />
                  )}
                </div>
                <h3 className={`font-serif text-base font-bold ${text}`}>{title}</h3>
                <p className={`text-[13.5px] leading-[1.55] ${text} opacity-80`}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-beige py-14 md:py-[72px]">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="flex items-center gap-3">
            <img src="/logo/slack-logo.svg" alt="Slack" className="h-8 w-8" />
            <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
              La structure du Slack, canal par canal
            </h2>
          </div>
          <p className="mt-2 max-w-2xl text-[14.5px] text-brown/65">
            Chaque canal indique le palier d&apos;abonnement requis pour y accéder pleinement - cohérent
            avec les offres présentées sur la page{" "}
            <Link href="/tarifs" className="underline">
              Tarifs
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-[12.5px] text-brown/60">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-cream">✓</span>
              Accès complet
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-terracotta/70 text-[10px] font-bold text-cream">◐</span>
              Accès partiel / lecture seule
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brown/25">-</span> Non accessible
            </span>
          </div>
          <div className="mt-6">
            <SlackMatrix />
          </div>
          <p className="mt-6 max-w-2xl text-[13px] italic text-brown/50">
            Business+ inclut aussi des avantages hors Slack : mise en avant dans l&apos;annuaire
            membres du site et accompagnement business individualisé. Ces éléments seront intégrés à
            l&apos;espace membre en V2.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-site px-6 py-14 text-center md:px-12 md:py-[72px]">
        <h2 className="font-serif text-2xl font-bold text-brown md:text-[28px]">
          Trouvez le palier qui vous correspond
        </h2>
        <Link
          href="/tarifs"
          className="mt-6 inline-flex rounded-full bg-terracotta px-8 py-4 text-[15px] font-bold text-cream transition-colors hover:bg-terracotta-hover"
        >
          Rejoindre la communauté →
        </Link>
      </div>
    </PageShell>
  );
}
