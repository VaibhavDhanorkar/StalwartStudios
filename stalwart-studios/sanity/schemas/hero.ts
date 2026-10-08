import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow Label",
      type: "string",
      initialValue: "Independent Product Studio · AI-enabled",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      rows: 3,
      description: "Main hero headline. Use [[gold]] around text you want gold-coloured.",
      initialValue: "We build software [[worth using]].",
    }),
    defineField({
      name: "taglineWords",
      title: "Tagline Words",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["Apps, SaaS, and games for businesses and the people they serve."],
    }),
    defineField({
      name: "body",
      title: "Body Copy",
      type: "text",
      rows: 4,
      initialValue:
        "Stalwart Digital Studios ships its own products and builds AI-enabled software for businesses and consumers — conversational agents, document workflows, in-app assistants, and personalised experiences, engineered for production from day one.",
    }),
    defineField({
      name: "ctaPrimary",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Our Products",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "What we build with AI",
    }),
    defineField({
      name: "stats",
      title: "Stats Row",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "string", title: "Value" }),
            defineField({ name: "label", type: "string", title: "Label" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
      initialValue: [
        { value: "Global", label: "Distribution" },
        { value: "B2C & B2B", label: "Products" },
        { value: "2026", label: "Est." },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero Section" }),
  },
});
