import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";
import { COLORS } from "../../constants/COLORS";

const sample =
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    children: {
      control: "text",
    },
    src: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    variant: {
      control: "select",
      options: ["solid", "soft"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
      control: "boolean",
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    fallback: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: sample,
    size: "4",
    color: "gray",
    highContrast: false,
    radius: "medium",
    fallback: "A",
  },
};
export const Solid: Story = {
  args: {
    src: sample,
    size: "4",
    color: "blue",
    highContrast: false,
    radius: "medium",
    variant: "solid",
    fallback: "B",
  },
};

export const Soft: Story = {
  args: {
    src: sample,
    size: "4",
    color: "green",
    highContrast: false,
    radius: "medium",
    variant: "soft",
    fallback: "C",
  },
};
