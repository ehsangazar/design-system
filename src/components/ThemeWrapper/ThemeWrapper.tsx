import { ReactNode } from "react";
import { Theme as RadixTheme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import ThemeContext from "../../contexts/ThemeContext";
import { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import "./global.css";
import { ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface Theme {
  appearance?: "light" | "dark";
  onAccentColorChange?: (accentColor: Theme["accentColor"]) => void;
  onGrayColorChange?: (grayColor: Theme["grayColor"]) => void;
  onPanelBackgroundChange?: (panelBackground: ["solid", "translucent"]) => void;
  onRadiusChange?: (radius: Theme["radius"]) => void;
  onScalingChange?: (scaling: ["90%", "95%", "100%", "105%", "110%"]) => void;
  accentColor?:
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass";
  grayColor?: "auto" | "gray" | "mauve" | "slate" | "sage" | "olive" | "sand";
  panelBackground?: "solid" | "translucent";
  radius?: "small" | "medium" | "large" | "none" | "full";
  scaling?: "90%" | "95%" | "100%" | "105%" | "110%";
  breakpoints?: { [key: string]: string };
}

const defaultTheme: Theme = {
  appearance: "light",
  onAccentColorChange: () => {},
  onGrayColorChange: () => {},
  onPanelBackgroundChange: () => {},
  onRadiusChange: () => {},
  onScalingChange: () => {},
  accentColor: "cyan",
  grayColor: "sand",
  panelBackground: "solid",
  radius: "medium",
  scaling: "100%",
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export const defaultTypography: Record<
  string,
  {
    size: Responsive<"7" | "6" | "5" | "4" | "3" | "2" | "1" | "8" | "9">;
  }
> = {
  heading1: {
    size: "7",
  },
  heading2: {
    size: "6",
  },
  heading3: {
    size: "5",
  },
  heading4: {
    size: "4",
  },
  heading5: {
    size: "3",
  },
  heading6: {
    size: "2",
  },
  paragraph: {
    size: "3",
  },
  label: {
    size: "2",
  },
  small: {
    size: "1",
  },
};

const defaultToastConfig = {
  position: "top-right" as ToastPosition,
  autoClose: 5000,
  rtl: false,
};

const ThemeWrapper = ({
  children,
  customTheme,
  customTypography,
  customToastConfig,
}: {
  children: ReactNode;
  customTheme?: Theme;
  customTypography?: Record<
    string,
    {
      size: Responsive<"7" | "6" | "5" | "4" | "3" | "2" | "1" | "8" | "9">;
    }
  >;
  customToastConfig?: {
    position?: ToastPosition;
    autoClose?: number;
    rtl?: boolean;
  };
}) => {
  const theme: Theme = { ...defaultTheme, ...customTheme };

  const typography = { ...defaultTypography, ...customTypography };

  const toastConfig = { ...defaultToastConfig, ...customToastConfig };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        typography,
        toastConfig,
      }}
    >
      <div className="ThemeWrapper">
        <RadixTheme {...theme}>{children}</RadixTheme>
      </div>
      <ToastContainer
        position={toastConfig.position}
        autoClose={toastConfig.autoClose}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={toastConfig.rtl}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.appearance}
      />
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
