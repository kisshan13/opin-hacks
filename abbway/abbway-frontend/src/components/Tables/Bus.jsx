import Table from "../../ui/Tables/Table";

function BusTable() {
  return (
    <Table.Container>
      <Table.HeadRow>
        <Table.Head>S No.</Table.Head>
        <Table.Head>Bus Name</Table.Head>
        <Table.Head>Number</Table.Head>
        <Table.Head>Route</Table.Head>
      </Table.HeadRow>

      <Table.Row>
        <Table.Def>1</Table.Def>
        <Table.Def>Bus Name</Table.Def>
        <Table.Def>CG 04 MK 1234</Table.Def>
        <Table.Def>RPR - SBP</Table.Def>
      </Table.Row>
    </Table.Container>
  );
}

export default BusTable;
