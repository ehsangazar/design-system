import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const AllScenarios = Template.bind({});
AllScenarios.args = {
  as: "p",
  asChild: false,
  size: { base: "medium", md: "large" },
  weight: { base: "regular", md: "bold" },
  align: { base: "left", md: "center" },
  trim: { base: "normal", md: "both" },
  truncate: false,
  wrap: { base: "wrap", md: "nowrap" },
  color: "primary",
  highContrast: true,
};
