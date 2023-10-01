import TableContainer from "@/ui/Containers/TableContainer";
import Table from "@/ui/Tables/Table";
import EventText from "@/ui/Text/Event";

const DummyData = [
  {
    name: "Stim",
    status: "Stopped",
    size: 60,
    date: "21.4.2023",
    time: "7:40 PM",
  },
  {
    name: "Sonair",
    status: "Stopped",
    size: 20,
    date: "21.9.2022",
    time: "11:41 PM",
  },
  {
    name: "It",
    status: "Required Actions",
    size: 36,
    date: "17.11.2022",
    time: "1:59 AM",
  },
  {
    name: "Fintone",
    status: "Stopped",
    size: 14,
    date: "19.7.2023",
    time: "10:36 AM",
  },
  {
    name: "Stronghold",
    status: "Running",
    size: 12,
    date: "27.2.2023",
    time: "10:52 AM",
  },
  {
    name: "Bytecard",
    status: "Running",
    size: 70,
    date: "30.6.2023",
    time: "4:11 AM",
  },
];

function BuildLogs() {
  interface MyObject {
    [key: string]: string;
  }

  const statusEventMapper: MyObject = {
    Running: "Completed",
    Stopped: "Failed",
    "Required Actions": "Progress",
  };

  return (
    <>
      <TableContainer>
        <Table.Table>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Size</Table.Head>
            <Table.Head>Date</Table.Head>
            <Table.Head>Time</Table.Head>
          </Table.Row>

          {DummyData.map((data, i) => (
            <Table.Row key={i}>
              <Table.Defination>
                <div className=" pl-3">{data.name}</div>
              </Table.Defination>
              <Table.Defination>
                <EventText
                  className=" text-lg"
                  event={statusEventMapper[data.status] as any}
                >
                  {data.status}
                </EventText>
              </Table.Defination>
              <Table.Defination>{data.size} mb</Table.Defination>
              <Table.Defination>{data.date}</Table.Defination>
              <Table.Defination>{data.time}</Table.Defination>
            </Table.Row>
          ))}
        </Table.Table>
      </TableContainer>
    </>
  );
}

export default BuildLogs;
