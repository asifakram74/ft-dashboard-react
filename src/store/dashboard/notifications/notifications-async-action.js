import { ReqGet } from "../../../configs/Request";
import { CheckAuthentication } from "../../../shared/utility";
import {
  notificationsFailed,
  notificationsInitiated,
  notificationsSuccess,
} from "./actions";

export const allNotifications = () => async (dispatch) => {
  dispatch(notificationsInitiated());
  try {
    const res = await ReqGet("notifications/feeds", "MeshServ");

    if (res.data.status === false || res.data.status != 200) {
      dispatch(notificationsFailed());
      CheckAuthentication(res);
    }
    if (res.data.status === true || res.data.status === 200) {
      dispatch(notificationsSuccess(res.data.feed_data));
      // dispatch(homeResponse(res.data.data));
    }
  } catch (error) {
    console.log("notifications catch", error.response);
  }
};
