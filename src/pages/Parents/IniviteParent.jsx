/** @format */

import React, { useState } from "react";
import Layout from "../../components/globalComponents/Layout";
import Card from "../../components/globalComponents/Card";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { ReqPost } from "../../configs/Request";
import { setSnackbar } from "../../store/Snackbar/snackbar";
import { CheckAuthentication } from "../../shared/utility";
import { connect, useDispatch } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
import { getCoparents } from "../../store/dashboard/coparents/async-action";
import { history } from "../../configs/history";
import Button from "../../components/globalComponents/Button";

const InviteParent = (props) => {
  const { t: trans } = useTranslation();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required(trans("errors.Name Field is Required"))
      .max(50, trans("errors.Maximum of 50 characters are allowed")),
    email: yup
      .string()
      .email(trans("errors.Input a Valid Email Address"))
      .required(trans("errors.Email Field is Required"))
      .max(50, trans("errors.Maximum of 50 characters are allowed")),
  });
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [update, setUpdate] = useState(false);
  const [alertData, setAlertData] = useState("");
  const [toggleButton, SetToggleButton] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    SetToggleButton(true);
    try {
      const res = await ReqPost("coparent/invite", data, "MeshServ");
      console.log("res.data", res.data);

      SetToggleButton(false);
      CheckAuthentication(res);
      if (res.data.status === 200 || res.data.status === true) {
        setUpdate(true);
        setAlertData(res.data.message);
        // dispatch(setSnackbar(true, "success", res.data.message));
      } else if (res.data.status === 500) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else {
        dispatch(setSnackbar(true, "error", res.data.message));
      }
      console.log("Response", res);
    } catch (error) {
      console.log("error updating...");
    }
    // console.
  };
  const onConfirmation = () => {
    setUpdate(false);
    props.getCoparents();
    reset();
    history.push("/parents");
  };
  return (
    <>
      <Layout title={props.title} mainClass="invite_parent_page">
        <Card mainClass="m-2" childClass="invite_parent_image inner">
          <img src="/images/icon/invite send.svg" alt="" />
          <p>
            Invite another parent or guardian to access your FamilyTime account
            from their device.
          </p>

          <form className="invite_form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              // required
              id="name"
              label="Name"
              name="name"
              inputRef={register}
              error={!!errors.name}
              helperText={
                errors?.name?.message && (
                  <span className="error_chnage_password">
                    <img src="/images/icon/error-icon.svg" alt="" />
                    {errors?.name?.message}
                  </span>
                )
              }
            />
            <TextField
              fullWidth
              // required
              id="email"
              label="Email"
              name="email"
              inputRef={register}
              error={!!errors.email}
              helperText={
                errors?.email?.message && (
                  <span className="error_chnage_password">
                    <img src="/images/icon/error-icon.svg" alt="" />
                    {errors?.email?.message}
                  </span>
                )
              }
            />

            <div className="row">
              <div className="col s12 m12 l12">
                <button
                  className="update_btn "
                  type="submit"
                  disabled={toggleButton}
                >
                  {toggleButton === true ? "Sending..." : "Send Invitation"}
                </button>
              </div>
            </div>
          </form>
        </Card>
      </Layout>

      {/* Sweet Alert (POPUP) */}
      {alertData && (
        <div className="swal_al">
          <SweetAlert
            custom
            show={update}
            title={trans("success.Successful!")}
            onConfirm={onConfirmation}
            onCancel={onConfirmation}
            confirmBtnText="OK"
            customIcon="/Images/icon/Tick-illustration.svg"
            customClass="sweet_alert invite_parent_alert"
          >
            <div className="swt_alert ">
              <p>
                {/* {trans("success.Your Password has been changed successfully!")} */}
                {alertData}
              </p>
            </div>
          </SweetAlert>
        </div>
      )}
      {/* Popup close */}
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCoparents: () => dispatch(getCoparents()),
  };
};
export default connect(null, mapDispatchToProps)(InviteParent);
