import * as actionTypes from "./constants";
import { updateObject } from "../../../shared/utility";
import { history } from "../../../configs/history";

const initialState = {
  isInitiated: false,
  isSuccess: false,
  isFailed: false,
  loginButton: false,
  email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
};

const loginInitiated = (state, action) => {
  return updateObject(state, {
    isInitiated: true,
    isSuccess: false,
    isFailed: false,
    loginButton: true,
  });
};
const loginSuccess = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: true,
    isFailed: false,
    loginButton: false,
  });
};
const loginFailed = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: false,
    isFailed: true,
    loginButton: false,
  });
};
const logout = (state, action) => {
  return updateObject(state, {
    initialState,
  });
};

const emailChange = (state, action) => {
  return updateObject(state, {
    email: localStorage.getItem("email"),
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_INITIATED:
      return loginInitiated(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAILED:
      return loginFailed(state, action);
    case actionTypes.EMAIL_CHANGE:
      return emailChange(state, action);
    case actionTypes.LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
};

export default reducer;
