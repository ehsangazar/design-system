import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "GazDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => `gazDesignSystem.${format}.js`,
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
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("cssnano")({
          preset: "default",
        }),
      ],
    },
  },
});
