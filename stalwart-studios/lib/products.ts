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

export const focusChamp: ProductWithAssets = {
  slug: "focus-champ",
  name: "Focus Champ",
  tagline: "Stay Focused. Achieve More.",
  description:
    "A freemium focus and habit app for people who want deep work without the noise. Smart timers, streaks, and clear progress — launching soon on Google Play.",
  status: "launching",
  statusLabel: "Launching soon",
  category: "Productivity",
  accentColor: "#F4B048",
  iconSrc: "/focus-champ-icon.png",
  screenshotSrc: "/focus-champ-home.png",
  altScreenshotSrc: "/focus-champ-alt.png",
  freemium: true,
  playStoreUrl: "",
  href: "/products/focus-champ",
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

export const fovenaProduct: Product = {
  slug: "fovena",
  name: "Fovena",
  tagline: "Task-linked focus sessions and streaks",
  description:
    "A productivity app for task-linked focus sessions, streaks, and optional Pro subscriptions. Core features work locally on your device — no accounts, no ads, no cloud sync.",
  status: "shipped",
  statusLabel: "Live on Google Play",
  category: "Productivity",
  accentColor: "#F4B048",
  href: "/fovena/privacy",
  legalLinks: {
    privacy: "/fovena/privacy",
    terms: "/fovena/terms",
  },
  features: [],
};

/** Shipped / launching products shown on /products */
export const catalogProducts: Product[] = [focusChamp, fovenaProduct, snugloop];

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
