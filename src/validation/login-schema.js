import Yup from "./validate";

const loginSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

export default loginSchema;
