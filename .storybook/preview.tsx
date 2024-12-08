import React from "react";
import type { Preview } from "@storybook/react";
import ThemeWrapper from "../src/components/ThemeWrapper/ThemeWrapper";
import "./styles.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light Mode" },
        { value: "dark", title: "Dark Mode" },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    return (
      <ThemeWrapper
        customTheme={{
          appearance: theme,
        }}
      >
        <Story />
      </ThemeWrapper>
    );
  },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
