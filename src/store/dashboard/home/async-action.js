import { ReqGet } from "../../../configs/Request";
import {
  homeInitiated,
  homeFailed,
  homeSuccess,
  homeResponse,
} from "./actions";
import { setSnackbar } from "../../Snackbar/snackbar";
import { history } from "../../../configs/history";
import { CheckAuthentication } from "../../../shared/utility";
import _ from "lodash";
export const homeData = () => async (dispatch) => {
  dispatch(homeInitiated());
  try {
    // const token = localStorage.getItem("accessToken");
    const res = await ReqGet("home");
    console.log("data", res);
    if (res.data.status === false) {
      dispatch(homeFailed());
      CheckAuthentication(res);
    }
    if (res.data.status === true) {
      dispatch(homeSuccess(res.data.data));
      if (!_.get(localStorage, "isAllPhoneLocked")) {
        localStorage.setItem(
          "isAllPhoneLocked",
          res.data.data.quick_control.is_phone_locked
        );
      }
      if (!_.get(localStorage, "isAllInternetLocked")) {
        localStorage.setItem(
          "isAllInternetLocked",
          res.data.data.quick_control.is_internet_blocked
        );
      }
    }
    return;
  } catch (error) {
    console.log("error", error);
    dispatch(homeFailed());
    if (error.response) {
      dispatch(setSnackbar(true, "error", error.response.data.message));
    }
    if (error) {
      dispatch(setSnackbar(true, "error", "Something went wrong"));
    }
    return;
  }
};
