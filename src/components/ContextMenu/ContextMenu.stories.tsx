import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ContextMenu from "./ContextMenu";
import { COLORS } from "../../constants/COLORS";
import Box from "../Box/Box";
import Text from "../Text/Text";

interface ContextMenuContent {
  size: "1" | "2";
  variant: "solid" | "soft";
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
  highContrast: boolean;
  columns: { initial: string; sm: string };
  gap: { initial: string; sm: string };
}

const ContextMenuDemo = (props: ContextMenuContent) => {
  return (
    <ContextMenu.Root {...props}>
      <ContextMenu.Trigger>
        <Box className="p-2 rounded-md bg-gray-200 h-100 cursor-pointer">
          <Text>Right-click me</Text>
        </Box>
      </ContextMenu.Trigger>
      <ContextMenu.Content className="bg-white">
        <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Move to project…</ContextMenu.Item>
            <ContextMenu.Item>Move to folder…</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Advanced options…</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />
        <ContextMenu.Item>Share</ContextMenu.Item>
        <ContextMenu.Item>Add to favorites</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
};

const meta: Meta<typeof ContextMenuDemo> = {
  title: "Components/ContextMenu",
  component: ContextMenuDemo,
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
type Story = StoryObj<typeof ContextMenuDemo>;

export const Default: Story = {
  args: {
    size: "2",
    color: "red",
    highContrast: false,
  },
};
