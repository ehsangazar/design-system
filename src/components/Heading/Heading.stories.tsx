import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";
import { COLORS } from "../../constants/COLORS";
import Heading1 from "./Heading1";
import { Flex } from "@radix-ui/themes";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Heading4 from "./Heading4";
import Heading5 from "./Heading5";
import Heading6 from "./Heading6";
import Paragraph from "./Paragraph";
import Small from "./Small";
import Label from "./Label";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Hello World",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "bold"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
    trim: {
      control: "select",
      options: ["normal", "start", "end", "both"],
    },
    truncate: {
      control: "boolean",
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap", "pretty", "balance"],
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
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
  render: () => (
    <Flex direction={"column"}>
      <Heading1>Heading 1</Heading1>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
        assumenda!
      </Paragraph>
      <Heading2>Heading 2</Heading2>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
        assumenda!
      </Paragraph>
      <Heading3>Heading 3</Heading3>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
        assumenda!
      </Paragraph>
      <Heading4>Heading 4</Heading4>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
        assumenda!
      </Paragraph>
      <Heading5>Heading 5</Heading5>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
        assumenda!
      </Paragraph>
      <Heading6>Heading 6</Heading6>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
        assumenda!
      </Paragraph>
      <Small>Small</Small>
      <Label>Label</Label>
    </Flex>
  ),
};

export const H1: Story = {
  args: {
    as: "h1",
    children: "Heading 1",
  },
  render: () => <Heading1>Heading 1</Heading1>,
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    as: "h4",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    as: "h5",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    as: "h6",
    children: "Heading 6",
  },
};
