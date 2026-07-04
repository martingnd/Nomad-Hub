import type { MetadataRoute } from "next";
import { WORKATIONS } from "./lib/workations";

const BASE_URL = "https://www.nomad-hub.fr";

const STATIC_ROUTES = [
  "",
  "/concept",
  "/workations",
  "/communaute",
  "/tarifs",
  "/entreprises",
  "/a-propos",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/cgv-cgu",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const workationEntries = WORKATIONS.map((w) => ({
    url: `${BASE_URL}/workations/${w.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...workationEntries];
}
