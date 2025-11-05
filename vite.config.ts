import path from "path";
import fs from "fs";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: "/hydroburner/",
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      {
        name: "fix-html-modules",
        writeBundle() {
          const nojekyllPath = path.join(process.cwd(), "dist", ".nojekyll");
          fs.writeFileSync(nojekyllPath, "");

          // Aggressively fix HTML to remove all module references
          const htmlPath = path.join(process.cwd(), "dist", "index.html");
          if (fs.existsSync(htmlPath)) {
            let html = fs.readFileSync(htmlPath, "utf-8");

            // Remove all module-related attributes
            html = html.replace(/\s*type="module"/g, "");
            html = html.replace(/\s*crossorigin/g, "");

            // Ensure script tag is clean
            html = html.replace(/<script\s+src="/g, '<script src="');

            console.log(
              "Fixed HTML:",
              html.includes('type="module"')
                ? "FAILED - still has modules"
                : "SUCCESS - no modules"
            );

            fs.writeFileSync(htmlPath, html);
          }
        },
      },
    ],
    build: {
      target: "es2015",
      rollupOptions: {
        output: {
          format: "iife",
          name: "MyApp",
          manualChunks: undefined,
        },
      },
    },
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
