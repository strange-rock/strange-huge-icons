import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/llm/index.ts", "src/connectors/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "framer-motion"],
  treeshake: true,
});
