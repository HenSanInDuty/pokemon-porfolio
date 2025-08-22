import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  // Vite configuration optionsx
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    minify: "terser"
  },
  plugins: [],
});
