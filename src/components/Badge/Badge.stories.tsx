import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["solid", "soft", "surface", "outline"],
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
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};
export const Small: Story = {
  args: {
    children: "Small Badge",
    size: "1",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Badge",
    size: "2",
  },
};

export const Large: Story = {
  args: {
    children: "Large Badge",
    size: "3",
  },
};

export const Solid: Story = {
  args: {
    children: "Solid Badge",
    variant: "solid",
  },
};

export const Soft: Story = {
  args: {
    children: "Soft Badge",
    variant: "soft",
  },
};

export const Surface: Story = {
  args: {
    children: "Surface Badge",
    variant: "surface",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Badge",
    variant: "outline",
  },
};

export const HighContrast: Story = {
  args: {
    children: "High Contrast Badge",
    highContrast: true,
  },
};

export const NoRadius: Story = {
  args: {
    children: "No Radius Badge",
    radius: "none",
  },
};

export const SmallRadius: Story = {
  args: {
    children: "Small Radius Badge",
    radius: "small",
  },
};

export const MediumRadius: Story = {
  args: {
    children: "Medium Radius Badge",
    radius: "medium",
  },
};

export const LargeRadius: Story = {
  args: {
    children: "Large Radius Badge",
    radius: "large",
  },
};

export const FullRadius: Story = {
  args: {
    children: "Full Radius Badge",
    radius: "full",
  },
};
