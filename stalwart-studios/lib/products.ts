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
  catalogScreenshotSrc?: string;
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
  status: "launching",
  statusLabel: "Coming soon",
  category: "Productivity",
  accentColor: "#F4B048",
  iconSrc: "/focus-champ-icon.png",
  screenshotSrc: "/focus-champ-home.png",
  catalogScreenshotSrc: "/fovena-mockup.png",
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

export const snugloop: ProductWithAssets = {
  slug: "snugloop",
  name: "Snugloop",
  tagline: "Cozy planarity puzzle game",
  description:
    "A cozy planarity puzzle with relaxing logic and a warm craft aesthetic—built for unwinding, not pressure.",
  status: "launching",
  statusLabel: "Coming soon",
  category: "Games",
  accentColor: "#158C7D",
  iconSrc: "/snugloop-icon.png",
  screenshotSrc: "/snugloop-mockup.png",
  catalogScreenshotSrc: "/snugloop-mockup.png",
  playStoreUrl: "",
  href: "/products/snugloop",
  legalLinks: {
    privacy: "/snugloop/privacy",
    terms: "/snugloop/terms",
  },
  features: [
    {
      icon: "puzzle",
      label: "Fair puzzles, guaranteed",
      description:
        "Every layout is solvable before you touch it—no dead ends, no stamina tricks, no layouts that waste your evening. Just trustworthy logic and a campaign that keeps going.",
    },
    {
      icon: "shield",
      label: "A clean puzzle screen",
      description:
        "The board stays yours: no banners or pop-ups while you play. Optional ads stay off the puzzle; remove them entirely whenever you want uninterrupted calm.",
    },
    {
      icon: "threads",
      label: "Progress you can see and feel",
      description:
        "Clear feedback on every move, so you always know you're closer. Clear the board, earn spools, and grow a cozy room—rewards for mood, not pressure.",
    },
  ],
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
