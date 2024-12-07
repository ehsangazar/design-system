import { Meta, StoryObj } from "@storybook/react";
import Flex from "../Flex/Flex";
import FormControl from "./FormControl";
import Input from "../Input/Input";
import Button from "../Button/Button";

const meta: Meta<typeof FormControl> = {
  title: "Components/FormControl",
  component: FormControl,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  args: {
    label: "Name",
    errorMessage: "This field is required",
  },
  render: () => (
    <Flex direction="column" gap="3">
      <FormControl
        label="Name"
        defaultValue={"Freja Johnsen"}
        placeholder="Enter your full name"
        errorMessage="This field is required"
        component={<Input />}
      />
      <FormControl
        label="Email"
        defaultValue={"Enter your email"}
        errorMessage="This field is required"
        component={<Input />}
      />
      <Button type="submit">Submit</Button>
    </Flex>
  ),
};
