import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short tagline e.g. 'Plan. Focus. Finish.'",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Productivity, Finance & Trading",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "live" },
          { title: "Coming Soon", value: "coming_soon" },
          { title: "In Development", value: "in_development" },
          { title: "Ideation", value: "ideation" },
        ],
        layout: "radio",
      },
      initialValue: "coming_soon",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "App Icon",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "screenshot",
      title: "App Screenshot / Mockup",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "accentColor",
      title: "Accent Colour (hex)",
      type: "string",
      description: "e.g. #158C7D or #F4C05F",
      initialValue: "#158C7D",
    }),
    defineField({
      name: "features",
      title: "Feature List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Name (lucide)", type: "string", description: "Lucide icon name e.g. Timer, Flame, BarChart2" }),
            defineField({ name: "label", title: "Feature Label", type: "string" }),
            defineField({ name: "description", title: "Feature Description", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "label", subtitle: "description" },
          },
        },
      ],
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label",
      type: "string",
      initialValue: "Coming Soon on Google Play",
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA URL",
      type: "url",
      description: "Google Play / App Store link when live",
    }),
    defineField({
      name: "playStoreUrl",
      title: "Google Play Store URL",
      type: "url",
    }),
    defineField({
      name: "appStoreUrl",
      title: "Apple App Store URL",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "status",
      media: "icon",
    },
  },
});
