import { Meta, StoryObj } from "@storybook/react";
import InputDropdown from "./InputDropdown";
import Box from "../Box/Box";

const meta: Meta<typeof InputDropdown> = {
  component: InputDropdown,
  argTypes: {
    options: {
      control: {
        type: "object",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    styles: {
      control: {
        type: "object",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    value: {
      control: {
        type: "object",
      },
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
type Story = StoryObj<typeof InputDropdown>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Van illa" },
    ],
  },
  render: (args) => (
    <Box minHeight={"400px"}>
      <InputDropdown {...args} />
    </Box>
  ),
};
