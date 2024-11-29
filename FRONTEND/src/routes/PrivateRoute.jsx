import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../utils/tokenHandler";

const PrivateRoute = () => {
  return getToken() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
