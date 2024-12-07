import { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import Link from "../Link/Link";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../constants/COLORS";

interface AlertContent {
  size?: "1" | "2" | "3";
  variant?: "soft" | "surface" | "outline";
  color?:
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass";
  highContrast?: boolean;
}

const AlertDemo = (props: AlertContent) => {
  return (
    <Alert.Root {...props}>
      <Alert.Icon>
        <InfoCircledIcon />
      </Alert.Icon>
      <Alert.Text>
        You will need <Link href="#">admin privileges</Link> to install and
        access this application.
      </Alert.Text>
    </Alert.Root>
  );
};

const meta: Meta<typeof AlertDemo> = {
  title: "Components/Alert",
  component: AlertDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["soft", "surface", "outline"],
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
type Story = StoryObj<typeof AlertDemo>;

export const Default: Story = {
  args: {},
};

export const SoftVariant: Story = {
  args: {
    variant: "soft",
    color: "blue",
    size: "2",
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: "outline",
    color: "red",
    size: "3",
    highContrast: true,
  },
};

export const SurfaceVariant: Story = {
  args: {
    variant: "surface",
    color: "green",
    size: "1",
  },
};
