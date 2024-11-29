import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

interface SelectContent {
  size: "1" | "2" | "3";
}

const SelectDemo = (props: SelectContent) => {
  return (
    <Select.Root defaultValue="apple" {...props}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="grape" disabled>
            Grape
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

const meta: Meta<typeof SelectDemo> = {
  title: "Components/Select",
  component: SelectDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDemo>;

export const Default: Story = {
  args: {
    size: "3",
  },
};
