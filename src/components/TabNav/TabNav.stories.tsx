import { Meta, StoryObj } from "@storybook/react";
import TabNav from "./TabNav";
import { COLORS } from "../../constants/COLORS";

interface TabNavContent {
  size: "1" | "2";
  wrap: "nowrap" | "wrap" | "wrap-reverse";
  justify: "start" | "center" | "end";
  highContrast: boolean;
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
}

const TabNavDemo = (props: TabNavContent) => {
  return (
    <TabNav.Root {...props}>
      <TabNav.Link href="#" active>
        Account
      </TabNav.Link>
      <TabNav.Link href="#">Documents</TabNav.Link>
      <TabNav.Link href="#">Settings</TabNav.Link>
    </TabNav.Root>
  );
};

const meta: Meta<typeof TabNavDemo> = {
  title: "Components/TabNav",
  component: TabNavDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2"],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end"],
    },
    highContrast: {
      control: "boolean",
    },
    color: {
      control: "select",
      options: COLORS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabNavDemo>;

export const Default: Story = {
  args: {},
};
export const HighContrast: Story = {
  args: {
    highContrast: true,
  },
};

export const Wrapped: Story = {
  args: {
    wrap: "wrap",
  },
};

export const Centered: Story = {
  args: {
    justify: "center",
  },
};

export const CustomColor: Story = {
  args: {
    color: "blue",
  },
};
