/** @format */

import { ReqGet } from "../../../configs/Request";
import { CheckAuthentication } from "../../../shared/utility";
import {
  notificationsAtlaunchFailed,
  notificationsAtlaunchInitiated,
  notificationsAtlaunchSuccess,
} from "./actions";

export const atlaunchNotification = () => async (dispatch) => {
  dispatch(notificationsAtlaunchInitiated());
  try {
    const res = await ReqGet("notifications/feeds/atlaunch", "MeshServ");
    // console.log("feeds/atlaunch", res);

    if (res.data.status === false || res.data.status !== 200) {
      dispatch(notificationsAtlaunchFailed());
      CheckAuthentication(res);
    }
    if (res.data.status === true || res.data.status === 200) {
      dispatch(notificationsAtlaunchSuccess(res.data.feed_data));
      // console.log(res.data);
      // dispatch(homeResponse(res.data.data));
    }
  } catch (error) {
    console.log("notifications catch", error.response);
  }
};
