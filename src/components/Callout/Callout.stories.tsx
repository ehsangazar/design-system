import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Callout from "./Callout";
import Link from "../Link/Link";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { COLORS } from "../../constants/COLORS";

interface CalloutContent {
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

const CalloutDemo = (props: CalloutContent) => {
  return (
    <Callout.Root {...props}>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        You will need <Link href="#">admin privileges</Link> to install and
        access this application.
      </Callout.Text>
    </Callout.Root>
  );
};

const meta: Meta<typeof CalloutDemo> = {
  title: "Components/Callout",
  component: CalloutDemo,
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
type Story = StoryObj<typeof CalloutDemo>;

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
