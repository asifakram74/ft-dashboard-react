import { ReqPut } from "../../../configs/Request";
import { CheckAuthentication } from "../../../shared/utility";
import { setSnackbar } from "../../Snackbar/snackbar";
import {
  authenticationFailed,
  authenticationInitiated,
  authenticationSuccess,
  userUpdated,
} from "./actions";

export const UpdateUserDetails = (data) => async (dispatch) => {
  //   dispatch(authenticationInitiated());
  //   console.log();
  try {
    const res = await ReqPut("/user", data, "MeshServ");
    if (res.data.status === 200 || res.data.status === true) {
      dispatch(userUpdated());
    } else if (res.data.status === 500) {
      dispatch(setSnackbar(true, "error", res.data.message));
    } else {
      CheckAuthentication(res);
      dispatch(setSnackbar(true, "error", "Could not Update!"));
    }
    console.log("Response", res);
  } catch (error) {
    console.log("error updating...");
  }
};
