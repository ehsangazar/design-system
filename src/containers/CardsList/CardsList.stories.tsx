import { Meta } from "@storybook/react";
import CardsList from "./CardsList";
import Box from "../../components/Box/Box";
import sampleCard from "./sampleCard.json";

const meta: Meta<typeof CardsList> = {
  title: "Containers/CardsList",
  component: CardsList,
  argTypes: {
    overflowEnabled: {
      control: "boolean",
    },
  },
};

export default meta;

export const Default = {
  args: {},
  render: () => (
    <Box>
      <CardsList
        actionButtonName="Read More"
        data={sampleCard}
        pathName={"/"}
      />
    </Box>
  ),
};

// overFlowEnabled
export const OverFlowEnabled = {
  args: {},
  render: () => (
    <Box maxWidth={"1000px"}>
      <CardsList
        actionButtonName="Read More"
        data={sampleCard}
        pathName={"/"}
        overflowEnabled
      />
    </Box>
  ),
};
