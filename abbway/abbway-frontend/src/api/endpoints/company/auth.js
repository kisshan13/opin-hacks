import { post } from "../../methods";

const signup = async (data) => await post({ path: "/company/signup", data });
const verify = async (data) => await post({ path: "/company/verify", data });

const useCompanyAuth = () => {
  return { signup, verify };
};

export default useCompanyAuth;
