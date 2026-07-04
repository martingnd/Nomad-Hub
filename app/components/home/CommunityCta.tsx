import Link from "next/link";
import BackgroundDecor from "../decor/BackgroundDecor";
import { ChatIcon, ProfileIcon, MailIcon, ThumbsUpIcon } from "../decor/icons";

const DECOR = [
  { Icon: ChatIcon, className: "left-[6%] top-4", size: 30, rotate: -6, color: "#F7F1E8", opacity: 0.1 },
  { Icon: ProfileIcon, className: "left-[24%] bottom-5", size: 26, color: "#F7F1E8", opacity: 0.08 },
  { Icon: MailIcon, className: "right-[30%] top-6", size: 26, rotate: 6, color: "#F7F1E8", opacity: 0.09 },
  { Icon: ThumbsUpIcon, className: "right-[8%] bottom-6", size: 30, color: "#F7F1E8", opacity: 0.1 },
];

export default function CommunityCta() {
  return (
    <div className="bg-cream py-14 md:py-[72px]">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <div className="relative flex flex-wrap items-center justify-between gap-10 overflow-hidden rounded-[28px] bg-brown px-8 py-12 md:px-16">
          <BackgroundDecor items={DECOR} />
          <div className="relative max-w-[560px]">
            <h2 className="mb-3.5 font-serif text-[32px] font-bold leading-tight text-cream [text-wrap:balance]">
              Une communauté, pas juste un séjour.
            </h2>
            <p className="m-0 text-[15.5px] leading-[1.6] text-cream/[0.78]">
              Accès Slack, networking, opportunités professionnelles et accès
              prioritaire aux workations.
            </p>
          </div>
          <Link
            href="/tarifs"
            className="relative whitespace-nowrap rounded-full bg-terracotta px-8 py-[18px] text-[15.5px] font-bold text-cream transition-colors hover:bg-terracotta-hover"
          >
            Rejoindre la communauté →
          </Link>
        </div>
      </div>
    </div>
  );
}
