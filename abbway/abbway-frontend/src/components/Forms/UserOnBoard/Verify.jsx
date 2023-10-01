import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";

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
    const res = await userApi.verify({
      otp: parseInt(data.otp),
      email: snap.userOnBoardEmail,
    });

    if (!res.success) {
      setFormState("error");
      setError(res?.message);
      return;
    }

    state.modal = null;
    localStorage.setItem("token", res?.data?.data?.token);
    toast.success("Logged in successfully", { position: "bottom-center" });
  }

  return (
    <>
      <LayoutOnBoard title={"Signup to Abbway to enjoy seamless travels"}>
        <form
          className=" flex flex-col gap-4"
          onSubmit={handleSubmit((data) => handleUserSignup(data))}
        >
          {["OTP"].map((m, i) => (
            <label className=" grid" key={i}>
              <Input
                register={() => {
                  return { ...register(m.toLocaleLowerCase()) };
                }}
                type="number"
                placeholder={m}
                disabled={formState === "submitting"}
              />
              <span className=" text-xs font-medium text-red-500 ">
                {errors[m.toLowerCase()]?.message}
              </span>
            </label>
          ))}
          <Button disabled={formState === "submitting"}>Verify</Button>
          <p className=" font-medium text-xs text-red-500">{error}</p>
        </form>

        <p>Verification code sent to : {snap.userOnBoardEmail}</p>
      </LayoutOnBoard>
    </>
  );
}

export default Signup;
