import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      staticImport: true,
      outputDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Gaz Design System",
      fileName: (format) => `gaz-design-system.${format}.js`,
      formats: ["es", "cjs", "umd", "iife"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        name: "GazDesignSystem",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
