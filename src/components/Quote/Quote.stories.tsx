import { Meta, StoryObj } from "@storybook/react";
import Quote from "./Quote";

const meta: Meta<typeof Quote> = {
  title: "Components/Quote",
  component: Quote,
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
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    children: "Quote",
  },
};
export const Truncated: Story = {
  args: {
    children: "This is a very long quote that should be truncated.",
    truncate: true,
  },
};

export const Wrapped: Story = {
  args: {
    children:
      "This is a quote that should wrap according to the selected option.",
    wrap: "wrap",
  },
};

export const NoWrap: Story = {
  args: {
    children: "This is a quote that should not wrap.",
    wrap: "nowrap",
  },
};

export const PrettyWrap: Story = {
  args: {
    children: "This is a quote that should wrap prettily.",
    wrap: "pretty",
  },
};

export const BalancedWrap: Story = {
  args: {
    children: "This is a quote that should have balanced wrapping.",
    wrap: "balance",
  },
};
