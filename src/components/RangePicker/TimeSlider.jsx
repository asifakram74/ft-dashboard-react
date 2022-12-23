/** @format */

import React, { useCallback, useState } from "react";
import { render } from "react-dom";
import TimeRangeSlider from "react-time-range-slider";
const TimeSlider = () => {
	const [value, setValue] = useState({
		start: "00:00",
		end: "23:59",
	});
	const timeChangeHandler = useCallback((time) => {
		setValue(time);
	}, []);
	return (
		<div>
			<div className="dl-flex">
				<div className="start-time">
					<p>Start Time:</p>
					<h2> {value.start}</h2>
				</div>
				<div className="end-time">
					<p>Start Time:</p>
					<h2> {value.end}</h2>
				</div>
			</div>

			<TimeRangeSlider
				disabled={false}
				format={24}
				maxValue={"23:30"}
				minValue={"00:00"}
				name={"time_range"}
				onChange={timeChangeHandler}
				step={30}
				value={value}
			/>
		</div>
	);
};
export default TimeSlider;
