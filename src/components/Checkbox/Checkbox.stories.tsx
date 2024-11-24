import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { COLORS } from "../../constants/COLORS";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
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
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    size: "2",
    variant: "classic",
    color: "gray",
  },
  render: (props) => (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox {...props} />
        Agree to Terms and Conditions
      </Flex>
    </Text>
  ),
};

export const Surface: Story = {
  args: {
    size: "2",
    variant: "surface",
    color: "red",
  },
  render: (props) => (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox {...props} />
        Agree to Terms and Conditions
      </Flex>
    </Text>
  ),
};

export const Soft: Story = {
  args: {
    size: "2",
    variant: "soft",
    color: "blue",
  },
  render: (props) => (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox {...props} />
        Agree to Terms and Conditions
      </Flex>
    </Text>
  ),
};
