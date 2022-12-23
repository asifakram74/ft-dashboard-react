/** @format */

import React, { useEffect } from "react";
import Maintitle from "../../components/globalComponents/Maintitle";
import Layout from "../../components/globalComponents/Layout";
import Notifications from "./Components/Notifications";
import Mykids from "./Components/MyKids";
import FamilyFeed from "./Components/FamilyFeed";
import WelcomeBlock from "./Components/WelcomeBlock";
import QuickControls from "./Components/QuickControls";
import { connect } from "react-redux";
import { homeData } from "../../store/dashboard/home/async-action";
import Loader from "../../components/globalComponents/Loaders/Loader";
import { authenticateUser } from "../../store/authentication/user/async-action";
import SetupKids from "./Components/SetupKids/SetupKids";
import { history } from "../../configs/history";
import { allNotifications } from "../../store/dashboard/notifications/notifications-async-action";
import NoDataBlock from "./Components/NoDataBlock";
import { atlaunchNotification } from "../../store/dashboard/notifications/notifications-atlaunch-async-action";
import AtlaunchNotification from "../Notifications/AtlaunchNotification";
import { store } from "../../store/configureStore";

const Home = (props) => {
	const { homeResponse, allNotificationsData, userReducer } = props;
	useEffect(() => {
		if (!homeResponse.data || !homeResponse.data.devices) {
			props.homeData();
		}
		if (!allNotificationsData.data) {
			props.allNotifications();
		}
		if (!allNotificationsData.atlaunchData) {
			props.atlaunchNotification();
		}
	}, []);
	//Redirect to Setup kids if the user has no kids added
	if (homeResponse.isSuccess) {
		if (
			!homeResponse.data.devices &&
			allNotificationsData.isAtlaunchToggle === false
		) {
			return <SetupKids />;
		}
	}
	const RedirectSetupKids = () => {
		history.push("/setup_child");
	};
	return (
		<>
			{allNotificationsData.atlaunchData &&
			allNotificationsData.isAtlaunchToggle &&
			(userReducer.user.billing_status == "FREE" ||
				userReducer.user.billing_status == "TRIAL") ? (
				<AtlaunchNotification
					data={allNotificationsData.atlaunchData[0]}
					close={true}
				/>
			) : (
				<Layout title={props.title} mainClass="home-main">
					{userReducer.isSuccess ? (
						<WelcomeBlock user={userReducer.user} />
					) : (
						<Loader />
					)}
					<Maintitle
						title="My Kids"
						url="/setup_child"
						icon="/Images/icon/plus-icon.svg"
						text="New Kid"
						kids={true}
						Redirect={RedirectSetupKids}
						mainClass="mykids_title"
					/>
					{homeResponse.isSuccess ? (
						<Mykids kids={homeResponse.data.devices} />
					) : (
						<Loader />
					)}
					{/* <Mykids homeResponse={homeResponse} /> */}

					<Maintitle title="Quick Controls" />
					{homeResponse.isSuccess ? (
						<QuickControls controls={homeResponse.data.quick_control} />
					) : (
						<Loader />
					)}

					<Maintitle title="Notifications" />
					{allNotificationsData.isSuccess && userReducer.isSuccess ? (
						<Notifications
							notifications={allNotificationsData}
							user={userReducer}
						/>
					) : (
						[
							allNotificationsData.isFailed ? (
								<NoDataBlock
									img="/images/icon/home_notification.svg"
									text="No Notifications Yet !"></NoDataBlock>
							) : (
								<Loader />
							),
						]
					)}
					<Maintitle title=" Family Feeds" />
					{homeResponse.isSuccess ? <FamilyFeed /> : <Loader />}
				</Layout>
			)}
		</>
	);
};
const mapStateToProps = (state) => {
	return {
		homeResponse: state.homeReducer,
		userReducer: state.userReducer,
		allNotificationsData: state.allNotificationsData,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		homeData: () => dispatch(homeData()),
		authenticateUser: () => dispatch(authenticateUser()),
		allNotifications: () => dispatch(allNotifications()),
		atlaunchNotification: () => dispatch(atlaunchNotification()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
