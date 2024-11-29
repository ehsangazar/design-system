import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    loading: {
      control: "boolean",
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
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
export const Small: Story = {
  args: {
    size: "1",
    loading: true,
  },
};

export const Medium: Story = {
  args: {
    size: "2",
    loading: true,
  },
};

export const Large: Story = {
  args: {
    size: "3",
    loading: true,
  },
};

export const NotLoading: Story = {
  args: {
    size: "2",
    loading: false,
  },
};
