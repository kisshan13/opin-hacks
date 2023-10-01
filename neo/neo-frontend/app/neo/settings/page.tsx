import DashboardLayout from "@/components/Dashboard/Layout";
import Settings from "@/components/Forms/Settings";

function Page() {
  return (
    <DashboardLayout title="Settings">
      <div className=" bg-light-v-2 dark:bg-dark-v-1 p-4 rounded-lg mt-5 ">
        <Settings />
      </div>
    </DashboardLayout>
  );
}

export default Page;
