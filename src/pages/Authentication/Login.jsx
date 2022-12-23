import React, { useEffect, useState } from "react";
import LoginFooter from "./Components/Login_Footer";
import LoginTitle from "./Components/Login_Title";
import Input from "./../../components/Input";
import Theme from "./Components/Authentication_Template";
import { loginFormFields } from "../../constants/FormFields";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from "react-redux";
import { loginUser } from "../../store/authentication/login/async-action";
import { Link } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const { t: trans } = useTranslation();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(trans("errors.Input a Valid Email Address"))
      .required(trans("errors.Email Field is Required"))
      .max(50, trans("errors.Maximum of 50 characters are allowed")),
    password: yup
      .string()
      .required(trans("errors.Password Field is Required"))
      .min(4, trans("errors.There must be Minimum of 4 Characters"))
      .max(30, trans("errors.Maximum of 30 Characters are allowed")),
  });
  const [LoginBtn, setLoginBtn] = useState(false);
  const [countryCode, setcountryCode] = useState("US");
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  // localStorage.removeItem("email");
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        setcountryCode(response.countryCode);
        // console.log("Country is : ", response);
      })
      .catch((data, status) => {
        // dispatch(
        //   setSnackbar(true, "error", "Could not fetch your Country Code.")
        // );
        console.log("Request failed:", data);
      });
  }, []);

  const onSubmitForm = async (data) => {
    data.country_code = countryCode;
    data.device = "web";
    data.push_token =
      "dmuWFsEDSTGSBgv_cDINt0:APA91bHbfnY0L6lzVHxEDAcYvibDV4LHhMiOFx3drXz569WgS78CXZeiBhmTjAMW34V-uZf2HPrgj2iMYXTUMsPH4bhgjUEj_SIyjEyHzn-PMQMJ6I5pl6nvLmXUtjNbIy0bibOz4hFv";
    data.signup_channel = "email";
    setLoginBtn(true);
    props.loginUser(data);
    setLoginBtn(false);
  };
  return (
    <>
      <Theme>
        <div className="col s11 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8 my_login ps_relative">
          <form
            className="login-form login_white"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <LoginTitle
              icon="/images/logo/ft-icon-white.svg"
              title="Log Into Your Account"
              subtitle="Log in to continue to FamilyTime Dashboard"
            />
            {loginFormFields.map((input, key) => {
              return (
                <div key={key}>
                  <Input
                    className={errors[input.name]?.className}
                    type={input.type}
                    name={input.name}
                    icon={input.icon}
                    icon_alt={input.icon_alt}
                    label={trans(`inputFields.${input.label}`)}
                    autoComplete={
                      input.autoComplete ? input.autoComplete : "false"
                    }
                    className={errors[input.name] ? "test" : ""}
                    registered={register}
                  />

                  <span className="error_login">
                    {errors[input.name]?.message}
                  </span>
                </div>
              );
            })}
            <div className="row margin pt-3">
              <div className="input-field col s12 ">
                <button
                  className="col s12 login_btn login_btn_3 "
                  type="submit"
                  disabled={props.loginReducerStates.loginButton}
                  // onClick={submitForm}
                >
                  {props.loginReducerStates.loginButton === true ? (
                    "Logging In..."
                  ) : (
                    <>
                      Login
                      {/* <img src="images/icon/arrow-left_blue.svg" alt="" /> */}
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="row margin bottom_link">
              <div className="input-field col s12 m12 mb-0">
                <p className="margin right-align medium-small">
                  <Link to="/forgot_password" className="fotgot_p">
                    Forgot password?
                  </Link>
                </p>
              </div>
            </div>
          </form>

          <LoginFooter />
        </div>
      </Theme>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loginReducerStates: state.loginReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
