import * as yup from "yup";
import schema from "../../../lib/schema";
import Input from "../../../ui/Forms/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Button from "../../../ui/Forms/Button";
import state from "../../../state";
import { useSnapshot } from "valtio";

const signUpSchema = yup.object({
  name: schema.name.required("Required"),
  email: schema.email.required("Required"),
  password: schema.password.required("Required"),
});

function SignupCredentials() {
  const snap = useSnapshot(state);
  const [formState, setFormState] = useState("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: snap.companyCredentials.email,
      password: snap.companyCredentials.password,
      name: snap.companyCredentials.name,
    },
  });

  function handleCredentialInput(data) {
    state.companyCredentials.email = data?.email;
    state.companyCredentials.name = data?.name;
    state.companyCredentials.password = data?.password;

    state.companyOnBoardStep = 2;
  }

  return (
    <div className=" max-w-3xl">
      <form
        className=" grid gap-4"
        onSubmit={handleSubmit(handleCredentialInput)}
      >
        {["Name", "Email", "Password"].map((m, i) => (
          <label className=" grid" key={i}>
            <Input
              business={true}
              register={() => {
                return { ...register(m.toLocaleLowerCase()) };
              }}
              placeholder={m}
              disabled={formState === "submitting"}
            />
            <span className=" text-xs font-medium text-red-500 ">
              {errors[m.toLowerCase()]?.message}
            </span>
          </label>
        ))}
        <Button business={true}>Next</Button>
      </form>
    </div>
  );
}

export default SignupCredentials;
