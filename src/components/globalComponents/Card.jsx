/** @format */

import React from "react";

function Card(props) {
	const childClass =
		props.childClass != null ? props.childClass : "text-center";
	const mainClass = props.mainClass != null ? props.mainClass : "";
	return (
		<>
			<div className={`card raduse-16 my-shadow ${mainClass}`}>
				<div className="card-content">
					<div className="row">
						<div className={`col s12 m12 l12 ${childClass}`}>
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Card;
