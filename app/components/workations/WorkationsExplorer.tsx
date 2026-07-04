"use client";

import { useMemo, useState } from "react";
import WorkationCard from "./WorkationCard";
import type { Workation } from "@/lib/workations";

const BUDGET_OPTIONS = [
  { label: "Tous les budgets", value: "" },
  { label: "Jusqu'à 200€ / personne", value: "200" },
  { label: "Jusqu'à 300€ / personne", value: "300" },
  { label: "Jusqu'à 400€ / personne", value: "400" },
  { label: "Tous budgets confondus", value: "9999" },
];

export default function WorkationsExplorer({ workations }: { workations: Workation[] }) {
  const [region, setRegion] = useState("");
  const [budget, setBudget] = useState("");
  const [typeLogement, setTypeLogement] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const regions = useMemo(
    () => Array.from(new Set(workations.map((w) => w.region))).sort(),
    [workations],
  );
  const types = useMemo(
    () => Array.from(new Set(workations.map((w) => w.typeLogement))).sort(),
    [workations],
  );

  const filtered = workations.filter((w) => {
    if (region && w.region !== region) return false;
    if (typeLogement && w.typeLogement !== typeLogement) return false;
    if (budget && w.perPersonWorkation > Number(budget)) return false;
    if (onlyAvailable && w.placesRestantes <= 0) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-3 rounded-2xl bg-white/60 p-4">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="rounded-full border border-brown/15 bg-cream px-4 py-2.5 text-[13.5px] font-medium text-brown"
        >
          <option value="">Toutes les régions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <select
          value={typeLogement}
          onChange={(e) => setTypeLogement(e.target.value)}
          className="rounded-full border border-brown/15 bg-cream px-4 py-2.5 text-[13.5px] font-medium text-brown"
        >
          <option value="">Tous types d&apos;hébergement</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="rounded-full border border-brown/15 bg-cream px-4 py-2.5 text-[13.5px] font-medium text-brown"
        >
          {BUDGET_OPTIONS.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 rounded-full border border-brown/15 bg-cream px-4 py-2.5 text-[13.5px] font-medium text-brown">
          <input
            type="checkbox"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
            className="accent-terracotta"
          />
          Places disponibles uniquement
        </label>

        <span className="ml-auto text-[13px] text-brown/55">
          {filtered.length} workation{filtered.length > 1 ? "s" : ""}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-brown/60">
          Aucune workation ne correspond à ces critères pour le moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <WorkationCard key={w.slug} workation={w} />
          ))}
        </div>
      )}
    </div>
  );
}
