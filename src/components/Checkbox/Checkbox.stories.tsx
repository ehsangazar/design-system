import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { COLORS } from "../../constants/COLORS";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import { within } from "@testing-library/react";
import { expect } from "@storybook/jest";

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
    checked: {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    const label = canvas.getByText("Agree to Terms and Conditions");
    expect(label).toBeInTheDocument();

    checkbox.click();

    await new Promise((r) => setTimeout(r, 1000));

    expect(checkbox).toHaveAttribute("data-state", "checked");
  },
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
