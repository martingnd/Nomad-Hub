export type Feature = { label: string; included: boolean };

export type PricingTier = {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  priceNote: string;
  badge?: string;
  ctaLabel: string;
  comingSoon: boolean;
  features: Feature[];
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "explorer",
    name: "Explorer",
    subtitle: "Découvrez Nomad'Hub et testez la communauté",
    monthlyPrice: 0,
    annualPrice: 0,
    priceNote: "pour toujours",
    ctaLabel: "Commencer gratuitement",
    comingSoon: false,
    features: [
      { label: "Accès au canal #nomad-hub-general", included: true },
      { label: "Annonces publiques & événements ouverts", included: true },
      { label: "Fils de discussion (accès limité)", included: true },
      { label: "Accès limité à la communauté", included: true },
      { label: "Accès à la quasi-totalité des canaux Slack", included: false },
      { label: "Opportunités & mises en relation", included: false },
      { label: "Avantages membres & réductions", included: false },
      { label: "Ressources & outils exclusifs", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Développez votre réseau et boostez votre activité",
    monthlyPrice: 10,
    annualPrice: 120,
    priceNote: "",
    ctaLabel: "Rejoindre Pro",
    comingSoon: false,
    features: [
      { label: "Accès à la quasi-totalité des canaux Slack (hors exclusifs Business+)", included: true },
      { label: "Annonces & visios exclusives", included: true },
      { label: "Présentations illimitées", included: true },
      { label: "Opportunités & collaborations", included: true },
      { label: "Accès prioritaire aux workations", included: true },
      { label: "Réductions partenaires", included: true },
      { label: "Ressources & outils remote work", included: true },
    ],
  },
  {
    id: "business",
    name: "Business+",
    subtitle: "Allez plus loin, gagnez en visibilité",
    monthlyPrice: 20,
    annualPrice: 240,
    priceNote: "",
    badge: "MEILLEURE OFFRE",
    ctaLabel: "Rejoindre Business+",
    comingSoon: false,
    features: [
      { label: "Tous les avantages de l'offre Pro", included: true },
      { label: "Canaux Slack exclusifs (#nh-show-your-work, #nh-appels-doffres…)", included: true },
      { label: "Mise en avant dans l'annuaire membres", included: true },
      { label: "Accès aux missions & appels d'offres", included: true },
      { label: "Visibilité de vos projets", included: true },
      { label: "Sessions d'expertise & masterclass", included: true },
      { label: "Événements privés & conseils business", included: true },
      { label: "Workations premium / VIP", included: true },
      { label: "Programme ambassadeurs", included: true },
    ],
  },
  {
    id: "entreprise",
    name: "Entreprise+",
    subtitle: "Des solutions sur-mesure pour vos équipes",
    monthlyPrice: null,
    annualPrice: null,
    priceNote: "Sur devis",
    badge: "PROCHAINEMENT",
    ctaLabel: "Prochainement",
    comingSoon: true,
    features: [
      { label: "Tous les avantages Business+", included: true },
      { label: "Workations & séminaires sur-mesure", included: true },
      { label: "Accompagnement dédié", included: true },
      { label: "Facturation entreprise", included: true },
      { label: "Espaces Slack privés", included: true },
      { label: "Support prioritaire", included: true },
      { label: "Onboarding équipes", included: true },
    ],
  },
];

export const REASSURANCE = [
  { title: "Une communauté bienveillante et active", label: "community" },
  { title: "Des workations inspirants partout en France", label: "map" },
  { title: "Des opportunités business", label: "briefcase" },
  { title: "Des avantages exclusifs", label: "tag" },
  { title: "Un réseau humain dans toute la France", label: "heart" },
] as const;
