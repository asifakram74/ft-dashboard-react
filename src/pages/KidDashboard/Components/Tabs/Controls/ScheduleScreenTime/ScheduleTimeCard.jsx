/** @format */

import React, { useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";
import Weekdays from "./Icon/Weekdays";
import Card from "../../../../../../components/globalComponents/Card";
import SweetAlert from "react-bootstrap-sweetalert";

const List = (props) => {
	return (
		<>
			<MenuItem onClick={props.clicked}>
				<a className="grey-text text-darken-1" href={props.link}>
					<i className="material-icons" {...props}>
						{props.icon}
					</i>{" "}
					{props.title}
				</a>
			</MenuItem>
		</>
	);
};
const ScheduleTimeCard = (props) => {
	const [parent, setParent] = useState(false);
	const [parentremove, setParentremove] = useState(false);

	const [anchorEl, setAnchorEl] = useState(null);
	// const user = JSON.parse(localStorage.getItem("user"));
	const SdropDown = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (props) => {
		setAnchorEl(null);
	};
	return (
		<div>
			<Card>
				<CardHeader
					avatar={<Weekdays />}
					{...props}
					action={
						<IconButton
							aria-label="settings"
							onClick={SdropDown}
							aria-haspopup="true">
							<MoreVertIcon />
						</IconButton>
					}
					title={props.title}
				/>

				<div className="top_dropdown">
					<Menu
						id="settings"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
						MenuListProps={{ disablePadding: true }}
						menuprops={{ disableScrollLock: true }}>
						<List className id="edit" link="/" title="Edit" />
						<List
							className
							id="delete"
							link="/"
							title="Delete"
							onClick={() => setParentremove(true)}
						/>
					</Menu>
				</div>
				<div>
					<Grid container alignItems="center">
						<Grid item sm={10} className="text-left">
							<h5>{props.subtitle}</h5>
						</Grid>

						<Grid item sm={2} className="text-right notification_date">
							{/* <CheckBox /> */}
							<div className="switch right schedule_toggle">
								<input type="checkbox" id="switch" />
								<label for="switch"></label>
							</div>
						</Grid>
					</Grid>
					<Grid container alignItems="center">
						<Grid item sm={12} className="text-left">
							<h2>{props.time}</h2>
						</Grid>
					</Grid>
					<hr />

					<div>
						<ul className="weekend-list">
							<li className="mon">MO</li>
							<li className="tu">TU</li>
							<li className="we">WE</li>
							<li className="th">TH</li>
							<li className="fr">FR</li>
							<li className="sa">SA</li>
							<li className="su">SU</li>
						</ul>
					</div>
				</div>
			</Card>

			{/* Sweet Alert (POPUP) */}
			<div className="swal_al">
				<SweetAlert
					custom
					show={parentremove}
					onConfirm={() => setParentremove(false)}
					onCancel={() => setParentremove(false)}
					confirmBtnText="Yes"
					customIcon="/Images/icon/delete-member.svg"
					customClass="sweet_alert remove_family "
					showCancel={true}
					cancelBtnText="No">
					<div className="swt_alert">
						<p>Do you want to remove this member from family?</p>
					</div>
				</SweetAlert>
			</div>
			{/* Popup close */}
		</div>
	);
};

export default ScheduleTimeCard;
