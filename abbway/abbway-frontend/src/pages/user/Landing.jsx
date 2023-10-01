import SearchBusForm from "../../components/Forms/Bookings/SearchBusForm";
import TicketSummary from "../../components/Info/TicketSummary";
import Input from "../../ui/Forms/Input";

function LandingPage() {
  return (
    <div className=" flex items-center px-10">
      <div className=" mt-16">
        <div className=" max-w-3xl hidden lg:block">
          <p className=" px-3 py-[2px] rounded-full bg-primary text-white w-max text-xs">
            Hello Travellers
          </p>
          <h1 className=" font-semibold text-4xl mt-1">
            Make your booking experience easy
          </h1>
          <p className=" mt-1">
            Bus booking is a process of choosing and purchasing bus seats
            online. It is an easy process but were are here to make it much
            better & simple.
          </p>
        </div>

        <div>
          <div className=" lg:hidden">
            <h1 className=" text-2xl">Hey, traveller !!</h1>
            <p>Book your tickets and get amazing discounts</p>
          </div>
          <div className=" mt-4">
            <SearchBusForm />
          </div>
        </div>
      </div>
      <div className=" w-full">{/* <TicketSummary /> */}</div>
    </div>
  );
}

export default LandingPage;
