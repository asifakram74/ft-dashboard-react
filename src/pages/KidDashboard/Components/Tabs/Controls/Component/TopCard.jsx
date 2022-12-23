/** @format */

import {
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";
import React from "react";
import Card from "../../../../../../components/globalComponents/Card";

const TopCard = (props) => {
	return (
		<div>
			<Card>
				<img src={props.img} alt={props.title} />
				<List>
					<ListItem>
						<ListItemText primary={props.title} secondary={props.subtile} />
					</ListItem>
					<ListItemSecondaryAction>
						<div className="text-right notification_date">
							{/* <CheckBox /> */}
							<div className="switch right schedule_toggle">
								<input type="checkbox" id="switch" />
								<label for="switch"></label>
							</div>
						</div>
					</ListItemSecondaryAction>
				</List>
			</Card>
		</div>
	);
};

export default TopCard;
