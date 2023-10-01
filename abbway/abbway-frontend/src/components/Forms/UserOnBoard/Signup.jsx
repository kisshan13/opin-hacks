import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "../../../ui/Forms/Button";
import Input from "../../../ui/Forms/Input";
import LayoutOnBoard from "./Layout";
import useUserAuth from "../../../api/endpoints/users/auth";
import schema from "../../../lib/schema";
import { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../../../state";
import { Modes } from "../../../lib/constant";

const SignupSchema = yup.object({
  email: schema.email.required("Required"),
  password: schema.password.required("Required"),
  name: schema.name.required("Required"),
});

function Signup() {
  const snap = useSnapshot(state);
  const userApi = useUserAuth();
  const [formState, setFormState] = useState("idle");
  const [error, setError] = useState();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  async function handleUserSignup(data) {
    setFormState("submitting");
    const res = await userApi.signup(data);

    if (!res.success) {
      setFormState("error");
      setError(res?.message);
      return;
    }

    state.userOnBoardMode = Modes.userOnBoard.verify;
    state.userOnBoardEmail = data?.email;
  }

  return (
    <>
      <LayoutOnBoard title={"Signup to Abbway to enjoy seamless travels"}>
        <form
          className=" flex flex-col gap-4"
          onSubmit={handleSubmit((data) => handleUserSignup(data))}
        >
          {["Name", "Email", "Password"].map((m, i) => (
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
            Already have an account ?{" "}
            <button
              disabled={formState === "submitting"}
              className=" text-primary"
              onClick={() => (state.userOnBoardMode = Modes.userOnBoard.login)}
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

export default Signup;
