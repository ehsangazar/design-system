import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
    defaultChecked: {
      control: "boolean",
    },
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
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
};
export const Small: Story = {
  args: {
    size: "1",
  },
};

export const Medium: Story = {
  args: {
    size: "2",
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    size: "3",
  },
};

export const Classic: Story = {
  args: {
    variant: "classic",
  },
};

export const Surface: Story = {
  args: {
    variant: "surface",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    defaultChecked: true,
  },
};

export const HighContrast: Story = {
  args: {
    highContrast: true,
  },
};

export const NoRadius: Story = {
  args: {
    radius: "none",
  },
};

export const SmallRadius: Story = {
  args: {
    radius: "small",
  },
};

export const MediumRadius: Story = {
  args: {
    radius: "medium",
  },
};

export const LargeRadius: Story = {
  args: {
    radius: "large",
  },
};

export const FullRadius: Story = {
  args: {
    radius: "full",
  },
};
