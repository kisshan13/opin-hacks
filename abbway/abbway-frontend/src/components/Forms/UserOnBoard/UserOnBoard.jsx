import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../ui/Forms/Input";
import { useSnapshot } from "valtio";
import state from "../../../state";

import Verify from "./Verify";
import Signup from "./Signup";

import Login from "./Login";

function UserOnBoard({ mode }) {
  return (
    <div className=" h-full">
      {mode === "verify" && <Verify />}
      {mode == "signup" && <Signup />}
      {mode == "login" && <Login />}
    </div>
  );
}

export default UserOnBoard;
