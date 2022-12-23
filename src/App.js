/** @format */

import React from "react";
import Parents from "./pages/Parents/Parents";
/* import Theme from './Theme'*/
import Setting from "./pages/Setting";
import ChangePassword from "./pages/Account/ChangePassword";
import Home from "./pages/Dashboard/Home";
import Emptyparent from "./pages/Emptyparent";
import InviteParent from "./pages/Parents/IniviteParent";
import Invitenotification from "./pages/Invitenotification";
import { Route, Router, Switch } from "react-router-dom";
import Account from "./pages/Account/Account";
import Account_notification from "./pages/Account/Account_notification";
import Qr_Screen from "./pages/Qr_Screen";
import Setup_Device from "./pages/Setup_Device";
import Notification from "./pages/Notifications/Notification";
import Internet_Filters from "./pages/Internet_Filters";
import Internet_Schedule from "./pages/Internet_Schedule";
import Device_Information from "./pages/Device_Information";
import Device_Passcode from "./pages/Device_Passcode";
import Login from "./pages/Authentication/Login";
import KidProfile from "./pages/KidDashboard/KidProfile/KidProfile";
import Places from "./pages/Places";
import Confirm_Email from "./pages/Authentication/Confirm_Email";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Changepass2 from "./pages/Changepass2";
import New_Schedule from "./pages/New_Schedule";
import NativeSelects from "./components/Snackbar";
import index from "./pages/KidDashboard/index";
import { Redirect } from "react-router-dom";
import { history } from "./configs/history";
import Snackbar from "./components/Snackbar";
import Modals from "./components/Modals/modals";
import ProtectedRoute from "./shared/ProtectedRoute";
import PrivateRoute from "./shared/PrivateRoute";
import SetupKids from "./pages/Dashboard/Components/SetupKids/SetupKids";
import Notification_detail from "./pages/Notifications/Notification_detail";
import InternetFilter from "./pages/KidDashboard/Components/Tabs/Controls/internetFilter/internetFilter";
import ScheduleScreenTime from "./pages/KidDashboard/Components/Tabs/Controls/ScheduleScreenTime/ScheduleScreenTime";
import InternetSchedules from "./pages/KidDashboard/Components/Tabs/Controls/InternetSchedules/InternetSchedules";
import RangeSlider from "./pages/KidDashboard/Components/Tabs/Controls/InternetSchedules/RangeSlider";
import DevicePasscode from "./pages/KidDashboard/Components/Tabs/Overview/DevicePasscode/DevicePasscode";
import AppUsage from "./pages/KidDashboard/Components/Tabs/Reports/AppUsages/AppUsage";
import HelpDesk from "./pages/HelpDesk/HelpDesk";
import TimeSlider from "./components/RangePicker/TimeSlider";
import SchedulesDetail from "./pages/KidDashboard/Components/Tabs/Controls/InternetSchedules/NewSchedule";
import InstalledApps from "./pages/KidDashboard/Components/Tabs/Reports/InstalledApps/InstalledApps";
import Contacts from "./pages/KidDashboard/Components/Tabs/Reports/Contacts/Contacts";
import ContactWatchlist from "./pages/KidDashboard/Components/Tabs/Controls/ContactWatchlist/ContactWatchlist";
import GoogleMaps from "./components/Maps/GoogleMaps";
import AppBlocker from "./pages/KidDashboard/Components/Tabs/Controls/AppBlocker/AppBlocker";
import Testing from "./pages/Extra/Testing";
import CallHistory from "./pages/KidDashboard/Components/Tabs/Reports/CallHistory/CallHistory";
import AppLimit from "./pages/KidDashboard/Components/Tabs/Controls/AppLimit/AppLimit";
// import "./custom.css";
const App = () => {
	return (
		<Router history={history}>
			<>
				<Snackbar />

				<Switch>
					<Route
						exact
						path="/call_history"
						component={CallHistory}
						title="App Blocker"
					/>
					<Route
						exact
						path="/timepicker"
						component={Testing}
						title="App Blocker"
					/>

					<Route
						exact
						path="/app_blocker"
						component={AppBlocker}
						title="App Blocker"
					/>

					<Route
						exact
						path="/contact_watch_list"
						component={ContactWatchlist}
						title="Contact Watch list"
					/>

					<Route
						exact
						path="/installed_apps"
						component={InstalledApps}
						title="Installed Apps"
					/>
					<Route
						exact
						path="/kids_contacts"
						component={Contacts}
						title="Installed Apps"
					/>

					<Route
						exact
						path="/SchedulesDetail"
						component={SchedulesDetail}
						title="New Schedule"
					/>
					<Route
						exact
						path="/RangeSlider"
						component={RangeSlider}
						title="Range Slider"
					/>
					<Route
						exact
						path="/HelpDesk"
						component={HelpDesk}
						title="Range Slider"
					/>

					<Route
						exact
						path="/DevicePasscode"
						component={DevicePasscode}
						title="Device Passcode"
					/>
					<Route
						exact
						path="/app_usage"
						component={AppUsage}
						title="App Usage"
					/>

					{/* Public Routes */}
					<PrivateRoute exact path="/login" component={Login} title="Login" />
					<PrivateRoute
						exact
						path="/forgot_password"
						component={ForgotPassword}
						title="Forget Password"
					/>

					{/* ProtectedRoutes */}

					<ProtectedRoute exact path="/" component={Home} title="Home" />
					<ProtectedRoute
						exact
						path="/Setting"
						component={Setting}
						title="Settings"
					/>
					<ProtectedRoute
						exact
						path="/maps"
						component={GoogleMaps}
						title="GoogleMaps"
					/>

					<Route
						exact
						path="/app-limit"
						component={AppLimit}
						title="App Limit"
					/>

					<ProtectedRoute
						exact
						path="/kid_dashboard"
						component={index}
						title="Kid Dashboard"
					/>

					<ProtectedRoute
						exact
						path="/kid_profile"
						component={KidProfile}
						title="Kid Profile"
					/>
					<ProtectedRoute
						exact
						path="/Places"
						component={Places}
						title="Places"
					/>
					<PrivateRoute
						exact
						path="/Confirm_Email"
						component={Confirm_Email}
						title="Confirm Email"
					/>
					{/* <Route exact path="/ForgotPassword" component={ForgotPassword} title="Kid Profile" /> */}

					<Route
						exact
						path="/New_Schedule"
						component={New_Schedule}
						title="New Schedule"
					/>
					<Route exact path="/account" component={Account} title="Account" />
					<Route
						exact
						path="/setup_Child"
						component={SetupKids}
						title="Setup Child"
					/>
					<Route
						exact
						path="/Changepass2"
						component={Changepass2}
						title="Change Password"
					/>
					<Route
						exact
						path="/internet_filter"
						component={InternetFilter}
						title="Internet Filter"
					/>
					<Route
						exact
						path="/schedule_screen_time"
						component={ScheduleScreenTime}
						title="Schedule Screen"
					/>
					<Route
						exact
						path="/internet_schedules"
						component={InternetSchedules}
						title="Internet Schedule"
					/>

					<Route
						exact
						path="/Snackbar"
						component={NativeSelects}
						title="NativeSelects"
					/>
					<ProtectedRoute
						exact
						path="/parents"
						component={Parents}
						title="Parents"
					/>
					<ProtectedRoute exact path="/Emptyparent" component={Emptyparent} />
					<ProtectedRoute
						exact
						path="/invite_parent"
						component={InviteParent}
						title="Invite Parent"
					/>
					<ProtectedRoute
						exact
						path="/change_password"
						component={ChangePassword}
						title="Change Password"
					/>
					<ProtectedRoute
						exact
						path="/Invitenotification"
						component={Invitenotification}
						title="Invite Notification"
					/>
					<ProtectedRoute
						exact
						path="/Qr_Screen"
						component={TimeSlider}
						title="QR Scan"
					/>
					<ProtectedRoute
						exact
						path="/Setup_Device"
						component={Setup_Device}
						title="Setup Device"
					/>
					<ProtectedRoute
						exact
						path="/Account_notification"
						component={Account_notification}
						title="Account Notification"
					/>
					<ProtectedRoute
						exact
						path="/notifications"
						component={Notification}
						title="Notifications"
					/>
					<ProtectedRoute
						exact
						path="/notifications/:id"
						component={Notification_detail}
						title="Notification Detail"
					/>
					<ProtectedRoute
						exact
						path="/Internet_Filters"
						component={Internet_Filters}
						title="Internet Filters"
					/>
					<ProtectedRoute
						exact
						path="/Internet_Schedule"
						component={Internet_Schedule}
						title="Internet Schedule"
					/>
					<ProtectedRoute
						exact
						path="/Device_Information"
						component={Device_Information}
						title="Device Information"
					/>
					<Route exact path="/modal" component={Modals} title="Modals" />
				</Switch>
			</>
		</Router>
	);
};

export default App;
