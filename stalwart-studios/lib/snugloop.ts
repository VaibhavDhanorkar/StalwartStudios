import { site } from "./site";

export const snugloop = {
  name: "Snugloop",
  packageId: "com.stalwartdigital.snugloop",
  publisher: site.entity,
  supportEmail: site.supportEmail,
  effectiveDate: "September 18, 2026",
  privacyPath: "/snugloop/privacy",
  termsPath: "/snugloop/terms",
  privacyUrl: `${site.siteUrl}/snugloop/privacy`,
  termsUrl: `${site.siteUrl}/snugloop/terms`,
} as const;
