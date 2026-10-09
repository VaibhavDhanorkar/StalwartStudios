export const site = {
  entity: "Stalwart Digital Studios",
  legalName: "Stalwart Digital Studios (Proprietor)",
  domain: "stalwartstudios.in",
  siteUrl: "https://stalwartstudios.in",
  udyam: "UDYAM-MH-03-0146825",
  supportEmail: "support@stalwartstudios.in",
  /** Kept for refund policy, store listings, and easy revert — see ROADMAP.md */
  phone: "+91 9623677013",
  phoneTel: "+919623677013",
  address:
    "Palash Line, Rimand Home, Gadge Nagar, Shivaji Nagar, Amravati, Maharashtra, India - 444603",
  jurisdiction: "Courts in Amravati, Maharashtra, India",
  jurisdictionShort: "Amravati, Maharashtra, India",
  playStoreUrl: "",
  copyrightYear: 2026,
  tagline:
    "AI-enabled apps, SaaS, and games for businesses and consumers. Built in India, shipped worldwide.",
} as const;

export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Studio", href: "/studio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Contact Us", href: "/contact" },
] as const;

/** Product legal pages — company privacy/terms and product catalog, not footer */
export const productLegalLinks = {
  privacy: [
    { label: "Fovena Privacy Policy", href: "/fovena/privacy" },
    { label: "Snugloop Privacy Policy", href: "/snugloop/privacy" },
  ],
  terms: [
    { label: "Fovena Terms of Service", href: "/fovena/terms" },
    { label: "Snugloop Terms of Service", href: "/snugloop/terms" },
  ],
} as const;
