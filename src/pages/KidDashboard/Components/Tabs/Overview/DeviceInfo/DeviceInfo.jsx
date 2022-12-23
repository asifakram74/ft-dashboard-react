/** @format */

import React from "react";
import Card from "../../../../../../components/globalComponents/Card";
import Grid from "@material-ui/core/Grid";

const DeviceInfoCard = (props) => {
	return (
		<>
			<Grid item xs={6} sm={6}>
				<div className="infocard">
					<img src={props.img} alt={props.alt} />
					<h6>{props.subtitle}</h6>
					<h5>{props.title} </h5>
				</div>
			</Grid>
		</>
	);
};
const index = () => {
	return (
		<>
			<div className="deviceinfo">
				<Card>
					<Grid container direction="row" justify="center" alignItems="center">
						<DeviceInfoCard
							img="Images/icon/battrey-ico.svg"
							subtitle="Battery"
							title="80%"
							alt="Battery"
						/>
						<DeviceInfoCard
							img="Images/icon/wifi-icon.svg"
							subtitle="WIFI"
							title="ABC Internet"
							alt="WIFI"
						/>
						<DeviceInfoCard
							img="Images/icon/language_ico_red.svg"
							subtitle="Language"
							title="English"
							alt="Language"
						/>
						<DeviceInfoCard
							img="Images/icon/timezone-ico.svg"
							subtitle="TimeZone"
							title="+ 0500 "
							alt="TimeZone"
						/>
						<DeviceInfoCard
							img="Images/icon/familytime.svg"
							subtitle="App Version  "
							title="3.0.6.3217.p"
							alt="App Version"
						/>
						<DeviceInfoCard
							img="Images/icon/app_build_icon.svg"
							subtitle="Build"
							title="3217"
							alt="Build"
						/>
					</Grid>
				</Card>
			</div>
		</>
	);
};

export default index;
