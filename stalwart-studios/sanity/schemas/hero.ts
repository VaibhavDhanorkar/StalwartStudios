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
      description: "Small label above the headline (e.g. 'Independent Software Studio')",
      initialValue: "Independent Software Studio",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      rows: 3,
      description: "Main hero headline. Use [[gold]] around text you want gold-coloured.",
      initialValue: "Crafting [[exceptional]] software for a better digital tomorrow.",
    }),
    defineField({
      name: "taglineWords",
      title: "Tagline Words",
      type: "array",
      of: [{ type: "string" }],
      description: "The three short words (e.g. Independent, Focused, Purpose-driven)",
      initialValue: ["Independent.", "Focused.", "Purpose-driven."],
    }),
    defineField({
      name: "body",
      title: "Body Copy",
      type: "text",
      rows: 3,
      initialValue:
        "We design and build digital products that are high-performance and customer-centric — incredibly powerful and made to create real impact.",
    }),
    defineField({
      name: "ctaPrimary",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Explore Products",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "Learn More",
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
        { value: "2024", label: "Founded" },
        { value: "1+", label: "Products" },
        { value: "India", label: "Based in" },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero Section" }),
  },
});
