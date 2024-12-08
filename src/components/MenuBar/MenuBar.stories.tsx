import { Meta } from "@storybook/react";
import MenuBar from "./MenuBar";
import Box from "../Box/Box";

const meta: Meta<typeof MenuBar> = {
  title: "Components/MenuBar",
  component: MenuBar.Root,
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
  render: () => (
    <Box>
      <MenuBar.Root></MenuBar.Root>
    </Box>
  ),
};
