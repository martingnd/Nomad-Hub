import { REASSURANCE } from "@/lib/pricing";
import { ProfileIcon, MapIcon, BriefcaseIcon, TagIcon, HeartIcon } from "../decor/icons";

const ICONS = {
  community: ProfileIcon,
  map: MapIcon,
  briefcase: BriefcaseIcon,
  tag: TagIcon,
  heart: HeartIcon,
};

export default function ReassuranceBand() {
  return (
    <div className="rounded-[24px] bg-brown px-6 py-8 md:px-10">
      <p className="text-center font-serif text-lg font-bold text-cream md:text-xl">
        Pourquoi rejoindre Nomad&apos;Hub ?
      </p>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {REASSURANCE.map((item) => {
          const Icon = ICONS[item.label as keyof typeof ICONS];
          return (
            <div key={item.title} className="flex flex-col items-center gap-2.5 text-center">
              <Icon width={24} height={24} className="text-terracotta" strokeWidth={1.6} />
              <p className="text-[13px] leading-snug text-cream/85">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
