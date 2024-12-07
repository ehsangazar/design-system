import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { COLORS } from "../../constants/COLORS";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
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
    placeholder: {
      control: "text",
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    icon: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
  },
};
export const Small: Story = {
  args: {
    placeholder: "Type here...",
    size: "1",
    variant: "classic",
    color: "gray",
    radius: "small",
  },
};

export const Medium: Story = {
  args: {
    placeholder: "Type here...",
    size: "2",
    variant: "surface",
    color: "blue",
    radius: "medium",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Type here...",
    size: "3",
    variant: "soft",
    color: "green",
    radius: "large",
  },
};

export const FullRadius: Story = {
  args: {
    placeholder: "Type here...",
    size: "2",
    variant: "classic",
    color: "red",
    radius: "full",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Type here...",
    size: "2",
    variant: "classic",
    color: "red",
    icon: <MagnifyingGlassIcon />,
  },
};
