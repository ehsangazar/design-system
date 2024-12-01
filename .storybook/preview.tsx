import type { Preview } from "@storybook/react";
import ThemeWrapper from "../src/components/ThemeWrapper/ThemeWrapper";
import "./styles.css";

export const decorators = [
  (Story) => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
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
