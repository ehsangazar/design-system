import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "./CheckboxGroup";
import { COLORS } from "../../constants/COLORS";

interface CheckboxGroupContent {
  size: "1" | "2" | "3";
  variant: "classic" | "surface" | "soft";
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
  checked: boolean;
  defaultValue: string[];
}

const CheckboxGroupDemo = (props: CheckboxGroupContent) => {
  return (
    <CheckboxGroup.Root {...props}>
      <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
    </CheckboxGroup.Root>
  );
};

const meta: Meta<typeof CheckboxGroupDemo> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroupDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["classic", "surface", "soft"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    defaultValue: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroupDemo>;

export const Default: Story = {
  args: {
    size: "2",
    variant: "classic",
    color: "gray",
    defaultValue: ["1"],
  },
};
