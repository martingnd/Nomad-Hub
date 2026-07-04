import type { ComponentType, SVGProps } from "react";

export type DecorItem = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  className: string;
  size?: number;
  rotate?: number;
  color?: string;
  opacity?: number;
};

export default function BackgroundDecor({ items }: { items: DecorItem[] }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map(({ Icon, className, size = 32, rotate = 0, color, opacity = 1 }, i) => (
        <Icon
          key={i}
          width={size}
          height={size}
          className={`absolute ${className}`}
          style={{
            color: color ?? "currentColor",
            opacity,
            transform: rotate ? `rotate(${rotate}deg)` : undefined,
          }}
        />
      ))}
    </div>
  );
}
