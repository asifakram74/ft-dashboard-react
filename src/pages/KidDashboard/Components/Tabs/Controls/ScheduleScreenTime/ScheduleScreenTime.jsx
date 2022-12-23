/** @format */

import React from "react";
import Layout from "../../../../../../components/globalComponents/Layout";
import ScheduleTimeCard from "./ScheduleTimeCard";
import Bedtime from "./Icon/Bedtime";
import DinnerTime from "./Icon/DinnerTime";
import HomeWork from "./Icon/Weekend copy";
// import Button from "../../../../../../components/globalComponents/Button";
import Button from "../../../../../../components/globalComponents/Button";

const ScheduleScreenTime = () => {
	return (
		<div>
			<Layout title="Schedule Screen " mainClass="schedulescreentime">
				<ScheduleTimeCard
					title="Bed Time"
					subtitle="Screen Time Lock"
					time="00:00 - 13:30"
					avatar={<Bedtime />}
				/>
				<ScheduleTimeCard
					title="Dinner Time"
					subtitle="Screen Time Lock"
					time="00:00 - 13:30"
					avatar={<DinnerTime />}
				/>
				<ScheduleTimeCard
					title="Homework Time"
					subtitle="Screen Time Lock"
					time="00:00 - 13:30"
					avatar={<HomeWork />}
				/>

				<Button title="Add New Schedule"> </Button>
			</Layout>
		</div>
	);
};

export default ScheduleScreenTime;
