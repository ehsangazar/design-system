import { ReactNode } from "react";
import { Theme as RadixTheme } from "@radix-ui/themes";

import "./reset.css";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/layout.css";
import "./main.css";

interface Theme {
  apprearance: "light" | "dark";
  onAccentColorChange: (accentColor: Theme["accentColor"]) => void;
  onGrayColorChange: (grayColor: Theme["grayColor"]) => void;
  onPanelBackgroundChange: (panelBackground: ["solid", "translucent"]) => void;
  onRadiusChange: (radius: Theme["radius"]) => void;
  onScalingChange: (scaling: ["90%", "95%", "100%", "105%", "110%"]) => void;
  accentColor:
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
    | "grass"
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
  grayColor: "auto" | "gray" | "mauve" | "slate" | "sage" | "olive" | "sand";
  resolvedGrayColor: "gray" | "mauve" | "slate" | "sage" | "olive" | "sand";
  panelBackground: "solid" | "translucent";
  radius: "small" | "medium" | "large" | "none" | "full";
  scaling: "90%" | "95%" | "100%" | "105%" | "110%";
  breakpoints: { [key: string]: string };
}

const defaultTheme: Theme = {
  apprearance: "light",
  onAccentColorChange: () => {},
  onGrayColorChange: () => {},
  onPanelBackgroundChange: () => {},
  onRadiusChange: () => {},
  onScalingChange: () => {},
  accentColor: "cyan",
  grayColor: "sand",
  resolvedGrayColor: "sand",
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

const Wrapper = ({
  children,
  customTheme,
}: {
  children: ReactNode;
  customTheme?: Theme;
}) => {
  const theme: Theme = { ...defaultTheme, ...customTheme };

  return (
    <div className="wrapper">
      <RadixTheme {...theme}>{children}</RadixTheme>
    </div>
  );
};

export default Wrapper;
