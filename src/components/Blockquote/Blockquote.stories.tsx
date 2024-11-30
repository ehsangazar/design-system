import { Meta, StoryObj } from "@storybook/react";
import Blockquote from "./Blockquote";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Blockquote> = {
  title: "Components/Blockquote",
  component: Blockquote,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "bold"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
      control: "boolean",
    },
    truncate: {
      control: "boolean",
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap", "pretty", "balance"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children: "Blockquote",
  },
};
export const Large: Story = {
  args: {
    children: "Large Blockquote",
    size: "9",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Blockquote",
    size: "5",
  },
};

export const Small: Story = {
  args: {
    children: "Small Blockquote",
    size: "1",
  },
};

export const Bold: Story = {
  args: {
    children: "Bold Blockquote",
    weight: "bold",
  },
};

export const Light: Story = {
  args: {
    children: "Light Blockquote",
    weight: "light",
  },
};

export const HighContrast: Story = {
  args: {
    children: "High Contrast Blockquote",
    highContrast: true,
  },
};

export const Truncated: Story = {
  args: {
    children: "This is a very long blockquote that should be truncated",
    truncate: true,
  },
};

export const Wrapped: Story = {
  args: {
    children: "This blockquote should wrap according to the selected option",
    wrap: "wrap",
  },
};

export const NoWrap: Story = {
  args: {
    children: "This blockquote should not wrap",
    wrap: "nowrap",
  },
};

export const PrettyWrap: Story = {
  args: {
    children: "This blockquote should wrap prettily",
    wrap: "pretty",
  },
};

export const BalancedWrap: Story = {
  args: {
    children: "This blockquote should have balanced wrapping",
    wrap: "balance",
  },
};
