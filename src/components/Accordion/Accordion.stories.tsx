import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

interface AccordionDemoProps {
  bg?:
    | "gray"
    | "gray-light"
    | "gray-medium"
    | "gray-dark"
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
    | "grass";
}

const AccordionDemo = (props: AccordionDemoProps) => {
  return (
    <Accordion.Root {...props}>
      <Accordion.Item>
        <Accordion.Header>
          Lorem ipsum dolor sit amet consectetur
        </Accordion.Header>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>
          Lorem ipsum dolor sit amet consectetur
        </Accordion.Header>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const meta: Meta<typeof AccordionDemo> = {
  title: "Components/Accordion",
  component: AccordionDemo,
  argTypes: {
    bg: {
      control: "select",
      options: [
        "gray",
        "gray-light",
        "gray-medium",
        "gray-dark",
        "gold",
        "bronze",
        "brown",
        "yellow",
        "amber",
        "orange",
        "tomato",
        "red",
        "ruby",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "iris",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "jade",
        "green",
        "grass",
      ],
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
