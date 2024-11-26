import { Meta, StoryObj } from "@storybook/react";
import { COLORS } from "../../constants/COLORS";
import IconButton from "./IconButton";
import { within } from "@storybook/test";
import { expect, jest } from "@storybook/jest";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2"],
    },
    variant: {
      control: "select",
      options: ["solid", "soft"],
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
type Story = StoryObj<typeof IconButton>;

const mockClickHandler = jest.fn();
export const Default: Story = {
  args: {
    size: "3",
    variant: "solid",
    color: "blue",
    onClick: mockClickHandler,
    children: <MagnifyingGlassIcon width="20" height="20" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const IconButton = canvas.getByRole("button");
    IconButton?.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(mockClickHandler).toHaveBeenCalled();
  },
};
export const SmallSolid: Story = {
  args: {
    size: "1",
    variant: "solid",
    color: "blue",
    children: <MagnifyingGlassIcon width="15" height="15" />,
    onClick: mockClickHandler,
  },
};

export const LargeSolid: Story = {
  args: {
    size: "2",
    variant: "solid",
    color: "blue",
    children: <MagnifyingGlassIcon width="25" height="25" />,
    onClick: mockClickHandler,
  },
};

export const SmallSoft: Story = {
  args: {
    size: "1",
    variant: "soft",
    color: "blue",
    children: <MagnifyingGlassIcon width="15" height="15" />,
    onClick: mockClickHandler,
  },
};

export const LargeSoft: Story = {
  args: {
    size: "2",
    variant: "soft",
    color: "blue",
    children: <MagnifyingGlassIcon width="25" height="25" />,
    onClick: mockClickHandler,
  },
};
