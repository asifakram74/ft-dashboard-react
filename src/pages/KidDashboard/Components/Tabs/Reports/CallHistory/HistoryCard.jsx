/** @format */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, Typography } from "@material-ui/core";

const HistoryCard = (props) => {
	const mainClass = props.mainClass != null ? props.mainClass : "";
	const { icon, title, subtitle, icon2 } = props;

	return (
		<ListItem className={`${mainClass}`}>
			<ListItemAvatar>{icon && <img src={icon} alt={title} />}</ListItemAvatar>

			<ListItemText
				primary={title}
				secondary={
					<React.Fragment>
						<Typography component="p">
							{props.description}
							<br />
						</Typography>
						{icon2 && (
							<>
								<img src={icon2} alt={title} /> |<span> {subtitle}</span>
							</>
						)}
					</React.Fragment>
				}
			/>
			<ListItemSecondaryAction>
				{props.children}
				<p>{props.date} </p>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default HistoryCard;
