import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      staticImport: true,
      outDir: "dist",
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Gaz Design System",
      formats: ["es", "cjs", "umd", "iife"], // Choose the formats you need
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Make sure react and react-dom are treated as external dependencies
      output: {
        preserveModules: true,
        name: "GazDesignSystem",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
