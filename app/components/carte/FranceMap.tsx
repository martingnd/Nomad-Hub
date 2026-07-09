"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Workation } from "@/lib/workations";

const FRANCE_OUTLINE =
  "M48,3 L58,8 L68,22 L66,32 L78,45 L82,60 L80,75 L76,88 L60,96 L45,94 L30,90 L22,85 L15,75 L12,62 L10,50 L2,45 L5,38 L12,40 L18,30 L25,20 L30,12 L38,8 Z";

const MARKER_POSITIONS: Record<string, { x: number; y: number }> = {
  "villa-des-dunes-bretignolles-sur-mer": { x: 18, y: 52 },
  "annexe-des-3-moulins-beaulieu-sous-la-roche": { x: 22, y: 51 },
  "mas-jacuzzi-cote-azur-la-crau": { x: 72, y: 85 },
  "oree-des-bois-villefranche-sur-cher": { x: 42, y: 45 },
  "parenthese-bordelaise-parempuyre": { x: 20, y: 75 },
  "unique-coeur-hossegor": { x: 17, y: 83 },
  "le-loft-lorient-centre": { x: 8, y: 42 },
  "villa-maegiu-tigeaux": { x: 52, y: 28 },
  "longere-perigord-placeholder": { x: 28, y: 70 },
  "gite-ancien-lavoir-sennevoy-le-bas": { x: 58, y: 35 },
};

export default function FranceMap({ workations }: { workations: Workation[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();

  const hoveredWorkation = workations.find((w) => w.slug === hovered);
  const hoveredPos = hovered ? MARKER_POSITIONS[hovered] : null;

  return (
    <div className="relative mx-auto max-w-[560px]">
      <svg
        viewBox="0 0 100 100"
        className="w-full"
        role="img"
        aria-label="Carte de France avec la localisation des workations Nomad'Hub"
      >
        <path
          d={FRANCE_OUTLINE}
          fill="#E8D8C3"
          stroke="#4A2F24"
          strokeWidth={0.6}
          strokeOpacity={0.35}
        />

        {workations.map((w) => {
          const pos = MARKER_POSITIONS[w.slug];
          if (!pos) return null;
          const isHovered = hovered === w.slug;
          return (
            <g
              key={w.slug}
              onClick={() => router.push(`/workations/${w.slug}`)}
              onMouseEnter={() => setHovered(w.slug)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
            >
              {isHovered && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={4.5}
                  fill="#C46A45"
                  opacity={0.25}
                >
                  <animate
                    attributeName="r"
                    values="3;5.5;3"
                    dur="1.4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.35;0.05;0.35"
                    dur="1.4s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? 2.6 : 2}
                fill={w.pilot ? "#C46A45" : "#4A2F24"}
                stroke="#F7F1E8"
                strokeWidth={0.5}
                style={{ transition: "r 0.15s ease" }}
              />
            </g>
          );
        })}
      </svg>

      {hoveredWorkation && hoveredPos && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-xl bg-brown px-4 py-2.5 text-center shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
          style={{
            left: `${hoveredPos.x}%`,
            top: `${hoveredPos.y}%`,
            marginTop: "-10px",
          }}
        >
          <p className="whitespace-nowrap text-[13px] font-bold text-cream">{hoveredWorkation.name}</p>
          <p className="whitespace-nowrap text-[11.5px] text-cream/70">
            {hoveredWorkation.city} · {hoveredWorkation.region}
          </p>
        </div>
      )}
    </div>
  );
}
