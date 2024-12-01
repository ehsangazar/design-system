import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import Text from "../Text/Text";
import Box from "../Box/Box";

const TabsDemo = () => {
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="account">
          <Text size="2">Make changes to your account.</Text>
        </Tabs.Content>

        <Tabs.Content value="documents">
          <Text size="2">Access and update your documents.</Text>
        </Tabs.Content>

        <Tabs.Content value="settings">
          <Text size="2">Edit your profile or update contact information.</Text>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

const meta: Meta<typeof TabsDemo> = {
  title: "Components/Tabs",
  component: TabsDemo,
};

export default meta;
type Story = StoryObj<typeof TabsDemo>;

export const Default: Story = {
  args: {},
};
