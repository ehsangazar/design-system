import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { COLORS } from "../../constants/COLORS";
import DataList from "./DataList";
import Badge from "../Badge/Badge";
import Flex from "../Flex/Flex";
import Code from "../Code/Code";
import { IconButton, Link } from "@radix-ui/themes";
import { CopyIcon } from "@radix-ui/react-icons";

interface DataListContent {
  size: "1" | "2" | "3";
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
  orientation: "horizontal" | "vertical";
}

const DataListDemo = (props: DataListContent) => {
  return (
    <DataList.Root {...props}>
      <DataList.Item>
        <DataList.Label minWidth="88px">Status</DataList.Label>
        <DataList.Value>
          <Badge color="jade" variant="soft" radius="full">
            Authorized
          </Badge>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">ID</DataList.Label>
        <DataList.Value>
          <Flex align="center" gap="2">
            <Code variant="ghost">u_2J89JSA4GJ</Code>
            <IconButton
              size="1"
              aria-label="Copy value"
              color="gray"
              variant="ghost"
            >
              <CopyIcon />
            </IconButton>
          </Flex>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Name</DataList.Label>
        <DataList.Value>Vlad Moroz</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Email</DataList.Label>
        <DataList.Value>
          <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Company</DataList.Label>
        <DataList.Value>
          <Link target="_blank" href="https://workos.com">
            WorkOS
          </Link>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
};

// trim "normal" | "start" | "end" | "both"

const meta: Meta<typeof DataListDemo> = {
  title: "Components/DataList",
  component: DataListDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataListDemo>;

export const Default: Story = {
  args: {
    size: "2",
    color: "red",
    orientation: "horizontal",
  },
};
