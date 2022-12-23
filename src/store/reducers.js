import { combineReducers } from "redux";
import snackbarReducer from "./Snackbar/snackbar";
import loginReducer from "./authentication/login/reducer";
import userReducer from "./authentication/user/reducer";
import homeReducer from "./dashboard/home/reducer";
import sidebarToggle from "./sidebar/reducer";
import allNotificationsData from "./dashboard/notifications/reducer";
import sweetAlertReducer from "./alert/reducer";
import coparentsReducer from "./dashboard/coparents/reducer";
import timezonesreducer from "./utils/timezone/reducer";
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  homeReducer: homeReducer,
  userReducer: userReducer,
  allNotificationsData: allNotificationsData,
  sidebarToggle: sidebarToggle,
  snackbar: snackbarReducer,
  sweetAlertReducer: sweetAlertReducer,
  coparentsReducer: coparentsReducer,
  timezones: timezonesreducer,
});

export default rootReducer;
