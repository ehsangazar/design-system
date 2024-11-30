import { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

const meta: Meta<typeof Box> = {
  component: Box,
  argTypes: {
    children: {
      control: "text",
    },
    display: {
      control: "select",
      options: ["none", "inline", "inline-block", "block"],
    },
    as: {
      control: "select",
      options: ["div", "span"],
    },
    p: {
      control: "text",
    },
    px: {
      control: "text",
    },
    py: {
      control: "text",
    },
    pt: {
      control: "text",
    },
    pr: {
      control: "text",
    },
    pb: {
      control: "text",
    },
    pl: {
      control: "text",
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
    position: {
      control: "text",
      options: ["static", "relative", "absolute", "fixed", "sticky"],
    },
    inset: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
    },
    top: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
    },
    right: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
    },
    bottom: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
    },
    left: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
    },
    overflow: {
      control: "select",
      options: ["visible", "hidden", "clip", "scroll", "auto"],
    },
    overflowX: {
      control: "select",
      options: ["visible", "hidden", "clip", "scroll", "auto"],
    },
    overflowY: {
      control: "select",
      options: ["visible", "hidden", "clip", "scroll", "auto"],
    },
    flexBasis: {
      control: "text",
    },
    flexShrink: {
      control: "select",
      options: ["0", "1"],
    },
    flexGrow: {
      control: "select",
      options: ["0", "1"],
    },
    gridArea: {
      control: "text",
    },
    gridColumn: {
      control: "text",
    },
    gridRow: {
      control: "text",
    },
    gridColumnStart: {
      control: "text",
    },
    gridColumnEnd: {
      control: "text",
    },
    gridRowStart: {
      control: "text",
    },
    gridRowEnd: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Another description, overriding the comments",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "Box",
  },
  render: ({ children, ...rest }) => (
    <Box className="bg-blue-500 text-white" {...rest}>
      {children}
    </Box>
  ),
};
export const WithPadding: Story = {
  args: {
    children: "Box with padding",
    p: "4",
  },
  render: ({ children, ...rest }) => (
    <Box className={`bg-blue-500 text-white`} {...rest}>
      {children}
    </Box>
  ),
};

export const WithMargin: Story = {
  args: {
    children: "Box with margin",
    m: "4",
  },
  render: ({ children, ...rest }) => (
    <Box className={`bg-blue-500 text-white`} {...rest}>
      {children}
    </Box>
  ),
};

export const WithCustomWidth: Story = {
  args: {
    children: "Box with custom width",
    width: "50%",
  },
  render: ({ children, ...rest }) => (
    <Box className="bg-blue-500 text-white" {...rest}>
      {children}
    </Box>
  ),
};
