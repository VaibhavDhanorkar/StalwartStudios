import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/products",
  "/products/focus-champ",
  "/studio",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
  "/snugloop/privacy",
  "/snugloop/terms",
  "/fovena/privacy",
  "/fovena/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => ({
    url: `${site.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.includes("privacy") || path.includes("terms") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path.includes("/fovena/") || path.includes("/snugloop/") ? 0.6 : 0.8,
  }));
}
