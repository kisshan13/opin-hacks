import Table from "../../ui/Tables/Table";

function TicketsTable() {
  return (
    <Table.Container>
      <Table.HeadRow>
        <Table.Head>S No.</Table.Head>
        <Table.Head>Bus Name</Table.Head>
        <Table.Head>Ticket ID</Table.Head>
        <Table.Head>Price</Table.Head>
      </Table.HeadRow>

      <Table.Row>
        <Table.Def>1</Table.Def>
        <Table.Def>Bus Name</Table.Def>
        <Table.Def>#iadwji</Table.Def>
        <Table.Def>899</Table.Def>
      </Table.Row>
    </Table.Container>
  );
}

export default TicketsTable;
