"use client";

import FacadeForm from "./FacadeForm";
import { TextField, TextAreaField, SelectField } from "./Field";

export default function EntrepriseForm() {
  return (
    <FacadeForm
      submitLabel="Demander une proposition"
      successTitle="Demande envoyée !"
      successBody="Merci pour votre demande — notre équipe revient vers vous sous 48h pour échanger sur votre projet."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Nom" name="nom" />
        <TextField label="Entreprise" name="entreprise" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Fonction" name="fonction" />
        <TextField label="Taille de l'équipe" name="taille_equipe" placeholder="ex. 8 personnes" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Email" name="email" type="email" />
        <TextField label="Téléphone" name="telephone" type="tel" required={false} />
      </div>
      <SelectField
        label="Besoin"
        name="besoin"
        options={[
          { label: "Séminaire d'équipe", value: "seminaire" },
          { label: "Onboarding remote", value: "onboarding" },
          { label: "Retraite d'équipe", value: "retraite" },
          { label: "Autre", value: "autre" },
        ]}
      />
      <TextAreaField label="Message" name="message" required={false} placeholder="Parlez-nous de votre projet..." />
    </FacadeForm>
  );
}
