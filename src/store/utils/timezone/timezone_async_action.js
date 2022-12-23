import { ReqGet } from "../../../configs/Request";
import { CheckAuthentication } from "../../../shared/utility";
import { setSnackbar } from "../../Snackbar/snackbar";
import { timezoneFailed, timezoneInitiated, timezoneSuccess } from "./actions";

export const getTimezones = () => async (dispatch) => {
  dispatch(timezoneInitiated());
  try {
    const res = await ReqGet("settings/timezone", "MeshServ");
    CheckAuthentication(res);
    if (res.data.status === 200) {
      dispatch(timezoneSuccess(res.data));
    } else {
      dispatch(setSnackbar(true, "error", "Something Went Wrong!"));
    }
    return;
  } catch (error) {
    // console.log("error", error);
    dispatch(timezoneFailed());
    if (error.response) {
      dispatch(setSnackbar(true, "error", error.response.data.message));
    }
    if (error) {
      dispatch(setSnackbar(true, "error", "Something went wrong"));
    }
    return;
  }
};
