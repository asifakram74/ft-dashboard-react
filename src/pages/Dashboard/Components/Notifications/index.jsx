/** @format */

import React, { useState } from "react";
import Notification from "./Notification";
import NoDataBlock from "../NoDataBlock";
import Card from "../../../../components/globalComponents/Card";
import { DaysDifferenceInHumanReadable } from "../../../../shared/utility";
import { Link } from "react-router-dom";
import _ from "lodash";
const Notifications = (props) => {
	const renderNotification = (notificationsLists) => {
		return (
			<ul className="home_Notifications">
				<Card mainClass="list-style-n" childClass="text-left">
					{notificationsLists.slice(0, 4).map((notification) => {
						let status = notification.billing_status.split(",");
						if (status.includes(user.user.billing_status)) {
							return (
								<li key={notification.id} className="home_notification">
									<Notification
										data_id={notification.id}
										name={notification.title}
										img="/images/icon/notification-icon.svg"
										date={DaysDifferenceInHumanReadable(
											notification.updated_at,
										)}
										icon={notification.icon}
									/>
								</li>
							);
						}
					})}

					{_.size(notificationsLists) > 3 && (
						<div className="text-center">
							<Link to="/notifications"> View All</Link>
						</div>
					)}
				</Card>
			</ul>
		);
	};

	const { notifications, user } = props;
	return (
		<div>
			{notifications.data && notifications.data.length > 0 ? (
				renderNotification(notifications.data)
			) : (
				<NoDataBlock
					img="/images/icon/home_notification.svg"
					text="No Notifications Yet !"></NoDataBlock>
			)}
		</div>
	);
};

export default Notifications;
