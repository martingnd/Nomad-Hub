import type { ComponentType, SVGProps } from "react";
import {
  LaptopIcon,
  CompassIcon,
  CalendarIcon,
  ChatIcon,
  BuildingIcon,
  GrowthIcon,
  ProfileIcon,
  BriefcaseIcon,
  ThumbsUpIcon,
  StarIcon,
  BookIcon,
  ClockIcon,
  MailIcon,
  TagIcon,
  BackpackIcon,
  HeartIcon,
  MapIcon,
  PalmIcon,
  SunIcon,
} from "./icons";

type SceneIcon = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  x: number;
  y: number;
  size: number;
  rotate?: number;
  opacity?: number;
  color?: string;
};

function HeroScene({
  id,
  from,
  to,
  angle = 130,
  icons,
}: {
  id: string;
  from: string;
  to: string;
  angle?: number;
  icons: SceneIcon[];
}) {
  return (
    <svg
      viewBox="0 0 1600 640"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={`${id}-grad`}
          gradientUnits="userSpaceOnUse"
          x1={angle > 90 && angle < 270 ? 1600 : 0}
          y1="0"
          x2={angle > 90 && angle < 270 ? 0 : 1600}
          y2="640"
        >
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="72%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#F7F1E8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#F7F1E8" stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`${id}-stripes`}
          width="34"
          height="34"
          patternTransform="rotate(115)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="34" height="34" fill="transparent" />
          <rect width="3" height="34" fill="#F7F1E8" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="1600" height="640" fill={`url(#${id}-grad)`} />
      <rect width="1600" height="640" fill={`url(#${id}-glow)`} />
      <rect width="1600" height="640" fill={`url(#${id}-stripes)`} />
      {icons.map(({ Icon, x, y, size, rotate = 0, opacity = 1, color = "#F7F1E8" }, i) => (
        <Icon
          key={i}
          x={x - size / 2}
          y={y - size / 2}
          width={size}
          height={size}
          style={{
            color,
            opacity,
            transform: rotate ? `rotate(${rotate}deg)` : undefined,
            transformOrigin: `${x}px ${y}px`,
          }}
        />
      ))}
    </svg>
  );
}

export function ConceptHeroIllustration() {
  return (
    <HeroScene
      id="concept-hero"
      from="#4A2F24"
      to="#C46A45"
      angle={125}
      icons={[
        { Icon: LaptopIcon, x: 1220, y: 330, size: 380, opacity: 0.16 },
        { Icon: CompassIcon, x: 980, y: 490, size: 150, opacity: 0.22, rotate: -8 },
        { Icon: CalendarIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 10 },
        { Icon: ChatIcon, x: 1500, y: 560, size: 76, opacity: 0.25, rotate: -6 },
      ]}
    />
  );
}

export function EntreprisesHeroIllustration() {
  return (
    <HeroScene
      id="entreprises-hero"
      from="#4A2F24"
      to="#7C8A6A"
      angle={135}
      icons={[
        { Icon: BuildingIcon, x: 1220, y: 330, size: 380, opacity: 0.16 },
        { Icon: GrowthIcon, x: 980, y: 490, size: 150, opacity: 0.22, rotate: -6 },
        { Icon: ProfileIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 8 },
        { Icon: BriefcaseIcon, x: 1500, y: 560, size: 76, opacity: 0.25, rotate: -4 },
      ]}
    />
  );
}

export function CommunauteHeroIllustration() {
  return (
    <HeroScene
      id="communaute-hero"
      from="#C46A45"
      to="#7C8A6A"
      angle={140}
      icons={[
        { Icon: ProfileIcon, x: 1220, y: 330, size: 360, opacity: 0.16 },
        { Icon: ChatIcon, x: 980, y: 500, size: 150, opacity: 0.22, rotate: -8 },
        { Icon: ThumbsUpIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 10 },
        { Icon: StarIcon, x: 1500, y: 560, size: 70, opacity: 0.25, rotate: -6 },
      ]}
    />
  );
}

export function FaqHeroIllustration() {
  return (
    <HeroScene
      id="faq-hero"
      from="#7C8A6A"
      to="#4A2F24"
      angle={120}
      icons={[
        { Icon: BookIcon, x: 1220, y: 330, size: 360, opacity: 0.16 },
        { Icon: ChatIcon, x: 980, y: 490, size: 150, opacity: 0.22, rotate: -8 },
        { Icon: ClockIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 8 },
        { Icon: StarIcon, x: 1500, y: 560, size: 70, opacity: 0.25, rotate: -4 },
      ]}
    />
  );
}

export function ContactHeroIllustration() {
  return (
    <HeroScene
      id="contact-hero"
      from="#C46A45"
      to="#4A2F24"
      angle={150}
      icons={[
        { Icon: MailIcon, x: 1220, y: 330, size: 340, opacity: 0.16 },
        { Icon: ChatIcon, x: 980, y: 490, size: 150, opacity: 0.22, rotate: -8 },
        { Icon: CompassIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 10 },
        { Icon: StarIcon, x: 1500, y: 560, size: 70, opacity: 0.25, rotate: -6 },
      ]}
    />
  );
}

export function TarifsHeroIllustration() {
  return (
    <HeroScene
      id="tarifs-hero"
      from="#7C8A6A"
      to="#C46A45"
      angle={130}
      icons={[
        { Icon: TagIcon, x: 1220, y: 330, size: 360, opacity: 0.16 },
        { Icon: StarIcon, x: 980, y: 490, size: 140, opacity: 0.22, rotate: -8 },
        { Icon: BuildingIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 8 },
        { Icon: BackpackIcon, x: 1500, y: 560, size: 76, opacity: 0.25, rotate: -4 },
      ]}
    />
  );
}

export function AProposHeroIllustration() {
  return (
    <HeroScene
      id="a-propos-hero"
      from="#4A2F24"
      to="#C46A45"
      angle={100}
      icons={[
        { Icon: HeartIcon, x: 1220, y: 330, size: 340, opacity: 0.16 },
        { Icon: GrowthIcon, x: 980, y: 490, size: 150, opacity: 0.22, rotate: -8 },
        { Icon: ProfileIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 8 },
        { Icon: StarIcon, x: 1500, y: 560, size: 70, opacity: 0.25, rotate: -6 },
      ]}
    />
  );
}

export function CarteHeroIllustration() {
  return (
    <HeroScene
      id="carte-hero"
      from="#4A2F24"
      to="#7C8A6A"
      angle={160}
      icons={[
        { Icon: MapIcon, x: 1220, y: 330, size: 360, opacity: 0.16 },
        { Icon: CompassIcon, x: 980, y: 490, size: 150, opacity: 0.22, rotate: -8 },
        { Icon: PalmIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 8 },
        { Icon: BackpackIcon, x: 1500, y: 560, size: 76, opacity: 0.25, rotate: -4 },
      ]}
    />
  );
}

export function WorkationsHeroIllustration() {
  return (
    <HeroScene
      id="workations-hero"
      from="#C46A45"
      to="#7C8A6A"
      angle={110}
      icons={[
        { Icon: PalmIcon, x: 1220, y: 330, size: 360, opacity: 0.16 },
        { Icon: CompassIcon, x: 980, y: 490, size: 150, opacity: 0.22, rotate: -8 },
        { Icon: BackpackIcon, x: 1420, y: 150, size: 110, opacity: 0.2, rotate: 10 },
        { Icon: SunIcon, x: 1500, y: 560, size: 70, opacity: 0.25, rotate: -6 },
      ]}
    />
  );
}
