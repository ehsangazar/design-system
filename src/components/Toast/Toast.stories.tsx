import { Meta } from "@storybook/react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import { toast } from "react-toastify";

const meta: Meta = {
  title: "Components/Toast",
  component: () => null,
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
  render: () => (
    <Box>
      <Button
        onClick={() => {
          toast("Hello world!");
        }}
      >
        Click me
      </Button>
    </Box>
  ),
};

export const Custom = {
  args: {},
  render: () => (
    <Box>
      <Button
        onClick={() => {
          toast("Hello world!", {
            position: "top-right",
            type: "success",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Click me
      </Button>
    </Box>
  ),
};
