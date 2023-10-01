import * as yup from "yup";

const schema = {
  email: yup.string().email("Must be a valid email addrees"),
  password: yup.string(),
  name: yup.string(),
};

export default schema;
