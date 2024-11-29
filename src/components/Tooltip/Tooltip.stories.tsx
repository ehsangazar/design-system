import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import { IconButton } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

interface TooltipContent {
  width: string;
  minWidth: string;
  maxWidth: string;
}

const TooltipDemo = (props: TooltipContent) => {
  return (
    <Tooltip content="Add to library" {...props}>
      <IconButton radius="full">
        <PlusIcon />
      </IconButton>
    </Tooltip>
  );
};

const meta: Meta<typeof TooltipDemo> = {
  title: "Components/Tooltip",
  component: TooltipDemo,
  argTypes: {
    width: {
      control: "text",
    },
    minWidth: {
      control: "text",
    },
    maxWidth: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TooltipDemo>;

export const Default: Story = {
  args: {},
};
export const CustomWidth: Story = {
  args: {
    width: "200px",
  },
};

export const CustomMinWidth: Story = {
  args: {
    minWidth: "150px",
  },
};

export const CustomMaxWidth: Story = {
  args: {
    maxWidth: "300px",
  },
};
