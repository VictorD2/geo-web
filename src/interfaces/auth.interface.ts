import { FormikProps } from "formik";
import { Dispatch } from "react";
import { IUser } from "@interfaces/user.interface";

export interface ILogin {
  username: string;
  password: string;
}

export interface IAuthContext {
  setSendingData: Dispatch<boolean>;
  formikLogin: FormikProps<ILogin>;
  sendingData: boolean;
}

export const initialStateLogin: ILogin = {
  username: "",
  password: "",
};

export const initialStateErrorLogin: ILogin = {
  username: "",
  password: "",
};

export interface ILoginResponse {
  success: string;
  token: string;
  user: IUser;
}
