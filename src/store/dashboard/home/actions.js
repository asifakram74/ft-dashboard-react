import * as actionTypes from "./constants";

export const homeInitiated = () => {
  return {
    type: actionTypes.HOME_INITIATED,
  };
};
export const homeFailed = () => {
  return {
    type: actionTypes.HOME_FAILED,
  };
};
export const homeSuccess = (data) => {
  return {
    type: actionTypes.HOME_SUCCESS,
    data: data,
  };
};
export const setChildId = (data) => {
  return {
    type: actionTypes.SET_CHILD_ID,
    data: data,
  };
};
export const homeOnLogout = () => {
  return {
    type: actionTypes.HOME_ON_LOGOUT,
  };
};
