import { useState } from "react";
import state from "../../state";
import { useSnapshot } from "valtio";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerifyForm from "../../components/Forms/CompanyOnBoard/Verify";

function VerifyPage() {
  const snap = useSnapshot(state);
  const navigate = useNavigate();

  useEffect(() => {
    if (snap.companyVerify) {
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      {snap.companyVerify && (
        <div className=" mt-4 lg:w-[80vw] mx-auto">
          <h1 className=" font-medium text-3xl">Verification</h1>
          <p className=" font-medium text-light-black/50">
            Verification code sent to your mail{" "}
            <span className=" text-primary-business">
              {snap.companyCredentials.email}
            </span>
          </p>

          <div className=" mt-10">
            <VerifyForm />
          </div>
        </div>
      )}
    </>
  );
}

export default VerifyPage;
