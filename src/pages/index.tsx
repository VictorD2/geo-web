import React from "react";
import { AuthProvider } from "@contexts/login.context";
import LoginPage from "@components/Auth/LoginPage";

export default function Home() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}
