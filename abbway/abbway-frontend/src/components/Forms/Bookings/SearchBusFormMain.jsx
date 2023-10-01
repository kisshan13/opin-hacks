import { useForm } from "react-hook-form";
import Input from "../../../ui/Forms/Input";
import Button from "../../../ui/Forms/Button";
import { useState } from "react";
import state from "../../../state";

function SearchBusFormMain() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const snap = useState(state);

  return (
    <div className=" px-5">
      <form className=" flex items-center gap-8 py-7">
        {["From", "To", "Date"].map((m, i) => (
          <Input
            placeholder={m}
            type={m === "Date" ? "date" : "text"}
            register={() => {
              return { ...register(m.toLowerCase()) };
            }}
          />
        ))}
        <Button className={" rounded-lg"}>Search Bus</Button>
      </form>
      {snap[0].searchResult?.length && (
        <p>Total Result: {snap[0].searchResult?.length} </p>
      )}
    </div>
  );
}

export default SearchBusFormMain;
