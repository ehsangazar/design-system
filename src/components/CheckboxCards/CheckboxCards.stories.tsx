import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CheckboxCards from "./CheckboxCards";
import { COLORS } from "../../constants/COLORS";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";

interface CheckboxCardsContent {
  size: "1" | "2" | "3";
  variant: "classic" | "surface";
  color?:
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
  highContrast: boolean;
  columns: { initial: string; sm: string };
  gap: { initial: string; sm: string };
}

const CheckboxCardsDemo = (props: CheckboxCardsContent) => {
  return (
    <Box maxWidth="600px">
      <CheckboxCards.Root {...props}>
        <CheckboxCards.Item value="1">
          <Flex direction="column" width="100%">
            <Text weight="bold">A1 Keyboard</Text>
            <Text>US Layout</Text>
          </Flex>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="2">
          <Flex direction="column" width="100%">
            <Text weight="bold">Pro Mouse</Text>
            <Text>Zero-lag wireless</Text>
          </Flex>
        </CheckboxCards.Item>
        <CheckboxCards.Item value="3">
          <Flex direction="column" width="100%">
            <Text weight="bold">Lightning Mat</Text>
            <Text>Wireless charging</Text>
          </Flex>
        </CheckboxCards.Item>
      </CheckboxCards.Root>
    </Box>
  );
};

// gap: Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>

const meta: Meta<typeof CheckboxCardsDemo> = {
  title: "Components/CheckboxCards",
  component: CheckboxCardsDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["classic", "surface"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
      control: "boolean",
    },
    columns: {
      control: "object",
    },
    gap: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxCardsDemo>;

export const Default: Story = {
  args: {
    size: "2",
    variant: "classic",
    color: "red",
    highContrast: false,
    columns: { initial: "1", sm: "3" },
    gap: { initial: "2", sm: "3" },
  },
};
