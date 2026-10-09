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
      initialValue: "About",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "text",
      rows: 2,
      initialValue: "We ship consumer apps and enterprise SaaS from one studio.",
    }),
    defineField({
      name: "storyParagraphs",
      title: "Story Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      initialValue: [
        "Stalwart Digital Studios is an independent product company. We build and own consumer mobile apps, enterprise SaaS, and games — and we distribute them globally.",
        "We're an independent studio from India with a portfolio that spans B2C and B2B. Same studio, same accountability for what we release.",
        "We build for people who use our software every day—steady updates, clear support, and products that improve from real feedback.",
        "Today, Stalwart Digital Studios builds AI-enabled products for businesses and consumers — our own apps and games, and software built with partners — designed, engineered, and shipped end to end.",
      ],
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
      rows: 3,
      initialValue:
        "To build and ship owned software — consumer apps, enterprise SaaS, and games — that people and teams choose to use every day.",
    }),
    defineField({
      name: "designPhilosophy",
      title: "Design Philosophy (one-liner)",
      type: "string",
      initialValue: "Do less, better. Every screen and workflow should justify its place.",
    }),
    defineField({
      name: "longTermVision",
      title: "Long-Term Vision",
      type: "text",
      rows: 3,
      initialValue:
        "A tight portfolio of our own products, and an AI practice trusted by businesses and consumers alike.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "About Section" }),
  },
});
