import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../Store";

export const ProtectedAdminRoute = ({ children }) => {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return userInfo && userInfo.isAdmin ? children : <Navigate to="/" />;
};
