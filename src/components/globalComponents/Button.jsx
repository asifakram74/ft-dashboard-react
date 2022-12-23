/** @format */

import React from "react";
import Button from "@material-ui/core/Button";
function MaterialButton(props) {
	return (
		<>
			<div className="section bottom_btn">
				<Button fullWidth className="update_btn no-shadow" {...props}>
					{props.title}
					<span>
						<img src={props.img} alt="" />
					</span>
				</Button>
			</div>
		</>
	);
}

export default MaterialButton;
