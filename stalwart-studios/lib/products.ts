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
  iconSrc: string;
  screenshotSrc: string;
  altScreenshotSrc?: string;
  features: { icon: string; label: string; description: string }[];
  href: string;
  playStoreUrl?: string;
  freemium?: boolean;
};

export const focusChamp: Product = {
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

/** Shipped / launching products shown on /products */
export const catalogProducts: Product[] = [focusChamp];

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
