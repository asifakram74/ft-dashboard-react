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
import { setuptStepskids } from "../../../../../constants/ViewLists";

const QrInstructionRender = (props) => {
	const { user } = props;
	var QRCode = require("qrcode.react");
	const QrToConvert = `user-${user.user_id}-${user.email}`;
	const encodedString = btoa(QrToConvert);
	return (
		<div>
			<div className="setupkids qr_code_com">
				<Card>
					<div className="setupkids_bg_blue">
						<div className="qr_code">
							<div className="qr_code_border">
								<QRCode value={encodedString} renderAs="svg" />
							</div>
						</div>
					</div>
					<div className="kidsdevice">
						<h3 className="">Setup Your Kid Device</h3>
						<p>Perform all these steps on your kid's device</p>
					</div>
					<List>
						{setuptStepskids.map((step, index) => {
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

export default QrInstructionRender;
