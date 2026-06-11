import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "About the Studio",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      rows: 2,
      initialValue: "Started with a notebook and a stubborn belief that software could feel better.",
    }),
    defineField({
      name: "storyParagraphs",
      title: "Story Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      description: "Each item becomes a paragraph in the story section",
      initialValue: [
        "Stalwart Studios began as a simple question: why does so much software feel like it was built for the developer's convenience rather than the person using it every day?",
        "We're a small, independent studio from India — building tools we genuinely wish existed. Every product we ship starts with a human problem, not a feature list. We prototype obsessively, cut ruthlessly, and only ship when something feels truly ready.",
        "We don't have a venture fund behind us. We have standards. And we think that's a better foundation to build from.",
      ],
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
      name: "designPhilosophy",
      title: "Design Philosophy (one-liner)",
      type: "string",
      initialValue: "Every pixel is a promise — we design for the person, not the portfolio.",
    }),
    defineField({
      name: "longTermVision",
      title: "Long-Term Vision",
      type: "text",
      rows: 3,
      initialValue:
        "We want to become a studio that people trust the way they trust their favourite tools — quietly, deeply, and over many years. A small team, a tight portfolio, and a reputation for shipping things that matter.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "About Section" }),
  },
});
