/** @format */

import { MenuItem } from "@material-ui/core";
import React from "react";

const DropDownList = (props) => {
	return (
		<>
			<MenuItem onClick={props.clicked}>
				<a className="grey-text text-darken-1" href={props.link}>
					<i className="material-icons" {...props}>
						{props.icon}
					</i>{" "}
					{props.title}
				</a>
			</MenuItem>
		</>
	);
};

export default DropDownList;
