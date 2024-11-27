import { Meta, StoryObj } from "@storybook/react";
import SegmentedControl from "./SegmentedControl";

interface SegmentedControlContent {
  size: "1" | "2" | "3";
  variant: "classic" | "surface";
  radius: "none" | "small" | "medium" | "large" | "full";
}

const SegmentedControlDemo = (props: SegmentedControlContent) => {
  return (
    <SegmentedControl.Root defaultValue="inbox" {...props}>
      <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
      <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
      <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};

const meta: Meta<typeof SegmentedControlDemo> = {
  title: "Components/SegmentedControl",
  component: SegmentedControlDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["surface", "classic"],
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControlDemo>;

export const Default: Story = {
  args: {
    size: "3",
    variant: "surface",
    radius: "none",
  },
};
