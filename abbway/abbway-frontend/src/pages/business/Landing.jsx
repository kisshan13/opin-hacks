import Button from "../../ui/Forms/Button";

function LandingBusiness() {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 mt-24">
      <h1 className=" max-w-[450px] font- text-3xl font-medium mx-auto">
        Join <span className=" text-primary-business ">Abbway business </span>{" "}
        to unleash the possibilities of opportunities.
      </h1>
      <div>
        <Button business className={"max-w-[300px] rounded-lg"}>
          Explore more
        </Button>
      </div>
    </div>
  );
}

export default LandingBusiness;
