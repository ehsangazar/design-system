import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Separator from "./Separator";
import { COLORS } from "../../constants/COLORS";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";

const SeparatorDemo = () => {
  return (
    <Text size="2">
      Tools for building high-quality, accessible UI.
      <Separator my="3" size="4" />
      <Flex gap="3" align="center">
        Themes
        <Separator orientation="vertical" />
        Primitives
        <Separator orientation="vertical" />
        Icons
        <Separator orientation="vertical" />
        Colors
      </Flex>
    </Text>
  );
};

const meta: Meta<typeof SeparatorDemo> = {
  title: "Components/Separator",
  component: SeparatorDemo,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    decorative: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeparatorDemo>;

export const Default: Story = {
  args: {},
};
