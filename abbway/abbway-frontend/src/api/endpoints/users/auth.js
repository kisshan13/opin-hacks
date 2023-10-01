import { post } from "../../methods";

const signin = async (data) => await post({ path: "/user/signin", data });
const signup = async (data) => await post({ path: "/user/signup", data });
const verify = async (data) => await post({ path: "/users/verify", data });

const useUserAuth = () => {
  return {
    signin,
    signup,
  };
};

export default useUserAuth;
