import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    watch: {},
    emptyOutDir: false,
    rollupOptions: {
      input: {
        counter: resolve(__dirname, "src/main.tsx"),
      },
      output: {
        dir: resolve(__dirname, "extensions/test-1/assets"),
        entryFileNames: "vite-[name].js",
        chunkFileNames: "vite-[name].js",
        assetFileNames: "vite-[name].[ext]",
      },
    },
  },
});
