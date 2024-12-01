import { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta: Meta<typeof Container> = {
  component: Container,
  argTypes: {
    children: {
      control: "text",
    },
    display: {
      control: "select",
      options: ["none", "inline", "inline-block", "block"],
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
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
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "Container",
  },
  render: ({ children, ...rest }) => (
    <Container className="bg-blue-500 text-white" {...rest}>
      {children}
    </Container>
  ),
};
export const WithPadding: Story = {
  args: {
    children: "Container with padding",
    p: "4",
  },
};

export const WithMargin: Story = {
  args: {
    children: "Container with margin",
    m: "4",
  },
};

export const WithBackgroundColor: Story = {
  args: {
    children: "Container with background color",
    className: "bg-blue-500",
  },
};

export const WithCustomWidth: Story = {
  args: {
    children: "Container with custom width",
    width: "50%",
  },
};

export const WithFlexGrow: Story = {
  args: {
    children: "Container with flex grow",
    flexGrow: "1",
  },
};

export const WithGridArea: Story = {
  args: {
    children: "Container with grid area",
    gridArea: "header",
  },
};
