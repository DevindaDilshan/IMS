import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children }) => {
  return(<div>{children}</div>);
};

export default ProtectedRoute;
