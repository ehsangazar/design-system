import { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

const BreadcrumbDemo = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Breadcrumb.Link href={"/"}>Page</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Current Page</Breadcrumb.Item>
    </Breadcrumb.Root>
  );
};

const meta: Meta<typeof BreadcrumbDemo> = {
  title: "Components/Breadcrumb",
  component: BreadcrumbDemo,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BreadcrumbDemo>;

export const Default: Story = {
  args: {},
};
