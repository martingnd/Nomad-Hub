"use client";

import { useRef, useState } from "react";
import PricingCard from "./PricingCard";
import FacadeForm from "../forms/FacadeForm";
import { SelectField, TextField } from "../forms/Field";
import { PRICING_TIERS } from "@/lib/pricing";
import { PalmIcon, BackpackIcon, StarIcon, BuildingIcon } from "../decor/icons";

const ICONS = {
  explorer: PalmIcon,
  pro: BackpackIcon,
  business: StarIcon,
  entreprise: BuildingIcon,
};

export default function PricingGrid() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [selectedOffer, setSelectedOffer] = useState<string>("pro");
  const formRef = useRef<HTMLDivElement>(null);

  function handleSelect(tierId: string) {
    setSelectedOffer(tierId);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-full bg-white/70 p-1.5">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-5 py-2.5 text-[13.5px] font-bold transition-colors ${
              billing === "monthly" ? "bg-brown text-cream" : "text-brown/60"
            }`}
          >
            Mensuel
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            className={`rounded-full px-5 py-2.5 text-[13.5px] font-bold transition-colors ${
              billing === "annual" ? "bg-brown text-cream" : "text-brown/60"
            }`}
          >
            Annuel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PRICING_TIERS.map((tier) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            Icon={ICONS[tier.id as keyof typeof ICONS]}
            billing={billing}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <div ref={formRef} className="mx-auto mt-16 max-w-lg scroll-mt-24 rounded-[24px] bg-white/70 p-8">
        <h3 className="font-serif text-xl font-bold text-brown">
          Être notifié à l&apos;ouverture des abonnements
        </h3>
        <p className="mt-2 text-[13.5px] text-brown/60">
          Le paiement en ligne n&apos;est pas encore actif. Laissez vos coordonnées : vous serez
          parmi les premiers prévenus au lancement.
        </p>
        <div className="mt-5">
          <FacadeForm
            key={selectedOffer}
            submitLabel="Être notifié·e"
            successTitle="C'est noté !"
            successBody="Vous serez parmi les premiers informés de l'ouverture des abonnements Nomad'Hub."
          >
            <TextField label="Nom" name="nom" />
            <TextField label="Email" name="email" type="email" />
            <SelectField
              label="Offre souhaitée"
              name="offre"
              defaultValue={selectedOffer}
              options={[
                { label: "Pro", value: "pro" },
                { label: "Business+", value: "business" },
                { label: "Entreprise+", value: "entreprise" },
              ]}
            />
          </FacadeForm>
        </div>
      </div>
    </div>
  );
}
