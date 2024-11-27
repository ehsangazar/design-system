import { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./RadioGroup";
import { COLORS } from "../../constants/COLORS";

interface RadioGroupContent {
  size: "1" | "2" | "3";
  variant: "classic" | "surface" | "soft";
  highContrast: boolean;
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
}

const RadioGroupDemo = (props: RadioGroupContent) => {
  return (
    <RadioGroup.Root defaultValue="1" name="example" {...props}>
      <RadioGroup.Item value="1">Default</RadioGroup.Item>
      <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
      <RadioGroup.Item value="3">Compact</RadioGroup.Item>
    </RadioGroup.Root>
  );
};

const meta: Meta<typeof RadioGroupDemo> = {
  title: "Components/RadioGroup",
  component: RadioGroupDemo,
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
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroupDemo>;

export const Default: Story = {
  args: {},
};
