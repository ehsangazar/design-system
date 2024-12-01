import React from "react";
import { Meta } from "@storybook/react";
import Card from "./Card";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import Text from "../Text/Text";
import { Inset } from "@radix-ui/themes";
import Strong from "../Strong/Strong";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5"],
    },
    variant: {
      control: "select",
      options: ["surface", "classic", "ghost"],
    },
  },
};

export default meta;

export const Default = {
  args: {},
  render: () => (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              Engineering
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  ),
};

export const NoImage = {
  args: {},
  render: () => (
    <Box maxWidth="350px">
      <Card asChild>
        <a href="#">
          <Text as="div" size="2" weight="bold">
            Quick start
          </Text>
          <Text as="div" color="gray" size="2">
            Start building your next project in minutes
          </Text>
        </a>
      </Card>
    </Box>
  ),
};

export const Size = {
  args: {},
  render: () => (
    <Flex gap="3" direction="column">
      <Box width="350px">
        <Card size="1">
          <Flex gap="3" align="center">
            <Avatar size="3" radius="full" fallback="T" color="indigo" />
            <Box>
              <Text as="div" size="2" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" size="2" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>

      <Box width="400px">
        <Card size="2">
          <Flex gap="4" align="center">
            <Avatar size="4" radius="full" fallback="T" color="indigo" />
            <Box>
              <Text as="div" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>

      <Box width="500px">
        <Card size="3">
          <Flex gap="4" align="center">
            <Avatar size="5" radius="full" fallback="T" color="indigo" />
            <Box>
              <Text as="div" size="4" weight="bold">
                Teodros Girmay
              </Text>
              <Text as="div" size="4" color="gray">
                Engineering
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </Flex>
  ),
};

export const InsetContent = {
  args: {},
  render: () => (
    <Box maxWidth="240px">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            className="display-block object-cover w-full h-140 bg-gray-5"
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
