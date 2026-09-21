import { site } from "./site";

export const fovena = {
  name: "Fovena",
  packageId: "com.stalwart.focuspal",
  publisher: "Stalwart Studios (Stalwart Digital Studios)",
  supportEmail: site.supportEmail,
  effectiveDate: "20 September 2026",
  privacyPath: "/fovena/privacy",
  termsPath: "/fovena/terms",
  privacyUrl: `${site.siteUrl}/fovena/privacy`,
  termsUrl: `${site.siteUrl}/fovena/terms`,
} as const;
