import LoginForm from "@components/Auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-primary min-h-screen w-full flex items-center justify-center">
      <div className="flex lg:gap-0 md:gap-10 gap-10 lg:flex-row md:flex-col flex-col rounded-2xl lg:w-1/3 md:w-1/2 sm:w-11/12 w-11/12 h-full bg-primary shadow-2xl shadow-secondary">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
