import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { COLORS } from "../../constants/COLORS";
import { expect } from "@storybook/test";
import { jest } from "@storybook/jest";
import { within } from "@testing-library/react";

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
      options: ["xs", "sm", "md", "lg", "xl"],
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
      options: COLORS,
    },
    onClick: {
      action: "clicked",
    },
    w: {
      control: "text",
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

const mockClickHandler = jest.fn();
export const Default: Story = {
  args: {
    children: "Button",
    onClick: mockClickHandler,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    button?.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(mockClickHandler).toHaveBeenCalled();
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "xl",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "xs",
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
