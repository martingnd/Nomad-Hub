export type FaqItem = { question: string; answer: string };
export type FaqCategory = { category: string; items: FaqItem[] };

export const FAQ: FaqCategory[] = [
  {
    category: "Général",
    items: [
      {
        question: "Qu'est-ce qu'un workation ?",
        answer:
          "Workation est la contraction de « Work » et de « Vacation », le « travail-vacances ». C'est un séjour clé en main qui combine un vrai cadre de travail (wifi fibre, espace dédié, calme) et une expérience de vie locale, entouré d'une communauté de professionnels du remote.",
      },
      {
        question: "Nomad'Hub est-il réservé aux freelances ?",
        answer:
          "Non. Nomad'Hub s'adresse aux freelances et indépendants, mais aussi aux salariés en télétravail et aux équipes/entreprises qui souhaitent organiser un séminaire ou une retraite de travail.",
      },
      {
        question: "Dans quelles régions proposez-vous des workations ?",
        answer:
          "Nos hébergements sont répartis partout en France : Vendée, Var, Loir-et-Cher, Gironde, Landes, Morbihan, Seine-et-Marne, Yonne... Le catalogue s'enrichit régulièrement de nouvelles destinations.",
      },
    ],
  },
  {
    category: "Abonnements & communauté",
    items: [
      {
        question: "Dois-je être abonné pour réserver une workation ?",
        answer:
          "Non, la pré-réservation est ouverte à tous. Les membres Pro et Business+ bénéficient en revanche d'un accès prioritaire aux places disponibles.",
      },
      {
        question: "Quelle est la différence entre Pro et Business+ ?",
        answer:
          "Pro donne accès à la quasi-totalité des canaux Slack, aux opportunités et à un accès prioritaire aux workations. Business+ ajoute les canaux exclusifs (missions, masterclass, ambassadeurs), la mise en avant dans l'annuaire membres et l'accès aux workations premium/VIP.",
      },
      {
        question: "Puis-je changer d'offre à tout moment ?",
        answer:
          "Le paiement en ligne des abonnements n'est pas encore actif (prévu en V2). En attendant, vous pouvez vous inscrire sur la liste d'attente depuis la page Tarifs pour être notifié·e de l'ouverture.",
      },
    ],
  },
  {
    category: "Workations & réservation",
    items: [
      {
        question: "Comment réserver ma place ?",
        answer:
          "Depuis la fiche d'une workation, remplissez le formulaire de pré-réservation (ou de candidature si le groupe est en cours de constitution). Aucun paiement n'est demandé à ce stade.",
      },
      {
        question: "Que se passe-t-il après ma pré-réservation ?",
        answer:
          "Vous recevez une confirmation, et notre équipe revient vers vous sous 48h pour valider les modalités du séjour (dates, places, conditions).",
      },
      {
        question: "Puis-je venir seul·e ?",
        answer:
          "Oui. Certains hébergements sont pensés pour des petits groupes/solo (4 à 9 personnes), d'autres pour des équipes ou séminaires (10 à 14 personnes).",
      },
    ],
  },
  {
    category: "Paiement (préparation V2)",
    items: [
      {
        question: "Puis-je payer une workation ou un abonnement en ligne dès maintenant ?",
        answer:
          "Pas encore. La V1 de Nomad'Hub fonctionne sans paiement en ligne : les pré-réservations et pré-inscriptions sont gratuites et sans engagement.",
      },
      {
        question: "Comment fonctionnera le paiement à terme ?",
        answer:
          "Une intégration Stripe est prévue en V2 pour les abonnements Pro/Business+, et potentiellement pour le paiement direct des workations.",
      },
    ],
  },
  {
    category: "Annulation",
    items: [
      {
        question: "Quelles sont les conditions d'annulation d'une workation ?",
        answer:
          "Annulation gratuite jusqu'à 30 jours avant le départ. Entre 30 et 15 jours, 50% du montant de pré-réservation est conservé. À moins de 15 jours, le montant n'est pas remboursable. Aucun paiement n'est prélevé au stade de la pré-réservation en V1.",
      },
    ],
  },
  {
    category: "Hébergeurs (à venir)",
    items: [
      {
        question: "Puis-je proposer mon bien comme hébergement partenaire ?",
        answer:
          "Le programme hébergeurs partenaires n'est pas encore ouvert en V1. Il sera formalisé et lancé en V2 — revenez bientôt pour plus d'informations.",
      },
    ],
  },
];
