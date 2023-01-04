import * as Yup from "yup";

const username = Yup.string().required("Este campo es obligatorio");
const password = Yup.string().required("Este campo es obligatorio");

export const LoginSchema = Yup.object({
  username,
  password,
});
