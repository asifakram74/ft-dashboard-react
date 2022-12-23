/** @format */

import React, { useEffect, useState } from "react";
import moment from "moment";
import Card from "../../../components/globalComponents/Card";
import { Capitalize, DaysDifferenceFromToday } from "../../../shared/utility";
import { useTranslation } from "react-i18next";

const WelcomeBlock = (props) => {
	const [greetings, setGreetings] = useState("Hello");
	const { user } = props;
	const { t: trans } = useTranslation();

	// const user =
	const greeting = () => {
		var currentHour = moment().hour();
		if (currentHour >= 3 && currentHour < 12) {
			setGreetings("Good Morning");
		} else if (currentHour >= 12 && currentHour < 18) {
			setGreetings("Good Afternoon");
		} else if (currentHour >= 18 && currentHour < 20) {
			setGreetings("Good Evening");
		} else if (currentHour >= 20 && currentHour < 3) {
			setGreetings("Good Night");
		} else {
			setGreetings("Hello");
		}
	};
	useEffect(() => {
		greeting();
	}, []);

	var expiryDays = DaysDifferenceFromToday(user.expiry_date);
	// console.log("userrr", user, expiryDays, user.expiry_date);
	return (
		<div className="raduse-12 home_welcome">
			<Card>
				<h2>
					{trans(`text.${greetings}`)} <br /> {Capitalize(user.name)}
				</h2>

				<div className="home_welcome_bottom">
					{/* <div className="col  m6 m-0 p-0"> */}
					<div>
						<h3 className="">{Capitalize(user.billing_status)}</h3>
						{expiryDays < 10 && expiryDays > 0 && (
							<p>
								{expiryDays} {expiryDays > 1 ? "Days Left" : "Day Left"}{" "}
							</p>
						)}
					</div>
					{(user.billing_status === "FREE" ||
						user.billing_status === "TRIAL") && (
						// <div className="col p-0  m6 switch right schedule_toggle inner text-right">
						<div className="text-right">
							<a className="" href="/">
								Upgrade
							</a>
						</div>
					)}
				</div>
			</Card>
		</div>
	);
};

export default WelcomeBlock;
