/** @format */

import { Menu, IconButton } from "@material-ui/core";
import React, { useState } from "react";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const TitlewithMenu = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [parentremove, setParentremove] = useState(false);

	const SdropDown = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (props) => {
		setAnchorEl(null);
	};
	return (
		<div>
			<div className="dl-flex titlewithicon">
				<h5>
					{props.title} <span> {props.number}</span>
				</h5>
				{
					<IconButton
						aria-label="settings"
						onClick={SdropDown}
						aria-haspopup="true">
						<MoreVertIcon />
					</IconButton>
				}
			</div>

			<div className="top_dropdown">
				<Menu
					id="settings"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
					MenuListProps={{ disablePadding: true }}
					menuprops={{ disableScrollLock: true }}>
					{props.children}
				</Menu>
			</div>
		</div>
	);
};

export default TitlewithMenu;
