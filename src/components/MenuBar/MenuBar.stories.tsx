import { Meta } from "@storybook/react";
import MenuBar from "./MenuBar";
import Box from "../Box/Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Button from "../Button/Button";

const meta: Meta<typeof MenuBar.Root> = {
  title: "Components/MenuBar",
  component: MenuBar.Root,
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
  render: () => (
    <Box
      style={{
        background: "var(--accent-a3)",
      }}
    >
      <MenuBar.Root>
        <MenuBar.Item>
          <Button variant="soft">
            <a href="/">Home</a>
          </Button>
        </MenuBar.Item>
        <MenuBar.Item>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                Options
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </MenuBar.Item>
        <MenuBar.Item>
          <Button variant="soft">
            <a href="/">About</a>
          </Button>
        </MenuBar.Item>
        <MenuBar.Item>
          <Button variant="soft">
            <a href="/">About</a>
          </Button>
        </MenuBar.Item>
        <MenuBar.Item isActive>
          <Button variant="soft" color="red">
            <a href="/">Active</a>
          </Button>
        </MenuBar.Item>
        <MenuBar.Item>
          <Button variant="soft">
            <a href="/">About</a>
          </Button>
        </MenuBar.Item>
        <MenuBar.Item>
          <Button variant="soft">
            <a href="/">About</a>
          </Button>
        </MenuBar.Item>
      </MenuBar.Root>
    </Box>
  ),
};
