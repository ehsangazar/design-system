import { ReactNode } from "react";
import { Theme as RadixTheme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { generateShades } from "./generateShades";
import ThemeContext from "../../contexts/ThemeContext";
import { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import "./global.css";

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

export const defaultColors = {
  gray: "#8D8D8D",
  gold: "#FFC700",
  bronze: "#C87533",
  brown: "#8B5A2B",
  yellow: "#FFEB3B",
  amber: "#FFBF30",
  orange: "#FF8C00",
  tomato: "#E54D2E",
  red: "#E5484D",
  ruby: "#E54666",
  crimson: "#E93D82",
  pink: "#D6409F",
  plum: "#BA68C8",
  purple: "#8E4EC6",
  violet: "#6E56CF",
  iris: "#5B5BD6",
  indigo: "#4A0072",
  blue: "#2979FF",
  cyan: "#00A2C7",
  teal: "#00897B",
  jade: "#00A676",
  green: "#43A047",
  grass: "#66BB6A",
  sage: "#868E8B",
  olive: "#898E87",
  sand: "#8D8D86",
  slate: "#8B8D98",
  mauve: "#8E8C99",
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

const ThemeWrapper = ({
  children,
  customTheme,
  customColors,
  customTypography,
}: {
  children: ReactNode;
  customTheme?: Theme;
  customColors?: Partial<Record<keyof typeof defaultColors, string>>;
  customTypography?: Record<
    string,
    {
      size: Responsive<"7" | "6" | "5" | "4" | "3" | "2" | "1" | "8" | "9">;
    }
  >;
}) => {
  const theme: Theme = { ...defaultTheme, ...customTheme };
  const colors = { ...defaultColors, ...customColors };

  const style: { [key: string]: string } = Object.keys(colors).reduce(
    (acc, colorName) => {
      const key = colorName as keyof typeof defaultColors;
      return {
        ...acc,
        ...generateShades(colorName, colors[key]),
      };
    },
    {}
  );

  const typography = { ...defaultTypography, ...customTypography };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colors,
        typography,
      }}
    >
      <div className="ThemeWrapper" style={style}>
        <RadixTheme {...theme}>{children}</RadixTheme>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;

// --space-1: calc(4px* var(--scaling));
//     --space-2: calc(8px* var(--scaling));
//     --space-3: calc(12px* var(--scaling));
//     --space-4: calc(16px* var(--scaling));
//     --space-5: calc(24px* var(--scaling));
//     --space-6: calc(32px* var(--scaling));
//     --space-7: calc(40px* var(--scaling));
//     --space-8: calc(48px* var(--scaling));
//     --space-9: calc(64px* var(--scaling));
//     --container-1: 448px;
//     --container-2: 688px;
//     --container-3: 880px;
//     --container-4: 1136px;
// --radius-1: calc(3px* var(--scaling)* var(--radius-factor));
// --radius-2: calc(4px* var(--scaling)* var(--radius-factor));
// --radius-3: calc(6px* var(--scaling)* var(--radius-factor));
// --radius-4: calc(8px* var(--scaling)* var(--radius-factor));
// --radius-5: calc(12px* var(--scaling)* var(--radius-factor));
// --radius-6:
