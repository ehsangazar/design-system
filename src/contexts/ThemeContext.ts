import { createContext } from "react";
import { defaultColors, Theme } from "../components/ThemeWrapper/ThemeWrapper";
import { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";

const ThemeContext = createContext<{
  theme: Theme;
  colors: Partial<Record<keyof typeof defaultColors, string>>;
  typography?: Record<
    string,
    {
      size: Responsive<"7" | "6" | "5" | "4" | "3" | "2" | "1" | "8" | "9">;
    }
  >;
}>({
  theme: {},
  colors: {},
  typography: {},
});

export default ThemeContext;
