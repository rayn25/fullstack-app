import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function NotAuthRoutes({ isAuth }) {
  return isAuth ? <Navigate to={"/"} /> : <Outlet />;
}
export default NotAuthRoutes;
