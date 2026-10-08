import { defineField, defineType } from "sanity";

export default defineType({
  name: "whySection",
  title: "Why Stalwart Studios Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "Our Philosophy",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      initialValue: "Built on principles.",
    }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (lucide name)", type: "string", description: "e.g. Zap, Heart, Shield, Coffee" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
      initialValue: [
        { icon: "Performance", title: "Performance First", description: "Every millisecond is deliberate. We build products that feel fast, reliable, and worthy of your daily trust." },
        { icon: "Heart", title: "Human Centered", description: "Technology exists to serve people. We design for the real human on the other side of the screen." },
        { icon: "Shield", title: "Privacy Focused", description: "Your data and trust come first — in our apps and in every product we build with partners." },
        { icon: "Coffee", title: "Independent Studio", description: "No investors dictating roadmaps. A small team building products we would want to use ourselves." },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Why Section" }),
  },
});
