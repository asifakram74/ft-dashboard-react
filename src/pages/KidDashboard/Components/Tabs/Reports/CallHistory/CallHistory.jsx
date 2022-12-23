/** @format */

import React from "react";
import Layout from "../../../../../../components/globalComponents/Layout";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "../../../../../../components/globalComponents/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Account_Blue from "../../../../../../assets/images/icon/account-ico-blue.svg";
import Communication from "../../../../../../assets/images/icon/communication.svg";
import Incoming from "../../../../../../assets/images/icon/call-incomming.svg";
import Account_Skyblue from "../../../../../../assets/images/icon/account-ico-skyblue.svg";
import Account_Yellow from "../../../../../../assets/images/icon/account-ico-yellow.svg";

import Account_Red from "../../../../../../assets/images/icon/account-ico-red.svg";
import Games from "../../../../../../assets/images/icon/games.svg";
import { Link } from "react-router-dom";

import ProgressBar from "../AppUsages/ProgressBar";
import ArrowBottom from "../AppUsages/ArrowBottom";
import RecordCard from "./RecordCard";
import HistoryCard from "./HistoryCard";
import TitlewithMenu from "../../Controls/Component/TitlewithMenu";
import DropDownList from "../../Controls/Component/DropDownList";
import Search from "../../../../../../assets/images/icon/search.svg";

const CallHistory = () => {
	const [day, setDay] = React.useState("");

	const handleChange = (event) => {
		setDay(event.target.value);
	};

	return (
		<div>
			<Layout title="Call History">
				<div className="appusage callhistory ">
					<Card>
						<div className="dl-flex">
							<div>
								<h5>Total Talk Time</h5>
								<h2>48m 20s</h2>
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
										<MenuItem value={20}>
											<Link>Last Month</Link>
										</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
						<hr />
						<div className="dl-flex">
							<RecordCard
								text="Incoming"
								subtitle="10m 5s"
								mainClass="incoming"
							/>
							<RecordCard
								text="Outgoing"
								subtitle="38m 15s"
								mainClass="outgoing"
							/>
							<RecordCard text="Missed" subtitle="12" mainClass="missing" />
						</div>
						<div className="secondline">
							<hr />
							<div>
								<h4>Most Called</h4>
							</div>
							<div className=" listitem ">
								<HistoryCard
									icon={Account_Blue}
									title="Sam"
									description="+1 1234 567 890"
									date="3m 10s"
									// subtitle="18 Sep 2020 , 17:15"

									// icon2={Incoming}
								/>
								<HistoryCard
									icon={Account_Skyblue}
									title="Sam"
									description="+1 1234 567 890"
									date="3m 10s"
									// subtitle="18 Sep 2020 , 17:15"

									// icon2={Incoming}
								/>
								<HistoryCard
									icon={Account_Yellow}
									title="Sam"
									description="+1 1234 567 890"
									date="3m 10s"
									// subtitle="18 Sep 2020 , 17:15"

									// icon2={Incoming}
								/>
							</div>
						</div>
					</Card>
					<Card mainClass="all-logs ">
						<TitlewithMenu title="All Logs" number="(142)">
							<DropDownList className id="edit" link="/" title="Edit" />
						</TitlewithMenu>
						<div className="search-box">
							<img src={Search} alt="" />

							<input type="text" Placeholder="Search Contacts" />
						</div>
						<div className="secondline">
							<div className=" listitem ">
								<HistoryCard
									icon={Account_Red}
									title="Sam"
									description="+1 1234 567 890"
									date="3m 10s"
									subtitle="18 Sep 2020 , 17:15"
									icon2={Incoming}
								/>
								<HistoryCard
									icon={Account_Blue}
									title="Sam"
									description="+1 1234 567 890"
									date="3m 10s"
									subtitle="18 Sep 2020 , 17:15"
									icon2={Incoming}
								/>
								<HistoryCard
									icon={Account_Yellow}
									title="Sam"
									description="+1 1234 567 890"
									date="3m 10s"
									subtitle="18 Sep 2020 , 17:15"
									icon2={Incoming}
								/>
								<HistoryCard
									icon={Account_Skyblue}
									title="Sam"
									description="+1 1234 567 890"
									date="3m 10s"
									subtitle="18 Sep 2020 , 17:15"
									icon2={Incoming}
								/>
							</div>
						</div>
					</Card>
				</div>
			</Layout>
		</div>
	);
};

export default CallHistory;
