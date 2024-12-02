import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*.stories.ts",
    "!src/**/*.stories.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  splitting: true,
  sourcemap: false,
  treeshake: true,
  clean: true,
  tsconfig: "tsconfig.json",
  external: ["react", "react-dom"],
});
