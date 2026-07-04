import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PalmIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V10" />
      <path d="M12 10c-2-3-6-4-9-2 2 3 6 3 9 2Z" />
      <path d="M12 10c2-3 6-4 9-2-2 3-6 3-9 2Z" />
      <path d="M12 9c-1-3-4-5-7-5 1 3 4 5 7 5Z" />
      <path d="M12 9c1-3 4-5 7-5-1 3-4 5-7 5Z" />
    </svg>
  );
}

export function WifiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9a13 13 0 0 1 16 0" />
      <path d="M7 12.5a8.5 8.5 0 0 1 10 0" />
      <path d="M10 16a4 4 0 0 1 4 0" />
      <circle cx="12" cy="19" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LaptopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="16" height="10" rx="1.2" />
      <path d="M2 19h20" />
      <path d="M9 15v2M15 15v2" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H9l-4 4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 17l5-5 4 4 7-8" />
      <path d="M15 8h5v5" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ProfileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15 4.5c1.7.3 3 1.9 3 3.7s-1.3 3.4-3 3.7" />
      <path d="M21 20c0-2.8-1.8-5.1-4.3-5.8" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  );
}

export function ThumbsUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 11v9H4v-9h3Z" />
      <path d="M7 11l3.5-7c1.5 0 2.5 1.2 2.5 2.5V9h5a1.8 1.8 0 0 1 1.7 2.5l-2 6A2 2 0 0 1 15.8 20H7v-9Z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.5M12 18.5V21M4.2 4.2l1.8 1.8M18 18l1.8 1.8M3 12h2.5M18.5 12H21M4.2 19.8 6 18M18 6l1.8-1.8" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-1.5 5-5 1.5 1.5-5 5-1.5Z" />
    </svg>
  );
}

export function BackpackIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      <path d="M6 9.5A2.5 2.5 0 0 1 8.5 7h7A2.5 2.5 0 0 1 18 9.5V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9.5Z" />
      <path d="M9 12h6M10 22v-5h4v5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.6 5.5 5.9.7-4.4 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.4-4.1 5.9-.7Z" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3h6a2 2 0 0 1 2 2v6l-9.5 9.5a1.5 1.5 0 0 1-2 0L3 15a1.5 1.5 0 0 1 0-2Z" transform="translate(-1 0)" />
      <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.4-9.3-9C1.2 8 2.6 5 5.8 5c1.8 0 3.2 1 4.2 2.5C11 6 12.4 5 14.2 5c3.2 0 4.6 3 3.1 6-2.3 4.6-9.3 9-9.3 9Z" />
    </svg>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}
