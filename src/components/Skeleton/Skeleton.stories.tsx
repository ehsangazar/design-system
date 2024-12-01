import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import { Container } from "@radix-ui/themes";

const SkeletonDemo = () => {
  return (
    <Container size="1">
      <Flex direction="column" gap="3">
        <Text>
          <Skeleton>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque felis tellus, efficitur id convallis a, viverra eget
            libero. Nam magna erat, fringilla sed commodo sed, aliquet nec
            magna.
          </Skeleton>
        </Text>

        <Skeleton>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque felis tellus, efficitur id convallis a, viverra eget
            libero. Nam magna erat, fringilla sed commodo sed, aliquet nec
            magna.
          </Text>
        </Skeleton>
      </Flex>
    </Container>
  );
};

const meta: Meta<typeof SkeletonDemo> = {
  title: "Components/Skeleton",
  component: SkeletonDemo,
  argTypes: {
    loading: {
      control: "boolean",
    },
    width: {
      control: "string",
    },
    minWidth: {
      control: "string",
    },
    maxWidth: {
      control: "string",
    },
    height: {
      control: "string",
    },
    minHeight: {
      control: "string",
    },
    maxHeight: {
      control: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonDemo>;

export const Default: Story = {
  args: {},
};
