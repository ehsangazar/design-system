import { Meta, StoryObj } from "@storybook/react";
import InputTextArea from "./InputTextArea";
import { COLORS } from "../../constants/COLORS";

const meta: Meta<typeof InputTextArea> = {
  component: InputTextArea,
  argTypes: {
    variant: {
      control: "select",
      options: ["classic", "surface", "soft"],
    },
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    placeholder: {
      control: "text",
    },
    color: {
      control: "select",
      options: COLORS,
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Another description, overriding the comments",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputTextArea>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
  },
};
export const Classic: Story = {
  args: {
    variant: "classic",
    placeholder: "Classic variant",
  },
};

export const Surface: Story = {
  args: {
    variant: "surface",
    placeholder: "Surface variant",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    placeholder: "Soft variant",
  },
};

export const Small: Story = {
  args: {
    size: "1",
    placeholder: "Small size",
  },
};

export const Medium: Story = {
  args: {
    size: "2",
    placeholder: "Medium size",
  },
};

export const Large: Story = {
  args: {
    size: "3",
    placeholder: "Large size",
  },
};

export const NoResize: Story = {
  args: {
    resize: "none",
    placeholder: "No resize",
  },
};

export const VerticalResize: Story = {
  args: {
    resize: "vertical",
    placeholder: "Vertical resize",
  },
};

export const HorizontalResize: Story = {
  args: {
    resize: "horizontal",
    placeholder: "Horizontal resize",
  },
};

export const BothResize: Story = {
  args: {
    resize: "both",
    placeholder: "Both resize",
  },
};

export const NoRadius: Story = {
  args: {
    radius: "none",
    placeholder: "No radius",
  },
};

export const SmallRadius: Story = {
  args: {
    radius: "small",
    placeholder: "Small radius",
  },
};

export const MediumRadius: Story = {
  args: {
    radius: "medium",
    placeholder: "Medium radius",
  },
};

export const LargeRadius: Story = {
  args: {
    radius: "large",
    placeholder: "Large radius",
  },
};

export const FullRadius: Story = {
  args: {
    radius: "full",
    placeholder: "Full radius",
  },
};
