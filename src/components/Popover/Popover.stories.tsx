import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Popover from "./Popover";
import Button from "../Button/Button";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Avatar from "../Avatar/Avatar";
import Flex from "../Flex/Flex";
import Box from "../Box/Box";
import { TextArea } from "@radix-ui/themes";
import Text from "../Text/Text";
import Checkbox from "../Checkbox/Checkbox";

interface PopoverContent {
  size: "1" | "2" | "3" | "4";
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
}

const PopoverDemo = (props: PopoverContent) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger>
        <Button variant="soft">
          <ChatBubbleIcon width="16" height="16" />
          Comment
        </Button>
      </Popover.Trigger>
      <Popover.Content width="360px">
        <Flex gap="3">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            fallback="A"
            radius="full"
          />
          <Box flexGrow="1">
            <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
            <Flex gap="3" mt="3" justify="between">
              <Flex align="center" gap="2" asChild>
                <Text as="label" size="2">
                  <Checkbox />
                  <Text>Send to group</Text>
                </Text>
              </Flex>

              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </Flex>
          </Box>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};

const meta: Meta<typeof PopoverDemo> = {
  title: "Components/Popover",
  component: PopoverDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3", "4"],
    },
    width: {
      control: "text",
    },
    minWidth: {
      control: "text",
    },
    maxWidth: {
      control: "text",
    },
    height: {
      control: "text",
    },
    minHeight: {
      control: "text",
    },
    maxHeight: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PopoverDemo>;

export const Default: Story = {
  args: {},
};

export const Size1: Story = {
  args: {
    size: "1",
    width: "200px",
    minWidth: "150px",
    maxWidth: "250px",
    height: "100px",
    minHeight: "80px",
    maxHeight: "120px",
  },
};

export const Size2: Story = {
  args: {
    size: "2",
    width: "300px",
    minWidth: "250px",
    maxWidth: "350px",
    height: "150px",
    minHeight: "120px",
    maxHeight: "180px",
  },
};

export const Size3: Story = {
  args: {
    size: "3",
    width: "400px",
    minWidth: "350px",
    maxWidth: "450px",
    height: "200px",
    minHeight: "180px",
    maxHeight: "220px",
  },
};

export const Size4: Story = {
  args: {
    size: "4",
    width: "500px",
    minWidth: "450px",
    maxWidth: "550px",
    height: "250px",
    minHeight: "220px",
    maxHeight: "280px",
  },
};
