import * as actionTypes from "./constants";

export const timezoneInitiated = () => {
  return {
    type: actionTypes.TIMEZONE_INITIATED,
  };
};
export const timezoneSuccess = (data) => {
  return {
    type: actionTypes.TIMEZONE_SUCCESS,
    data: data,
  };
};
export const timezoneFailed = () => {
  return {
    type: actionTypes.TIMEZONE_FAILED,
  };
};
export const timezoneLogout = () => {
  return {
    type: actionTypes.TIMEZONE_LOGOUT,
  };
};
