import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import { TextField } from "@radix-ui/themes";

interface DialogContent {
  align: "start" | "center";
  size: "1" | "2" | "3" | "4";
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
}

const DialogDemo = (props: DialogContent) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              defaultValue="freja@example.com"
              placeholder="Enter your email"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const meta: Meta<typeof DialogDemo> = {
  title: "Components/Dialog",
  component: DialogDemo,
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center"],
    },
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
type Story = StoryObj<typeof DialogDemo>;

export const Default: Story = {
  args: {
    align: "center",
    size: "3",
    width: "100%",
    minWidth: "0",
    maxWidth: "450px",
    height: "auto",
  },
};
