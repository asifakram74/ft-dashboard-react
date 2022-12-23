import React from "react";
import { Redirect, useLocation } from "react-router";

const PrivateRoute = (props) => {
  const location = useLocation();
  const Component = props.component;
  const title = props.title ? props.title : "";
  const isAuthenticated = localStorage.getItem("accessToken");
  const isEmail = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "";
  //   console.log("Email ====>", isEmail, location.pathname);
  if (
    !isAuthenticated &&
    (location.pathname === "/forget" || location.pathname === "/confirm_email")
  ) {
    if (isEmail === "" && location.pathname === "/confirm_email") {
      return <Redirect to={{ pathname: "/login" }} />;
    } else {
      return <Component title={title} />;
      //   return <Redirect to={{ pathname: location.pathname }} />;
    }
    // return <Component />;
  }
  if (isAuthenticated) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return <Component title={title} />;
  }
};

export default PrivateRoute;
