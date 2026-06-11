import { groq } from "next-sanity";

// ─── Hero ────────────────────────────────────────────────────────────────────
export const heroQuery = groq`
  *[_type == "hero" && _id == "hero"][0] {
    eyebrow,
    headline,
    taglineWords,
    body,
    ctaPrimary,
    ctaSecondary,
    stats[] { value, label }
  }
`;

// ─── Featured Product ─────────────────────────────────────────────────────────
export const featuredProductQuery = groq`
  *[_type == "featuredProduct" && _id == "featuredProduct"][0] {
    sectionLabel,
    sectionHeadline,
    product-> {
      name,
      tagline,
      description,
      status,
      ctaLabel,
      ctaUrl,
      playStoreUrl,
      accentColor,
      "iconUrl": icon.asset->url,
      "screenshotUrl": screenshot.asset->url,
      features[] {
        icon,
        label,
        description
      }
    }
  }
`;

// ─── Why Section ─────────────────────────────────────────────────────────────
export const whySectionQuery = groq`
  *[_type == "whySection" && _id == "whySection"][0] {
    sectionLabel,
    headline,
    pillars[] { icon, title, description }
  }
`;

// ─── All Products (for pipeline / future section) ────────────────────────────
export const upcomingProductsQuery = groq`
  *[_type == "product" && status in ["coming_soon", "in_development", "ideation"] && isFeatured != true]
  | order(order asc) {
    _id,
    name,
    tagline,
    category,
    description,
    status,
    accentColor,
    "iconUrl": icon.asset->url
  }
`;

// ─── About Section ────────────────────────────────────────────────────────────
export const aboutSectionQuery = groq`
  *[_type == "aboutSection" && _id == "aboutSection"][0] {
    sectionLabel,
    headline,
    storyParagraphs,
    mission,
    designPhilosophy,
    longTermVision
  }
`;

// ─── Site Settings ────────────────────────────────────────────────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    studioName,
    tagline,
    siteUrl,
    supportEmail,
    location,
    socialLinks { twitter, github, linkedin }
  }
`;
