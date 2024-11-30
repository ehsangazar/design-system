import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello World",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "bold"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
    trim: {
      control: "select",
      options: ["normal", "start", "end", "both"],
    },
    truncate: {
      control: "boolean",
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap", "pretty", "balance"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};

export const H1: Story = {
  args: {
    as: "h1",
    children: "Heading 1",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    as: "h4",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    as: "h5",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    as: "h6",
    children: "Heading 6",
  },
};
