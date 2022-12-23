import * as actionTypes from "./constants";

export const loginInitiated = () => {
  return {
    type: actionTypes.LOGIN_INITIATED,
  };
};

export const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
  };
};

export const loginFailed = () => {
  return {
    type: actionTypes.LOGIN_FAILED,
  };
};
export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
export const emailChange = (email) => {
  return {
    type: actionTypes.EMAIL_CHANGE,
    email,
  };
};
