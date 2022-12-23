/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import {
	Link,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";

const ActivityCard = (props) => {
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<>
			<Grid item xs={6} sm={6}>
				<div className={`bg ${mainClass}`}>
					<a
						// className="change_password_btn account_card_a text-left"
						href={props.link}>
						{" "}
						<List>
							<img src={props.image} alt={props.imagealt} className="topicon" />

							<ListItem>
								<ListItemText
									primary={props.title}
									secondary={props.subtitle}
								/>
								<ListItemSecondaryAction>
									<img src={props.icon} alt="right arrow" />
								</ListItemSecondaryAction>
							</ListItem>
						</List>
					</a>
				</div>
			</Grid>
		</>
	);
};

export default ActivityCard;
