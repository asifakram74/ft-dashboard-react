/** @format */

import React, { useEffect, useState } from "react";
import Button from "../../components/globalComponents/Button";
import Layout from "../../components/globalComponents/Layout";
import Card from "../../components/globalComponents/Card";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import SweetAlert from "react-bootstrap-sweetalert";
import MenuItem from "@material-ui/core/MenuItem";
import { connect, useDispatch } from "react-redux";
import { authenticateUser } from "../../store/authentication/user/async-action";
import Loader from "../../components/globalComponents/Loaders/Loader";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Capitalize,
  CheckAuthentication,
  normalizePhoneNumber,
} from "../../shared/utility";
import { languages } from "../../constants/FormFields";
import { ReqPut } from "../../configs/Request";
import { setSnackbar } from "../../store/Snackbar/snackbar";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/images/icon/RightArrowgray.svg";
import RightArrowBlue from "../../assets/images/icon/RightArrowBlue.svg";
import FemaleAvatar from "../../assets/images/icon/female-avatar.svg";
import MaleAvatar from "../../assets/images/icon/male_avatar.svg";
import SuccessIcon from "../../assets/images/icon/Tick-illustration.svg";
import i18n from "../../i18n";

const Account = (props) => {
  const { t: trans } = useTranslation();
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(/^[a-zA-Z ]+$/, "Should be of Letters only")
      .required(trans("errors.Name Field is Required"))
      .max(50, trans("errors.Maximum of 50 characters are allowed")),
    phone: yup
      .string()
      .required(trans("errors.Phone Field is Required"))
      .max(20, trans("errors.Maximum of 20 Characters are allowed")),
    relationship: yup
      .string()
      .required(trans("errors.Relationship Field is Required")),
    language: yup.string().required(trans("errors.Language Field is Required")),
  });
  const { register, handleSubmit, errors, setValue, control } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      relationship: "",
      language: "",
    },
    resolver: yupResolver(schema),
  });
  const [toggleButton, SetToggleButton] = useState(false);
  const [update, setUpdate] = useState(false);
  console.log("proppss", props);
  const { userReducer } = props;
  useEffect(() => {
    if (!userReducer) {
      props.authenticateUser();
    }
  }, []);
  useEffect(() => {
    if (userReducer) {
      setValue("name", userReducer.user.name);
      setValue("phone", userReducer.user.phone);
      setValue("relationship", userReducer.user.relationship);
      setValue("language", userReducer.user.language);
    }
    localStorage.setItem("i18nextLng", userReducer.user.language);
  }, ["", userReducer]);
  const dispatch = useDispatch();
  const [parent, setParent] = React.useState("20");
  const onSubmit = async (data) => {
    SetToggleButton(true);
    try {
      const res = await ReqPut("/user", data, "MeshServ");
      console.log("res.data", res.data);

      SetToggleButton(false);
      if (res.data.status === 200 || res.data.status === true) {
        props.authenticateUser();
        setUpdate(true);

        // dispatch(setSnackbar(true, "success", res.data.message));
      } else if (res.data.status === 500) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else {
        CheckAuthentication(res);
        dispatch(setSnackbar(true, "error", "Could not Update!"));
      }
      console.log("Response", res);
    } catch (error) {
      console.log("error updating...");
    }
  };
  useEffect(() => {
    if (userReducer.isSuccess) {
      i18n.changeLanguage(userReducer.user.language);
    }
  }, [userReducer]);
  return (
    <>
      <Layout title={props.title}>
        {userReducer.isSuccess ? (
          <>
            <div className="account-setting">
              <Card>
                <div className="row account-top_info">
                  <div className="col s3 m2 l2 image-avater">
                    <img
                      src={
                        userReducer.user.relationship == "Father"
                          ? MaleAvatar
                          : FemaleAvatar
                      }
                      alt=""
                      className="circle responsive-img activator card-profile-image  padding-0"
                    />
                  </div>
                  <div className="col s12 m9 l10 user-detail text-left pl-0">
                    <h5 className="card-title activator grey-text text-darken-4">
                      {Capitalize(userReducer.user.name)}
                    </h5>
                    <p>{userReducer.user.email}</p>
                    <span className="new badge my_bagge">
                      {Capitalize(userReducer.user.billing_status)}
                    </span>
                  </div>
                </div>
                <h3 className="basic_info text-left mb-3">Basic Information</h3>

                <form className="parent_account_form">
                  <TextField
                    fullWidth
                    // required
                    id="name"
                    label="Name"
                    name="name"
                    inputRef={register}
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                  />
                  <TextField
                    fullWidth
                    className="mb-20"
                    // required
                    id="phone"
                    label="Phone"
                    name="phone"
                    type="tel"
                    inputRef={register}
                    onChange={(event) => {
                      event.target.value = normalizePhoneNumber(
                        event.target.value
                      );
                    }}
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                  />
                  <FormControl fullWidth className="mb-15">
                    <InputLabel id="demo-simple-select-label">
                      Parent Role
                    </InputLabel>
                    <Controller
                      render={(props) => (
                        <Select value={props.value} onChange={props.onChange}>
                          <MenuItem value="Mother">Mother</MenuItem>
                          <MenuItem value="Father">Father</MenuItem>
                        </Select>
                      )}
                      name="relationship"
                      control={control}
                    />
                  </FormControl>

                  <FormControl fullWidth margin="dense">
                    <InputLabel id="demo-simple-select-label">
                      Language
                    </InputLabel>
                    <Controller
                      render={(props) => (
                        <Select value={props.value} onChange={props.onChange}>
                          {languages.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      )}
                      name="language"
                      control={control}
                    />
                  </FormControl>

                  {/* <MuiPhoneNumber
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    data-cy="user-phone"
                    defaultCountry={"pk"}
                    // disableDropdown={true}
                    // onlyCountries={['pk', 'us', 'kz']}
                    preferredCountries={["pk", "us", "kz"]}
                  />

                  {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Language
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={parent}
                      // onChange={handleChange}
                      defaultValue="10"
                    >
                      <MenuItem value={10}>English</MenuItem>
                      <MenuItem value={20}>Urdu</MenuItem>
                    </Select>
                  </FormControl> */}
                  {/* <button type="submit">Submit</button> */}
                </form>
              </Card>
            </div>
            <div className="account-card">
              <Card>
                <Link
                  className="change_password_btn account_card_a text-left"
                  to="/Account_notification"
                >
                  Notification Setting
                  <span className="material-icons dp48">
                    <img src={RightArrow} alt="" />
                  </span>
                </Link>
              </Card>
              <Card>
                <Link
                  className="change_password_btn text-left "
                  to="/change_password"
                >
                  Change Password
                  <span className="material-icons dp48">
                    <img src={RightArrowBlue} alt="" />
                  </span>
                </Link>
              </Card>
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              title={toggleButton ? "Saving..." : "Save"}
              disabled={toggleButton}
            />

            {/* {toggleButton ? (
							<Button title="Saving..." disabled={true} />
						) : (
							<Button onClick={handleSubmit(onSubmit)} title="Save" />
						)} */}
          </>
        ) : (
          <Loader />
        )}
      </Layout>

      {/* Sweet Alert (POPUP) */}
      <div className="swal_al">
        <SweetAlert
          custom
          show={update}
          title="Successful!"
          onConfirm={() => setUpdate(false)}
          onCancel={() => setUpdate(false)}
          confirmBtnText="OK"
          customIcon={SuccessIcon}
          customClass="sweet_alert"
        >
          <div className="swt_alert">
            <p>Your account information is saved successfully.</p>
          </div>
        </SweetAlert>
      </div>
      {/* Popup close */}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Account);
