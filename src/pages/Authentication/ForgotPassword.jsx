import React, { useState } from "react";
import Theme from "./Components/Authentication_Template";
import LoginFooter from "./Components/Login_Footer";
import LoginTitle from "./Components/Login_Title";
import Input from "../../components/Input";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import ConfirmationIcon from "../../assets/images/icon/confirmation-illustration.svg";
import ForgotPaswordIcon from "../../assets/images/icon/forget_icon.svg";
import EmailIcon from "../../assets/images/icon/email_icon.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { CheckAuthentication } from "../../shared/utility";
import { ReqPost } from "../../configs/Request";
import { setSnackbar } from "../../store/Snackbar/snackbar";
import { useDispatch } from "react-redux";
import { history } from "../../configs/history";

const ForgotPassword = () => {
  const [forgotBtn, setForgotBtn] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [email, setEmail] = useState("");
  const { t: trans } = useTranslation();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(trans("errors.Input a Valid Email Address"))
      .required(trans("errors.Email Field is Required"))
      .max(50, trans("errors.Maximum of 50 characters are allowed")),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitForm = async (data) => {
    console.log("data", data);
    setForgotBtn(true);
    try {
      const res = await ReqPost("/forgotpassword", data, "MeshServ");
      console.log("res.data", res.data);

      // SetToggleButton(false);
      if (res.data.status === 200 || res.data.status === true) {
        // props.authenticateUser();
        // setUpdate(true);
        setEmail(data.email);
        setSuccessAlert(true);
        // dispatch(setSnackbar(true, "success", res.data.message));
      } else if (res.data.status === 500) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else if (res.data.status === 601) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else {
        CheckAuthentication(res);
        dispatch(setSnackbar(true, "error", "Could not Update!"));
      }
      console.log("Response", res);
    } catch (error) {
      console.log("error updating...");
    }
    setForgotBtn(false);
  };
  return (
    <>
      <Theme>
        <div className="col s11 m6 l4 z-depth-4 card-panel border-radius-6 login-card forget_pass_card bg-opacity-8 my_login ps_relative forget_icon autocomplte-w">
          <form className="login-form" onSubmit={handleSubmit(onSubmitForm)}>
            <LoginTitle
              icon={ForgotPaswordIcon}
              title="Forgot Password"
              subtitle="Enter your email address and we will send you the link. Just click the link and follow the instructions."
            />
            <div className="email-confirm">
              <Input
                className={errors["email"]?.className}
                type="text"
                name={"email"}
                icon={EmailIcon}
                icon_alt="Email"
                label={trans(`inputFields.Email`)}
                autoComplete={false}
                className={errors["email"] ? "test" : ""}
                registered={register}
              />
              <span className="error_login">{errors["email"]?.message}</span>
            </div>

            <div className="row margin">
              <div className="input-field col s12 ">
                <button
                  className="col s12 login_btn"
                  // onClick={() => setForgotBtn(true)}
                  disabled={forgotBtn}
                  Submit
                >
                  Send Email
                </button>

                <Link to="/login" className="col s12 login_btn_2 mt-5 mb-2">
                  Back To Login
                </Link>
              </div>
            </div>
          </form>
          <LoginFooter />
        </div>
      </Theme>

      {/* Sweet Alert (POPUP) */}
      <div className="swal_al">
        <SweetAlert
          custom
          show={successAlert}
          title="Successful!"
          onConfirm={() => history.push("/login")}
          onCancel={() => history.push("/login")}
          confirmBtnText="Back to Login"
          customIcon={ConfirmationIcon}
          customClass="sweet_alert"
        >
          <div className="swt_alert">
            <p>
              New password has been sent on your email address
              <span style={{ color: "#008CFF" }}> {email}</span>.
            </p>
          </div>
        </SweetAlert>
      </div>
      {/* Popup close */}
    </>
  );
};
export default ForgotPassword;
