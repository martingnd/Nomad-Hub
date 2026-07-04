import Link from "next/link";
import BackgroundDecor from "../decor/BackgroundDecor";
import { WifiIcon, CompassIcon, SunIcon, PalmIcon } from "../decor/icons";

const DECOR = [
  { Icon: PalmIcon, className: "-left-2 top-6", size: 44, rotate: -12, color: "#4A2F24", opacity: 0.07 },
  { Icon: WifiIcon, className: "left-[38%] top-2", size: 30, rotate: 0, color: "#C46A45", opacity: 0.1 },
  { Icon: SunIcon, className: "right-[22%] top-10", size: 26, rotate: 0, color: "#7C8A6A", opacity: 0.12 },
  { Icon: CompassIcon, className: "right-4 bottom-6", size: 36, rotate: 8, color: "#4A2F24", opacity: 0.07 },
];

function IconBadge({
  children,
  borderColor,
}: {
  children: React.ReactNode;
  borderColor: string;
}) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-full"
      style={{ border: `1.5px solid ${borderColor}` }}
    >
      {children}
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <div className="relative bg-cream py-14 md:py-[72px]">
      <BackgroundDecor items={DECOR} />
      <div className="relative mx-auto max-w-site px-6 md:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Hébergements work-ready */}
          <div className="flex min-h-[260px] flex-col gap-[18px] rounded-[22px] bg-brown p-7">
            <IconBadge borderColor="rgba(247,241,232,0.4)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7F1E8" strokeWidth="1.6">
                <path d="M3 10 L12 3 L21 10" />
                <rect x="6" y="10" width="12" height="10" />
              </svg>
            </IconBadge>
            <h3 className="m-0 font-serif text-xl font-bold text-cream">
              Hébergements work-ready
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.55] text-cream/[0.78]">
              Sélectionnés pour leur confort, leur cadre et leurs espaces de
              travail adaptés.
            </p>
            <div className="mt-auto flex flex-col gap-2">
              {["Wi-Fi rapide", "Espaces de travail dédiés", "Cadre inspirant"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-[13px] text-beige"
                  >
                    <span className="h-[5px] w-[5px] rounded-full bg-terracotta" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Communauté sélectionnée */}
          <div className="flex min-h-[260px] flex-col gap-[18px] rounded-[22px] bg-terracotta p-7">
            <IconBadge borderColor="rgba(247,241,232,0.45)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7F1E8" strokeWidth="1.6">
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="9" r="2.4" />
                <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                <path d="M14.5 14.5c2.8 0.2 5 2.3 5 5.5" />
              </svg>
            </IconBadge>
            <h3 className="m-0 font-serif text-xl font-bold text-cream">
              Communauté sélectionnée
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.55] text-cream/90">
              Des profils inspirants, des échanges vrais, un réseau qui vous
              fait avancer.
            </p>
            <div className="mt-auto">
              <Link
                href="/communaute"
                className="text-[13.5px] font-bold text-cream underline underline-offset-[3px]"
              >
                Découvrir la communauté →
              </Link>
            </div>
          </div>

          {/* Tout est organisé */}
          <div className="flex min-h-[260px] flex-col gap-[18px] rounded-[22px] bg-beige p-7">
            <IconBadge borderColor="rgba(74,47,36,0.25)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A2F24" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 3v4M16 3v4" />
              </svg>
            </IconBadge>
            <h3 className="m-0 font-serif text-xl font-bold text-brown">
              Tout est organisé
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.55] text-brown/75">
              Hébergement, espaces, activités, communauté... vous n&apos;avez
              plus qu&apos;à vous concentrer sur ce qui compte.
            </p>
          </div>

          {/* Pour entreprises & équipes */}
          <div className="flex min-h-[260px] flex-col gap-[18px] rounded-[22px] bg-sage p-7">
            <IconBadge borderColor="rgba(247,241,232,0.45)">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7F1E8" strokeWidth="1.6">
                <path d="M2 12l5-3 5 3v6l-5 3-5-3z" />
                <path d="M12 12l5-3 5 3v6l-5 3-5-3z" />
              </svg>
            </IconBadge>
            <h3 className="m-0 font-serif text-xl font-bold text-cream">
              Pour entreprises &amp; équipes
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.55] text-cream/85">
              Workations, séminaires et retraites pour renforcer la cohésion
              et la performance à distance.
            </p>
            <div className="mt-auto">
              <Link
                href="/entreprises"
                className="text-[13.5px] font-bold text-cream underline underline-offset-[3px]"
              >
                Demander une proposition →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
