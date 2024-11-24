import { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Link> = {
  title: "Typography/Link",
  component: Link,
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
    trim: {
      control: "select",
      options: ["normal", "start", "end", "both"],
    },
    truncate: {
      control: "boolean",
    },
    underline: {
      control: "select",
      options: ["auto", "always", "hover", "none"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
      control: "boolean",
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap", "pretty", "balance"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Link",
  },
};
export const LargeBoldLink: Story = {
  args: {
    children: "Large Bold Link",
    size: "4",
    weight: "bold",
  },
};

export const UnderlinedLink: Story = {
  args: {
    children: "Underlined Link",
    underline: "always",
  },
};

export const TruncatedLink: Story = {
  args: {
    children: "This is a very long link that will be truncated",
    truncate: true,
  },
};

export const HighContrastLink: Story = {
  args: {
    children: "High Contrast Link",
    highContrast: true,
  },
};

export const ColoredLink: Story = {
  args: {
    children: "Colored Link",
    color: "blue",
  },
};

export const WrappedLink: Story = {
  args: {
    children: "This is a wrapped link",
    wrap: "wrap",
  },
};

export const PrettyWrappedLink: Story = {
  args: {
    children: "This is a pretty wrapped link",
    wrap: "pretty",
  },
};

export const BalancedWrappedLink: Story = {
  args: {
    children: "This is a balanced wrapped link",
    wrap: "balance",
  },
};
