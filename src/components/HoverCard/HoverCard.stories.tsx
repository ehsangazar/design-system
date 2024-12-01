import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HoverCard from "./HoverCard";
import Text from "../Text/Text";
import Link from "../Link/Link";
import Avatar from "../Avatar/Avatar";
import Flex from "../Flex/Flex";
import Heading from "../Heading/Heading";
import Box from "../Box/Box";

interface HoverCardContent {
  size: "1" | "2" | "3";
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
}

const HoverCardDemo = (props: HoverCardContent) => {
  return (
    <Text>
      Follow{" "}
      <HoverCard.Root {...props}>
        <HoverCard.Trigger>
          <Link href="https://twitter.com/radix_ui" target="_blank">
            @radix_ui
          </Link>
        </HoverCard.Trigger>
        <HoverCard.Content maxWidth="300px">
          <Flex gap="4">
            <Avatar
              size="3"
              fallback="R"
              radius="full"
              src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            />
            <Box>
              <Heading size="3" as="h3">
                Radix
              </Heading>
              <Text as="div" size="2" color="gray" mb="2">
                @radix_ui
              </Text>
              <Text as="div" size="2">
                React components, icons, and colors for building high-quality,
                accessible UI.
              </Text>
            </Box>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>{" "}
      for updates.
    </Text>
  );
};

const meta: Meta<typeof HoverCardDemo> = {
  title: "Components/HoverCard",
  component: HoverCardDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
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
type Story = StoryObj<typeof HoverCardDemo>;

export const Default: Story = {
  args: {},
};
