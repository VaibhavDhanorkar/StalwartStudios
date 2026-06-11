import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "studioName",
      title: "Studio Name",
      type: "string",
      initialValue: "Stalwart Studios",
    }),
    defineField({
      name: "tagline",
      title: "Tagline (meta / SEO)",
      type: "string",
      initialValue: "Crafting exceptional software for a better digital tomorrow.",
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      initialValue: "https://stalwartstudios.in",
    }),
    defineField({
      name: "supportEmail",
      title: "Support Email",
      type: "string",
      initialValue: "support@stalwartstudios.in",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "India",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "twitter", title: "Twitter / X URL", type: "url" }),
        defineField({ name: "github", title: "GitHub URL", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
      ],
    }),
    defineField({
      name: "seoImage",
      title: "Default OG Image",
      type: "image",
      description: "1200×630 image for social sharing",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
