import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import { ChevronDownIcon } from "@radix-ui/themes";

interface AccordionDemoProps {
  type: "single";
  value: string;
  defaultValue: string;
  onValueChange: (value: string) => void;
  collapsible: boolean;
  disabled: boolean;
  orientation: "horizontal" | "vertical";
}

const AccordionDemo = (props: AccordionDemoProps) => {
  return (
    <Accordion.Root {...props}>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger">
            Lorem ipsum dolor sit amet consectetur
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger className="AccordionTrigger">
            Lorem ipsum dolor sit amet consectetur
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const meta: Meta<typeof AccordionDemo> = {
  title: "Components/Accordion",
  component: AccordionDemo,
  argTypes: {
    value: {
      control: "text",
    },
    defaultValue: {
      control: "text",
    },
    onValueChange: {
      action: "onValueChange",
    },
    collapsible: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionDemo>;

export const Default: Story = {
  args: {
    type: "single",
  },
};
