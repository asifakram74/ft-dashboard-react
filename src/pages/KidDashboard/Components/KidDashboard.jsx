/** @format */

import React from "react";
import Card from "../../../components/globalComponents/Card";
import { Link, Redirect } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import ChildHeader from ".";
import Overview from "./Tabs/Overview/index";
import Controls from "./Tabs/Controls/index";
import Reports from "./Tabs/Reports/index";
import EditKidProfile from "../KidProfile/EditKidProfile";
import { history } from "../../../configs/history";
// import Controls from '../../Dashboard/Components/QuickControls/Controls';

const KidDashboard = (props) => {
	const { data } = props;
	const [value, setValue] = React.useState("1");
	const tabChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div>
			<TabContext value={value}>
				<div className="raduse-12 child-header">
					<Card>
						<div
							className="edit_child"
							onClick={() => history.push("kid_profile")}>
							<Link>
								<img src="Images/icon/edit_icon.svg" alt="Edit" />
							</Link>
						</div>

						<ChildHeader data={data} />

						<AppBar position="static">
							<TabList onChange={tabChange}>
								<Tab label="Overview" value="1" />
								<Tab label="Reports" value="2" />
								<Tab label="Controls" value="3" />
							</TabList>
						</AppBar>
					</Card>
				</div>
				<div class="child_dashboard_body">
					<TabPanel value="1">
						<Overview data={data} />
					</TabPanel>
					<TabPanel value="2">
						<Reports />
					</TabPanel>
					<TabPanel value="3">
						<Controls />
					</TabPanel>
				</div>
			</TabContext>
		</div>
	);
};

export default KidDashboard;
