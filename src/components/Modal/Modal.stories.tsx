import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import { TextField } from "@radix-ui/themes";

interface ModalContent {
  align: "start" | "center";
  size: "1" | "2" | "3" | "4";
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
}

const ModalDemo = (props: ModalContent) => {
  return (
    <Modal.Root {...props}>
      <Modal.Trigger>
        <Button>Edit profile</Button>
      </Modal.Trigger>

      <Modal.Content maxWidth="450px">
        <Modal.Title>Edit profile</Modal.Title>
        <Modal.Description size="2" mb="4">
          Make changes to your profile.
        </Modal.Description>

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
          <Modal.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Modal.Close>
          <Modal.Close>
            <Button>Save</Button>
          </Modal.Close>
        </Flex>
      </Modal.Content>
    </Modal.Root>
  );
};

const meta: Meta<typeof ModalDemo> = {
  title: "Components/Modal",
  component: ModalDemo,
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
type Story = StoryObj<typeof ModalDemo>;

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
