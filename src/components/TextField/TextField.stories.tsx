import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";
import { COLORS } from "../../constants/COLORS";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface TextFieldContent {
  size: "1" | "2" | "3";
  variant: "classic" | "surface" | "soft";
  color:
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
    | "grass"
    | undefined;
  radius: "none" | "small" | "medium" | "large" | "full";
}

const TextFieldDemo = (props: TextFieldContent) => {
  return (
    <TextField.Root placeholder="Search the docs…" {...props}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  );
};

const meta: Meta<typeof TextFieldDemo> = {
  title: "Components/TextField",
  component: TextFieldDemo,
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
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldDemo>;

export const Default: Story = {
  args: {},
};
export const Small: Story = {
  args: {
    size: "1",
    variant: "classic",
    color: "gray",
    radius: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "2",
    variant: "surface",
    color: "blue",
    radius: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "3",
    variant: "soft",
    color: "green",
    radius: "large",
  },
};

export const FullRadius: Story = {
  args: {
    size: "2",
    variant: "classic",
    color: "red",
    radius: "full",
  },
};
