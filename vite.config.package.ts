import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import cssnano from "cssnano";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Design System",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: "default",
        }),
      ],
    },
  },
});
