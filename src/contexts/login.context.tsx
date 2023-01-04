import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useGlobal } from "@contexts/global.context";
import { LoginSchema } from "@schemas/auth.schema";
import { getErrorResponse } from "@utils/helpers";
import { toastConfig } from "@config/config";
import ClsAuth from "@class/ClsAuth";
import {
  IAuthContext,
  ILogin,
  initialStateErrorLogin,
  initialStateLogin,
} from "@interfaces/auth.interface";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [sendingData, setSendingData] = useState<boolean>(false);
  const router = useRouter();
  const { setUser } = useGlobal();

  const submitLogin = async (formValue: ILogin) => {
    setSendingData(true);
    const toastId = toast.loading("Por favor espere...");
    try {
      const user = await ClsAuth.login(formValue);
      toast.update(toastId, toastConfig("Sesión Iniciada", "success"));
      setUser(user);
      return router.push("/home");
    } catch (error: any) {
      toast.update(toastId, toastConfig(getErrorResponse(error), "warning"));
    }
    return setSendingData(false);
  };

  const formikLogin = useFormik({
    initialErrors: initialStateErrorLogin,
    initialValues: initialStateLogin,
    validationSchema: LoginSchema,
    validateOnChange: false,
    onSubmit: submitLogin,
  });

  return (
    <AuthContext.Provider value={{ sendingData, setSendingData, formikLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth debe estar dentro del proveedor usuario context");
  return context;
}
