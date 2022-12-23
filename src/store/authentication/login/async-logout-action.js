import { history } from "../../../configs/history";

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("email");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("isAllInternetLocked");
  localStorage.removeItem("isAllPhoneLocked");
  localStorage.removeItem("isPushNotificationsOn");
  localStorage.removeItem("isEmailNotificationOn");
  localStorage.removeItem("pushNotificationsList");
  localStorage.removeItem("persist:reducer");
  dispatch({ type: "LOGOUT" });
  dispatch({ type: "HOME_ON_LOGOUT" });
  dispatch({ type: "LOGOUT_SIDEBAR" });
  dispatch({ type: "COPARENTS_LOGOUT" });
  dispatch({ type: "NOTIFICATION_LOGOUT" });
  dispatch({ type: "USER_LOGOUT" });

  history.push("/login");
  return;
};
