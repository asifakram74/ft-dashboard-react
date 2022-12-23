/** @format */

import React from "react";

function Maintitle(props) {
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<>
			<div className={`row main-title w-100  ${mainClass}`}>
				<div className="col s8 m6">
					<h3>{props.title}</h3>
				</div>
				<div className="col s6 m6 l6 right-align">
					{props.kids && (
						<button onClick={props.Redirect}>
							<img src={props.icon} alt="" /> {props.text}
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default Maintitle;
