import * as yup from "yup";
import schema from "../../../lib/schema";
import Input from "../../../ui/Forms/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Button from "../../../ui/Forms/Button";
import state from "../../../state";
import { convertToCamelCase } from "../../../lib/utils";
import useCompanyAuth from "../../../api/endpoints/company/auth";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";

const companySchema = yup.object({
  companyName: schema.name.required("Required"),
  address: schema.name,
  city: schema.password,
});

function CompanyDetails() {
  const [formState, setFormState] = useState("idle");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(companySchema),
  });

  const companyApi = useCompanyAuth();

  async function handleCredentialInput(data) {
    setFormState("submitting");
    const res = await companyApi.signup({
      ...data,
      ...snap.companyCredentials,
    });
    setFormState("idle");

    if (!res?.success) {
      setError(res?.message);
      return;
    }

    state.companyVerify = true;
    navigate("/verify");
  }

  return (
    <div className=" max-w-3xl">
      <form
        className=" grid gap-4"
        onSubmit={handleSubmit(handleCredentialInput)}
      >
        {["Company Name", "Address", "City"].map((m, i) => (
          <label className=" grid" key={i}>
            <Input
              business={true}
              register={() => {
                return {
                  ...register(convertToCamelCase(m)),
                };
              }}
              placeholder={m}
              disabled={formState === "submitting"}
            />
            <span className=" text-xs font-medium text-red-500 ">
              {errors[convertToCamelCase(m)]?.message}
            </span>
          </label>
        ))}
        <p className=" text-xs text-red-500 font-medium">{error}</p>
        <Button disabled={formState === "submitting"} business={true}>
          Next
        </Button>
      </form>
    </div>
  );
}

export default CompanyDetails;
