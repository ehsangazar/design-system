import { Meta, StoryObj } from "@storybook/react";
import Progress from "./Progress";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Progress> = {
  component: Progress,
  argTypes: {
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
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    duration: {
      control: "number",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Another description, overriding the comments",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {},
};

export const Classic: Story = {
  args: {
    variant: "classic",
    color: "blue",
    highContrast: false,
    radius: "medium",
    duration: "1000ms",
  },
};

export const Surface: Story = {
  args: {
    variant: "surface",
    color: "gray",
    highContrast: true,
    radius: "large",
    duration: "2000ms",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    color: "red",
    highContrast: false,
    radius: "small",
    duration: "1500ms",
  },
};
