import { Meta, StoryObj } from "@storybook/react";
import List from "./List";
import Box from "../Box/Box";
import Paragraph from "../Heading/Paragraph";

const LISTDemo = () => {
  return (
    <Box>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
      <List.UL>
        <List.LI>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </List.LI>
        <List.LI>Lorem ipsum dolor sit amet consectetur</List.LI>
        <List.LI>Lorem ipsum dolor sit amet consectetur</List.LI>
      </List.UL>

      <List.OL>
        <List.LI>Lorem ipsum dolor sit amet consectetur</List.LI>
        <List.LI>Lorem ipsum dolor sit amet consectetur</List.LI>
        <List.LI>Lorem ipsum dolor sit amet consectetur</List.LI>
      </List.OL>
    </Box>
  );
};

const meta: Meta<typeof LISTDemo> = {
  title: "Components/LIST",
  component: LISTDemo,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LISTDemo>;

export const Default: Story = {
  args: {},
};
