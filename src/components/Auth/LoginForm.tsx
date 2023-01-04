import React from "react";
import AppInputPassword from "@shared/InputPassword/app_input_password";
import AppInputText from "@shared/InputText/app_input_text";
import AppButton from "@shared/Button/app_button";
import { useAuth } from "@contexts/login.context";

type FormEvent = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.ChangeEvent<HTMLInputElement>;

const LoginForm = () => {
  const { formikLogin,sendingData } = useAuth();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    formikLogin.submitForm();
  };

  const handleInputChange = (e: ChangeEvent) => {
    formikLogin.setFieldValue(e.target.name, e.target.value);
  };

  const handleInputFocus = (e: FocusEvent) => {
    formikLogin.setFieldError(e.target.name, "");
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="lg:w-full md:w-full w-full flex justify-center gap- items-center flex-col pb-10"
    >
      <h2 className="text-white uppercase my-10 font-mono text-2xl">
        Iniciar Sesión
      </h2>
      <AppInputText
        hoverBorderColor="hover:border-secondary"
        focusBorderColor="focus:border-secondary"
        helpText={formikLogin.errors.username}
        value={formikLogin.values.username}
        labelColor="text-white uppercase"
        borderColor="border-secondary"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        bgColor="bg-transparent"
        labelFontSize="text-sm"
        textColor="text-white"
        name="username"
        label="Usuario"
        width="w-9/12"
        required
      />
      <AppInputPassword
        hoverBorderColor="hover:border-secondary"
        focusBorderColor="focus:border-secondary"
        helpText={formikLogin.errors.password}
        value={formikLogin.values.password}
        labelColor="text-white uppercase"
        borderColor="border-secondary"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        bgColor="bg-transparent"
        labelFontSize="text-sm"
        textColor="text-white"
        label="Contraseña"
        name="password"
        width="w-9/12"
        required
      />
      <div className="pt-5 w-9/12">
        <AppButton
          remixicon="ri-login-circle-line"
          textColor="text-white uppercase"
          disabled={sendingData}
          loading={sendingData}
          width="w-full"
          text="Entrar"
          type="submit"
        />
      </div>
    </form>
  );
};

export default LoginForm;
