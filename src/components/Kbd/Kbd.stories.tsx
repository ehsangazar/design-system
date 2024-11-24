import { Meta, StoryObj } from "@storybook/react";
import Kbd from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Typography/Kbd",
  component: Kbd,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: "Kbd",
  },
};
export const Size1: Story = {
  args: {
    children: "Kbd",
    size: "1",
  },
};

export const Size2: Story = {
  args: {
    children: "Kbd",
    size: "2",
  },
};

export const Size3: Story = {
  args: {
    children: "Kbd",
    size: "3",
  },
};

export const Size4: Story = {
  args: {
    children: "Kbd",
    size: "4",
  },
};

export const Size5: Story = {
  args: {
    children: "Kbd",
    size: "5",
  },
};

export const Size6: Story = {
  args: {
    children: "Kbd",
    size: "6",
  },
};

export const Size7: Story = {
  args: {
    children: "Kbd",
    size: "7",
  },
};

export const Size8: Story = {
  args: {
    children: "Kbd",
    size: "8",
  },
};

export const Size9: Story = {
  args: {
    children: "Kbd",
    size: "9",
  },
};
