import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const navToSign = useNavigate();

  const getToken = localStorage.getItem("Token");

  if (getToken) {
    return navToSign("/Home");
  } else {
    return children;
  }
};

export default PublicRoutes;
