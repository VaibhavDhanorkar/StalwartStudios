import { defineField, defineType } from "sanity";

export const aboutSchema = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  icon: () => "🏛️",
  fields: [
    defineField({
      name: "headline",
      title: "Opening Headline",
      type: "text",
      rows: 2,
      initialValue:
        "Started with a notebook and a stubborn belief that software could feel better.",
    }),
    defineField({
      name: "story",
      title: "Studio Story",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text — the origin story paragraphs",
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
      rows: 3,
      initialValue:
        "To build software that respects the people who use it — their time, their attention, and their goals. We exist to make the daily experience of digital tools genuinely better.",
    }),
    defineField({
      name: "philosophy",
      title: "Design Philosophy (one line, italic)",
      type: "string",
      initialValue:
        "Every pixel is a promise — we design for the person, not the portfolio.",
    }),
    defineField({
      name: "vision",
      title: "Long-term Vision",
      type: "text",
      rows: 3,
      initialValue:
        "We want to become a studio that people trust the way they trust their favorite tools — quietly, deeply, and over many years. A small team, a tight portfolio, and a reputation for shipping things that matter.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Section" };
    },
  },
});
