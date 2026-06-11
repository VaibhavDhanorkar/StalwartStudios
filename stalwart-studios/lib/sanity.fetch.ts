import { client, isSanityConfigured } from "./sanity.client";
import {
  heroQuery,
  featuredProductQuery,
  whySectionQuery,
  upcomingProductsQuery,
  aboutSectionQuery,
  siteSettingsQuery,
} from "./sanity.queries";

// ─── Types ───────────────────────────────────────────────────────────────────

export type HeroData = {
  eyebrow: string;
  headline: string;
  taglineWords: string[];
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { value: string; label: string }[];
};

export type ProductFeature = {
  icon: string;
  label: string;
  description: string;
};

export type FeaturedProductData = {
  sectionLabel: string;
  sectionHeadline: string;
  product: {
    name: string;
    tagline: string;
    description: string;
    status: string;
    ctaLabel: string;
    ctaUrl?: string;
    playStoreUrl?: string;
    accentColor: string;
    iconUrl?: string;
    screenshotUrl?: string;
    features: ProductFeature[];
  };
};

export type WhyPillar = {
  icon: string;
  title: string;
  description: string;
};

export type WhySectionData = {
  sectionLabel: string;
  headline: string;
  pillars: WhyPillar[];
};

export type UpcomingProduct = {
  _id: string;
  name: string;
  tagline?: string;
  category: string;
  description: string;
  status: string;
  accentColor: string;
  iconUrl?: string;
};

export type AboutSectionData = {
  sectionLabel: string;
  headline: string;
  storyParagraphs: string[];
  mission: string;
  designPhilosophy: string;
  longTermVision: string;
};

export type SiteSettings = {
  studioName: string;
  tagline: string;
  siteUrl: string;
  supportEmail: string;
  location: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
};

// ─── Fetch helpers ────────────────────────────────────────────────────────────
// Each helper returns null / [] when Sanity is not configured —
// components fall back to their static default content.
const opts = { next: { revalidate: 60 } };

async function safeFetch<T>(query: string): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query, {}, opts);
  } catch {
    return null;
  }
}

async function safeFetchArray<T>(query: string): Promise<T[]> {
  if (!isSanityConfigured) return [];
  try {
    return (await client.fetch<T[]>(query, {}, opts)) ?? [];
  } catch {
    return [];
  }
}

export const getHero = () => safeFetch<HeroData>(heroQuery);
export const getFeaturedProduct = () => safeFetch<FeaturedProductData>(featuredProductQuery);
export const getWhySection = () => safeFetch<WhySectionData>(whySectionQuery);
export const getUpcomingProducts = () => safeFetchArray<UpcomingProduct>(upcomingProductsQuery);
export const getAboutSection = () => safeFetch<AboutSectionData>(aboutSectionQuery);
export const getSiteSettings = () => safeFetch<SiteSettings>(siteSettingsQuery);
