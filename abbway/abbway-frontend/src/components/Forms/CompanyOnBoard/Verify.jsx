import { useSnapshot } from "valtio";
import state from "../../../state";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../ui/Forms/Input";
import { useState } from "react";
import Button from "../../../ui/Forms/Button";
import useCompanyAuth from "../../../api/endpoints/company/auth";
import { useNavigate } from "react-router-dom";

const verifySchema = yup.object({
  otp: yup.number().required("Required"),
});

function VerifyForm() {
  const snap = useSnapshot(state);
  const navigate = useNavigate();
  const businessApi = useCompanyAuth();
  const [error, setEror] = useState();
  const [submitting, setSubmitting] = useState();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(verifySchema),
  });

  async function handleVerification(data) {
    const res = await businessApi.verify({
      email: snap.companyCredentials.email,
      otp: data.otp,
    });

    if (!res.success) {
      setEror(res?.message);
      return;
    }

    localStorage.setItem("token", res?.data?.data?.token);
    navigate("/overview");
  }

  return (
    <div>
      <div className=" max-w-3xl">
        <form
          className=" grid gap-4"
          onSubmit={handleSubmit(handleVerification)}
        >
          {[{ name: "otp", placeholder: "Verification Code" }].map((m, i) => (
            <label className=" grid" key={i}>
              <Input
                business={true}
                register={() => {
                  return { ...register(m.name.toLocaleLowerCase()) };
                }}
                type={"number"}
                placeholder={m.placeholder}
                disabled={submitting === "submitting"}
              />
              <span className=" text-xs font-medium text-red-500 ">
                {errors[m.name.toLowerCase()]?.message}
              </span>
            </label>
          ))}
          <Button business={true}>Verify</Button>
        </form>
      </div>
    </div>
  );
}

export default VerifyForm;
