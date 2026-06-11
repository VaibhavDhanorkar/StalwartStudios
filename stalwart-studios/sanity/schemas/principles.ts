import { defineField, defineType } from "sanity";

export const principlesSchema = defineType({
  name: "principles",
  title: "Studio Principles (Why Section)",
  type: "document",
  icon: () => "⚡",
  fields: [
    defineField({
      name: "sectionHeadline",
      title: "Section Headline",
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
            defineField({
              name: "icon",
              title: "Icon (Lucide name)",
              type: "string",
              description: "Lucide icon name: Zap | Heart | Shield | Coffee | Star | Globe | etc.",
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
      validation: (R) => R.max(4),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Why Stalwart Studios" };
    },
  },
});
