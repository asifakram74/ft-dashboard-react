import * as actionTypes from "./constants";

export const userInitiated = (data) => {
  return {
    type: actionTypes.USER_INITIATED,
    data: data,
  };
};

export const authenticationInitiated = () => {
  return {
    type: actionTypes.USER_AUTHENTICATION_INITIATED,
  };
};

export const authenticationSuccess = (data) => {
  return {
    type: actionTypes.USER_AUTHENTICATION_SUCCESS,
    data: data,
  };
};

export const authenticationFailed = () => {
  return {
    type: actionTypes.USER_AUTHENTICATION_FAILED,
  };
};
export const userUpdated = () => {
  return {
    type: actionTypes.USER_UPDATE,
  };
};
export const authenticationLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};
