import Input from "../../../ui/Forms/Input";
import { useState } from "react";
import * as yup from "yup";
import schema from "../../../lib/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../ui/Forms/Button";

const searchSchema = yup.object({
  from: schema.name.required("Required"),
  to: schema.name.required("Required"),
  date: schema.name.required("Required"),
});

function SearchBusForm() {
  const [formState, setFormState] = useState("idle");
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(searchSchema) });

  return (
    <div>
      <form>
        <div className=" grid grid-cols-2 lg:w-1/2 gap-4">
          {["From", "To"].map((m, i) => (
            <label className="" key={i}>
              <Input
                register={() => {
                  return { ...register(m.toLocaleLowerCase()) };
                }}
                placeholder={m}
                disabled={formState === "submitting"}
                className={"w-full"}
              />
              <span className=" text-xs font-medium text-red-500 ">
                {errors[m.toLowerCase()]?.message}
              </span>
            </label>
          ))}
          <Input
            type="date"
            register={() => {
              return { ...register("date") };
            }}
            disabled={formState === "submitting"}
          />
        </div>
        <Button className={"w-full rounded-md mt-4"}>Search Buses</Button>
      </form>
    </div>
  );
}

export default SearchBusForm;
