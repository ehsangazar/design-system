import { Meta } from "@storybook/react";
import Form from "./Form";
import Box from "../../components/Box/Box";

const meta: Meta<typeof Form> = {
  title: "Containers/Form",
  component: Form,
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
  render: () => (
    <Box>
      <Form />
    </Box>
  ),
};
