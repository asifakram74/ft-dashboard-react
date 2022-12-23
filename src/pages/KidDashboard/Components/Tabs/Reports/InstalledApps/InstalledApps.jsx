/** @format */
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Card from "../../../../../../components/globalComponents/Card";
import Layout from "../../../../../../components/globalComponents/Layout";
import Item from "../../../Globel/Item";
import {
	installedApps,
	installedAppsCatogories,
} from "../../../../../../constants/ViewLists";
import ListCard from "../../../Globel/ListCard";
import AppListCard from "./AppListCard";

const InstalledApps = () => {
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div>
			<Layout title="Installed Apps " mainClass="installedapps">
				<Card mainClass="">
					<h2>Apps List</h2>
					<TabContext value={value}>
						<AppBar position="static">
							<TabList onChange={handleChange} aria-label="simple tabs example">
								<Tab label="Apps (8)" value="1" />
								<Tab label="Categories (5)" value="2" />
							</TabList>
						</AppBar>
						<TabPanel value="1" className="">
							<div className=" applist">
								
								{installedApps.map((item) => {
									return (
										<AppListCard
											icon={item.image}
											title={item.title}
											description={item.description}
											date={item.righttext}
										/>
									);
								})}
							</div>
						</TabPanel>
						<TabPanel value="2">
							<div className=" applist">
								{installedAppsCatogories.map((item) => {
									return (
										<AppListCard
											icon={item.image}
											title={item.title}
											description={item.description}
										/>
									);
								})}
							</div>
						</TabPanel>
					</TabContext>
				</Card>
			</Layout>
		</div>
	);
};

export default InstalledApps;
