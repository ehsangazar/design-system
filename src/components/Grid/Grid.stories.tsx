import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Grid from "./Grid";
import Box from "../Box/Box";

const meta: Meta<typeof Grid> = {
  component: Grid,
  argTypes: {
    children: {
      control: "text",
    },
    display: {
      control: "select",
      options: ["none", "inline-grid", "grid"],
    },
    areas: {
      control: "text",
    },
    columns: {
      control: "text",
    },
    rows: {
      control: "text",
    },
    flow: {
      control: "select",
      options: ["row", "column", "dense", "row-dense", "column-dense"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "baseline", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between"],
    },
    gap: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    gapX: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    gapY: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
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
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    columns: "3",
    gap: "3",
    rows: "repeat(2, 64px)",
    width: "auto",
  },
  render: ({ ...rest }) => (
    <Grid gap="3" {...rest}>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
    </Grid>
  ),
};

export const WithPadding: Story = {
  args: {
    columns: "3",
    p: "4",
    gap: "1",
    rows: "repeat(2, 64px)",
  },
  render: ({ ...rest }) => (
    <Grid {...rest}>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
    </Grid>
  ),
};

export const WithMargin: Story = {
  args: {
    columns: "2",
    m: "4",
    gap: "5",
    rows: "repeat(2, 64px)",
  },
  render: ({ ...rest }) => (
    <Grid {...rest}>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
    </Grid>
  ),
};

export const WithCustomWidth: Story = {
  args: {
    columns: "1",
    width: "50%",
    gap: "3",
    rows: "repeat(2, 64px)",
  },
  render: ({ ...rest }) => (
    <Grid {...rest}>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
      <Box width="100%" height="100%" className="bg-blue-500"></Box>
    </Grid>
  ),
};
