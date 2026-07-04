import PageShell from "./PageShell";
import PageHero from "./PageHero";

export default function LegalLayout({
  kicker,
  title,
  updated,
  children,
}: {
  kicker: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <PageHero kicker={kicker} title={title} />
      <div className="mx-auto max-w-3xl px-6 py-14 md:px-12 md:py-[72px]">
        <p className="mb-8 rounded-xl bg-terracotta/10 px-5 py-4 text-[13px] leading-relaxed text-brown/70">
          Dernière mise à jour : {updated}. Ce texte est un modèle de placeholder à faire
          valider par un professionnel du droit avant la mise en ligne définitive du site.
        </p>
        <div className="flex flex-col gap-8 text-[14.5px] leading-[1.75] text-brown/80 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brown [&_h2]:mb-2">
          {children}
        </div>
      </div>
    </PageShell>
  );
}
