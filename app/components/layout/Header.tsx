import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Concept", href: "/concept" },
  { label: "Workations", href: "/workations" },
  { label: "Communauté", href: "/communaute" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Entreprises", href: "/entreprises" },
  { label: "À propos", href: "/a-propos" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-beige">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-2.5 px-6 py-2 md:flex-nowrap md:px-12">
        <Link href="/" className="flex flex-shrink-0 items-center gap-1.5">
          <Image
            src="/logo/nomadhub-logo.png"
            alt="Nomad'Hub"
            width={84}
            height={84}
            className="h-14 w-14 object-contain md:h-[84px] md:w-[84px]"
            priority
          />
          <span className="flex flex-col leading-[1.05]">
            <span className="whitespace-nowrap font-serif text-base font-bold text-brown md:text-xl">
              Nomad&apos;Hub
            </span>
            <span className="whitespace-nowrap text-[7px] font-bold tracking-[0.08em] text-terracotta md:text-[9px]">
              WORK. CONNECT. EXPLORE.
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 flex-wrap items-center justify-evenly gap-x-6 gap-y-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[11.5px] font-semibold text-brown transition-colors hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tarifs"
          className="flex flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-terracotta px-3.5 py-2.5 text-xs font-bold text-cream shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-colors hover:bg-terracotta-hover md:px-5 md:py-3 md:text-[13px]"
        >
          Rejoindre la communauté
        </Link>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 pb-3 lg:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="whitespace-nowrap text-[11.5px] font-semibold text-brown transition-colors hover:text-terracotta"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
