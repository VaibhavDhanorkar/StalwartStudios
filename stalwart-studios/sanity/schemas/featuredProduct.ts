import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuredProduct",
  title: "Featured Product Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      initialValue: "Featured Product",
    }),
    defineField({
      name: "sectionHeadline",
      title: "Section Headline",
      type: "string",
      initialValue: "Our first product is ready to ship.",
    }),
    defineField({
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
      description: "Select the product to feature",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Featured Product Section" }),
  },
});
