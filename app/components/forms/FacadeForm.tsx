"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export default function FacadeForm({
  children,
  submitLabel,
  successTitle,
  successBody,
}: {
  children: ReactNode;
  submitLabel: string;
  successTitle: string;
  successBody: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Honeypot: if this hidden field was filled, silently drop the submission.
    if (data.get("nh-company-website")) {
      setSubmitted(true);
      return;
    }
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 500);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-sage/15 p-8 text-center">
        <p className="font-serif text-xl font-bold text-brown">{successTitle}</p>
        <p className="mt-2 text-[14.5px] text-brown/70">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="nh-company-website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      {children}

      <label className="flex items-start gap-2.5 text-[12.5px] leading-snug text-brown/70">
        <input type="checkbox" required className="mt-0.5 accent-terracotta" />
        <span>
          J&apos;accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a href="/politique-confidentialite" className="underline">
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-fit rounded-full bg-terracotta px-7 py-3.5 text-[14.5px] font-bold text-cream transition-colors hover:bg-terracotta-hover disabled:opacity-60"
      >
        {pending ? "Envoi…" : submitLabel}
      </button>
    </form>
  );
}
