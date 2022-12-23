/** @format */

import React, { useState } from "react";
import Layout from "../../components/globalComponents/Layout";
import Card from "../../components/globalComponents/Card";
import Button from "../../components/globalComponents/Button";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

import SweetAlert from "react-bootstrap-sweetalert";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ReqPost } from "../../configs/Request";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../../store/Snackbar/snackbar";
import { CheckAuthentication } from "../../shared/utility";
import VisibilityIcon from "./VisibilityIcon";
import VisibilityOffIcon from "./VisibilityOffIcon";
const ChangePassword = (props) => {
	const { t: trans } = useTranslation();
	const schema = yup.object().shape({
		current_password: yup
			.string()
			.required("Please enter your Current Password"),
		new_password: yup
			.string()
			.required("Please enter your password")
			.matches(
				/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
				"Password must contain at least 8 characters, one uppercase, one number and one special case character",
			),
		confirm_password: yup
			.string()
			.required("Please confirm your password")
			.oneOf([yup.ref("new_password"), null], "Passwords don't match."),
	});
	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(schema),
		mode: "onBlur",
		defaultValues: {
			current_password: "",
			new_password: "",
			confirm_password: "",
		},
	});
	// if (errors) {
	//   console.log('errors', errors);
	// }
	const [update, setUpdate] = useState(false);
	const [values, setValues] = useState({
		showCurrentPassword: false,
		showNewPassword: false,
		showConfirmPassword: false,
	});
	const [toggleButton, SetToggleButton] = useState(false);
	const dispatch = useDispatch();
	const handleClickShowPassword = (prop) => (event) => {
		setValues({ ...values, [prop]: !values[prop] });
	};
	const onSubmit = async (data) => {
		SetToggleButton(true);
		try {
			const res = await ReqPost("/changepassword", data, "MeshServ");
			console.log("response", res);
			if (res.data.status === 200 || res.data.status === true) {
				// dispatch(setSnackbar(true, "success", res.data.message));
				setUpdate(true);
				reset();
			} else if (res.data.status === 100) {
				dispatch(setSnackbar(true, "error", res.data.message));
			} else {
				CheckAuthentication(res);
				dispatch(setSnackbar(true, "error", "Could not Update!"));
			}
			SetToggleButton(false);

			console.log("Response", res);
		} catch (error) {
			console.log("error updating...");
		}
		// reset();
		console.log("data", data);
	};
	return (
		<>
			<Layout title={props.title}>
				<div className="change_password_temp">
					<form
						className="parent_account_form"
						onSubmit={handleSubmit(onSubmit)}>
						<Card>
							<h2 className="heading_sub left-align left">
								Change Your Account Password
							</h2>
							<FormControl className="form-pad" fullWidth>
								<InputLabel htmlFor="cpass">Current Password</InputLabel>
								<Input
									id="cpass"
									type={values.showCurrentPassword ? "text" : "password"}
									// value={values.currentPassword}
									// onChange={handleChange("currentPassword")}
									name="current_password"
									inputRef={register}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword(
													"showCurrentPassword",
												)}>
												{values.showCurrentPassword ? (
													<VisibilityIcon />
												) : (
													<VisibilityOffIcon />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>

								{errors?.current_password && (
									<span className="error_chnage_password">
										<img src="/images/icon/error-icon.svg" alt="" />
										{errors?.current_password?.message}
									</span>
								)}
							</FormControl>
							<FormControl className="form-pad" fullWidth>
								<InputLabel htmlFor="new_pass1">New Password</InputLabel>
								<Input
									id="new_pass1"
									type={values.showNewPassword ? "text" : "password"}
									// value={values.newPassword}
									// onChange={handleChange("newPassword")}
									name="new_password"
									inputRef={register}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword("showNewPassword")}>
												{values.showNewPassword ? (
													<VisibilityIcon />
												) : (
													<VisibilityOffIcon />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
								{errors?.new_password && (
									<span className="error_chnage_password">
										<img src="/images/icon/error-icon.svg" alt="" />
										{errors?.new_password?.message}
									</span>
								)}
							</FormControl>

							<FormControl className="form-pad" fullWidth>
								<InputLabel htmlFor="new_pass1">Confirm Password</InputLabel>
								<Input
									id="new_pass1"
									type={values.showConfirmPassword ? "text" : "password"}
									// value={values.confirmPassword}
									// onChange={handleChange("confirmPassword")}
									name="confirm_password"
									inputRef={register}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword(
													"showConfirmPassword",
												)}>
												{values.showConfirmPassword ? (
													<VisibilityIcon />
												) : (
													<VisibilityOffIcon />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>

								{errors?.confirm_password && (
									<span className="error_chnage_password">
										<img src="/images/icon/error-icon.svg" alt="" />
										{errors?.confirm_password?.message}
									</span>
								)}

								{/* <span className="error_chnage_password">
                  {errors?.confirm_password?.message}
                </span> */}
							</FormControl>

							<div className="change_password">
								<p>
									New Password must be:
									<br />
									- 8 Character Long
									<br />
									- Uppercase (A-Z)
									<br />
									- Lowercase (a-z)
									<br />- Number (0-9)
									<br /> - Symbol (@,$)
								</p>
							</div>
						</Card>

						{/* <Button title=" Update Password" onClick={() => setUpdate(true)} /> */}
						{toggleButton ? (
							<Button title="Updating..." disabled={true} />
						) : (
							<Button
								title="Update Password"
								onClick={handleSubmit(onSubmit)}
							/>
						)}
					</form>
				</div>
			</Layout>

			{/* Sweet Alert (POPUP) */}
			<div className="swal_al">
				<SweetAlert
					custom
					show={update}
					title={trans("success.Successful!")}
					onConfirm={() => setUpdate(false)}
					onCancel={() => setUpdate(false)}
					confirmBtnText="OK"
					customIcon="/Images/icon/Tick-illustration.svg"
					customClass="sweet_alert">
					<div className="swt_alert">
						<p>
							{trans("success.Your Password has been changed successfully!")}
						</p>
					</div>
				</SweetAlert>
			</div>
			{/* Popup close */}
		</>
	);
};

export default ChangePassword;
