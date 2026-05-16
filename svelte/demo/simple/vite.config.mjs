import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { version } from "../../../package.json";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  root: "svelte/demo/simple",
  define: {
    "process.env.VERSION": `"${version}"`,
  },
  plugins: [svelte()],
});
