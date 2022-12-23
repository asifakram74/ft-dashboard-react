import * as actionTypes from "./constants";

export const notificationsInitiated = () => {
  return {
    type: actionTypes.NOTIFICATION_INITIATED,
  };
};
export const notificationsSuccess = (data) => {
  return {
    type: actionTypes.NOTIFICATION_SUCCESS,
    data: data,
  };
};
export const notificationsFailed = () => {
  return {
    type: actionTypes.NOTIFICATION_FAILED,
  };
};
export const notificationsDeleteFeed = (id) => {
  return {
    type: actionTypes.NOTIFICATION_DELETE_FEED,
    id: id,
  };
};

export const notificationsAtlaunchToggle = () => {
  return {
    type: actionTypes.NOTIFICATION_ATLAUNCH_TOGGLE,
  };
};

export const notificationsAtlaunchInitiated = () => {
  return {
    type: actionTypes.NOTIFICATION_ATLAUNCH_INITIATED,
  };
};
export const notificationsAtlaunchSuccess = (data) => {
  return {
    type: actionTypes.NOTIFICATION_ATLAUNCH_SUCCESS,
    data: data,
  };
};
export const notificationsAtlaunchFailed = () => {
  return {
    type: actionTypes.NOTIFICATION_ATLAUNCH_FAILED,
  };
};

export const notificationsLogout = () => {
  return {
    type: actionTypes.NOTIFICATION_LOGOUT,
  };
};
