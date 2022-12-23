/** @format */

import React, { useState } from "react";
import Layout from "../../../../../../components/globalComponents/Layout";

// import Button from "../../../../../../components/globalComponents/Button";
import Button from "../../../../../../components/globalComponents/Button";
import ScheduleTimeCard from "../ScheduleScreenTime/ScheduleTimeCard";
import Weekdays from "../ScheduleScreenTime/Icon/Weekdays";
import Weekend from "../ScheduleScreenTime/Icon/Weekend";
import InternetSchedule from "../ScheduleScreenTime/Icon/InternetSchedule";
import Card from "../../../../../../components/globalComponents/Card";
import DailyApp from "../../../../../../assets/images/icon/daily-app-limit.svg";
import {
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	TextField,
} from "@material-ui/core";
import TimeSlider from "../../../../../../components/RangePicker/TimeSlider";
import SweetAlert from "react-bootstrap-sweetalert";

const NewSchedule = () => {
	const [dayone, setDayOne] = useState(true);
	const [daytwo, setDayTwo] = useState(true);
	const [daythree, setDayThree] = useState(true);
	const [dayfour, setDayFour] = useState(true);
	const [dayfive, setDayFive] = useState(true);
	const [daysix, setDaySix] = useState(true);
	const [dayseven, setDaySeven] = useState(true);
	const [schedule, setSchedule] = useState(false);

	const ChangeDayOne = () => {
		setDayOne((prev) => !prev);
	};
	const ChangeDayTwo = () => {
		setDayTwo((prev) => !prev);
	};
	const ChangeDayThree = () => {
		setDayThree((prev) => !prev);
	};
	const ChangeDayFour = () => {
		setDayFour((prev) => !prev);
	};
	const ChangeDayFive = () => {
		setDayFive((prev) => !prev);
	};
	const ChangeDaySix = () => {
		setDaySix((prev) => !prev);
	};
	const ChangeDaySeven = () => {
		setDaySeven((prev) => !prev);
	};
	return (
		<div>
			<Layout title="Schedule Screen " mainClass="newschedule">
				<Card>
					<img src={DailyApp} alt="" />
					<List>
						<ListItem>
							<ListItemText
								primary="Enable Internet Schedule"
								secondary="Set up internet allowance schedules to avoid excessive internet usage."
							/>
						</ListItem>
						<ListItemSecondaryAction>
							<div className="text-right notification_date">
								{/* <CheckBox /> */}
								<div className="switch right schedule_toggle">
									<input type="checkbox" id="switch" />
									<label for="switch"></label>
								</div>
							</div>
						</ListItemSecondaryAction>
					</List>
				</Card>

				<Card>
					<TextField
						fullWidth
						// required
						id="name"
						label="Name"
						name="name"
					/>

					<TimeSlider />
					<hr />

					<div className="schedulescreentime">
						<h5>Select Days In Week</h5>
						<ul className="weekend-list">
							<li
								className={dayone ? "mon" : "mon days-disable"}
								onClick={ChangeDayOne}>
								MO
							</li>
							<li
								className={daytwo ? "tu" : "tu days-disable"}
								onClick={ChangeDayTwo}>
								TU
							</li>
							<li
								className={daythree ? "we" : "we days-disable"}
								onClick={ChangeDayThree}>
								WE
							</li>
							<li
								className={dayfour ? "th" : "th days-disable"}
								onClick={ChangeDayFour}>
								TH
							</li>
							<li
								className={dayfive ? "fr" : "fr days-disable"}
								onClick={ChangeDayFive}>
								FR
							</li>
							<li
								className={daysix ? "sa" : "sa days-disable"}
								onClick={ChangeDaySix}>
								SA
							</li>
							<li
								className={dayseven ? "su" : "su days-disable"}
								onClick={ChangeDaySeven}>
								SU
							</li>
						</ul>
					</div>
				</Card>

				<Button title="Save" onClick={() => setSchedule(true)}>
					{" "}
				</Button>

				{/* Sweet Alert (POPUP) */}
				<div className="swal_al">
					<SweetAlert
						custom
						show={schedule}
						title="Successful!"
						onConfirm={() => setSchedule(false)}
						onCancel={() => setSchedule(false)}
						confirmBtnText="OK"
						customIcon="/Images/icon/Tick-illustration.svg"
						customClass="sweet_alert">
						<div className="swt_alert">
							<p>Internet access schedule is saved successfully.</p>
						</div>
					</SweetAlert>
				</div>
			</Layout>
		</div>
	);
};

export default NewSchedule;
