import { Meta, StoryObj } from "@storybook/react";
import Code from "./Code";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Code> = {
  component: Code,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    variant: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost"],
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
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: "Code",
  },
};
export const Large: Story = {
  args: {
    children: "Large Code",
    size: "9",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Code",
    size: "5",
  },
};

export const Small: Story = {
  args: {
    children: "Small Code",
    size: "1",
  },
};

export const Solid: Story = {
  args: {
    children: "Solid Code",
    variant: "solid",
  },
};

export const Soft: Story = {
  args: {
    children: "Soft Code",
    variant: "soft",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Code",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Code",
    variant: "ghost",
  },
};

export const LightWeight: Story = {
  args: {
    children: "Light Weight Code",
    weight: "light",
  },
};

export const RegularWeight: Story = {
  args: {
    children: "Regular Weight Code",
    weight: "regular",
  },
};

export const MediumWeight: Story = {
  args: {
    children: "Medium Weight Code",
    weight: "medium",
  },
};

export const BoldWeight: Story = {
  args: {
    children: "Bold Weight Code",
    weight: "bold",
  },
};

export const HighContrast: Story = {
  args: {
    children: "High Contrast Code",
    highContrast: true,
  },
};

export const Truncate: Story = {
  args: {
    children: "Truncate Code",
    truncate: true,
  },
};

export const Wrap: Story = {
  args: {
    children: "Wrap Code",
    wrap: "wrap",
  },
};

export const NoWrap: Story = {
  args: {
    children: "No Wrap Code",
    wrap: "nowrap",
  },
};

export const PrettyWrap: Story = {
  args: {
    children: "Pretty Wrap Code",
    wrap: "pretty",
  },
};

export const BalanceWrap: Story = {
  args: {
    children: "Balance Wrap Code",
    wrap: "balance",
  },
};
