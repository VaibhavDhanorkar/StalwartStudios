import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "stalwart-studios",
  title: "Stalwart Studios CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Homepage")
              .child(
                S.list()
                  .title("Homepage Sections")
                  .items([
                    S.listItem()
                      .title("🦸 Hero")
                      .child(S.document().schemaType("hero").documentId("hero")),
                    S.listItem()
                      .title("⭐ Featured Product")
                      .child(
                        S.document()
                          .schemaType("featuredProduct")
                          .documentId("featuredProduct")
                      ),
                    S.listItem()
                      .title("🏆 Why Stalwart Studios")
                      .child(
                        S.document()
                          .schemaType("whySection")
                          .documentId("whySection")
                      ),
                    S.listItem()
                      .title("📖 About Studio")
                      .child(
                        S.document()
                          .schemaType("aboutSection")
                          .documentId("aboutSection")
                      ),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title("📦 Products")
              .schemaType("product")
              .child(S.documentTypeList("product").title("All Products")),
            S.divider(),
            S.listItem()
              .title("⚙️ Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
          ]),
    }),
    // visionTool() — add back after running: npm install @sanity/vision
  ],

  schema: {
    types: schemaTypes,
  },
});
