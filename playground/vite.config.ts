import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@strange-huge/icons": path.resolve(__dirname, "../src/index.ts"),
    },
  },
});
