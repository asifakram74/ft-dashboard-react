import React, { useReducer, useState } from "react";
import Theme from "./Components/Authentication_Template";
import LoginFooter from "./Components/Login_Footer";
import LoginTitle from "./Components/Login_Title";
import Input from "./../../components/Input";
import SweetAlert from "react-bootstrap-sweetalert";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router";
import { connect } from "react-redux";
function ConfirmEmailReducer(state, action) {
  switch (action.type) {
    case "FIELD_INPUT":
      return {
        ...state,
        [action.field]: [action.value],
      };
    case "EDIT":
      return {
        ...state,
        toggleEdit: true,
        toggleEmailCheck: false,
      };
    case "SENDING_EMAIL":
      return {
        ...state,
        toggleEdit: true,
      };
    case "RESEND_EMAIL":
      return {
        ...state,
        toggleEmailCheck: true,
      };

    case "DISABLE_EDIT":
      console.log("DISABLE_EDIT");
      return {
        ...state,
        toggleEdit: false,
      };
    case "EMAIL_UPDATE":
      console.log("EMAIL_UPDATE");
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }

  return state;
}
const initialState = {
  toggleEdit: true,
  toggleEmailCheck: false,
  email: "",
};
const Confirm_Email = (props) => {
  const [state, dispatch] = useReducer(ConfirmEmailReducer, initialState);
  const { toggleEdit, toggleEmailCheck, email } = state;
  console.log("props.loginReducerStates.email", props.loginReducerStates.email);
  if (!email) {
    dispatch({ type: "EMAIL_UPDATE", email: props.loginReducerStates.email });
  }
  console.log(state);
  // const location = useLocation();
  // let history = useHistory();
  // if (email === "") {
  //   console.log("in If");

  //   history.push("/login");
  // }
  console.log("EMAILLLL ->", email);
  const [error, setError] = useState("");
  const { t: trans } = useTranslation();
  console.log(state);
  const onSubmitForm = (e) => {
    e.preventDefault();
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === false) {
      setError("Please enter a Valid Email");
      return;
    }
    setError("");
    localStorage.setItem("email", email);
    dispatch({ type: "SENDING_EMAIL" });
    setTimeout(() => {
      dispatch({ type: "RESEND_EMAIL" });
      console.log(email);
    }, 500);
  };
  return (
    <>
      <Theme>
        <div className="col s11 m6 l4 z-depth-4 card-panel border-radius-6 login-card forget_pass_card bg-opacity-8 my_login ps_relative forget_icon autocomplte-w">
          <form className="login-form" id="my-form" onSubmit={onSubmitForm}>
            <LoginTitle
              icon="/images/icon/confirmation-illustration.svg"
              title="Confirm Your Email Address"
              subtitle="We have sent a confirmation email to:"
            />
            <div className="email-confirm">
              <Input
                type="email"
                name="email"
                icon="/images/icon/email_icon.svg"
                icon_alt="Email"
                label={trans("inputFields.Email")}
                // lableclass="active"
                value={email}
                autoComplete="false"
                disabled={toggleEdit}
                onChange={(e) =>
                  dispatch({
                    type: "FIELD_INPUT",
                    field: "email",
                    value: e.target.value,
                  })
                }
              />

              {toggleEdit ? (
                <a
                  href="#"
                  onClick={() => dispatch({ type: "DISABLE_EDIT" })}
                  className="email_edit"
                >
                  <img
                    src="/images/icon/edit.svg"
                    alt=""
                    className="edit_text"
                  />
                </a>
              ) : (
                <button
                  // onClick={() => }
                  className="email_edit"
                >
                  <img
                    src="/images/icon/tick_icon.svg"
                    alt=""
                    className="edit_text"
                  />
                </button>
              )}
              {error ? error : ""}
            </div>

            <div className="row margin pt-3 confirm_email">
              <div className="input-field col s12  mt-0">
                <p className="mt-0">
                  Check your email and click on the confirmation link to
                  continue.
                </p>
                <p>
                  Didn't recieve email?
                  <a
                    form="my-form"
                    type="submit"
                    href="#"
                    onClick={onSubmitForm}
                    // onClick={() => dispatch({ type: "RESEND_EMAIL" })}
                  >
                    Resend
                  </a>
                </p>
              </div>
            </div>
          </form>
          <LoginFooter></LoginFooter>
        </div>
      </Theme>

      {/* Sweet Alert (POPUP) */}
      <div className="swal_al">
        <SweetAlert
          custom
          show={toggleEmailCheck}
          title="Successful!"
          onConfirm={() => dispatch({ type: "EDIT" })}
          // onCancel={() => settoggleEmailCheck(false)}
          confirmBtnText="OK"
          customIcon="/Images/icon/confirmation-illustration.svg"
          customClass="sweet_alert"
        >
          <div className="swt_alert">
            <p>A verificatin link has been sent to your email address.</p>
          </div>
        </SweetAlert>
        {/* Popup close */}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loginReducerStates: state.loginReducer,
  };
};
export default connect(mapStateToProps, null)(Confirm_Email);
