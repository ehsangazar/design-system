import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    children: {
      control: "text",
    },
    as: {
      control: "select",
      options: ["span", "div", "label", "p"],
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
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    size: "3",
  },
};

export const Span: Story = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    as: "span",
    size: "3",
  },
};

export const Div: Story = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    as: "div",
    size: "3",
  },
};

export const Label: Story = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    as: "label",
    size: "2",
    weight: "bold",
  },
};
