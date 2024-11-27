import { Meta, StoryObj } from "@storybook/react";
import RadioCards from "./RadioCards";
import { COLORS } from "../../constants/COLORS";
import Box from "../Box/Box";
import Flex from "../Flex/Flex";
import Text from "../Text/Text";

interface RadioCardsContent {
  size: "1" | "2" | "3";
  variant: "classic" | "surface";
  columns: { initial: string; sm: string };
  highContrast: boolean;
  gap?: string;
  color?:
    | "gray"
    | "gold"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "bronze"
    | "brown"
    | "yellow"
    | "amber"
    | "orange"
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass";
}

const RadioCardsDemo = (props: RadioCardsContent) => {
  return (
    <Box maxWidth="600px" py={"4"}>
      <RadioCards.Root defaultValue="1" {...props}>
        <RadioCards.Item value="1">
          <Flex direction="column" width="100%">
            <Text weight="bold">8-core CPU</Text>
            <Text>32 GB RAM</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="2">
          <Flex direction="column" width="100%">
            <Text weight="bold">6-core CPU</Text>
            <Text>24 GB RAM</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="3">
          <Flex direction="column" width="100%">
            <Text weight="bold">4-core CPU</Text>
            <Text>16 GB RAM</Text>
          </Flex>
        </RadioCards.Item>
      </RadioCards.Root>
    </Box>
  );
};

const meta: Meta<typeof RadioCardsDemo> = {
  title: "Components/RadioCards",
  component: RadioCardsDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["classic", "surface"],
    },
    color: {
      control: "select",
      options: COLORS,
    },
    highContrast: {
      control: "boolean",
    },
    columns: {
      control: "object",
    },
    gap: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioCardsDemo>;

export const Default: Story = {
  args: {
    columns: { initial: "1", sm: "3" },
    gap: "4",
  },
};
