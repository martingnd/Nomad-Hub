import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[640px] w-full overflow-hidden">
      <Image
        src="/images/hero-terrace.webp"
        alt="Deux professionnels en télétravail sur une terrasse au coucher du soleil, vue sur la mer"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[rgba(31,20,15,0.28)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(31,20,15,0.1)_0%,rgba(31,20,15,0.5)_75%,rgba(31,20,15,0.72)_100%)]" />

      <div className="relative mx-auto flex h-full max-w-site flex-col justify-center px-6 md:px-12">
        <div className="mb-6 w-fit rounded-full border border-cream/30 bg-cream/[0.16] px-4 py-2 text-[12.5px] font-bold tracking-[0.06em] text-cream">
          WORKATIONS EN FRANCE
        </div>
        <h1 className="mb-[22px] max-w-[720px] font-serif text-[40px] font-bold leading-[1.08] text-cream [text-wrap:balance] md:text-[58px]">
          Travaillez ailleurs, sans compromis.
        </h1>
        <p className="max-w-[500px] text-lg leading-relaxed text-cream/90 [text-wrap:pretty]">
          Nomad&apos;Hub organise des workations en France pour les
          professionnels du remote : des lieux sélectionnés, une communauté
          qualifiée, une expérience pensée pour travailler mieux.
        </p>
        <p className="mb-3.5 mt-3.5 max-w-[480px] text-[13.5px] italic leading-snug text-cream/65">
          Workation - contraction de «&nbsp;Work&nbsp;» et de
          «&nbsp;Vacation&nbsp;», le «&nbsp;travail-vacances&nbsp;».
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/workations"
            className="inline-flex items-center gap-2.5 rounded-full bg-terracotta px-8 py-4 text-[15.5px] font-bold text-cream shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-colors hover:bg-terracotta-hover"
          >
            Découvrir nos workations →
          </Link>
          <Link
            href="/concept"
            className="text-[15px] font-bold text-cream underline underline-offset-4"
          >
            Voir le concept
          </Link>
        </div>
      </div>
    </div>
  );
}
