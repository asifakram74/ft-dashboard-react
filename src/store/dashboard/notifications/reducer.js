import { updateObject } from "../../../shared/utility";
import * as actionTypes from "./constants";
const initialState = {
  isInitiated: false,
  isSuccess: false,
  isFailed: false,
  data: "",
  totalNotifications: "",
  //For at Launch Feed Notification
  isAtlaunchToggle: false,
  isAtlaunchInitiated: false,
  isAtlaunchSuccess: false,
  isAtlaunchFailed: false,
  atlaunchData: "",
};
const notificationsInitiated = (state, action) => {
  return updateObject(state, {
    isInitiated: true,
  });
};
const notificationsSuccess = (state, action) => {
  //   console.log("action.data", action.data);
  //   if(action.data.length > 0){

  //   }
  return updateObject(state, {
    isInitiated: false,
    isSuccess: true,
    data: action.data,
    totalNotifications: action.data.length,
  });
};
const notificationsFailed = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: false,
    isFailed: true,
    data: "",
    totalNotifications: "",
  });
};

//For Atlaunch
const notificationsAtlaunchToggle = (state, action) => {
  return updateObject(state, {
    isAtlaunchToggle: !state.isAtlaunchToggle,
  });
};
const notificationsAtlaunchInitiated = (state, action) => {
  return updateObject(state, {
    isAtlaunchInitiated: true,
  });
};
const notificationsAtlaunchSuccess = (state, action) => {
  // console.log("action.data", action.data, action.data.length);

  if (action.data.length > 0) {
    return updateObject(state, {
      isAtlaunchInitiated: false,
      isAtlaunchToggle: true,
      isAtlaunchSuccess: true,
      atlaunchData: action.data,
    });
  } else {
    return updateObject(state, {
      isAtlaunchInitiated: false,
      isAtlaunchToggle: false,
      isAtlaunchSuccess: true,
      atlaunchData: action.data,
    });
  }
};
const notificationsAtlaunchFailed = (state, action) => {
  return updateObject(state, {
    isAtlaunchInitiated: false,
    isAtlaunchSuccess: false,
    isAtlaunchFailed: true,
    atlaunchData: "",
  });
};
const notificationsLogout = (state, action) => {
  return initialState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NOTIFICATION_INITIATED:
      return notificationsInitiated(state, action);
    case actionTypes.NOTIFICATION_SUCCESS:
      return notificationsSuccess(state, action);
    case actionTypes.NOTIFICATION_FAILED:
      return notificationsFailed(state, action);
    //At Launch Feed
    case actionTypes.NOTIFICATION_ATLAUNCH_TOGGLE:
      return notificationsAtlaunchToggle(state, action);
    case actionTypes.NOTIFICATION_ATLAUNCH_INITIATED:
      return notificationsAtlaunchInitiated(state, action);
    case actionTypes.NOTIFICATION_ATLAUNCH_SUCCESS:
      return notificationsAtlaunchSuccess(state, action);
    case actionTypes.NOTIFICATION_ATLAUNCH_FAILED:
      return notificationsAtlaunchFailed(state, action);
    case actionTypes.NOTIFICATION_LOGOUT:
      return notificationsLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
