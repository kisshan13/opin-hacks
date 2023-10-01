import { proxy } from "valtio";
import { Modes } from "./lib/constant";

const state = proxy({
  modal: null,

  // User On Board Modal
  userOnBoardMode: "login",
  userOnBoardEmail: null,

  // Company onboard
  companyOnBoardStep: 1,
  companyOnBoardMode: Modes.companyOnBoard.login,
  companyCredentials: {
    name: "",
    email: "",
    password: "",
  },
  companyVerify: false,

  searchResult: null,
});

export default state;
