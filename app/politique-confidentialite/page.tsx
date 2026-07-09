import type { Metadata } from "next";
import LegalLayout from "../components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Nomad'Hub",
  description: "Politique de confidentialité et protection des données personnelles du site Nomad'Hub (RGPD).",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout kicker="LÉGAL" title="Politique de confidentialité" updated="juillet 2026">
      <section>
        <h2>Données collectées</h2>
        <p>
          Nomad&apos;Hub collecte les données transmises via les formulaires du site : contact
          général, pré-réservation de workation, pré-inscription aux abonnements et candidature
          entreprise (nom, email, téléphone, et informations liées à votre demande).
        </p>
      </section>
      <section>
        <h2>Finalité du traitement</h2>
        <p>
          Ces données sont utilisées exclusivement pour traiter votre demande : répondre à un
          message, organiser une pré-réservation, vous tenir informé·e de l&apos;ouverture des
          abonnements, ou étudier une demande entreprise. Elles ne sont pas revendues à des tiers.
        </p>
      </section>
      <section>
        <h2>Durée de conservation</h2>
        <p>
          Les données sont conservées pour la durée nécessaire au traitement de votre demande, et
          au maximum 3 ans à compter du dernier contact, sauf obligation légale contraire.
        </p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de
          suppression et d&apos;opposition sur vos données personnelles. Pour l&apos;exercer,
          contactez-nous à contact@nomad-hub.fr.
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          Le site peut utiliser des cookies techniques nécessaires à son fonctionnement. Aucun
          cookie publicitaire ou de tracking tiers n&apos;est utilisé en V1.
        </p>
      </section>
    </LegalLayout>
  );
}
