import type { Metadata } from "next";
import LegalLayout from "../components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "CGV / CGU - Nomad'Hub",
  description: "Conditions générales de vente et d'utilisation du site Nomad'Hub.",
};

export default function CgvCguPage() {
  return (
    <LegalLayout kicker="LÉGAL" title="CGV / CGU" updated="juillet 2026">
      <section>
        <h2>Objet</h2>
        <p>
          Les présentes conditions générales régissent l&apos;utilisation du site Nomad&apos;Hub et
          les demandes de pré-réservation de workations, de pré-inscription aux abonnements et de
          candidature entreprise effectuées via le site.
        </p>
      </section>
      <section>
        <h2>Pré-réservation (V1)</h2>
        <p>
          En l&apos;état actuel du site, aucune transaction financière n&apos;est effectuée en
          ligne. Les formulaires de pré-réservation d&apos;une workation constituent une demande
          d&apos;intérêt : ils sont suivis d&apos;un échange avec l&apos;équipe Nomad&apos;Hub pour
          confirmer les modalités du séjour (dates, places, prix, modalités de paiement).
        </p>
      </section>
      <section>
        <h2>Abonnements Explorer / Pro / Business+ / Entreprise+</h2>
        <p>
          Le paiement en ligne des abonnements n&apos;est pas encore actif. Les formulaires de
          pré-inscription permettent d&apos;alimenter une liste d&apos;attente exploitable au
          lancement du paiement (prévu en V2). Aucun engagement financier n&apos;est pris à ce
          stade.
        </p>
      </section>
      <section>
        <h2>Conditions d&apos;annulation</h2>
        <p>
          Sauf indication contraire sur la fiche d&apos;une workation, l&apos;annulation est gratuite
          jusqu&apos;à 30 jours avant le début du séjour. Entre 30 et 15 jours, 50% du montant de
          pré-réservation est conservé. À moins de 15 jours, le montant n&apos;est pas remboursable.
        </p>
      </section>
      <section>
        <h2>Responsabilité</h2>
        <p>
          Nomad&apos;Hub s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées
          sur le site, sans garantie de complétude. Les hébergements présentés dans le catalogue
          sont en cours de qualification et peuvent faire l&apos;objet de modifications avant
          confirmation définitive d&apos;un séjour.
        </p>
      </section>
      <section>
        <h2>Droit applicable</h2>
        <p>Les présentes conditions sont soumises au droit français.</p>
      </section>
    </LegalLayout>
  );
}
