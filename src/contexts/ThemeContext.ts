import { createContext } from "react";
import { defaultColors, Theme } from "../components/ThemeWrapper/ThemeWrapper";
import { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import { ToastPosition } from "react-toastify";

const ThemeContext = createContext<{
  theme: Theme;
  colors: Partial<Record<keyof typeof defaultColors, string>>;
  typography?: Record<
    string,
    {
      size: Responsive<"7" | "6" | "5" | "4" | "3" | "2" | "1" | "8" | "9">;
    }
  >;
  toastConfig: {
    position?: ToastPosition;
    autoClose?: number;
    rtl?: boolean;
  };
}>({
  theme: {},
  colors: {},
  typography: {},
  toastConfig: {
    autoClose: 5000,
    rtl: false,
  },
});

export default ThemeContext;
