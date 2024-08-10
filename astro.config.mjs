import { defineConfig } from "astro/config";

import bun from "@nurodev/astro-bun";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(), // bun()
  integrations: [tailwind()],
  build: {
    assets: "_",
  },
});
