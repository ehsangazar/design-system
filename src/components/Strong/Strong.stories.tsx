import { Meta, StoryObj } from "@storybook/react";
import Strong from "./Strong";

const meta: Meta<typeof Strong> = {
  title: "Components/Strong",
  component: Strong,
  argTypes: {
    children: {
      control: "text",
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
type Story = StoryObj<typeof Strong>;

export const Default: Story = {
  args: {
    children: "Strong",
  },
};
export const Truncate: Story = {
  args: {
    children: "This is a long text that should be truncated",
    truncate: true,
  },
};

export const Wrap: Story = {
  args: {
    children: "This text should wrap according to the selected option",
    wrap: "wrap",
  },
};

export const NoWrap: Story = {
  args: {
    children: "This text should not wrap",
    wrap: "nowrap",
  },
};

export const PrettyWrap: Story = {
  args: {
    children: "This text should wrap prettily",
    wrap: "pretty",
  },
};

export const BalanceWrap: Story = {
  args: {
    children: "This text should balance wrap",
    wrap: "balance",
  },
};
