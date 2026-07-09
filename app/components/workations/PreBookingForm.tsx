"use client";

import FacadeForm from "../forms/FacadeForm";
import { TextField, TextAreaField, SelectField } from "../forms/Field";

export default function PreBookingForm({
  workationName,
  ctaLabel,
}: {
  workationName: string;
  ctaLabel: string;
}) {
  return (
    <FacadeForm
      submitLabel={ctaLabel}
      successTitle="Demande envoyée !"
      successBody={`Votre demande pour « ${workationName} » a bien été enregistrée. Notre équipe revient vers vous sous 48h pour confirmer les modalités.`}
    >
      <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-brown">
        Workation concernée
        <input
          type="text"
          value={workationName}
          readOnly
          className="rounded-xl border border-brown/15 bg-beige/60 px-4 py-3 text-[14.5px] font-normal text-brown"
        />
      </label>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Prénom" name="prenom" />
        <TextField label="Nom" name="nom" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Email" name="email" type="email" />
        <TextField label="Téléphone" name="telephone" type="tel" required={false} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField label="Nombre de personnes" name="nb_personnes" type="number" />
        <TextField label="Dates souhaitées" name="dates" placeholder="ex. 14-20 septembre 2026" />
      </div>
      <SelectField
        label="Vous êtes"
        name="statut"
        options={[
          { label: "Freelance / indépendant", value: "freelance" },
          { label: "Salarié en télétravail", value: "salarie" },
          { label: "Entreprise / équipe", value: "entreprise" },
        ]}
      />
      <TextAreaField
        label="Message / besoins spécifiques"
        name="message"
        required={false}
        placeholder="Besoins particuliers, questions..."
      />
    </FacadeForm>
  );
}
