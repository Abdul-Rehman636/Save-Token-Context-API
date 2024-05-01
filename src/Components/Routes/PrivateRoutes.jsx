import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const navToSign = useNavigate();

  const getToken = localStorage.getItem("Token");

  if (getToken) {
    return children;
  } else {
    return navToSign("/");
  }
};

export default PrivateRoutes;
