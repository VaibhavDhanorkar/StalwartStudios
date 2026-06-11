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
      initialValue: "Why Stalwart Studios",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      initialValue: "Built on principles, not just preferences.",
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
        { icon: "Zap", title: "Performance First", description: "Every millisecond is deliberate. We build products that feel fast, reliable, and worthy of your daily trust." },
        { icon: "Heart", title: "Human Centered", description: "Technology exists to serve people, not the other way around. We design for the real human on the other side of the screen." },
        { icon: "Shield", title: "Privacy Focused", description: "Your data is yours. We build with privacy as a foundation, not an afterthought — no exceptions." },
        { icon: "Coffee", title: "Independent Studio", description: "No investors dictating roadmaps. No trend-chasing. Just a small team building products we'd want to use ourselves." },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Why Section" }),
  },
});
