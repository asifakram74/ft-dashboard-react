import { ReqGet } from "../../../configs/Request";
import { CheckAuthentication } from "../../../shared/utility";
import {
  authenticationFailed,
  authenticationInitiated,
  authenticationSuccess,
} from "./actions";

export const authenticateUser = () => async (dispatch) => {
  dispatch(authenticationInitiated());
  try {
    const res = await ReqGet("validate-token");
    if (res.data.status === false) {
      dispatch(authenticationFailed());
      CheckAuthentication(res);
    }
    if (res.data.status === true) {
      dispatch(authenticationSuccess(res.data.data.user));
    }
    return;
  } catch (error) {
    dispatch(authenticationFailed());
  }
};
