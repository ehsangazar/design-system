import { Meta, StoryObj } from "@storybook/react";
import Inset from "./Inset";
import Box from "../Box/Box";
import Card from "../Card/Card";
import Text from "../Text/Text";
import Strong from "../Strong/Strong";

const meta: Meta<typeof Inset> = {
  title: "Components/Inset",
  component: Inset,
  argTypes: {
    side: {
      control: "select",
      options: ["all", "x", "y", "top", "bottom", "left", "right"],
    },
    clip: {
      control: "select",
      options: ["border-box", "padding-box"],
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
  },
};

export default meta;
type Story = StoryObj<typeof Inset>;

export const Default: Story = {
  args: {
    side: "all",
    clip: "border-box",
    p: "0",
    children: "Inset",
  },
  render: () => (
    <Box maxWidth="240px">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
        <Text as="p" size="3">
          <Strong>Typography</Strong> is the art and technique of arranging type
          to make written language legible, readable and appealing when
          displayed.
        </Text>
      </Card>
    </Box>
  ),
};
export const AllSides: Story = {
  args: {
    side: "all",
    clip: "border-box",
    p: "0",
    children: "Inset with padding on all sides",
  },
};

export const Horizontal: Story = {
  args: {
    side: "x",
    clip: "border-box",
    px: "0",
    children: "Inset with horizontal padding",
  },
};

export const Vertical: Story = {
  args: {
    side: "y",
    clip: "border-box",
    children: "Inset with vertical padding",
  },
};

export const Top: Story = {
  args: {
    side: "top",
    clip: "border-box",
    children: "Inset with top padding",
  },
};

export const Bottom: Story = {
  args: {
    side: "bottom",
    clip: "border-box",
    children: "Inset with bottom padding",
  },
};

export const Left: Story = {
  args: {
    side: "left",
    clip: "border-box",
    children: "Inset with left padding",
  },
};

export const Right: Story = {
  args: {
    side: "right",
    clip: "border-box",
    children: "Inset with right padding",
  },
};
