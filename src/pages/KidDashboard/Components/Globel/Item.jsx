/** @format */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
// import { Link } from "@material-ui/core";
import { Link } from "react-router-dom";

const Item = (props) => {
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<div className={`  ${mainClass}`}>
			<Link to={props.url}>
				<ListItem>
					<ListItemAvatar>
						<img src={props.icon} alt={props.title} />
						{/* <img src={props.image} alt={props.title} /> */}
					</ListItemAvatar>

					<ListItemText primary={props.title} secondary={props.description} />

					<ListItemSecondaryAction>
						{props.children}
						<img src={props.rightIcon} alt={props.title} />
					</ListItemSecondaryAction>
				</ListItem>
			</Link>
		</div>
	);
};

export default Item;
