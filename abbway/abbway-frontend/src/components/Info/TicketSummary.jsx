import Table from "../../ui/Tables/Table";

function TicketSummary() {
  return (
    <div className=" rounded-md w-full py-4 px-2 bg-primary/10">
      <h3 className=" font-medium text-lg">Boarding Details</h3>

      <div className=" flex items-start justify-between mt-4">
        <p className=" text-lg font-medium">B K Travels</p>
        <p className=" text-primary font-medium">NON AC Sleeper</p>
      </div>

      <div className=" flex items-center justify-between mt-4">
        <div>
          <p>Nov 8</p>
          <p>11:25 PM</p>
          <p>Raipur</p>
        </div>

        <div className=" h-[2px] w-3/5 bg-light-black/25"></div>
        <div>
          <p>Nov 8</p>
          <p>11:15 PM</p>
          <p>Raipur</p>
        </div>
      </div>

      <div className=" mt-5">
        <p className=" text-lg font-medium">Travellers Details</p>

        <Table.Container>
          <Table.Row>
            <Table.Def>Kishan Sharma</Table.Def>
            <Table.Def>18 y/o</Table.Def>
            <Table.Def>Male</Table.Def>
            <Table.Def>12</Table.Def>
          </Table.Row>
        </Table.Container>
      </div>

      <div className=" mt-5">
        <p className=" text-lg font-medium">E-Tickets sent to your mail</p>
        <p>kisshan@outlook.com</p>
      </div>
    </div>
  );
}

export default TicketSummary;
