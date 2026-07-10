export type WorkationStatus = "confirmee" | "candidature" | "placeholder";

export type Workation = {
  slug: string;
  name: string;
  pilot: boolean;
  status: WorkationStatus;
  city: string;
  region: string;
  capacity: number;
  rooms: { chambres: number; lits: number; sdb: number };
  rating: { note: number; avis: number } | null;
  typeLogement: string;
  totalPrice6Nights: number | null;
  perNightApprox: number;
  perPersonWorkation: number;
  priceIsEstimate: boolean;
  dateStart: string;
  dateEnd: string;
  duree: string;
  placesTotales: number;
  placesRestantes: number;
  workReady: string[];
  inclusions: string[];
  description: string;
  highlights: string[];
  equipements: string[];
  activites: string[];
  program: { day: string; title: string; text: string }[];
  cancellation: string;
  photoCaption: string;
  photos?: string[];
  destinationPhoto?: string;
};

export const REGIONS = [
  "Pays de la Loire",
  "Provence-Alpes-Côte d'Azur",
  "Centre-Val de Loire",
  "Nouvelle-Aquitaine",
  "Bretagne",
  "Île-de-France",
  "Bourgogne-Franche-Comté",
];

const CANCELLATION_DEFAULT =
  "Annulation gratuite jusqu'à 30 jours avant le début du séjour. Entre 30 et 15 jours, 50% du montant de pré-réservation est conservé. À moins de 15 jours, le montant n'est pas remboursable. Conditions détaillées communiquées lors de la confirmation - aucun paiement en ligne n'est prélevé au stade de la pré-réservation.";

export const WORKATIONS: Workation[] = [
  {
    slug: "villa-des-dunes-bretignolles-sur-mer",
    name: "Villa des Dunes",
    pilot: true,
    status: "confirmee",
    city: "Brétignolles-sur-Mer",
    region: "Pays de la Loire",
    capacity: 14,
    rooms: { chambres: 6, lits: 10, sdb: 2 },
    rating: { note: 4.89, avis: 111 },
    typeLogement: "Villa",
    totalPrice6Nights: 2971,
    perNightApprox: 495,
    perPersonWorkation: 285,
    priceIsEstimate: false,
    dateStart: "2026-09-14",
    dateEnd: "2026-09-20",
    duree: "6 nuits",
    placesTotales: 14,
    placesRestantes: 5,
    workReady: ["Wifi fibre", "Bureaux dédiés", "Grande table commune", "Calme"],
    inclusions: [
      "Petits-déjeuners inclus",
      "Accès Slack dédié au séjour",
      "1 activité collective incluse",
      "Ménage de fin de séjour",
    ],
    description:
      "À deux pas des plages de la côte vendéenne, la Villa des Dunes est notre premier workation pilote : une grande maison lumineuse pensée pour accueillir un groupe de freelances et d'indépendants dans le confort, avec assez d'espace pour alterner concentration et vie collective. Le jardin et la proximité immédiate de l'océan en font un cadre idéal pour couper avec le quotidien tout en gardant un rythme de travail sérieux.",
    highlights: [
      "5 minutes à pied de la plage",
      "Grand jardin clos avec espace détente",
      "Cuisine ouverte équipée pour les repas collectifs",
      "Vélos disponibles sur place",
    ],
    equipements: [
      "Fibre optique dans toute la maison",
      "2 espaces bureau dédiés + grande table de 10 personnes",
      "Écrans additionnels disponibles sur demande",
      "Imprimante partagée",
    ],
    activites: [
      "Session surf ou paddle découverte",
      "Balade à vélo sur la Vélodyssée",
      "Soirée plage & feu de camp",
      "Marché local de Brétignolles-sur-Mer",
    ],
    program: [
      { day: "Jour 1", title: "Arrivée & installation", text: "Accueil en fin d'après-midi, tour de la maison, apéritif de bienvenue et présentation du groupe." },
      { day: "Jour 2-5", title: "Rythme travail + expérience locale", text: "Matinées en focus profond dans les espaces de travail dédiés, après-midis libres ou activité collective (surf, vélo, marché), dîners partagés." },
      { day: "Jour 6", title: "Dernière matinée & départ", text: "Matinée de travail libre, brunch de clôture, check-out en douceur." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Villa des Dunes, terrasse et jardin",
    photos: [
      "/images/villa-des-dunes.avif",
      "/images/villa-des-dunes-2.avif",
      "/images/villa-des-dunes-3.avif",
      "/images/villa-des-dunes-4.avif",
    ],
  },
  {
    slug: "annexe-des-3-moulins-beaulieu-sous-la-roche",
    name: "L'Annexe des 3 Moulins",
    pilot: true,
    status: "confirmee",
    city: "Beaulieu-sous-la-Roche",
    region: "Pays de la Loire",
    capacity: 4,
    rooms: { chambres: 1, lits: 2, sdb: 1 },
    rating: { note: 4.86, avis: 95 },
    typeLogement: "Studio",
    totalPrice6Nights: 738,
    perNightApprox: 123,
    perPersonWorkation: 250,
    priceIsEstimate: false,
    dateStart: "2026-10-05",
    dateEnd: "2026-10-11",
    duree: "6 nuits",
    placesTotales: 4,
    placesRestantes: 2,
    workReady: ["Wifi fibre", "Bureau dédié", "Calme absolu"],
    inclusions: [
      "Accès Slack dédié au séjour",
      "Petit-déjeuner offert le jour d'arrivée",
      "Ménage de fin de séjour",
    ],
    description:
      "Notre second workation pilote : un studio indépendant au calme, dans la campagne vendéenne, taillé pour un petit groupe ou un binôme de freelances en quête de concentration. Format volontairement intimiste - l'expérience Nomad'Hub à petite échelle, pour tester la formule sans la logistique d'un grand groupe.",
    highlights: [
      "Cadre rural calme, idéal pour la concentration",
      "Studio indépendant et lumineux",
      "À 20 minutes des plages vendéennes",
      "Parking privé",
    ],
    equipements: [
      "Fibre optique",
      "1 bureau dédié avec écran additionnel",
      "Coin lecture / pause",
    ],
    activites: [
      "Balade dans la campagne environnante",
      "Excursion à la journée sur la côte (en option)",
      "Découverte des producteurs locaux",
    ],
    program: [
      { day: "Jour 1", title: "Arrivée & prise de repères", text: "Installation, présentation des espaces de travail, premier dîner ensemble." },
      { day: "Jour 2-5", title: "Focus + air pur", text: "Journées de travail au calme, pauses en extérieur, une sortie à la journée en option vers la côte." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "L'Annexe des 3 Moulins, studio et extérieur",
    photos: [
      "/images/annexe-3-moulins.jpg",
      "/images/annexe-3-moulins-2.avif",
      "/images/annexe-3-moulins-3.avif",
      "/images/annexe-3-moulins-4.avif",
      "/images/annexe-3-moulins-5.avif",
    ],
  },
  {
    slug: "mas-jacuzzi-cote-azur-la-crau",
    name: "Mas avec Jacuzzi Privé, Plage et Côte d'Azur",
    pilot: false,
    status: "candidature",
    city: "La Crau",
    region: "Provence-Alpes-Côte d'Azur",
    capacity: 7,
    rooms: { chambres: 2, lits: 5, sdb: 2.5 },
    rating: { note: 5.0, avis: 7 },
    typeLogement: "Mas provençal",
    totalPrice6Nights: 1132,
    perNightApprox: 189,
    perPersonWorkation: 220,
    priceIsEstimate: false,
    dateStart: "2026-11-09",
    dateEnd: "2026-11-15",
    duree: "6 nuits",
    placesTotales: 7,
    placesRestantes: 7,
    workReady: ["Wifi fibre", "Bureau dédié", "Terrasse ombragée"],
    inclusions: ["Accès Slack dédié au séjour", "Ménage de fin de séjour"],
    description:
      "Un mas provençal au calme entre Hyères et Toulon, à quelques minutes des plages de la Côte d'Azur. Jacuzzi privé, terrasse ombragée et jardin méditerranéen pour des journées de travail suivies de fins d'après-midi les pieds dans l'eau. Fiche en cours de qualification - contenu basé sur l'annonce d'origine, à confirmer avant mise en ligne définitive.",
    highlights: [
      "Jacuzzi privé et jardin méditerranéen",
      "Accès plage à proximité",
      "Terrasse ombragée idéale pour travailler dehors",
    ],
    equipements: ["Fibre optique", "1 bureau dédié en intérieur", "Grande table extérieure"],
    activites: ["Après-midi plage", "Balade dans le massif des Maures", "Découverte des marchés provençaux"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Installation et découverte du mas." },
      { day: "Jour 2-5", title: "Travail + Méditerranée", text: "Matinées de travail, après-midis plage ou détente au jacuzzi." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Mas provençal, jacuzzi et jardin",
    photos: [
      "/images/mas-jacuzzi-3.avif",
      "/images/mas-jacuzzi-1.avif",
      "/images/mas-jacuzzi-2.avif",
      "/images/mas-jacuzzi-4.avif",
      "/images/mas-jacuzzi-5.avif",
    ],
  },
  {
    slug: "oree-des-bois-villefranche-sur-cher",
    name: "À l'Orée des Bois - calme et nature",
    pilot: false,
    status: "candidature",
    city: "Villefranche-sur-Cher",
    region: "Centre-Val de Loire",
    capacity: 9,
    rooms: { chambres: 4, lits: 5, sdb: 1 },
    rating: { note: 4.9, avis: 60 },
    typeLogement: "Maison de campagne",
    totalPrice6Nights: 902,
    perNightApprox: 150,
    perPersonWorkation: 135,
    priceIsEstimate: false,
    dateStart: "2026-09-28",
    dateEnd: "2026-10-04",
    duree: "6 nuits",
    placesTotales: 9,
    placesRestantes: 9,
    workReady: ["Wifi fibre", "Bureaux dédiés", "Calme total"],
    inclusions: ["Accès Slack dédié au séjour", "Ménage de fin de séjour"],
    description:
      "Une maison de campagne en lisière de forêt, dans le Loir-et-Cher, pour un workation au calme complet - loin de l'agitation, entouré de nature. Format adapté aux petits groupes en quête de concentration. Fiche en cours de qualification - contenu basé sur l'annonce d'origine, à confirmer avant mise en ligne définitive.",
    highlights: ["Cadre forestier calme", "Grand jardin", "Idéal pour la concentration en petit groupe"],
    equipements: ["Fibre optique", "2 espaces bureau dédiés", "Grande table commune"],
    activites: ["Randonnée en forêt", "Visite des châteaux de la Loire à proximité", "Soirée jeux de société"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Installation et balade de découverte des environs." },
      { day: "Jour 2-5", title: "Travail + nature", text: "Journées de travail au calme, randonnées et sorties culturelles en option." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Maison de campagne, lisière de forêt",
    photos: [
      "/images/oree-des-bois-1.avif",
      "/images/oree-des-bois-2.avif",
      "/images/oree-des-bois-3.avif",
      "/images/oree-des-bois-4.avif",
      "/images/oree-des-bois-5.avif",
    ],
  },
  {
    slug: "parenthese-bordelaise-parempuyre",
    name: "Parenthèse Bordelaise : Vignobles & Océan",
    pilot: false,
    status: "candidature",
    city: "Parempuyre",
    region: "Nouvelle-Aquitaine",
    capacity: 10,
    rooms: { chambres: 5, lits: 6, sdb: 3.5 },
    rating: { note: 4.86, avis: 277 },
    typeLogement: "Maison 4★",
    totalPrice6Nights: 1863,
    perNightApprox: 311,
    perPersonWorkation: 250,
    priceIsEstimate: false,
    dateStart: "2026-10-19",
    dateEnd: "2026-10-25",
    duree: "6 nuits",
    placesTotales: 10,
    placesRestantes: 10,
    workReady: ["Wifi fibre", "Bureaux dédiés", "Grand séjour lumineux"],
    inclusions: ["Accès Slack dédié au séjour", "1 dégustation vignoble incluse", "Ménage de fin de séjour"],
    description:
      "Aux portes de Bordeaux, entre vignobles et estuaire, cette maison 4 étoiles offre un cadre spacieux et raffiné pour un workation d'équipe. Particulièrement adaptée aux groupes et séminaires grâce à sa grande capacité. Fiche en cours de qualification - contenu basé sur l'annonce d'origine, à confirmer avant mise en ligne définitive.",
    highlights: ["Entre vignobles et estuaire de la Gironde", "Grande capacité, idéale pour équipes", "Standing 4 étoiles"],
    equipements: ["Fibre optique", "3 espaces bureau dédiés", "Grande table de réunion"],
    activites: ["Dégustation dans un château viticole", "Balade le long de l'estuaire", "Excursion à Bordeaux"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Installation, présentation du groupe, dîner de bienvenue." },
      { day: "Jour 2-5", title: "Travail + vignobles", text: "Journées de travail en équipe, dégustation et sorties culturelles en fin de journée." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Photo à venir - Maison 4 étoiles, vignobles à proximité",
  },
  {
    slug: "unique-coeur-hossegor",
    name: "Unique, plein cœur d'Hossegor",
    pilot: false,
    status: "candidature",
    city: "Soorts-Hossegor",
    region: "Nouvelle-Aquitaine",
    capacity: 10,
    rooms: { chambres: 4, lits: 7, sdb: 2 },
    rating: { note: 4.9, avis: 42 },
    typeLogement: "Villa",
    totalPrice6Nights: 2698,
    perNightApprox: 450,
    perPersonWorkation: 365,
    priceIsEstimate: false,
    dateStart: "2026-08-24",
    dateEnd: "2026-08-30",
    duree: "6 nuits",
    placesTotales: 10,
    placesRestantes: 10,
    workReady: ["Wifi fibre", "Bureaux dédiés", "Terrasse"],
    inclusions: ["Accès Slack dédié au séjour", "Ménage de fin de séjour"],
    description:
      "En plein cœur d'Hossegor, capitale du surf landais, cette villa spacieuse combine standing et accès direct à l'ambiance de la station. Un cadre idéal pour un workation dynamique, entre sessions de travail et sorties surf. Fiche en cours de qualification - contenu basé sur l'annonce d'origine, à confirmer avant mise en ligne définitive.",
    highlights: ["À pied du centre d'Hossegor", "Ambiance surf et lifestyle", "Grande capacité pour groupes"],
    equipements: ["Fibre optique", "2 espaces bureau dédiés", "Terrasse pour travailler dehors"],
    activites: ["Cours de surf", "Balade au bord du lac d'Hossegor", "Sorties bars/restaurants du centre"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Installation, découverte du centre d'Hossegor." },
      { day: "Jour 2-5", title: "Travail + surf", text: "Matinées de travail, après-midis surf ou détente au lac." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Photo à venir - Villa, ambiance Hossegor",
  },
  {
    slug: "le-loft-lorient-centre",
    name: "Le Loft - Lorient centre, jacuzzi et salle cinéma",
    pilot: false,
    status: "candidature",
    city: "Lorient",
    region: "Bretagne",
    capacity: 14,
    rooms: { chambres: 4, lits: 6, sdb: 2 },
    rating: { note: 4.84, avis: 487 },
    typeLogement: "Loft",
    totalPrice6Nights: 2362,
    perNightApprox: 394,
    perPersonWorkation: 230,
    priceIsEstimate: false,
    dateStart: "2026-11-16",
    dateEnd: "2026-11-22",
    duree: "6 nuits",
    placesTotales: 14,
    placesRestantes: 14,
    workReady: ["Wifi fibre", "Bureaux dédiés", "Salle cinéma"],
    inclusions: ["Accès Slack dédié au séjour", "Ménage de fin de séjour"],
    description:
      "En plein centre de Lorient, ce loft atypique avec jacuzzi et salle de cinéma privée offre un cadre urbain original pour un workation d'équipe. Grande capacité, idéale pour un séminaire ou une retraite d'équipe. Fiche en cours de qualification - contenu basé sur l'annonce d'origine, à confirmer avant mise en ligne définitive.",
    highlights: ["Centre-ville de Lorient", "Jacuzzi et salle cinéma privée", "Grande capacité pour séminaires"],
    equipements: ["Fibre optique", "3 espaces bureau dédiés", "Salle de réunion / projection"],
    activites: ["Visite du port de Lorient (base sous-marine)", "Soirée cinéma privée", "Sortie voile en option"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Installation, tour du loft, présentation du groupe." },
      { day: "Jour 2-5", title: "Travail + ville", text: "Journées de travail en équipe, sorties culturelles et soirée cinéma privée." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Photo à venir - Loft urbain, Lorient centre",
  },
  {
    slug: "villa-maegiu-tigeaux",
    name: "La Villa Maegiu, proche Disney",
    pilot: false,
    status: "candidature",
    city: "Tigeaux",
    region: "Île-de-France",
    capacity: 8,
    rooms: { chambres: 4, lits: 5, sdb: 2 },
    rating: { note: 4.98, avis: 58 },
    typeLogement: "Villa",
    totalPrice6Nights: 3080,
    perNightApprox: 513,
    perPersonWorkation: 520,
    priceIsEstimate: false,
    dateStart: "2026-12-07",
    dateEnd: "2026-12-13",
    duree: "6 nuits",
    placesTotales: 8,
    placesRestantes: 8,
    workReady: ["Wifi fibre", "Bureaux dédiés", "Grand jardin"],
    inclusions: ["Accès Slack dédié au séjour", "Ménage de fin de séjour"],
    description:
      "À proximité de Paris et de Disneyland Paris, cette villa haut de gamme en Seine-et-Marne offre un cadre spacieux et confortable, à la fois proche de la capitale et au calme. Fiche en cours de qualification - contenu basé sur l'annonce d'origine, à confirmer avant mise en ligne définitive.",
    highlights: ["Proche Paris et Disneyland Paris", "Standing haut de gamme", "Grand jardin arboré"],
    equipements: ["Fibre optique", "2 espaces bureau dédiés", "Grande table commune"],
    activites: ["Journée à Disneyland Paris (en option)", "Balade en forêt environnante", "Sortie à Paris"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Installation, présentation du groupe." },
      { day: "Jour 2-5", title: "Travail + escapades", text: "Journées de travail, sorties en option vers Paris ou Disneyland Paris." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Photo à venir - Villa, jardin arboré",
  },
  {
    slug: "longere-perigord-placeholder",
    name: "Longère en Périgord, piscine & jardin",
    pilot: false,
    status: "placeholder",
    city: "Périgord",
    region: "Nouvelle-Aquitaine",
    capacity: 12,
    rooms: { chambres: 5, lits: 8, sdb: 3 },
    rating: null,
    typeLogement: "Longère",
    totalPrice6Nights: null,
    perNightApprox: 525,
    perPersonWorkation: 355,
    priceIsEstimate: true,
    dateStart: "2027-01-11",
    dateEnd: "2027-01-17",
    duree: "6 nuits",
    placesTotales: 12,
    placesRestantes: 12,
    workReady: ["Wifi fibre (à confirmer)", "Bureaux dédiés", "Piscine"],
    inclusions: ["Accès Slack dédié au séjour", "Ménage de fin de séjour"],
    description:
      "⏳ Fiche placeholder - cette annonce sera remplacée par une véritable propriété en Dordogne (ou une autre région) avant la mise en ligne définitive. Le contenu ci-dessous (prix, note, équipements) est une estimation cohérente avec la gamme du catalogue, à confirmer une fois l'annonce réelle fournie.",
    highlights: ["Grande capacité, adaptée aux groupes/séminaires", "Piscine et jardin", "Contenu à remplacer avant lancement"],
    equipements: ["Fibre optique (à confirmer)", "Espaces bureau dédiés (à confirmer)"],
    activites: ["Dégustation vin & gastronomie périgourdine (à confirmer)", "Visite de villages classés (à confirmer)"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Contenu provisoire - à détailler une fois l'annonce réelle confirmée." },
      { day: "Jour 2-5", title: "Travail + découverte du Périgord", text: "Contenu provisoire - à détailler une fois l'annonce réelle confirmée." },
      { day: "Jour 6", title: "Départ", text: "Contenu provisoire - à détailler une fois l'annonce réelle confirmée." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Placeholder - annonce réelle à venir (Dordogne)",
  },
  {
    slug: "gite-ancien-lavoir-sennevoy-le-bas",
    name: "Gîte de l'ancien lavoir",
    pilot: false,
    status: "candidature",
    city: "Sennevoy-le-Bas",
    region: "Bourgogne-Franche-Comté",
    capacity: 11,
    rooms: { chambres: 4, lits: 7, sdb: 4.5 },
    rating: { note: 4.95, avis: 41 },
    typeLogement: "Gîte",
    totalPrice6Nights: 2747,
    perNightApprox: 458,
    perPersonWorkation: 335,
    priceIsEstimate: false,
    dateStart: "2026-09-07",
    dateEnd: "2026-09-13",
    duree: "6 nuits",
    placesTotales: 11,
    placesRestantes: 11,
    workReady: ["Wifi fibre", "Bureaux dédiés", "Grand corps de ferme rénové"],
    inclusions: ["Accès Slack dédié au séjour", "Ménage de fin de séjour"],
    description:
      "Un ancien lavoir rénové en Bourgogne, au cœur de la campagne de l'Yonne : un cadre authentique et spacieux pour un workation de groupe au vert. Grande capacité, adaptée aux équipes en quête de calme et d'espace. Fiche en cours de qualification - contenu basé sur l'annonce d'origine, à confirmer avant mise en ligne définitive.",
    highlights: ["Bâtisse authentique rénovée", "Grande capacité pour groupes", "Campagne bourguignonne calme"],
    equipements: ["Fibre optique", "3 espaces bureau dédiés", "Grande table commune"],
    activites: ["Dégustation de vins de Bourgogne", "Balade dans la campagne environnante", "Visite de villages alentour"],
    program: [
      { day: "Jour 1", title: "Arrivée", text: "Installation, présentation du groupe, dîner de bienvenue." },
      { day: "Jour 2-5", title: "Travail + campagne bourguignonne", text: "Journées de travail en équipe, dégustations et balades en fin de journée." },
      { day: "Jour 6", title: "Départ", text: "Matinée libre, check-out." },
    ],
    cancellation: CANCELLATION_DEFAULT,
    photoCaption: "Photo à venir - Gîte rénové, campagne bourguignonne",
  },
];

export function getWorkationBySlug(slug: string): Workation | undefined {
  return WORKATIONS.find((w) => w.slug === slug);
}

export function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const fmt = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long" });
  const fmtYear = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  return `${fmt.format(s)} - ${fmtYear.format(e)}`;
}
