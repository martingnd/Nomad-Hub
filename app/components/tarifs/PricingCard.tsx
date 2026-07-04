import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import type { PricingTier } from "@/lib/pricing";

const STYLES: Record<string, { card: string; iconWrap: string; iconColor: string; price: string; button: string }> = {
  explorer: {
    card: "bg-white/70 border border-brown/10",
    iconWrap: "bg-beige",
    iconColor: "text-brown",
    price: "text-brown",
    button: "border-[1.5px] border-brown text-brown hover:bg-brown hover:text-cream",
  },
  pro: {
    card: "bg-white/70 border-2 border-terracotta",
    iconWrap: "bg-terracotta",
    iconColor: "text-cream",
    price: "text-terracotta",
    button: "bg-terracotta text-cream hover:bg-terracotta-hover",
  },
  business: {
    card: "bg-white/80 border-2 border-sage shadow-[0_12px_32px_rgba(124,138,106,0.18)]",
    iconWrap: "bg-sage",
    iconColor: "text-cream",
    price: "text-sage",
    button: "bg-sage text-cream hover:bg-sage-hover",
  },
  entreprise: {
    card: "bg-brown/[0.04] border border-brown/10",
    iconWrap: "bg-brown/15",
    iconColor: "text-brown/50",
    price: "text-brown/50",
    button: "bg-brown/15 text-brown/45",
  },
};

export default function PricingCard({
  tier,
  Icon,
  billing,
  onSelect,
}: {
  tier: PricingTier;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  billing: "monthly" | "annual";
  onSelect: (tierId: string) => void;
}) {
  const s = STYLES[tier.id];
  const price = billing === "monthly" ? tier.monthlyPrice : tier.annualPrice;
  const isFree = tier.monthlyPrice === 0;

  return (
    <div className={`relative flex flex-col gap-5 rounded-[24px] p-7 ${s.card}`}>
      {tier.badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wide text-cream ${
            tier.comingSoon ? "bg-brown/40" : "bg-sage"
          }`}
        >
          {tier.badge}
        </span>
      )}

      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${s.iconWrap}`}>
        <Icon width={26} height={26} className={s.iconColor} strokeWidth={1.6} />
      </div>

      <div>
        <h3 className="font-serif text-xl font-bold text-brown">{tier.name}</h3>
        <p className="mt-1 text-[13px] leading-snug text-brown/60">{tier.subtitle}</p>
      </div>

      <div className="border-t border-brown/10 pt-5">
        {tier.comingSoon ? (
          <p className={`font-serif text-2xl font-bold ${s.price}`}>Prochainement</p>
        ) : isFree ? (
          <>
            <p className={`font-serif text-4xl font-bold ${s.price}`}>0€</p>
            <p className="mt-1 text-[13px] text-brown/50">{tier.priceNote}</p>
          </>
        ) : (
          <>
            <p className={`font-serif text-4xl font-bold ${s.price}`}>
              {price}€<span className="text-base font-sans font-medium text-brown/50"> /{billing === "monthly" ? "mois" : "an"}</span>
            </p>
            {billing === "monthly" && tier.annualPrice != null && (
              <p className="mt-1 text-[13px] text-brown/50">soit {tier.annualPrice}€ / an</p>
            )}
          </>
        )}
      </div>

      {tier.comingSoon ? (
        <button
          type="button"
          disabled
          className={`w-full cursor-not-allowed rounded-full px-6 py-3.5 text-center text-[13.5px] font-bold uppercase tracking-wide ${s.button}`}
        >
          {tier.ctaLabel}
        </button>
      ) : isFree ? (
        <Link
          href="/communaute"
          className={`w-full rounded-full px-6 py-3.5 text-center text-[13.5px] font-bold uppercase tracking-wide transition-colors ${s.button}`}
        >
          {tier.ctaLabel}
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => onSelect(tier.id)}
          className={`w-full rounded-full px-6 py-3.5 text-center text-[13.5px] font-bold uppercase tracking-wide transition-colors ${s.button}`}
        >
          {tier.ctaLabel}
        </button>
      )}

      <ul className="flex flex-col gap-2.5">
        {tier.features.map((f) => (
          <li
            key={f.label}
            className={`flex items-start gap-2.5 text-[13.5px] leading-snug ${
              f.included ? "text-brown/80" : "text-brown/35"
            }`}
          >
            <span className={f.included ? "text-sage" : "text-brown/25"}>{f.included ? "✓" : "–"}</span>
            {f.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
