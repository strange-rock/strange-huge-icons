import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@strange-huge/icons": path.resolve(__dirname, "../src/index.ts"),
      // Ensure deps imported by ../src/* resolve from playground's node_modules
      "framer-motion": path.resolve(__dirname, "node_modules/framer-motion"),
      "react": path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },
});
