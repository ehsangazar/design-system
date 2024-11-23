import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Hello World",
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const HeadingShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Sizes */}
      <div>
        <Heading size="6" weight="bold" color="blue">
          Sizes
        </Heading>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Heading size="1">Size 1</Heading>
          <Heading size="2">Size 2</Heading>
          <Heading size="3">Size 3</Heading>
          <Heading size="4">Size 4</Heading>
          <Heading size="5">Size 5</Heading>
          <Heading size="6">Size 6</Heading>
        </div>
      </div>

      {/* Weights */}
      <div>
        <Heading size="6" weight="bold" color="blue">
          Weights
        </Heading>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Heading weight="light">Light weight</Heading>
          <Heading weight="regular">Regular weight</Heading>
          <Heading weight="medium">Medium weight</Heading>
          <Heading weight="bold">Bold weight</Heading>
        </div>
      </div>

      {/* Colors */}
      <div>
        <Heading size="6" weight="bold" color="blue">
          Colors
        </Heading>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Heading color="gray">Gray heading</Heading>
          <Heading color="tomato">Tomato heading</Heading>
          <Heading color="red">Red heading</Heading>
          <Heading color="blue">Blue heading</Heading>
          <Heading highContrast>High contrast heading</Heading>
        </div>
      </div>

      {/* Alignment */}
      <div>
        <Heading size="6" weight="bold" color="blue">
          Alignment
        </Heading>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Heading align="left">Left aligned</Heading>
          <Heading align="center">Center aligned</Heading>
          <Heading align="right">Right aligned</Heading>
        </div>
      </div>
    </div>
  ),
};
