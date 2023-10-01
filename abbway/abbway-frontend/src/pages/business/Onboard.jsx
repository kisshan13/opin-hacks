import { useSnapshot } from "valtio";
import state from "../../state";
import SignupCredentials from "../../components/Forms/CompanyOnBoard/SignupCredentials";
import CompanyDetails from "../../components/Forms/CompanyOnBoard/CompanyDetails";

function OnboardBusiness() {
  const snap = useSnapshot(state);

  return (
    <div className=" mt-4 lg:w-[80vw] mx-auto">
      <h1 className=" font-medium text-3xl">
        Create your{" "}
        <span className=" text-primary-business">business account</span>
      </h1>
      <p className=" font-medium text-light-black/50">
        Step {snap.companyOnBoardStep} of 2
      </p>
      {snap.companyOnBoardStep === 2 && (
        <span
          className=" underline underline-offset-2 text-xs cursor-pointer"
          onClick={() => (state.companyOnBoardStep = 1)}
        >
          Go Back
        </span>
      )}

      <div className=" mt-10">
        {snap.companyOnBoardStep === 1 && <SignupCredentials />}
        {snap.companyOnBoardStep === 2 && <CompanyDetails />}
      </div>
    </div>
  );
}

export default OnboardBusiness;
