import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@lobehub/icons"],
  },
  resolve: {
    alias: {
      "@strange-huge/icons": path.resolve(__dirname, "../src/index.ts"),
      // Ensure deps imported by ../src/* resolve from playground's node_modules
      "framer-motion": path.resolve(__dirname, "node_modules/framer-motion"),
      "react": path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      // Stub out heavy @lobehub/icons peer deps not needed in the playground
      "@lobehub/ui": path.resolve(__dirname, "src/stubs/lobehub-ui.jsx"),
      "antd-style": path.resolve(__dirname, "src/stubs/antd-style.js"),
      "antd": path.resolve(__dirname, "src/stubs/antd.js"),
    },
  },
});
