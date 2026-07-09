import Link from "next/link";
import PhotoCarousel from "./PhotoCarousel";
import { formatDateRange, type Workation } from "@/lib/workations";

export default function WorkationCard({ workation }: { workation: Workation }) {
  const isConfirmed = workation.status === "confirmee";
  const isPlaceholder = workation.status === "placeholder";

  return (
    <div className="flex flex-col overflow-hidden rounded-[22px] bg-white/60">
      <div className="relative h-[400px]">
        <PhotoCarousel
          photos={workation.photos}
          fallbackCaption={workation.photoCaption}
          alt={workation.photoCaption}
          arrows
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {workation.pilot && (
            <span className="rounded-full bg-terracotta px-3 py-1 text-[11px] font-bold tracking-wide text-cream">
              PILOTE
            </span>
          )}
          {isPlaceholder && (
            <span className="rounded-full bg-brown px-3 py-1 text-[11px] font-bold tracking-wide text-cream">
              CONTENU À VENIR
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-serif text-[19px] font-bold leading-snug text-brown">
            {workation.name}
          </h3>
          <p className="mt-1 text-[13.5px] text-brown/60">
            {workation.city} · {workation.region}
          </p>
        </div>

        <p className="text-[13px] text-brown/70">
          {formatDateRange(workation.dateStart, workation.dateEnd)} · {workation.duree}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {workation.workReady.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full bg-beige px-2.5 py-1 text-[11px] font-medium text-brown/75"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-brown/50">
              {workation.priceIsEstimate ? "Estimation" : "À partir de"}
            </p>
            <p className="font-serif text-xl font-bold text-brown">
              {workation.perPersonWorkation}€
              <span className="text-[12px] font-sans font-medium text-brown/50"> /pers.</span>
            </p>
          </div>
          <p className="text-right text-[12.5px] text-brown/60">
            {workation.placesRestantes} place{workation.placesRestantes > 1 ? "s" : ""}
            <br />
            restante{workation.placesRestantes > 1 ? "s" : ""}
          </p>
        </div>

        <Link
          href={`/workations/${workation.slug}`}
          className={`mt-1 flex items-center justify-center rounded-full px-5 py-3 text-[14px] font-bold text-cream transition-colors ${
            isConfirmed ? "bg-terracotta hover:bg-terracotta-hover" : "bg-brown hover:bg-brown/85"
          }`}
        >
          {isConfirmed ? "Réserver ma place" : "Candidater"}
        </Link>
      </div>
    </div>
  );
}
