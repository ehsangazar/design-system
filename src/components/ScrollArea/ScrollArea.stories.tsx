import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ScrollArea from "./ScrollArea";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";

interface ScrollAreaContent {
  size: "1" | "2" | "3";
  radius: "none" | "small" | "medium" | "large" | "full";
  scrollbars: "vertical" | "horizontal" | "both";
}

const ScrollAreaDemo = (props: ScrollAreaContent) => {
  return (
    <ScrollArea type="always" {...props} className="h-64">
      <Box p="2" pr="8">
        <Heading size="4" mb="2" trim="start">
          Principles of the typographic craft
        </Heading>
        <Flex direction="column" gap="4">
          <Text as="p">
            Three fundamental aspects of typography are legibility, readability,
            and aesthetics. Although in a non-technical sense “legible” and
            “readable” are often used synonymously, typographically they are
            separate but related concepts.
          </Text>

          <Text as="p">
            Legibility describes how easily individual characters can be
            distinguished from one another. It is described by Walter Tracy as
            “the quality of being decipherable and recognisable”. For instance,
            if a “b” and an “h”, or a “3” and an “8”, are difficult to
            distinguish at small sizes, this is a problem of legibility.
          </Text>

          <Text as="p">
            Typographers are concerned with legibility insofar as it is their
            job to select the correct font to use. Brush Script is an example of
            a font containing many characters that might be difficult to
            distinguish. The selection of cases influences the legibility of
            typography because using only uppercase letters (all-caps) reduces
            legibility.
          </Text>

          <Text as="p">
            Typographers are concerned with legibility insofar as it is their
            job to select the correct font to use. Brush Script is an example of
            a font containing many characters that might be difficult to
            distinguish. The selection of cases influences the legibility of
            typography because using only uppercase letters (all-caps) reduces
            legibility.
          </Text>

          <Text as="p">
            Typographers are concerned with legibility insofar as it is their
            job to select the correct font to use. Brush Script is an example of
            a font containing many characters that might be difficult to
            distinguish. The selection of cases influences the legibility of
            typography because using only uppercase letters (all-caps) reduces
            legibility.
          </Text>
        </Flex>
      </Box>
    </ScrollArea>
  );
};

const meta: Meta<typeof ScrollAreaDemo> = {
  title: "Components/ScrollArea",
  component: ScrollAreaDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    scrollbars: {
      control: "select",
      options: ["vertical", "horizontal", "both"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollAreaDemo>;

export const Default: Story = {
  args: {
    size: "1",
    radius: "none",
    scrollbars: "vertical",
  },
};
