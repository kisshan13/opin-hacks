import BuildLogs from "@/components/Dashboard/Tables/BuildLogs";

function Page() {
  return (
    <>
      <div>
        <h1 className=" text-2xl font-medium dark:text-white mb-3">
          Applications
        </h1>
        <div className="max-w-[1920px] mx-auto">
          <BuildLogs />
        </div>
      </div>
    </>
  );
}

export default Page;
