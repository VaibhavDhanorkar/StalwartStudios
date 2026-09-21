export type ProductStatus = "launching" | "shipped" | "in-development";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  statusLabel: string;
  category: string;
  accentColor: string;
  iconSrc?: string;
  screenshotSrc?: string;
  altScreenshotSrc?: string;
  features: { icon: string; label: string; description: string }[];
  href: string;
  playStoreUrl?: string;
  freemium?: boolean;
  legalLinks?: { privacy: string; terms: string };
};

export type ProductWithAssets = Product & {
  iconSrc: string;
  screenshotSrc: string;
};

export const fovena: ProductWithAssets = {
  slug: "focus-champ",
  name: "Fovena",
  tagline: "Stay Focused. Achieve More.",
  description:
    "A freemium focus and habit app for people who want deep work without the noise. Smart timers, streaks, and clear progress — with optional ambient sounds for deeper focus. Core features work locally on your device; optional Pro unlocks more on Google Play.",
  status: "shipped",
  statusLabel: "Live on Google Play",
  category: "Productivity",
  accentColor: "#F4B048",
  iconSrc: "/focus-champ-icon.png",
  screenshotSrc: "/focus-champ-home.png",
  altScreenshotSrc: "/focus-champ-alt.png",
  freemium: true,
  playStoreUrl: "",
  href: "/products/focus-champ",
  legalLinks: {
    privacy: "/fovena/privacy",
    terms: "/fovena/terms",
  },
  features: [
    {
      icon: "timer",
      label: "Focus Timer",
      description: "Eliminate distractions and stay in flow.",
    },
    {
      icon: "flame",
      label: "Habit & Streaks",
      description: "Build consistency that lasts.",
    },
    {
      icon: "chart",
      label: "Progress Insights",
      description: "Understand your focus patterns.",
    },
  ],
};

export const snugloop: Product = {
  slug: "snugloop",
  name: "Snugloop",
  tagline: "Cozy planarity puzzle game",
  description:
    "A cozy planarity puzzle game for mixed audiences. Optional ads apply only for players 13+ who have not purchased Remove Ads. Progress is saved locally on your device — no accounts, no cloud save.",
  status: "shipped",
  statusLabel: "Live on Google Play",
  category: "Games",
  accentColor: "#158C7D",
  href: "/snugloop/privacy",
  legalLinks: {
    privacy: "/snugloop/privacy",
    terms: "/snugloop/terms",
  },
  features: [],
};

/** Shipped / launching products shown on /products */
export const catalogProducts: Product[] = [fovena, snugloop];

/** Studio in-development only — LeadPilot. No Velox / Broker Pilot / AI Workspace. */
export const studioInDev = [
  {
    name: "LeadPilot",
    status: "in-development" as const,
    statusLabel: "In development",
    description:
      "An internal-grade lead and pipeline tool being engineered for precision workflows. Not publicly available yet.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return catalogProducts.find((p) => p.slug === slug);
}
