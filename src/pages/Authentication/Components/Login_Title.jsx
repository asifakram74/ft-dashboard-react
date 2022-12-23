import React from "react";

const LoginTitle = (props) => {
  return (
    <>
      <div className="row">
        <div className="input-field col s12 m-0">
          <img src={props.icon} className="login_logo" alt="" />
          <h5 className="ml-4 login_heading">{props.title}</h5>
          <p className="login_pera">{props.subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default LoginTitle;
