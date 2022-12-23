/** @format */

import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../../../../../../components/globalComponents/Layout";
import Button from "../../../../../../components/globalComponents/Button";
import Card from "../../../../../../components/globalComponents/Card";
import PasscodeIlustaration from "../../../../../../assets/images/icon/Passcode_ilustaration.svg";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "../../../../../Account/VisibilityIcon";
import VisibilityOffIcon from "../../../../../Account/VisibilityOffIcon";

const DevicePasscode = () => {
	const [values, setValues] = useState({
		showPasscode: false,
	});
	const handleClickShowPassword = (prop) => (event) => {
		setValues({ ...values, [prop]: !values[prop] });
	};
	return (
		<div>
			<Layout>
				<div className="account-setting text-center devicepasscode">
					<Card>
						<Grid container className="single_notification">
							<Grid item xs={12}>
								<img src={PasscodeIlustaration} alt="" />
							</Grid>
							<Grid item xs={12} className="text-center pt-1">
								<h4 className="mt-0">Set Or Change Device Passcode</h4>
								<p className="sub-title">
									To change passcode, Please enter the new passcode and tap on
									set button. Enter atleast <span>4 characters.</span>
								</p>
							</Grid>
							<FormControl className="form-pad" fullWidth>
								<InputLabel htmlFor="cpass">Passcode</InputLabel>
								<Input
									id="cpass"
									type={values.showPasscode ? "text" : "password"}
									// value={values.currentPassword}
									// onChange={handleChange("currentPassword")}
									name="device_Passcode"
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword("showPasscode")}>
												{values.showPasscode ? (
													<VisibilityIcon />
												) : (
													<VisibilityOffIcon />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>

							<Grid item xs={12}>
								<Button title="Set Passcode" />
							</Grid>
						</Grid>
					</Card>
				</div>
			</Layout>
		</div>
	);
};

export default DevicePasscode;
