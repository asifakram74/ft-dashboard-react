/** @format */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider, Link, Typography } from "@material-ui/core";
import Icon from "../../../../../../assets/images/icon/account-ico-blue.svg";
const WatchListCard = (props) => {
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<ListItem className={`${mainClass}`}>
			<ListItemAvatar>
				<img src={Icon} alt={props.title} />
				{/* <img src={props.image} alt={props.title} /> */}
			</ListItemAvatar>

			{/* <ListItemText
				primary={props.title}
				secondary={props.description}
				secondary={props.description}
			/> */}
			<ListItemText
				primary={props.title}
				secondary={
					<React.Fragment>
						<Typography component="p">
							{props.description}
							<br />
						</Typography>
						{props.description2}
					</React.Fragment>
				}
			/>
			<ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
		</ListItem>
	);
};

export default WatchListCard;
