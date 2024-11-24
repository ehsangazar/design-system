import { Meta, StoryObj } from "@storybook/react";
import AlertDialog from "./AlertDialog";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import { expect } from "@storybook/test";

interface AlertDialogContent {
  align?: "start" | "center";
  size?: "1" | "2" | "3" | "4";
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}

const AlertDialogDemo = (props: AlertDialogContent) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Revoke access</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content {...props}>
        <AlertDialog.Title>Revoke access</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This application will no longer be accessible and any
          existing sessions will be expired.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              Revoke access
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

const meta: Meta<typeof AlertDialogDemo> = {
  title: "Components/AlertDialog",
  component: AlertDialogDemo,
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
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {},

  play: async ({ canvasElement }) => {
    const triggerButton = (await canvasElement.querySelector(
      "button"
    )) as HTMLButtonElement;
    triggerButton?.click();

    const cancelButton = (await canvasElement.querySelector(
      "button:last-child"
    )) as HTMLButtonElement;
    cancelButton?.click();

    expect(canvasElement).not.toBeNull();

    triggerButton?.click();

    const actionButton = (await canvasElement.querySelector(
      "button:last-child"
    )) as HTMLButtonElement;

    actionButton?.click();
  },
};
