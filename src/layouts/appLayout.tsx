import { useAuthenticated } from "@/hooks/auth";
import AppLayout from "./mainLayout";
import AuthLayout from "./authLayout";

import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "@/routes/privateRoutes";

export default function AppEntryPoint() {
  const loggedIn = useAuthenticated();

  return (
    <Routes>
      {/* Redirect from root to login */}
      <Route path="/" element={<Navigate to="/auth/login" replace={true} />} />
      <Route path="/auth/*" element={<AuthLayout />} />

      <Route element={<PrivateRoute isAuthenticated={loggedIn} />}>
        <Route path="/app/*" element={<AppLayout />} />
      </Route>

      <Route path="*" element={<Navigate to="auth/login" replace={true} />} />
    </Routes>
  );
}
