import { Meta, StoryObj } from "@storybook/react";
import ImageLazy from "./ImageLazy";

const meta: Meta<typeof ImageLazy> = {
  component: ImageLazy,
  argTypes: {
    src: {
      control: "text",
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    fallbackSrc: {
      control: "text",
    },
    defaultIsVisible: {
      control: "boolean",
    },
    alt: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "ImageLazy",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageLazy>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/600",
  },
};
