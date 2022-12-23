/** @format */

import React from "react";

const Progress = (props) => {
	const { bgcolor, completed } = props;
	const containerStyles = {
		borderRadius: 50,
		margin: 0,
	};

	const fillerStyles = {
		height: "4px",
		width: `${completed}%`,
		backgroundColor: bgcolor,
		borderRadius: "inherit",
		textAlign: "right",
	};

	const labelStyles = {
		padding: 5,
		color: "#A2A2A2",
		// fontWeight: "bold",
	};

	return (
		<div style={containerStyles}>
			<div style={fillerStyles} className="progressbar">
				<span style={labelStyles}>{`${completed}%`}</span>
			</div>
		</div>
	);
};

const testData = [{ bgcolor: "#34E8C7", completed: 30 }];

const ProgressBar = (props) => {
	return (
		<div className="">
			{testData.map((item, idx) => (
				<Progress key={idx} bgcolor={item.bgcolor} completed={item.completed} />
			))}
		</div>
	);
};

export default ProgressBar;
