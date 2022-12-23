/** @format */

import React from "react";
import Layout from "../../../../../../components/globalComponents/Layout";

// import Button from "../../../../../../components/globalComponents/Button";
import Button from "../../../../../../components/globalComponents/Button";
import ScheduleTimeCard from "../ScheduleScreenTime/ScheduleTimeCard";
import Weekdays from "../ScheduleScreenTime/Icon/Weekdays";
import Weekend from "../ScheduleScreenTime/Icon/Weekend";
import InternetSchedule from "../ScheduleScreenTime/Icon/InternetSchedule";

const InternetSchedules = () => {
	return (
		<div>
			<Layout title="Schedule Screen " mainClass="schedulescreentime">
				<ScheduleTimeCard
					title="Bed Time"
					subtitle="Screen Time Lock"
					time="00:00 - 13:30"
					avatar={<Weekdays />}
				/>
				<ScheduleTimeCard
					title="Dinner Time"
					subtitle="Screen Time Lock"
					time="00:00 - 13:30"
					avatar={<Weekend />}
				/>
				<ScheduleTimeCard
					title="Homework Time"
					subtitle="Screen Time Lock"
					time="00:00 - 13:30"
					avatar={<Weekdays />}
				/>
				<ScheduleTimeCard
					title="New"
					subtitle="Screen Time Lock"
					time="00:00 - 13:30"
					avatar={<InternetSchedule />}
				/>
				<Button title="Add New Schedule"> </Button>
			</Layout>
		</div>
	);
};

export default InternetSchedules;
