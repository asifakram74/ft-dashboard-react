import { ReqPost } from "../../../configs/Request";
import {
  loginInitiated,
  loginSuccess,
  loginFailed,
  emailChange,
} from "./actions";
import { history } from "../../../configs/history";
import { setSnackbar } from "../../Snackbar/snackbar";
import { userInitiated } from "../user/actions";
import { pushNotificationSettings } from "../../../constants/FormFields";
import i18n from "../../../i18n";
import { UpdateUserDetails } from "../user/update-language-async-action";
import { authenticateUser } from "../user/async-action";
export const loginUser = (data) => async (dispatch) => {
  // let history = createBrowserHistory({ forceRefresh: true });
  dispatch(loginInitiated());

  try {
    const res = await ReqPost("login", data);
    // console.log(res, data);
    if (res.data.data === null && res.data.status === true) {
      dispatch(loginFailed());
      localStorage.setItem("email", data.email);
      dispatch(emailChange(data.email));
      history.push("/confirm_email");
      history.go();
      dispatch(setSnackbar(true, "success", res.data.message));
      return;
    } else if (res.data.status === false) {
      dispatch(loginFailed());
      dispatch(setSnackbar(true, "error", res.data.error));
      return;
    }
    const accessToken = res.data.data.token;
    const user = res.data.data.user;
    const pushNotifications = pushNotificationSettings;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("isPushNotificationsOn", "true");
    localStorage.setItem("isEmailNotificationOn", "true");
    localStorage.setItem(
      "pushNotificationsList",
      JSON.stringify(pushNotifications)
    );
    console.log("out", user.language, localStorage.getItem("i18nextLng"));

    if (user.language != localStorage.getItem("i18nextLng")) {
      const data = {
        name: user.name,
        phone: user.phone,
        relationship: user.relationship,
        name: user.name,
        language: localStorage.getItem("i18nextLng"),
      };
      console.log("in", data);
      // i18n.changeLanguage(user.language);
      UpdateUserDetails(data);
      authenticateUser();
    }
    history.push("/");
    // history.go();
    dispatch(loginSuccess());
    dispatch(userInitiated(user));
    dispatch(setSnackbar(true, "success", "Logged in Successfully"));
    // console.log(res.data);
    return;
  } catch (error) {
    dispatch(loginFailed());
    if (!error.response) {
      dispatch(
        setSnackbar(
          true,
          "error",
          "Network Error! Please check your Internet Connection"
        )
      );
    }
  }
};
