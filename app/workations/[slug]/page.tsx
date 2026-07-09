import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageShell from "../../components/layout/PageShell";
import PlaceholderPhoto from "../../components/home/PlaceholderPhoto";
import PhotoCarousel from "../../components/workations/PhotoCarousel";
import PreBookingForm from "../../components/workations/PreBookingForm";
import { WORKATIONS, getWorkationBySlug, formatDateRange } from "@/lib/workations";

export function generateStaticParams() {
  return WORKATIONS.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const workation = getWorkationBySlug(params.slug);
  if (!workation) return {};
  return {
    title: `${workation.name} - Workation ${workation.city} | Nomad'Hub`,
    description: workation.description.slice(0, 155),
  };
}

function InfoStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-brown/50">{label}</p>
      <p className="mt-0.5 font-serif text-base font-bold text-brown">{value}</p>
    </div>
  );
}

export default function WorkationDetailPage({ params }: { params: { slug: string } }) {
  const workation = getWorkationBySlug(params.slug);
  if (!workation) notFound();

  const isConfirmed = workation.status === "confirmee";
  const ctaLabel = isConfirmed ? "Réserver ma place" : "Envoyer ma candidature";

  return (
    <PageShell>
      <div className="border-b border-cream/20 bg-brown">
        <div className="mx-auto max-w-site px-6 pb-3 pt-6 text-[13px] text-cream/75 md:px-12">
          <Link href="/workations" className="hover:underline">
            Workations
          </Link>{" "}
          / {workation.name}
        </div>
      </div>

      <div className="bg-beige pb-12 pt-4 md:pb-16">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex flex-wrap gap-2">
                {workation.pilot && (
                  <span className="rounded-full bg-terracotta px-3 py-1 text-[11px] font-bold text-cream">
                    PILOTE
                  </span>
                )}
                {workation.status === "placeholder" && (
                  <span className="rounded-full bg-brown px-3 py-1 text-[11px] font-bold text-cream">
                    CONTENU À VENIR
                  </span>
                )}
              </div>
              <h1 className="mt-3 max-w-[640px] font-serif text-[32px] font-bold leading-tight text-brown md:text-[42px]">
                {workation.name}
              </h1>
              <p className="mt-2 text-[15px] text-brown/65">
                {workation.city} · {workation.region}
              </p>
            </div>
            <div className="rounded-2xl bg-cream px-6 py-4 text-right">
              <p className="text-[11px] uppercase tracking-wide text-brown/50">
                {workation.priceIsEstimate ? "Estimation / personne" : "À partir de / personne"}
              </p>
              <p className="font-serif text-3xl font-bold text-brown">
                {workation.perPersonWorkation}€
              </p>
              <p className="text-[12.5px] text-brown/55">pour {workation.duree}</p>
            </div>
          </div>

          <div className="relative mt-8 h-[720px] overflow-hidden rounded-[24px]">
            <PhotoCarousel
              photos={workation.photos}
              fallbackCaption={workation.photoCaption}
              alt={workation.photoCaption}
              autoplay
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl bg-cream p-6 sm:grid-cols-4">
            <InfoStat label="Dates" value={formatDateRange(workation.dateStart, workation.dateEnd)} />
            <InfoStat label="Capacité" value={`${workation.capacity} personnes`} />
            <InfoStat
              label="Logement"
              value={`${workation.typeLogement} · ${workation.rooms.chambres} ch.`}
            />
            <InfoStat
              label="Places restantes"
              value={`${workation.placesRestantes} / ${workation.placesTotales}`}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-12">
            <section>
              <h2 className="font-serif text-2xl font-bold text-brown">La destination</h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-brown/75">{workation.description}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {workation.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[14.5px] text-brown/75">
                    <span className="mt-2 h-[5px] w-[5px] flex-shrink-0 rounded-full bg-terracotta" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            <div className="relative h-[280px] overflow-hidden rounded-[22px]">
              {workation.destinationPhoto ? (
                <Image
                  src={workation.destinationPhoto}
                  alt={`Lieu emblématique près de ${workation.city}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              ) : (
                <PlaceholderPhoto caption={`Photo à venir - lieu emblématique près de ${workation.city}`} />
              )}
            </div>

            <section>
              <h2 className="font-serif text-2xl font-bold text-brown">Programme indicatif</h2>
              <div className="mt-4 flex flex-col gap-4">
                {workation.program.map((step) => (
                  <div key={step.day} className="rounded-2xl bg-beige/60 p-5">
                    <p className="text-[12px] font-bold uppercase tracking-wide text-terracotta">
                      {step.day}
                    </p>
                    <p className="mt-1 font-serif text-lg font-bold text-brown">{step.title}</p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-brown/70">{step.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-brown">Espace de travail & équipements</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {workation.equipements.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-brown/75">
                    <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-brown">Activités proposées</h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {workation.activites.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-brown/75">
                    <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-brown">Inclus dans le séjour</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {workation.inclusions.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-brown/75">
                    <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brown" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-brown">Conditions d&apos;annulation</h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-brown/65">{workation.cancellation}</p>
            </section>
          </div>

          <aside id="prereservation" className="h-fit rounded-[24px] bg-white/60 p-7">
            <h2 className="font-serif text-xl font-bold text-brown">
              {isConfirmed ? "Réserver ma place" : "Candidater à ce séjour"}
            </h2>
            <p className="mt-2 text-[13.5px] text-brown/60">
              Pré-réservation sans paiement en ligne - nous revenons vers vous pour confirmer.
            </p>
            <div className="mt-5">
              <PreBookingForm workationName={workation.name} ctaLabel={ctaLabel} />
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
