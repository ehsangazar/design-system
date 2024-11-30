import { ReactNode } from "react";
import { Theme as RadixTheme } from "@radix-ui/themes";

import "./reset.css";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/layout.css";
import "./main.css";

interface Theme {
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
  grayColor: "sand" | "slate";
  radius: "small" | "medium" | "large" | "none" | "full";
}

const defaultTheme: Theme = {
  accentColor: "cyan",
  grayColor: "sand",
  radius: "medium",
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
