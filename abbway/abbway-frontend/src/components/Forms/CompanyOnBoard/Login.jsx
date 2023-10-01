import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "../../../ui/Forms/Button";
import Input from "../../../ui/Forms/Input";
import LayoutOnBoard from "./Layout";
import schema from "../../../lib/schema";
import { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../../../state";
import { Modal, Modes } from "../../../lib/constant";
import useCompanyAuth from "../../../api/endpoints/company/auth";

const loginSchema = yup.object({
  email: schema.email.required("Required"),
  password: schema.password.required("Required"),
});

function Login() {
  const snap = useSnapshot(state);
  const companyApi = useCompanyAuth();
  const [formState, setFormState] = useState("idle");
  const [error, setError] = useState();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  async function handleUserLogin(data) {
    setFormState("submitting");
    const res = await userApi.signin(data);

    if (!res.success) {
      setFormState("error");
      setError(res?.message);
      return;
    }

    localStorage.setItem("token", res?.data?.data?.token);
  }

  return (
    <>
      <LayoutOnBoard title={"Signin to Abbway to enjoy seamless travels"}>
        <form
          className=" flex flex-col gap-4"
          onSubmit={handleSubmit((data) => handleUserLogin(data))}
        >
          {["Email", "Password"].map((m, i) => (
            <label className=" grid" key={i}>
              <Input
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
          <Button disabled={formState === "submitting"}>Sign in</Button>
          <p className=" text-light-black text-xs font-medium">
            Create a new company
            <button
              disabled={formState === "submitting"}
              className=" text-primary"
              onClick={() => (state.userOnBoardMode = Modes.userOnBoard.signup)}
            >
              sign in
            </button>
          </p>
          <p className=" font-medium text-xs text-red-500">{error}</p>
        </form>
      </LayoutOnBoard>
    </>
  );
}

export default Login;
