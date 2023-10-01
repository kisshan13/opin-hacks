import Link from "next/link";
import BannerContainer from "../../../ui/Containers/Banner";

function UpgradePlanBanner() {
  return (
    <BannerContainer>
      <div className=" flex justify-between items-end py-5 flex-wrap gap-6">
        <div className=" grid gap-4">
          <h1 className=" text-3xl font-semibold">Upgrade your plan now !!</h1>
          <p className=" text-lg font-medium">
            Only 1 free build left. Upgrade your plan to enjoy unlimited builds
            and more...
          </p>
        </div>

        <div>
          <Link
            href={"#"}
            className=" px-5 py-2 bg-primary dark:text-primary dark:bg-dark-v-1 rounded-md"
          >
            See plans
          </Link>
        </div>
      </div>
    </BannerContainer>
  );
}

export default UpgradePlanBanner;
