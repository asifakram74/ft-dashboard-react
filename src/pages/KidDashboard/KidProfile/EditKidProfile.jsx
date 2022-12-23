/** @format */

import React, { useEffect, useState } from "react";
import Button from "../../../components/globalComponents/Button";
import Layout from "../../../components/globalComponents/Layout";
import Card from "../../../components/globalComponents/Card";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SweetAlert from "react-bootstrap-sweetalert";
import "date-fns";
import {
	Capitalize,
	CheckAuthentication,
	normalizePhoneNumber,
	removeSpacesFromString,
	stringToLowercase,
} from "../../../shared/utility";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import _ from "lodash";
import { setSnackbar } from "../../../store/Snackbar/snackbar";
import { useDispatch } from "react-redux";
import { ReqPut } from "../../../configs/Request";
import MaleAvatar from "../../../assets/images/icon/avatar-male.svg";
import FemaleAvatar from "../../../assets/images/icon/female-avatar2.svg";
import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@material-ui/core";
// import Button from "@material-ui/core/Button";
const EditKidProfile = (props) => {
	const { t: trans } = useTranslation();
	const { data, timezoneData, child_id } = props;
	const device_info = data.device_info;
	const timezones = timezoneData.data;
	//   console.log("timezoneData data", data);
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
		phone: yup
			.string()
			.required(trans("errors.Phone Field is Required"))
			.min(13, trans("errors.Minimum of 13 Characters are allowed"))
			.max(20, trans("errors.Maximum of 20 Characters are allowed")),
	});
	const [selectedDate, setSelectedDate] = useState(new Date("2014-08-18"));
	const { register, handleSubmit, errors, setValue, control } = useForm({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			birthday: selectedDate,
			gender: "male",
			time_zone: "",
		},
		resolver: yupResolver(schema),
	});
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	const [update, setUpdate] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		const genderCapitalize = Capitalize(device_info.gender);
		const timezoneArray = device_info.time_zone.split(" ");
		// console.log("split", device_info.time_zone.split(" "));
		if (_.size(timezoneArray) === 2) {
			setValue("time_zone", timezoneArray[1]);
		} else {
			const timezoneWithoutSpaces = removeSpacesFromString(
				device_info.time_zone,
			);
			setValue("time_zone", timezoneWithoutSpaces);
		}
		setValue("name", device_info.name);
		setValue("phone", device_info.phone);
		setValue("email", device_info.email);
		// setValue("time_zone", "Asia/Karachi");
		setValue("gender", genderCapitalize);
	}, []);
	const onSubmitForm = async (data) => {
		// console.log("dataa", data);
		// SetToggleButton(true);
		try {
			const res = await ReqPut(`device/update/${child_id}`, data, "MeshServ");
			//   console.log("res.data", res.data);

			// SetToggleButton(false);
			if (res.data.status === 200 || res.data.status === true) {
				setUpdate(true);
				props.homeDataCall();
			} else if (
				res.data.status === 320 ||
				res.data.status === 404 ||
				res.data.status === 500
			) {
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
	return (
		<>
			<Layout title={props.title}>
				<div className="account-setting">
					<form
						className="parent_account_form"
						onSubmit={handleSubmit(onSubmitForm)}>
						<Card>
							<List className="account-top_info">
								<ListItem>
									<ListItemAvatar>
										<img
											src={
												stringToLowercase(device_info.gender) === "male"
													? MaleAvatar
													: FemaleAvatar
											}
											alt=""
											className="circle responsive-img activator card-profile-image  padding-0"
										/>
									</ListItemAvatar>
									<ListItemText
										primary={device_info.name}
										secondary={device_info.device_name}
									/>
								</ListItem>
							</List>

							{/* <div className="row account-top_info">
								<div className="col s3 m2 l2 image-avater">
									<img
										src={
											stringToLowercase(device_info.gender) === "male"
												? MaleAvatar
												: FemaleAvatar
										}
										alt=""
										className="circle responsive-img activator card-profile-image  padding-0"
									/>
								</div>
								<div className="col s12 m9 l10 user-detail text-left pl-0">
									<h5 className="card-title activator grey-text text-darken-4">
										{device_info.name}
									</h5>
									<p>{device_info.device_name}</p>
								</div>
							</div> */}

							<h3 className="basic_info text-left mb-3">Contact Information</h3>

							<TextField
								fullWidth
								id="name"
								name="name"
								label="Name"
								inputRef={register}
								error={!!errors.name}
								helperText={errors?.name?.message}
							/>
							<TextField
								fullWidth
								id="email"
								name="email"
								label="Email"
								inputRef={register}
								error={!!errors.email}
								helperText={errors?.email?.message}
							/>
							<TextField
								fullWidth
								id="phone"
								label="Phone"
								name="phone"
								type="tel"
								inputRef={register}
								onChange={(event) => {
									event.target.value = normalizePhoneNumber(event.target.value);
								}}
								error={!!errors.phone}
								helperText={errors?.phone?.message}
							/>
							{/* <MuiPhoneNumber
                fullWidth
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={'pk'}
                // disableDropdown={true}
                // onlyCountries={['pk', 'us', 'kz']}
                // preferredCountries={['pk', 'us', 'kz']}
                defaultValue="0321467211"
              /> */}
							<h3 className="basic_info text-left mb-1 mt-2 basic_information">
								Basic Information
							</h3>

							{/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  fullWidth
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date of Birth"
                  format="MM/dd/yyyy"
                  name="birthday"
                  // value={selectedDate}
                  // onChange={handleDateChange}
                  inputRef={register}
                  error={!!errors.birthday}
                  helperText={errors?.birthday?.message}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider> */}
							<FormControl fullWidth className="mb-22">
								<InputLabel id="demo-simple-select-label">Gender</InputLabel>
								<Controller
									render={(props) => (
										<Select value={props.value} onChange={props.onChange}>
											<MenuItem value="Male">Male</MenuItem>
											<MenuItem value="Female">Female</MenuItem>
										</Select>
									)}
									name="gender"
									control={control}
								/>
							</FormControl>

							{/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  onChange={handleChange}
                  defaultValue="10"
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl> */}
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
								<Controller
									render={(props) => (
										<Select value={props.value} onChange={props.onChange}>
											{_.sortBy(timezones, "sort_order").map((timezone) => {
												return (
													<MenuItem value={timezone.time_zone}>
														{timezone.time_offset} {timezone.time_zone}
													</MenuItem>
												);
											})}
										</Select>
									)}
									name="time_zone"
									control={control}
								/>
							</FormControl>
							{/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
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
						</Card>
						{/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
            >
              Update
            </Button> */}
						<Button type="submit" title="Save" />
					</form>
				</div>
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
					customIcon="/Images/icon/Tick-illustration.svg"
					customClass="sweet_alert">
					<div className="swt_alert">
						<p>Your Kid profile information is saved successfully.</p>
					</div>
				</SweetAlert>
			</div>
			{/* Popup close */}
		</>
	);
};
export default EditKidProfile;
