/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

export default function LabTabs() {
	const [value, setValue] = React.useState("1");

	const tabChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<TabContext value={value}>
				<AppBar position="static">
					<TabList onChange={tabChange}>
						<Tab label="Controls" value="1" />
						<Tab label="Reports" value="2" />
						<Tab label="Controls" value="3" />
					</TabList>
				</AppBar>
			</TabContext>
		</div>
	);
}
