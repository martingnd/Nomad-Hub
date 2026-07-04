export type Access = "full" | "partial" | "none";

export type ChannelRow = {
  category: string;
  channel: string;
  isNew?: boolean;
  explorer: { access: Access; note?: string };
  pro: { access: Access; note?: string };
  business: { access: Access; note?: string };
};

export const SLACK_CHANNELS: ChannelRow[] = [
  {
    category: "Général",
    channel: "#nomad-hub-general",
    explorer: { access: "full" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Informations",
    channel: "#nh-annonces",
    explorer: { access: "partial", note: "lecture seule" },
    pro: { access: "full", note: "+ contenu exclusif" },
    business: { access: "full" },
  },
  {
    category: "Informations",
    channel: "#nh-evenements",
    explorer: { access: "partial", note: "événements ouverts seulement" },
    pro: { access: "full", note: "événements exclusifs" },
    business: { access: "full" },
  },
  {
    category: "Informations",
    channel: "#nh-nouveautes",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Informations",
    channel: "#nh-partenaires",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Communauté",
    channel: "#nh-presentations",
    explorer: { access: "partial", note: "limité" },
    pro: { access: "full", note: "illimité" },
    business: { access: "full" },
  },
  {
    category: "Communauté",
    channel: "#nh-discussions",
    explorer: { access: "partial", note: "fils limités" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Communauté",
    channel: "#nh-cafe-virtuel",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Communauté",
    channel: "#nh-photos-videos",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Business & opportunités",
    channel: "#nh-opportunites",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Business & opportunités",
    channel: "#nh-feedback",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Business & opportunités",
    channel: "#nh-ressources-business",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Business & opportunités",
    channel: "#nh-show-your-work",
    explorer: { access: "none" },
    pro: { access: "none" },
    business: { access: "full", note: "exclusif — visibilité de vos projets" },
  },
  {
    category: "Business & opportunités",
    channel: "#nh-appels-doffres",
    isNew: true,
    explorer: { access: "none" },
    pro: { access: "none" },
    business: { access: "full", note: "exclusif — missions & appels d'offres qualifiés" },
  },
  {
    category: "Productivité & remote work",
    channel: "#nh-remote-work, #nh-coworking-online, #nh-outils-recommandes, #nh-productivite",
    explorer: { access: "none" },
    pro: { access: "full", note: "ressources & outils remote work" },
    business: { access: "full" },
  },
  {
    category: "Workations",
    channel: "#nh-workations, #nh-sejour-en-cours, #nh-destinations, #nh-retours-experiences, #nh-infos-pratiques",
    explorer: { access: "partial", note: "destinations en lecture seule" },
    pro: { access: "full", note: "+ accès prioritaire aux places" },
    business: { access: "full", note: "+ accès workations premium/VIP" },
  },
  {
    category: "Réseau local",
    channel: "#nh-paris, #nh-lyon, #nh-lille, #nh-marseille, #nh-bordeaux, #nh-autres-villes",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Avantages membres",
    channel: "#nh-bons-plans, #nh-offres-exclusives, #nh-early-access, #nh-reductions-partenaires",
    explorer: { access: "none" },
    pro: { access: "full" },
    business: { access: "full" },
  },
  {
    category: "Avantages membres",
    channel: "#nh-masterclass-events-prives",
    isNew: true,
    explorer: { access: "none" },
    pro: { access: "none" },
    business: { access: "full", note: "sessions d'expertise, masterclass, événements privés" },
  },
  {
    category: "Ambassadeurs",
    channel: "#nh-ambassadeurs",
    explorer: { access: "none" },
    pro: { access: "none" },
    business: { access: "full", note: "programme ambassadeurs" },
  },
];
