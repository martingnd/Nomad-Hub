import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/forms/ContactForm";
import { MailIcon, ChatIcon } from "../components/decor/icons";

export const metadata: Metadata = {
  title: "Contact — Nomad'Hub",
  description: "Contactez l'équipe Nomad'Hub pour toute question sur les workations, la communauté ou les partenariats.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero kicker="CONTACT" title="Une question ? Écrivez-nous." />

      <div className="mx-auto max-w-site px-6 py-14 md:px-12 md:py-[72px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-brown">Nos coordonnées</h2>
            <div className="mt-5 flex items-center gap-3 text-[14.5px] text-brown/75">
              <MailIcon width={20} height={20} className="text-terracotta" />
              contact@nomad-hub.fr
            </div>
            <div className="mt-3 flex items-center gap-3 text-[14.5px] text-brown/75">
              <ChatIcon width={20} height={20} className="text-terracotta" />
              Rejoignez la{" "}
              <Link href="/communaute" className="underline">
                communauté Slack
              </Link>
            </div>

            <div className="mt-8 rounded-[22px] bg-beige p-6">
              <p className="text-[13.5px] font-bold text-brown">Vous cherchez plutôt à…</p>
              <div className="mt-3 flex flex-col gap-2 text-[14px]">
                <Link href="/workations" className="text-terracotta underline">
                  Candidater à une workation →
                </Link>
                <Link href="/entreprises" className="text-terracotta underline">
                  Demander une proposition entreprise →
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-white/60 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
