/** @format */

import {
	Checkbox,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
} from "@material-ui/core";
import React from "react";
import Card from "../../../../components/globalComponents/Card";

import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import SafeSearch from "../../../../assets/images/icon/safe-search-instance.svg";

const ListCard = (props) => {
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<div className={`list-mui ${mainClass}`}>
						<List>
							<ListItem>
								<ListItemAvatar>
									<img src={props.avatar} alt={props.title} />
								</ListItemAvatar>

								<ListItemText
									primary={props.title}
									secondary={props.subtitle}
								/>

								{props.children}

								<ListItemSecondaryAction>
									<IconButton edge="end" className="checkbox-mui">
										<Checkbox
											icon={<CircleUnchecked />}
											checkedIcon={<CircleCheckedFilled />}
											name="test"
										/>
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default ListCard;
