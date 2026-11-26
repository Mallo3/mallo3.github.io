import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  // pages.js publishes ./build, so keep the CRA output folder name
  build: { outDir: "build" },
});
