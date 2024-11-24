import { Meta, StoryObj } from "@storybook/react";
import AspectRatio from "./AspectRatio";

interface AspectRatioProps {
  ratio: number;
}

const AspectRatioDemo = (props: AspectRatioProps) => {
  return (
    <AspectRatio {...props}>
      <img
        src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
        alt="A house in a forest"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "var(--radius-2)",
        }}
      />
    </AspectRatio>
  );
};

const meta: Meta<typeof AspectRatioDemo> = {
  title: "Components/AspectRatio",
  component: AspectRatioDemo,
  argTypes: {
    ratio: {
      control: {
        type: "number",
        min: 0,
        step: 0.1,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
};
