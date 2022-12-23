/** @format */

import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Button from "../../../../../components/globalComponents/Button";
import { Link } from "@material-ui/core";
import { setupSteps } from "../../../../../constants/ViewLists";

const SimpleInstructionsRender = (props) => {
	// useEffect(() => {
	//   if (!props.homeResponse.data) {
	//     props.homeData();
	//   }
	// }, []);
	const { user } = props;

	return (
		<div>
			<div className="setupkids">
				<Card>
					<div className="setupkids_bg">
						<div className="">
							<h3>Setup Your Kid Device</h3>
							<p>Perform all these steps on your kid’s device</p>
						</div>
					</div>

					<List>
						{setupSteps.map((step, index) => {
							return (
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<img src={step.image} alt="" />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										primary={step.title}
										secondary={step.description}
									/>
								</ListItem>
							);
						})}
					</List>
				</Card>
				<Link
					target="_blank"
					href="https://familytime.io/how-to-install/familytime-child-app.html?utm_source=FTD&amp;utm_medium=androidapp&amp;utm_campaign=ActivateChild">
					<Button
						title="View Detailed Instructions"
						img="/images/icon/browser_link_icon.svg"></Button>
				</Link>
			</div>
		</div>
	);
};

export default SimpleInstructionsRender;
