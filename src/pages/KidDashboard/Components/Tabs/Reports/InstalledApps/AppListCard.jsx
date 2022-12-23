/** @format */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@material-ui/core";

const AppListCard = (props) => {
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<ListItem className={`${mainClass}`}>
			<ListItemAvatar>
				<img src={props.icon} alt={props.title} />
				{/* <img src={props.image} alt={props.title} /> */}
			</ListItemAvatar>

			<ListItemText primary={props.title} secondary={props.description} />

			<ListItemSecondaryAction>
				{props.children}
				<p>{props.date} </p>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default AppListCard;
