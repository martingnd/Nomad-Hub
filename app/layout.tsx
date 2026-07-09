import type { Metadata } from "next";
import { Bitter, Manrope } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bitter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomad-hub.fr"),
  title: {
    default: "Nomad'Hub - Workations en France | Work. Connect. Explore.",
    template: "%s",
  },
  description:
    "Nomad'Hub organise des workations en France pour les professionnels du remote : des lieux sélectionnés, une communauté qualifiée, une expérience pensée pour travailler mieux.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Nomad'Hub",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nomad'Hub",
  slogan: "Work. Connect. Explore.",
  url: "https://www.nomad-hub.fr",
  description:
    "Nomad'Hub organise des workations en France pour les professionnels du remote : freelances, indépendants, télétravailleurs et équipes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${bitter.variable} ${manrope.variable}`}>
      <body className="font-sans text-ink bg-brown">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
