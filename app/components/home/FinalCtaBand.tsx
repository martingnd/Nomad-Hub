import Link from "next/link";
import BackgroundDecor from "../decor/BackgroundDecor";
import { CompassIcon, SunIcon, PalmIcon } from "../decor/icons";

const DECOR = [
  { Icon: PalmIcon, className: "-left-1 -top-2", size: 40, rotate: -10, color: "#F7F1E8", opacity: 0.06 },
  { Icon: SunIcon, className: "left-1/2 -top-1", size: 24, color: "#F7F1E8", opacity: 0.08 },
  { Icon: CompassIcon, className: "right-2 bottom-1", size: 32, rotate: 10, color: "#F7F1E8", opacity: 0.06 },
];

export default function FinalCtaBand() {
  return (
    <div className="relative overflow-hidden bg-brown py-14 md:py-[72px]">
      <BackgroundDecor items={DECOR} />
      <div className="relative mx-auto max-w-site px-6 md:px-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Link
            href="/workations"
            className="flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-cream bg-cream px-7 py-5 text-[15px] font-bold text-brown transition-colors hover:border-terracotta hover:bg-terracotta hover:text-cream"
          >
            Nos destinations
          </Link>
          <Link
            href="/workations"
            className="flex items-center justify-center gap-2.5 rounded-full bg-terracotta px-7 py-5 text-[15px] font-bold text-cream transition-colors hover:bg-terracotta-hover"
          >
            Workations
          </Link>
          <Link
            href="/entreprises"
            className="flex items-center justify-center gap-2.5 rounded-full bg-sage px-7 py-5 text-[15px] font-bold text-cream transition-colors hover:bg-sage-hover"
          >
            Pour entreprises
          </Link>
        </div>
      </div>
    </div>
  );
}
