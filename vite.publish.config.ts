import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  build: {
    outDir: "./dist", // Specify the output directory
    lib: {
      entry: "src/index.ts", // Entry point for your package
      name: "GazDesignSystem", // Name for UMD build
      formats: ["umd", "es", "cjs"], // Output formats: ESM (.mjs) and CommonJS (.cjs)
      fileName: (format) => `index.${format}.js`, // Output file names
    },
    sourcemap: true, // Generate source maps for easier debugging
    rollupOptions: {
      external: ["react", "react-dom"], // Do not bundle React and ReactDOM
      plugins: [typescript({ tsconfig: "./tsconfig.json" })], // Use TypeScript plugin for Rollup
    },
  },
});
