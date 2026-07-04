import BackgroundDecor from "../decor/BackgroundDecor";
import { CompassIcon, PalmIcon, SunIcon, WifiIcon } from "../decor/icons";

const DECOR = [
  { Icon: PalmIcon, className: "-left-2 top-4", size: 46, rotate: -10, color: "#F7F1E8", opacity: 0.07 },
  { Icon: WifiIcon, className: "right-[28%] top-6", size: 26, color: "#F7F1E8", opacity: 0.09 },
  { Icon: SunIcon, className: "right-[10%] bottom-8", size: 28, color: "#F7F1E8", opacity: 0.08 },
  { Icon: CompassIcon, className: "left-[40%] bottom-2", size: 24, rotate: 8, color: "#F7F1E8", opacity: 0.07 },
];

export default function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-brown py-16 md:py-20">
      <BackgroundDecor items={DECOR} />
      <div className="relative mx-auto max-w-site px-6 md:px-12">
        <div className="mb-5 w-fit rounded-full border border-cream/30 bg-cream/[0.12] px-4 py-2 text-[12.5px] font-bold tracking-[0.06em] text-cream">
          {kicker}
        </div>
        <h1 className="max-w-[720px] font-serif text-[34px] font-bold leading-[1.12] text-cream [text-wrap:balance] md:text-[46px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-[560px] text-[16px] leading-[1.6] text-cream/80">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
