/** @format */
// import * as React from "react";
import { useState, useEffect } from "react";
import React from "react";

import { render } from "react-dom";

import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb,
	useCircularInputContext,
} from "react-circular-input";

const SingleRoundSlider = (props) => {
	const [value, setValue] = React.useState(0);
	// const stepValue = v => Math.round(v * 10) / 10
	const [currentTime, setCurrentTime] = useState(30);
	const [currentTimeText, setCurrentTimeText] = useState(0);
	const [current, setCurrent] = useState("00:0");
	const { initialMinute = 0, initialHour = 0 } = props;
	const [minutes, setMinutes] = React.useState(initialMinute);
	const [hour, setHour] = useState(initialHour);
	let myInterval = setInterval((value) => {
		if (value === 60) {
		}
	});
	useEffect(() => {
		var num = value * 1440;
		var hours = num / 60;
		var rhours = Math.floor(hours);
		var minutes = (hours - rhours) * 60;
		var rminutes = Math.round(minutes);
		setHour(rhours);
		setMinutes(rminutes);
	}, [value]);
	return (
		<div>
			<CircularInput value={value} onChange={setValue} className="progress-svg">
				<CircularTrack className="progress-circle" stroke-width="10" />
				<CircularProgress className="custom-progress" stroke-width="10" />
				<CircularThumb className="progress-icon" r="12" />

				<text x={100} y={106} textAnchor="middle" className="progress-text">
					{hour}

					<tspan>&nbsp;Hr </tspan>
					{minutes}
					<tspan>&nbsp;Min </tspan>
				</text>
			</CircularInput>
		</div>
	);
};

export default SingleRoundSlider;
