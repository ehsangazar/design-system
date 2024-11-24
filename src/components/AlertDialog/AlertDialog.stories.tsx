import { Meta, StoryObj } from "@storybook/react";
import AlertDialog from "./AlertDialog";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import { within } from "@testing-library/react";
import { expect, jest } from "@storybook/jest";

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

const mockClickSuccessHandler = jest.fn();
const mockClickCancelHandler = jest.fn();

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
            <Button
              data-testid="button-cancel"
              variant="soft"
              color="gray"
              onClick={mockClickCancelHandler}
            >
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              data-testid="button-action"
              variant="solid"
              color="red"
              onClick={mockClickSuccessHandler}
            >
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
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    button.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const actionButton = document.querySelector(
      "[data-testid='button-action']"
    ) as HTMLElement;
    actionButton?.click();

    expect(mockClickSuccessHandler).toHaveBeenCalled();

    button.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const cancelButton = document.querySelector(
      "[data-testid='button-cancel']"
    ) as HTMLElement;

    cancelButton?.click();

    expect(mockClickCancelHandler).toHaveBeenCalled();
  },
};
