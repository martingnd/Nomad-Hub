import Image from "next/image";
import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "Concept", href: "/concept" },
  { label: "Workations", href: "/workations" },
  { label: "Communauté", href: "/communaute" },
  { label: "Tarifs", href: "/tarifs" },
];

const NOMADHUB_LINKS = [
  { label: "Pour entreprises", href: "/entreprises" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV / CGU", href: "/cgv-cgu" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="mb-1 text-xs font-bold tracking-[0.06em] text-brown/50">
        {title}
      </span>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-brown no-underline hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-beige">
      <div className="mx-auto max-w-site px-6 pb-8 pt-10 md:px-12">
        <div className="grid grid-cols-1 gap-8 border-b border-brown/15 pb-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex items-start">
            <Image
              src="/logo/nomadhub-logo-full.png"
              alt="Nomad'Hub - Work. Connect. Explore."
              width={140}
              height={140}
              className="h-[140px] w-[140px] object-contain"
            />
          </div>
          <FooterColumn title="EXPLORER" links={EXPLORE_LINKS} />
          <FooterColumn title="NOMAD'HUB" links={NOMADHUB_LINKS} />
          <FooterColumn title="LÉGAL" links={LEGAL_LINKS} />
        </div>
        <div className="pt-6 text-[13px] text-brown/55">
          © 2026 Nomad&apos;Hub - Tous droits réservés.
        </div>
      </div>
    </div>
  );
}
