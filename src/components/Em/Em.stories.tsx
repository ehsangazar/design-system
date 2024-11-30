import { Meta, StoryObj } from "@storybook/react";
import Em from "./Em";

const meta: Meta<typeof Em> = {
  title: "Components/Em",
  component: Em,
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
type Story = StoryObj<typeof Em>;

export const Default: Story = {
  args: {
    children: "Em",
  },
};

export const Truncate: Story = {
  args: {
    children: "This is a truncated Em component",
    truncate: true,
  },
};

export const Wrap: Story = {
  args: {
    children: "This is a wrapped Em component",
    wrap: "wrap",
  },
};

export const NoWrap: Story = {
  args: {
    children: "This is a no-wrap Em component",
    wrap: "nowrap",
  },
};

export const Pretty: Story = {
  args: {
    children: "This is a pretty wrapped Em component",
    wrap: "pretty",
  },
};

export const Balance: Story = {
  args: {
    children: "This is a balanced wrapped Em component",
    wrap: "balance",
  },
};
