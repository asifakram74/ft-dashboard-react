import { updateObject } from "../../../shared/utility";
import * as actionTypes from "./constants";
const initialState = {
  isDataSet: false,
  isInitiated: false,
  isSuccess: false,
  isFailed: false,
  isLanguageUpdated: false,
  user: "",
};
const userInitiated = (state, action) => {
  return updateObject(state, {
    isDataSet: true,
    isSuccess: true,
    user: action.data,
  });
};
const authenticationInitiated = (state, action) => {
  return updateObject(state, {
    isInitiated: true,
    // isSuccess: false,
    isFailed: false,
  });
};
const authenticationSuccess = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: true,
    isDataSet: true,
    isFailed: false,
    user: action.data,
  });
};
const authenticationFailed = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: false,
    isDataSet: false,
    isFailed: true,
  });
};

const userLanguageUpdate = (state, action) => {
  return updateObject(state, {
    isLanguageUpdated: true,
  });
};

const authenticationLogout = (state, action) => {
  return initialState;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_INITIATED:
      return userInitiated(state, action);
    case actionTypes.USER_AUTHENTICATION_INITIATED:
      return authenticationInitiated(state, action);
    case actionTypes.USER_AUTHENTICATION_SUCCESS:
      return authenticationSuccess(state, action);
    case actionTypes.USER_AUTHENTICATION_FAILED:
      return authenticationFailed(state, action);
    case actionTypes.USER_UPDATE:
      return userLanguageUpdate(state, action);
    case actionTypes.USER_LOGOUT:
      return authenticationLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
