/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/globalComponents/Layout";
import Loader from "../../components/globalComponents/Loaders/Loader";
import { DaysDifferenceInHumanReadable } from "../../shared/utility";
import { allNotifications } from "../../store/dashboard/notifications/notifications-async-action";
import NoDataBlock from "../Dashboard/Components/NoDataBlock";
import SingleNotification from "./SingleNotification";
const Notification = (props) => {
	useEffect(() => {
		if (!props.allNotificationsData.data) {
			props.allNotifications();
		}
	}, []);

	return (
		<>
			<Layout title={props.title}>
				{/* <Toptitle title="Notifications" history={history} /> */}
				{props.allNotificationsData.isSuccess && props.userReducer.isSuccess ? (
					[
						props.allNotificationsData.data.length > 0 ? (
							props.allNotificationsData.data.map((item) => {
								let status = item.billing_status.split(",");
								if (status.includes(props.userReducer.user.billing_status)) {
									return (
										<div key={item.id}>
											<SingleNotification
												data_id={item.id}
												img={item.image_url}
												note="New"
												url="#"
												title={item.title}
												description={item.feed_snippet}
												day={DaysDifferenceInHumanReadable(item.updated_at)}
											/>
										</div>
									);
								}
							})
						) : (
							<NoDataBlock
								img="/images/icon/home_notification.svg"
								text="No Notifications Yet !"
								subtitle="Check this section for updates, news and general notifications."></NoDataBlock>
						),
					]
				) : (
					<Loader />
				)}
			</Layout>
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		allNotificationsData: state.allNotificationsData,
		userReducer: state.userReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		allNotifications: () => dispatch(allNotifications()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
