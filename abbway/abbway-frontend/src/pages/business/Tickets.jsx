import TicketsTable from "../../components/Tables/Tickets";
import Table from "../../ui/Tables/Table";

function Tickets() {
  return (
    <div>
      <h1 className=" text-xl font-medium my-2">Tickets</h1>
      <TicketsTable />
    </div>
  );
}

export default Tickets;
