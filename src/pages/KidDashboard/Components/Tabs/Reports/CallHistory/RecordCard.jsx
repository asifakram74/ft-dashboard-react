/** @format */

import React from "react";

const RecordCard = (props) => {
	const { img, text, subtitle } = props;
	const mainClass = props.mainClass != null ? props.mainClass : "";

	return (
		<div className={`dl-flex ${mainClass}`}>
			{img && <img src={img} alt="" />}
			<div>
				<h5>{text}</h5>
				<h2>{subtitle}</h2>
			</div>
		</div>
	);
};

export default RecordCard;
