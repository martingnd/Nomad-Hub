import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/layout/PageShell";
import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/forms/ContactForm";
import BackgroundDecor from "../components/decor/BackgroundDecor";
import { MailIcon, ChatIcon } from "../components/decor/icons";

const DECOR = [
  { Icon: MailIcon, className: "-left-2 top-4", size: 30, rotate: -6, color: "#4A2F24", opacity: 0.06 },
  { Icon: ChatIcon, className: "right-[6%] bottom-6", size: 28, color: "#7C8A6A", opacity: 0.08 },
];

export const metadata: Metadata = {
  title: "Contact - Nomad'Hub",
  description: "Contactez l'équipe Nomad'Hub pour toute question sur les workations, la communauté ou les partenariats.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero kicker="CONTACT" title="Une question ? Écrivez-nous." />

      <div className="relative overflow-hidden py-14 md:py-[72px]">
        <BackgroundDecor items={DECOR} />
        <div className="relative mx-auto max-w-site px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-brown">Nos coordonnées</h2>
            <div className="mt-5 flex items-center gap-3 text-[14.5px] text-brown/75">
              <MailIcon width={20} height={20} className="text-terracotta" />
              contact@nomad-hub.fr
            </div>
            <div className="mt-3 flex items-center gap-3 text-[14.5px] text-brown/75">
              <img src="/logo/slack-logo.svg" alt="Slack" className="h-5 w-5" />
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
            <h2 className="font-serif text-2xl font-bold text-brown">Envoyez-nous un message</h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
        </div>
      </div>
    </PageShell>
  );
}
