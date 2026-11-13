import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Static single-page build: `npm run build` outputs plain files to dist/client
// that can be hosted anywhere (Cloudflare Pages, GitHub Pages, Netlify...).
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      spa: { enabled: true, prerender: { outputPath: "/index.html" } },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
