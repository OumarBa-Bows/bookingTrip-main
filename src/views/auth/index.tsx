import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./login";
import RegisterForm from "./register";

export default function AuthViews() {
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="*" element={<LoginForm />} />
    </Routes>
  );
}
