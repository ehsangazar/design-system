import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

interface TableContent {
  size: "1" | "2" | "3";
  variant: "surface" | "ghost";
  layout: "auto" | "fixed";
}

const TableDemo = (props: TableContent) => {
  return (
    <Table.Root {...props}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

const meta: Meta<typeof TableDemo> = {
  title: "Components/Table",
  component: TableDemo,
  argTypes: {
    size: {
      control: "select",
      options: ["1", "2", "3"],
    },
    variant: {
      control: "select",
      options: ["surface", "ghost"],
    },
    layout: {
      control: "select",
      options: ["auto", "fixed"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableDemo>;

export const Default: Story = {
  args: {},
};
