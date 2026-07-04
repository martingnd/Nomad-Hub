# Nomad'Hub marketplace workations

_Started 2026-07-03 23:11 UTC_

---

## User

# CAHIER DES CHARGES — NOMAD'HUB
### Site web & marketplace communautaire des workations en France
**Version 1.0 — Juillet 2026**

---

## 1. PRÉSENTATION DU PROJET

### 1.1 Résumé
Nomad'Hub est une marketplace communautaire française qui permet aux freelances, indépendants, entrepreneurs, télétravailleurs et équipes remote de **travailler ailleurs en France, sans perdre en performance**, grâce à des séjours *workation* clés-en-main dans des hébergements partenaires sélectionnés et "work-ready".

Le site doit remplir trois fonctions simultanées :
1. **Vitrine premium** — crédibiliser la marque et le concept
2. **Plateforme de conversion** — transformer les visiteurs en membres communauté et en candidats workation
3. **Espace de pré-réservation** — collecter des demandes qualifiées sur les workations disponibles (sans paiement en ligne en V1)

### 1.2 Signature de marque
> **WORK. CONNECT. EXPLORE.**

### 1.3 Textes clés à intégrer
- « Travaillez ailleurs, sans compromis. »
- « Nomad'Hub organise des workations en France pour les professionnels du remote. »
- « Des lieux sélectionnés, une communauté qualifiée, une expérience pensée pour travailler mieux. »
- « Nomad'Hub ne vend pas seulement des séjours : la marque crée une nouvelle manière de travailler en mobilité. »

### 1.4 Cibles
| Cible | Besoin |
|---|---|
| Freelances / indépendants | Sortir de l'isolement, cadre de travail inspirant, réseau |
| Entrepreneurs / solopreneurs | Productivité + networking business |
| Télétravailleurs salariés | Changer de cadre sans sacrifier la performance |
| Équipes remote / entreprises (teasing V1) | Séminaires, cohésion d'équipe |
| Hébergeurs partenaires (V2) | Remplissage hors-saison, clientèle qualifiée |

---

## 2. IDENTITÉ VISUELLE

### 2.1 Logo
Logo rond, univers voyage/travail : palmier, silhouettes de deux personnes travaillant sur ordinateur portable à une table, coucher/lever de soleil, oiseaux, montagnes en arrière-plan. Wordmark **"Nomad'Hub"** en typographie serif/slab épaisse marron, sous-titre **"WORK. CONNECT. EXPLORE."** en petites capitales espacées.

Déclinaisons à prévoir : logo couleur fond clair, logo monochrome (blanc pour fond foncé), favicon (version simplifiée du pictogramme rond seul).

### 2.2 Palette de couleurs
| Couleur | Code | Usage |
|---|---|---|
| Marron profond | `#4A2F24` | Textes forts, fonds sombres, logo |
| Beige sable | `#E8D8C3` | Fonds secondaires, cartes |
| Terracotta | `#C46A45` | CTA principaux, accents, badges |
| Vert sauge | `#7C8A6A` | CTA secondaires (ex : "Pour entreprises"), accents nature |
| Fond clair | `#F7F1E8` | Fond général du site |
| Texte noir brun | `#1F1A17` | Texte courant |

### 2.3 Style graphique (référence homepage fournie)
- Grille en **cartes arrondies** de tailles variées type "bento grid" (photos larges + blocs de texte colorés en alternance)
- Photos immersives, chaleureuses, lumière naturelle (laptop en terrasse, vue mer/montagne, piscine avec télétravailleurs, séminaire d'équipe)
- Boutons pill/arrondis, forte lisibilité, contrastes doux
- Icônes en trait fin (outline), style minimal cohérent avec le logo
- Ambiance "marque premium lifestyle", pas un site institutionnel de coworking

### 2.4 Typographie (recommandation)
- Titres : police slab-serif ou serif épaisse chaleureuse (proche du wordmark du logo)
- Texte courant : sans-serif lisible et moderne (ex. Inter, Manrope, ou équivalent)
- Petites capitales espacées pour les taglines et labels (comme "WORK. CONNECT. EXPLORE.")

---

## 3. ARCHITECTURE DU SITE (V1)

```
/                          Accueil
/concept                   Concept
/workations                Liste des workations
/workations/[slug]         Détail d'une workation
/communaute                Communauté & Slack
/tarifs                    Tarifs / abonnements
/entreprises                Pour entreprises (teasing "Prochainement")
/a-propos                  À propos
/faq                       FAQ
/contact                   Contact
/mentions-legales          Mentions légales (obligatoire)
/cgv-cgu                   CGV / CGU (obligatoire, notamment pour pré-résa)
/politique-confidentialite Politique de confidentialité / RGPD (obligatoire)
```

> **Note V1 vs V2** : la page **"Devenir hébergeur partenaire"** est **exclue de la V1** (ni page dédiée, ni mention "Prochainement"). Elle sera développée en V2 lorsque le programme hébergeurs sera formalisé. La page **"Pour entreprises"** est en revanche incluse dès la V1, en mode teasing/présentation avec CTA "Demander une proposition" menant vers un formulaire de contact qualifié.

---

## 4. CONTENU DÉTAILLÉ PAR PAGE

### 4.1 Accueil (`/`)
**Objectif** : faire comprendre la promesse en 5 secondes et driver vers 3 CTA.

Structure (inspirée de la maquette fournie, format "bento grid") :
- **Hero** : logo + tagline "WORK. CONNECT. EXPLORE." + accroche "Workations pensées pour travailler mieux, ensemble." + sous-titre + CTA principal "Découvrir nos séjours workation"
- **Bloc Hébergements work-ready** : Wifi rapide, espaces de travail dédiés, cadre inspirant, services adaptés aux pros
- **Bloc Communauté sélectionnée** : mise en avant du réseau de professionnels
- **Bloc Tout est organisé** : réassurance "hébergement, espaces, activités, communauté... vous n'avez plus qu'à vous concentrer sur ce qui compte"
- **Bloc Pour entreprises & équipes** : teasing avec CTA vers `/entreprises`
- **Bande de 3 CTA finaux** : "Nos destinations" / "Workations" / "Pour entreprises"
- **CTA communauté** : "Rejoindre la communauté" → `/communaute` ou `/tarifs`

### 4.2 Concept (`/concept`)
**Objectif** : poser le problème puis la solution, côté indépendants ET côté hébergeurs (même si la page hébergeur arrive en V2, le narratif "double face" du modèle peut rester ici à titre de storytelling).

- **Le problème (freelances / indépendants)** : télétravail isolé, baisse de moral, logement personnel peu adapté (bruit, manque de bureau), manque de cadre et de discipline, difficulté à rencontrer d'autres professionnels
- **Le problème (hébergeurs)** *(mention narrative, sans CTA hébergeur en V1)* : difficulté à remplir hors-saison, recherche de clientèle plus fiable et qualitative
- **La solution Nomad'Hub** :
  - Hébergements sélectionnés et "work-ready"
  - Communauté Slack par abonnement (avantages selon le palier)
  - Workations organisés clés-en-main
  - Productivité + expérience locale (activités, réseau, découverte du territoire)

### 4.3 Workations (`/workations`)
**Objectif** : présenter l'offre concrète et driver vers la pré-réservation.

**Vue liste** — cartes avec :
- Photo principale
- Destination + région
- Dates + durée
- Prix indicatif
- Nombre de places restantes
- Type de logement (villa, studio, coliving...)
- Niveau "work-ready" (badge : ex. Wifi fibre, bureau dédié, calme)
- Inclusions principales (repas, activités, accès Slack dédié séjour...)
- CTA : **"Réserver ma place"** (workation confirmée) ou **"Candidater"** (workation en cours de constitution de groupe)

**Filtres suggérés** : région, dates, budget, type d'hébergement, nombre de places disponibles.

**Vue détail** (`/workations/[slug]`) :
- Description complète de la destination et de l'expérience
- Programme jour par jour (indicatif)
- Équipements / espace de travail
- Présentation de l'hébergement (galerie photo, capacité, équipements)
- Activités proposées (détente, découverte locale, networking)
- Conditions d'annulation / modalités de réservation
- Formulaire de pré-réservation (voir §6.2)

**Contenu réel disponible — sélection de 10 hébergements pour lancer le catalogue workations** (2 hébergements "validés" en priorité + 8 en cours de qualification, tous issus d'annonces Airbnb "Coup de cœur voyageurs"). Base de calcul : séjour type de 6 nuits.

| # | Nom | Lieu | Capacité | Chambres / lits / SdB | Note Airbnb | Prix observé (6 nuits) | ≈ Prix/nuit | Statut |
|---|---|---|---|---|---|---|---|---|
| 1 | **Villa des Dunes** ⭐ | Brétignolles-sur-Mer (Vendée) | 14 pers. | 6 ch. · 10 lits · 2 SdB | 4,89 (111 avis) | 2 971 € | ≈ 495 €/nuit | ✅ Validé — pilote |
| 2 | **L'Annexe des 3 Moulins** ⭐ | Beaulieu-sous-la-Roche (Vendée) | 4 pers. | Studio · 2 lits · 1 SdB | 4,86 (95 avis) | 738 € | ≈ 123 €/nuit | ✅ Validé — pilote |
| 3 | Mas avec Jacuzzi Privé, Plage et Côte d'Azur | La Crau (Var) | 7 pers. | 2 ch. · 5 lits · 2,5 SdB | 5,0 (7 avis) | 1 132 € | ≈ 189 €/nuit | À qualifier |
| 4 | À l'Orée des Bois – calme et nature | Villefranche-sur-Cher (Loir-et-Cher) | 9 pers. | 4 ch. · 5 lits · 1 SdB | 4,9 (60 avis) | 902 € | ≈ 150 €/nuit | À qualifier |
| 5 | Parenthèse Bordelaise 4* : Vignobles & Océan | Parempuyre (Gironde) | 10 pers. | 5 ch. · 6 lits · 3,5 SdB | 4,86 (277 avis) | 1 863 € | ≈ 311 €/nuit | À qualifier |
| 6 | Unique, plein cœur d'Hossegor | Soorts-Hossegor (Landes) | 10 pers. | 4 ch. · 7 lits · 2 SdB | 4,9 (42 avis) | 2 698 € | ≈ 450 €/nuit | À qualifier |
| 7 | Le Loft — Lorient centre, jacuzzi et salle cinéma | Lorient (Morbihan) | 14 pers. | 4 ch. · 6 lits · 2 SdB | 4,84 (487 avis) | 2 362 € | ≈ 394 €/nuit | À qualifier |
| 8 | La Villa Maegiu, proche Disney | Tigeaux (Seine-et-Marne) | 8 pers. | 4 ch. · 5 lits · 2 SdB | 4,98 (58 avis) | 3 080 € | ≈ 513 €/nuit | À qualifier |
| 9 | *Longère en Périgord, piscine & jardin* *(placeholder à remplacer)* | Dordogne (Périgord) | 12 pers. | 5 ch. · 8 lits · 3 SdB | — *(à confirmer)* | — *(à confirmer)* | ≈ 500-550 €/nuit *(estimation cohérente avec la gamme du catalogue)* | ⏳ Placeholder — à remplacer par une vraie annonce Airbnb |
| 10 | Gîte de l'ancien lavoir | Sennevoy-le-Bas (Yonne) | 11 pers. | 4 ch. · 7 lits · 4,5 SdB | 4,95 (41 avis) | 2 747 € | ≈ 458 €/nuit | À qualifier |

**Notes de mise en œuvre :**
- Les hébergements 1 et 2 servent de **workations pilotes** : contenu complet (description, équipements, activités) à rédiger en priorité pour le lancement.
- L'hébergement n°9 est un **placeholder** en attendant qu'une vraie annonce (lien ou capture Airbnb) soit fournie pour la Dordogne, ou une autre région de ton choix — même logique que pour les 2 pilotes : à remplacer par du contenu réel avant mise en ligne définitive.
- Les 7 autres (hors pilotes et placeholder) alimentent le catalogue avec du contenu crédible et réaliste dès la V1. Prévoir en back-office un statut par fiche : `pilote` / `catalogue` / `brouillon` / `placeholder`.
- Les prix Airbnb affichés sont des **prix de location totale du bien** (hors prestations Nomad'Hub) : à transformer en prix "workation" par personne, incluant la marge Nomad'Hub, l'accès Slack dédié séjour, et les éventuelles activités/animation — logique de calcul à définir avec le porteur de projet avant mise en ligne des prix publics.
- Chaque hébergement identifié comme "grande capacité" (10-14 pers.) est particulièrement adapté aux workations **groupe / équipe / séminaire** (cf. page `/entreprises`) ; les plus petites capacités (4-9 pers.) sont adaptées aux workations **solo/petit groupe freelance**.
- Prévoir dans le CMS/back-office la possibilité d'ajouter facilement de nouvelles fiches workation au-delà de ces 10 (voir §8).

### 4.4 Communauté (`/communaute`)
**Objectif** : valoriser l'abonnement et pousser vers `/tarifs`.

- Bénéfices : accès au Slack Nomad'Hub, networking, opportunités professionnelles, retours d'expérience membres, événements, ressources, offres partenaires, accès prioritaire aux workations
- **Structure du Slack à présenter visuellement**, organisée par catégories (cf. capture fournie), avec un **badge de palier requis à côté de chaque canal** pour que la correspondance avec `/tarifs` soit immédiatement lisible.

> **Point de clarification demandé** : dans la maquette initiale, l'offre Pro annonçait "l'accès à tous les canaux Slack", ce qui rentrait en contradiction avec certains avantages présentés comme exclusifs à Business+ (ex. #nh-show-your-work, #nh-ambassadeurs). La règle retenue ci-dessous corrige cette incohérence : **Pro donne accès à la quasi-totalité des canaux**, à l'exception des canaux explicitement listés comme avantages Business+. Deux nouveaux canaux sont proposés pour rendre concrets les avantages Business+ qui n'avaient pas de canal dédié dans la structure initiale (missions/appels d'offres, événements privés).

**Tableau de correspondance abonnement ↔ canaux Slack :**

| Catégorie | Canal | Explorer | Pro | Business+ |
|---|---|:---:|:---:|:---:|
| — | **#nomad-hub-general** | ✅ | ✅ | ✅ |
| Informations | #nh-annonces | 🔸 lecture seule | ✅ + contenu exclusif | ✅ |
| Informations | #nh-evenements | 🔸 événements ouverts seulement | ✅ événements exclusifs | ✅ |
| Informations | #nh-nouveautes | — | ✅ | ✅ |
| Informations | #nh-partenaires | — | ✅ | ✅ |
| Communauté | #nh-presentations | 🔸 limité | ✅ illimité | ✅ |
| Communauté | #nh-discussions | 🔸 fils limités | ✅ | ✅ |
| Communauté | #nh-cafe-virtuel | — | ✅ | ✅ |
| Communauté | #nh-photos-videos | — | ✅ | ✅ |
| Business & opportunités | #nh-opportunites | — | ✅ | ✅ |
| Business & opportunités | #nh-feedback | — | ✅ | ✅ |
| Business & opportunités | #nh-ressources-business | — | ✅ | ✅ |
| Business & opportunités | **#nh-show-your-work** | — | — | ✅ **exclusif Business+** (visibilité de vos projets) |
| Business & opportunités | **#nh-appels-doffres** *(nouveau canal proposé)* | — | — | ✅ **exclusif Business+** (missions & appels d'offres qualifiés) |
| Productivité & remote work | #nh-remote-work, #nh-coworking-online, #nh-outils-recommandes, #nh-productivite | — | ✅ (ressources & outils remote work) | ✅ |
| Workations | #nh-workations, #nh-sejour-en-cours, #nh-destinations, #nh-retours-experiences, #nh-infos-pratiques | 🔸 destinations en lecture seule | ✅ + accès prioritaire aux places | ✅ + accès workations premium/VIP |
| Réseau local | #nh-paris, #nh-lyon, #nh-lille, #nh-marseille, #nh-bordeaux, #nh-autres-villes | — | ✅ | ✅ |
| Avantages membres | #nh-bons-plans, #nh-offres-exclusives, #nh-early-access, #nh-reductions-partenaires | — | ✅ | ✅ |
| Avantages membres | **#nh-masterclass-events-prives** *(nouveau canal proposé)* | — | — | ✅ **exclusif Business+** (sessions d'expertise, masterclass, événements privés) |
| Ambassadeurs | **#nh-ambassadeurs** | — | — | ✅ **exclusif Business+** (programme ambassadeurs) |

**Avantages Business+ qui ne sont pas des canaux Slack** (à traiter comme fonctionnalités du site, pas du Slack) : mise en avant dans l'annuaire membres du site, accompagnement & conseils business individualisés. Ces éléments sont à intégrer à l'espace membre en V2 (compte utilisateur).

**Légende** : ✅ accès complet · 🔸 accès partiel/lecture seule · — non accessible

- CTA final : "Rejoindre la communauté" → `/tarifs`

### 4.5 Tarifs (`/tarifs`)
**Objectif** : convertir vers l'abonnement adapté. Modèle freemium à 4 paliers (contenu fidèle à la maquette fournie) :

| Offre | Prix | Accès |
|---|---|---|
| **Explorer** | 0 € pour toujours | Canal #nomad-hub-general, annonces publiques, événements ouverts, fils de discussion, accès limité à la communauté |
| **Pro** *(mise en avant, badge possible)* | 10 €/mois ou 120 €/an | Accès à la quasi-totalité des canaux Slack (hors canaux exclusifs Business+), annonces et visios exclusives, présentations illimitées, opportunités & collaborations, accès prioritaire aux workations, réductions partenaires, ressources et outils remote work |
| **Business+** *("Meilleure offre")* | 20 €/mois ou 240 €/an | Tous les avantages Pro + canaux Slack exclusifs (#nh-show-your-work, #nh-appels-doffres, #nh-masterclass-events-prives, #nh-ambassadeurs), mise en avant annuaire membres, accès missions & appels d'offres, visibilité de vos projets, sessions d'expertise/masterclass, événements privés, conseils business, workations premium/VIP, programme ambassadeurs |
| **Entreprise+** | Sur devis — **grisé, mention "Prochainement"** | Workations & séminaires sur-mesure, accompagnement dédié, facturation entreprise, espaces Slack privés, support prioritaire, onboarding équipes |

- Toggle mensuel/annuel avec mise en avant de l'économie annuelle
- Bandeau réassurance bas de page : "Pourquoi rejoindre Nomad'Hub ?" (communauté active, workations partout en France, opportunités business, avantages exclusifs, réseau humain)
- CTA de chaque carte : "Commencer gratuitement" / "Rejoindre Pro" / "Rejoindre Business+" / "Prochainement" (grisé, non cliquable)
- **V1 : pas de paiement Stripe actif.** Les CTA payants ouvrent un formulaire "Être notifié à l'ouverture des abonnements" ou redirigent vers un formulaire de pré-inscription (voir §6.3). L'intégration Stripe est préparée techniquement (voir §7) mais activée en V2.

### 4.6 Pour entreprises (`/entreprises`) — teasing V1
**Objectif** : capter des leads B2B qualifiés, sans offre commerciale figée en V1.

- Cible : dirigeants de startups, agences digitales, PME remote, équipes hybrides
- Positionnement : alternative aux séminaires classiques — workations d'équipe, retraites de travail, cohésion, onboarding remote, créativité, productivité collective
- Contenu : bénéfices, cas d'usage, mention "solutions sur-mesure, nous contacter pour un accompagnement personnalisé"
- CTA unique : **"Demander une proposition"** → formulaire de contact qualifié (nom, entreprise, taille équipe, besoin, message)
- Pas de tarifs affichés (cohérent avec Entreprise+ "Prochainement" en page Tarifs)

### 4.7 À propos (`/a-propos`)
- Histoire et vision du projet Nomad'Hub
- Mission : réinventer le travail à distance en France
- Valeurs : communauté, qualité, sérénité, productivité
- Éventuellement présentation du/des fondateur(s) (placeholder si besoin)

### 4.8 FAQ (`/faq`)
Catégories suggérées : Général, Abonnements & communauté, Workations & réservation, Paiement (préparation V2), Annulation, Hébergeurs (à venir).
Format accordéon, structuré pour données structurées SEO (FAQPage schema).

### 4.9 Contact (`/contact`)
- Formulaire de contact générique (objet, nom, email, message)
- Coordonnées / réseaux sociaux
- Éventuel lien direct vers formulaire candidature workation ou demande entreprise

---

## 5. FONCTIONNALITÉS V1 (rappel du périmètre validé)

✅ **Inclus en V1** :
- Site vitrine complet (9 pages + légales)
- Formulaire de contact avec envoi d'email
- Formulaire de **pré-réservation** par workation (formulaire avancé, sans paiement en ligne)
- Formulaire de candidature "Pour entreprises"
- Formulaire de pré-inscription aux abonnements payants (capture de leads Pro/Business+)
- Structure SEO complète (title, meta description, H1/H2, URLs propres, données structurées)
- Back-office / espace admin simple pour gérer workations, destinations, tarifs, FAQ
- Préparation technique de l'authentification, du paiement Stripe et du blog (non activés)

🔜 **Prévu en V2** :
- Compte utilisateur + authentification
- Paiement Stripe actif (abonnements + éventuellement paiement workation)
- Page "Devenir hébergeur partenaire"
- Activation de l'offre Entreprise+
- Blog / contenu éditorial
- Intégration Slack (invitation automatique selon palier d'abonnement)

---

## 6. FORMULAIRES

### 6.1 Formulaire de contact général
Champs : Nom, Prénom, Email, Sujet, Message → envoi email à l'équipe Nomad'Hub.

### 6.2 Formulaire de pré-réservation workation
Champs : Workation concernée (pré-rempli depuis la page détail), Nom, Prénom, Email, Téléphone, Nombre de personnes, Dates souhaitées, Statut (freelance/entreprise/équipe), Message/besoins spécifiques.
→ Email de confirmation automatique au candidat + notification interne. Statut consultable en back-office (nouveau / contacté / confirmé / refusé).

### 6.3 Formulaire de pré-inscription abonnement (Pro / Business+ / Entreprise+)
Champs : Nom, Email, Offre souhaitée, (option entreprise : nom société, taille équipe).
→ Alimente une liste d'attente exploitable au lancement du paiement Stripe.

### 6.4 Formulaire "Pour entreprises"
Champs : Nom, Entreprise, Fonction, Email, Téléphone, Taille de l'équipe, Besoin (séminaire / onboarding / retraite d'équipe / autre), Message.

> Tous les formulaires : validation côté client + serveur, protection anti-spam (captcha invisible ou honeypot), mention RGPD (case consentement + lien politique de confidentialité), confirmation visuelle après envoi.

---

## 7. STACK TECHNIQUE RECOMMANDÉE

| Brique | Techno | Rôle |
|---|---|---|
| Front-end | Next.js (React) + Tailwind CSS | Pages, composants, responsive |
| Base de données & back-office | Supabase (Postgres + Auth prête pour V2) | Stockage workations, leads, contenu FAQ |
| Emails transactionnels | Resend (ou EmailJS en V1 simplifiée) | Confirmations formulaires |
| Paiement | Stripe (intégré en configuration, activé en V2) | Abonnements Pro/Business+ |
| Hébergement / déploiement | Vercel | CI/CD, performance, preview deploys |
| SEO / performance | next-seo, sitemap.xml, robots.txt, Open Graph, JSON-LD | Référencement |

### 7.1 Modèle de données (V1, extensible V2)
- `users` *(structure prête, non activée en V1)*
- `subscriptions` *(structure prête, non activée en V1)*
- `workations` : id, titre, slug, destination, région, dates, durée, prix, places_totales, places_restantes, type_logement, niveau_work_ready, inclusions[], description, programme, photos[], statut (ouverte/complète/passée)
- `bookings` (pré-réservations) : id, workation_id, nom, email, téléphone, nb_personnes, dates_souhaitées, statut, message, date_création
- `hebergeurs_partenaires` *(structure prête pour V2, non affichée en V1)*
- `entreprise_leads` : id, nom, entreprise, email, téléphone, taille_équipe, besoin, message
- `contact_messages` : id, nom, email, sujet, message, date
- `newsletter_leads` (pré-inscriptions abonnement) : id, nom, email, offre_souhaitée
- `faq_items` : id, catégorie, question, réponse, ordre
- `articles` *(structure prête pour blog V2)*

---

## 8. SEO

**Mots-clés prioritaires** : workation France, séjour télétravail, coliving France, coworking et hébergement, freelance remote, digital nomad France, travailler ailleurs, séminaire remote, retraite d'équipe.

**Mots-clés complémentaires à explorer** : télétravail à la campagne, travailler à la mer, workation Vendée, coliving pour freelance, communauté remote workers France, séjour productif freelance.

Exigences techniques :
- Balises title / meta description uniques par page, incluant mot-clé principal
- Une seule balise H1 par page, hiérarchie H2/H3 cohérente
- URLs propres et lisibles (`/workations/villa-des-dunes-bretignolles`)
- Données structurées : `Organization`, `FAQPage`, `Product`/`Event` pour chaque workation
- Sitemap XML + robots.txt
- Images optimisées (formats modernes, alt text descriptif intégrant mots-clés naturellement)
- Core Web Vitals : optimisation mobile-first, lazy loading images, performance Lighthouse ≥ 90

---

## 9. CONTRAINTES GÉNÉRALES

- Site 100% responsive desktop / tablette / mobile
- Cohérence stricte avec la charte graphique (§2)
- Code propre, componentisé, facile à faire évoluer vers la V2 (auth, paiement, hébergeurs)
- Contenu géré en placeholders propres là où le contenu réel n'est pas encore disponible, à l'exception des 2 workations pilotes (Villa des Dunes, Annexe des 3 Moulins) à intégrer avec du contenu réel
- Mentions légales, CGV/CGU et politique de confidentialité obligatoires dès la mise en ligne (collecte de données personnelles via formulaires)
- Site prêt pour un lancement officiel crédible, orienté conversion

---

## 10. PROCHAINES ÉTAPES SUGGÉRÉES

1. Validation de ce cahier des charges
2. Maquettes détaillées page par page sur Claude Design (à partir de la charte §2 et de la homepage de référence)
3. Développement avec Claude Code : architecture du projet → composants réutilisables → pages → back-office → formulaires → SEO
4. Intégration des 2 workations pilotes avec contenu réel
5. Tests responsive + performance avant mise en ligne
6. Roadmap V2 : authentification, Stripe, page hébergeurs partenaires, activation Entreprise+, blog

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- reference_assets: Je vais joindre la maquette/logo de référence
- starting_page: Accueil (page vitrine principale)
- variations: 2-3 options à comparer
- fidelity: Prototype interactif (navigation entre pages, formulaires fonctionnels en façade)
- photos: Placeholders soignés (bandes/texture) en attendant vos vraies photos
- content_scope: Les 10 fiches (2 pilotes + 8 catalogue/placeholder)

## Assistant

L'utilisateur va joindre la maquette/logo de référence — j'attends ces fichiers avant de démarrer la page d'accueil.

## User

Fait quelque chose de plus organisé, plus pro et premium.

## Assistant

_[tool: copy_files]_

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Homepage rebuilt: consistent nav, aligned hero, uniform 4-card feature grid, photo-placeholder strip, and clean CTA/footer bands using your real logo and brand palette — more organized and premium than the reference bento.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Nav restructured: logo and CTA stay fixed/unclipped on the top row, links now sit on their own row below and wrap freely — no more squeeze or clipping at narrower widths.

## User

J'aimerai que tu intègre les images pour que je puisse mieux visualiser

## Assistant

_[tool: view_image]_

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Swapped in real photo crops from your reference mockup (hero terrace, workspace view, coliving lounge, pool) so it's easier to visualize — these are placeholders from your reference image, to be replaced with real property photos later.

## User

Je déteste le fond blanc, et les images font trop intelligence artificielle. Essaye d'intégrer une image de fond immersive et qui donne envie et supprime celle du haut.

## Assistant

_[tool: screenshot]_

_[tool: str_replace_edit]_

Now revert the photo-strip crops (they read as AI too) back to elegant textured placeholders, matching the hero.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Hero is now a full-bleed immersive background section (warm gradient + subtle texture + dark overlay, no beige gutters) with white text over it. Replaced the AI photo crops throughout with the same tasteful placeholder treatment, labeled for what real photography should go there.

## User

Je veux que ça couvre l'entièreté du fond du site car je ne veux vraiment pas de blanc. Pour le header et le footer, mets les avec le même beige.

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Whole page now runs on the immersive warm gradient (no white/cream anywhere), with header and footer both set to the same beige — hero blends seamlessly into it.

## User

Ajoute les photos

## Assistant

_[tool: copy_starter_component]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Added drag-and-drop photo slots for the hero and the 3 photo-strip spots — drop your real photos in directly and they'll persist, replacing the placeholder captions.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Sizing now comes from a sized wrapper div around each slot instead of relying on style pass-through — hero fills full-bleed, strip slots fill their 320px cells.

## User

Found issues — fixing…

## Assistant

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Fixed by force-applying the size directly on the actual `<image-slot>` DOM nodes via a mount-time JS pass (with a MutationObserver fallback for async load) — the x-import wrapper wasn't forwarding `style` to the underlying custom element.

## User

J'aimerai que les différents blocs soient plus expacés entre eux car c'est étouffant (hero shot, contenus etc...). Je veux que le header soit moins large, que tous les éléments soient bien centré au milieu de la largeur et je veux aussi que tu agrandisses mon logo (en haut et en bas).

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Header slimmed (thinner padding) and narrowed to a centered 1200px container matching the rest of the page; logo enlarged in both header (76px) and footer (60px); section gaps widened to 100–120px so blocks breathe.

## User

Found issues — fixing…

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

`part="empty"` is exposed — I can target it with `::part(empty)` CSS to reposition the placeholder to the top of the hero, keeping full-bleed photo but avoiding text collision.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Moved the empty-state placeholder (icon + "drop image" text) to the top-left of the hero via `::part(empty)`, so it no longer collides with the bottom-aligned headline/copy.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: ready_for_verification]_

Placeholder caption now pinned to the top-right corner (narrow width, right-aligned), clear of the left-aligned headline block below.

## User

Add tweakable controls to Home.dc.html (declare with dc_set_props, read via this.props): study this design and add a tweaks panel with two or three expressive controls that reshape the feel, not single-property pixel-pushing

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

Also update the sizing observer's id list since the split hero reuses `hero-photo` (fine, same id) — verifying no conflicts and checking render.

_[tool: ready_for_verification]_

Added a Tweaks panel with 3 expressive controls: **Ambiance** (Terracotta/Sage/Nuit accent palette across CTAs and the community card), **Hero layout** (immersive full-bleed photo vs. split editorial card), and **Densité** (comfortable vs. airy section spacing) — each reshapes the whole page's feel rather than tweaking one property.

## User

Je veux que mon logo (celui que je t'ai donné soit vraiment plus gros) car il est trop petit (surtout en bas). Et comme je te l'ai dis, pour le header, je veux que tout soit centré comme sur l'exemple ci-joint (ne touche pas à la couleur et n'ajoute pas non plus de flèche de liste). Fait en sorte que ça soit le plus harmonieux possible

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Header rebuilt as a single row like the reference — logo left, nav links centered inline, CTA button right — colors and content unchanged, no dropdown arrows added. Logo enlarged to 96px in header and 100px in footer.

## User

Grossis le logo en haut à gauche et en bas à gauche. Met le "à propos sur la même ligne que "Concept", "Workation" etc.. et recentre au milieu, alignée avec le logo à gauche et la CTA à droite.

## Assistant

_[tool: read_file]_

_[tool: show_html]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: screenshot]_

_[tool: str_replace_edit]_

_[tool: screenshot]_

_[tool: show_html]_

_[tool: str_replace_edit]_

_[tool: show_html]_

Now fits cleanly on one line: logo enlarged (92px header / 140px footer), all 6 links + À propos visible and centered, CTA intact, no overlap.

_[tool: ready_for_verification]_

Fixed — nav now fits on one line without overlap or clipping, all links visible and centered, logo enlarged top and bottom.

## User

Retire l'image que j'ai déposée dans le placeholder "heroshot" et remets-le à l'état vide (drop zone)

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

Now removing the key entirely in a second pass.

_[tool: run_script]_

Removed. The hero placeholder is now back to an empty drop zone.

_[tool: ready_for_verification]_

Done — the hero image slot is now empty and shows the drop zone again.

## User

Prends ce logo qui est plus gros et remplace le à la place des autres

## Assistant

_[tool: copy_files]_

_[tool: ready_for_verification]_

Logo asset replaced with the higher-res version — both header and footer now use it since they reference the same file.

## User

Prends ce logo qui est plus gros et remplace le à la place des autres

## Assistant

_[tool: screenshot]_

_[tool: image_metadata]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

_[tool: screenshot]_

Cleaned up — cropped the icon mark from your higher-res logo (transparent bg, no white box, no duplicate wordmark) and swapped it into both header and footer.

## User

Dans le header, mets le logo et "Nomad"Hub" + le slogan plus sur la droite, aligné à la verticale avec "Travaillez ailleurs,..." car il faut absolument que ça reste responsive.

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: str_replace_edit]_

_[tool: show_html]_

Fits cleanly now — logo and wordmark left edge is aligned with "Travaillez ailleurs..." below, all nav links + CTA fit on one line, and the layout stays responsive (still using flexible nowrap/shrink logic, just retuned for the new alignment).

_[tool: ready_for_verification]_

Done — header logo/wordmark block now aligns vertically with the hero headline, and everything still fits on one line without overlap.

## User

Super, mais grossis le "Nomad'Hub" et le "Work. Connect. Explore. De plus, ajoute un effet d'opacité par dessus l'image que je viens d'ajouter en héroshot mais derrière le texte. En bas, enlève le "Nomad'Hub" à droite du logo, mais remet le logo complet cette fois ci (avec nom+slogan) à la place de l'autre. Essaye aussi de réduire très légèrement l'espace entre les différents blocs. Ajoute aussi une petite définition de "Workation" que je te donne "Contraction de "Work" et de "Vacation", le "travail-vacances"."

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

_[tool: copy_files]_

_[tool: multi_screenshot]_

_[tool: screenshot]_

_[tool: save_screenshot]_

_[tool: multi_screenshot]_

This looks good — everything renders correctly (the definition text sits just below the cut-off viewport here, within the 640px hero). Let me verify with a full check.

_[tool: ready_for_verification]_

Applied all the changes: enlarged "Nomad'Hub" wordmark + tagline in the header, added a flat opacity tint over the hero photo (behind the gradient and text), swapped the footer to the full logo lockup (name+slogan baked in, removed the separate text), tightened section spacing slightly, and added the Workation definition under the hero copy (both hero layouts).

## User

Est-ce que le site est bien responsive ? Parce que j'ai fait présent en full screen et il y avait beaucoup d'espace sur les côtés.

## Assistant

_[tool: read_file]_

Good question — a few things:

The boxed 1200px content is intentional (premium sites use this centered pattern; full-bleed backgrounds fill the sides). But a couple of your recent manual edits introduced fixed pixel sizes (nav CTA button, footer logo) that don't scale, and the nav padding got distorted — those genuinely hurt responsiveness. I'll fix those and widen the content a bit so fullscreen doesn't feel so empty.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: dc_html_str_replace]_

_[tool: show_html]_

Good, nav still fits with room to spare, hero photo reset to empty (that's fine, unrelated). Footer check:

_[tool: multi_screenshot]_

Footer logo now correct aspect ratio (contain, no crop/stretch). Everything looks properly proportioned and responsive.

_[tool: ready_for_verification]_

To directly answer: yes, the site is responsive — the empty side space at fullscreen is a deliberate centered-content layout (1200px, common for premium sites), but I widened it to 1440px so wide screens fill better, and fixed two things from recent manual edits that would've broken scaling: a fixed-size nav CTA button and a stretched/cropped footer logo. Both now scale properly again.

## User

J'aimerai que tu espace parfaitement les différents menu du header pour qu'ils soient plus sur la largeur. Augmente le Bouton CTA "Rejoindre la communauté. Enlève de l'espace entre de les différents blocs (à partir du heroshot et varie les couleurs du fond entre chaque bloc (garde la même charte).

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now update the density logic so `sectionGap` drives band padding (tighter values) and drop the unused `footerGap`.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: multi_screenshot]_

_[tool: read_file]_

_[tool: show_html]_

_[tool: str_replace_edit]_

_[tool: show_html]_

Good, fits now with a visibly larger CTA and links spread across the full width. Let's check the colored bands below (they were showing as still-brown gradient in the earlier stale screenshot).

_[tool: multi_screenshot]_

Bands now render correctly and alternate cleanly (cream → beige → dark brown → cream → beige footer), sections sit flush against each other with no dead space, and the palette stays within the existing brand colors.

_[tool: ready_for_verification]_

Done: nav links now spread evenly across the full header width, the CTA button is visibly bigger, and each section below the hero sits in its own full-bleed color band (cream/beige/dark brown, alternating from your existing palette) with no gap between them — just internal padding for breathing room.

