import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import AutoImport from "astro-auto-import";

// REMOVE LightningCSS
// Use PostCSS instead
export default defineConfig({
  site: "https://example.com",
  trailingSlash: "never",

  css: {
    transformer: "postcss",
  },

  vite: {
    css: {
      transformer: "postcss",
    },
  },

  integrations: [
    react(),
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
});
