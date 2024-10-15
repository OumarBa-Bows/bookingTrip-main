import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean; // Prop to determine if the user is authenticated
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="auth/login" />;
};

export default PrivateRoute;
