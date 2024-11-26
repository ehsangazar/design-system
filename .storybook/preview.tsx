import React from "react";
import type { Preview } from "@storybook/react";
import "@radix-ui/themes/styles.css";
import "../src/reset.css";
import "../src/App.css";
import "./styles.css";
import Theme from "../src/components/Theme/Theme";

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
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
