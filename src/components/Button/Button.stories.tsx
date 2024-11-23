import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["classic", "solid", "soft", "surface", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4"],
    },
    highContrast: {
      control: "boolean",
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    loading: {
      control: "boolean",
    },
    color: {
      control: "select",
      options: [
        "gray",
        "gold",
        "bronze",
        "brown",
        "yellow",
        "amber",
        "orange",
        "tomato",
        "red",
        "ruby",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "iris",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "jade",
        "green",
        "grass",
        "lime",
        "mint",
        "sky",
      ],
    },
    onClick: {
      action: "clicked",
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector("button");
    button?.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "4",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "3",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "2",
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    loading: true,
  },
};

export const HighContrast: Story = {
  args: {
    children: "Button",
    highContrast: true,
  },
};

export const Classic: Story = {
  args: {
    children: "Button",
    variant: "classic",
  },
};

export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
  },
};

export const Soft: Story = {
  args: {
    children: "Button",
    variant: "soft",
  },
};

export const Surface: Story = {
  args: {
    children: "Button",
    variant: "surface",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};
