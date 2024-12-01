import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";
import { COLORS } from "../../constants/COLORS";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";

const meta: Meta<typeof Radio> = {
  component: Radio,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["classic", "surface", "soft"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
  render: (props) => (
    <Flex align="start" direction="column" gap="1">
      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" {...props} />
          Default
        </Text>
      </Flex>

      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" {...props} />
          Comfortable
        </Text>
      </Flex>

      <Flex asChild gap="2">
        <Text as="label" size="2">
          <Radio name="example" {...props} />
          Compact
        </Text>
      </Flex>
    </Flex>
  ),
};
export const SmallClassic: Story = {
  args: {
    size: "1",
    variant: "classic",
    color: "blue",
    highContrast: false,
  },
};

export const MediumSurface: Story = {
  args: {
    size: "2",
    variant: "surface",
    color: "green",
    highContrast: true,
  },
};

export const LargeSoft: Story = {
  args: {
    size: "3",
    variant: "soft",
    color: "red",
    highContrast: false,
  },
};
