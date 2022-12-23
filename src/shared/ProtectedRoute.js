import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useLocation } from "react-router";
import { authenticateUser } from "../store/authentication/user/async-action";

const ProtectedRoute = (props) => {
  const location = useLocation();
  useEffect(() => {
    // if (!props.userReducer.user) {
    // console.log("authenticateUser Call");
    props.authenticateUser();
    // }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // console.log("authenticateUser", props);
  const Component = props.component;
  const title = props.title ? props.title : "";
  const isAuthenticated = localStorage.getItem("accessToken");
  const isEmail = localStorage.getItem("email");
  if (location.pathname === "/login" && isAuthenticated) {
    return <Redirect to={{ pathname: "/" }} />;
  }
  return isAuthenticated ? (
    <Component title={title} />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch(authenticateUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
