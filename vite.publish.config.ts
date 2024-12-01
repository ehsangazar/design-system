import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: "src/index.ts",
      name: "GazDesignSystem",
      formats: ["umd", "es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      plugins: [typescript({ tsconfig: "./tsconfig.json" })],
    },
  },
});
