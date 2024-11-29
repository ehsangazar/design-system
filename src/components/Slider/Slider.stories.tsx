import { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Slider> = {
  component: Slider,
  argTypes: {
    variant: {
      control: "select",
      options: ["classic", "surface", "soft"],
    },
    size: {
      control: "select",
      options: ["1", "2", "3"],
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
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};
export const Classic: Story = {
  args: {
    variant: "classic",
    size: "2",
    color: "blue",
    highContrast: false,
    radius: "medium",
    defaultValue: [50],
  },
};

export const Surface: Story = {
  args: {
    variant: "surface",
    size: "2",
    color: "red",
    highContrast: false,
    radius: "medium",
    defaultValue: [50],
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    size: "2",
    color: "green",
    highContrast: false,
    radius: "medium",
    defaultValue: [50],
  },
};

export const HighContrast: Story = {
  args: {
    variant: "classic",
    size: "2",
    color: "blue",
    highContrast: true,
    radius: "medium",
    defaultValue: [50],
  },
};

export const LargeRadius: Story = {
  args: {
    variant: "classic",
    size: "2",
    color: "blue",
    highContrast: false,
    radius: "large",
    defaultValue: [50],
  },
};
