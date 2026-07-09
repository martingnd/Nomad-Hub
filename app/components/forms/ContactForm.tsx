"use client";

import FacadeForm from "./FacadeForm";
import { TextField, TextAreaField, SelectField } from "./Field";

export default function ContactForm() {
  return (
    <FacadeForm
      submitLabel="Envoyer le message"
      successTitle="Message envoyé !"
      successBody="Merci de nous avoir contactés - notre équipe vous répond sous 48h."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Prénom" name="prenom" />
        <TextField label="Nom" name="nom" />
      </div>
      <TextField label="Email" name="email" type="email" />
      <SelectField
        label="Sujet"
        name="sujet"
        options={[
          { label: "Question générale", value: "general" },
          { label: "Une workation", value: "workation" },
          { label: "Abonnement / communauté", value: "abonnement" },
          { label: "Presse / partenariat", value: "presse" },
          { label: "Autre", value: "autre" },
        ]}
      />
      <TextAreaField label="Message" name="message" rows={5} />
    </FacadeForm>
  );
}
