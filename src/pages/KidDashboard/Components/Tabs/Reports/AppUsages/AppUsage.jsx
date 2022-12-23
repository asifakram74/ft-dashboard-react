/** @format */

import React from "react";
import Layout from "../../../../../../components/globalComponents/Layout";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "../../../../../../components/globalComponents/Card";
import Settung from "../../../../../../assets/images/icon/setting-icon.svg";
import Download from "../../../../../../assets/images/icon/download-icon.svg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Arrow from "../../../../../../assets/images/icon/bottom-arrow.svg";
import Communication from "../../../../../../assets/images/icon/communication.svg";

import Catogory from "../../../../../../assets/images/icon/general-category.svg";
import Games from "../../../../../../assets/images/icon/games.svg";

import ArrowBottom from "./ArrowBottom";
import { CircularProgress } from "@material-ui/core";
import ProgressBar from "./ProgressBar";

const AppUsage = () => {
	const [day, setDay] = React.useState("");

	const handleChange = (event) => {
		setDay(event.target.value);
	};

	return (
		<div>
			<Layout>
				<div className="appusage">
					<Card>
						<div className="dl-flex">
							<div>
								<h5>Total App Usage</h5>
								<h2>9h, 8min</h2>
							</div>

							<div>
								<FormControl>
									<Select
										IconComponent={ArrowBottom}
										value={day}
										onChange={handleChange}
										displayEmpty
										inputProps={{ "aria-label": "Without label" }}>
										<MenuItem value="">Today</MenuItem>
										<MenuItem value={10}>Last Week</MenuItem>
										<MenuItem value={20}>Last Month</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
						<hr />
						<div className="dl-flex">
							<div className="dl-flex">
								<img src={Settung} alt="" />
								<div>
									<h5>System's Apps</h5>
									<h2>58min</h2>
								</div>
							</div>
							<div className="dl-flex">
								<img src={Download} alt="" />
								<div>
									<h5>Installed Apps</h5>
									<h2>1h, 04min</h2>
								</div>
							</div>
						</div>
					</Card>

					<Card mainClass="mostused">
						<div>
							<h2>Most Used</h2>
							<h5>By Categories (5)</h5>
						</div>
						<List>
							<ListItem>
								<ListItemAvatar>
									<img src={Communication} alt="Communication" />
								</ListItemAvatar>
								<ListItemText primary="Photos" secondary="Jan 9, 2014" />
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<img src={Catogory} alt="Communication" />
								</ListItemAvatar>
								<ListItemText primary="Work" secondary="Jan 7, 2014" />
							</ListItem>
							<ListItem>
								<ListItemAvatar>
									<img src={Games} alt="Communication" />
								</ListItemAvatar>
								<ListItemText primary="Vacation" secondary={<ProgressBar />} />
							</ListItem>
						</List>
					</Card>
				</div>
			</Layout>
		</div>
	);
};

export default AppUsage;
