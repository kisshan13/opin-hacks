import CreateBuildForm from "@/components/Forms/CreateBuild";

function Page() {
  return (
    <>
      <div className=" dark:text-light-v-1">
        <h1 className=" text-2xl text-center mb-10 font-medium">
          Create new build
        </h1>
        <div className=" bg-white dark:bg-dark-v-1 py-10 px-5 md:px-10 md:w-[70vw] rounded-2xl mx-auto">
          <CreateBuildForm />
        </div>
      </div>
    </>
  );
}

export default Page;
