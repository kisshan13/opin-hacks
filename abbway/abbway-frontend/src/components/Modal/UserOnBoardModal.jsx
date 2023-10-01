import { useState } from "react";
import userLoginBus from "../../assets/images/login-bus.jpg";
import UserOnBoard from "../Forms/UserOnBoard/UserOnBoard";

import { AiOutlineClose } from "react-icons/ai";
import { Modes } from "../../lib/constant";
import { useSnapshot } from "valtio";
import state from "../../state";

function UserOnBoardModal() {
  const snap = useSnapshot(state);

  return (
    <div className=" grid lg:grid-cols-2 h-[60vh] lg:h-[80vh] w-[90vw] lg:w-[60vw] bg-white rounded-lg relative">
      <div className="  bg-primary hidden rounded-lg p-2 lg:flex flex-col justify-between">
        <h1 className=" text-3xl text-white font-medium max-w-sm">
          Unlock the smart way to travel
        </h1>

        <img src={userLoginBus} alt="Bus" className=" rounded-xl" />
      </div>
      <div>
        <UserOnBoard mode={snap.userOnBoardMode} />
      </div>

      <div className=" absolute right-2 top-2 z-50">
        <AiOutlineClose
          className=" cursor-pointer"
          onClick={() => (state.modal = null)}
        />
      </div>
    </div>
  );
}

export default UserOnBoardModal;
