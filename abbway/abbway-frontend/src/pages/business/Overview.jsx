import BusinessCard from "../../ui/Cards/BusinessCard";

function OverviewPage() {
  return (
    <>
      <div>
        <h1 className=" text-xl">
          Hey, <span className="font-medium"> Guest Company</span>{" "}
        </h1>
        <div className=" grid grid-cols-3 gap-4 mt-3">
          <BusinessCard>
            <p className=" text-xl">Total Buses</p>
            <p className=" font-semibold text-3xl">90</p>
          </BusinessCard>
        </div>
      </div>
    </>
  );
}

export default OverviewPage;
