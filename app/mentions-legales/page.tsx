import type { Metadata } from "next";
import LegalLayout from "../components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales - Nomad'Hub",
  description: "Mentions légales du site Nomad'Hub.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout kicker="LÉGAL" title="Mentions légales" updated="juillet 2026">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          Le site Nomad&apos;Hub est édité par [Raison sociale à compléter], [forme juridique],
          au capital de [montant] €, immatriculée au RCS de [ville] sous le numéro [SIREN/SIRET],
          dont le siège social est situé [adresse à compléter].
        </p>
        <p>Numéro de TVA intracommunautaire : [à compléter]. Directeur de la publication : [nom à compléter].</p>
      </section>
      <section>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par [nom de l&apos;hébergeur à compléter, ex. Vercel Inc.],
          [adresse de l&apos;hébergeur à compléter].
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur le site Nomad&apos;Hub (textes, images, logo,
          charte graphique) est protégé par le droit de la propriété intellectuelle. Toute
          reproduction non autorisée est interdite.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Pour toute question relative aux présentes mentions légales : contact@nomad-hub.fr.</p>
      </section>
    </LegalLayout>
  );
}
