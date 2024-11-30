import React from "react";
import type { Preview } from "@storybook/react";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Theme from "../src/components/Theme/Theme";
import "./styles.css";

export const decorators = [
  (Story) => (
    <Wrapper>
      <Theme>
        <Story />
      </Theme>
    </Wrapper>
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
