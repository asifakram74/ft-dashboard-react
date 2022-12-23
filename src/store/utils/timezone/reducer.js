import { updateObject } from "../../../shared/utility";
import * as actionTypes from "./constants";

const initialState = {
  isInitiated: false,
  isSuccess: false,
  isFailed: false,
  data: "",
};

const timezoneInitiated = (state, action) => {
  return updateObject(state, {
    isInitiated: true,
  });
};
const timezoneSuccess = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: true,
    isFailed: false,
    data: action.data,
  });
};

const timezoneFailed = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: false,
    isFailed: true,
    data: "",
  });
};
const timezoneLogout = (state, action) => {
  return initialState;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TIMEZONE_INITIATED:
      return timezoneInitiated(state, action);
    case actionTypes.TIMEZONE_SUCCESS:
      return timezoneSuccess(state, action);
    case actionTypes.TIMEZONE_FAILED:
      return timezoneFailed(state, action);
    case actionTypes.TIMEZONE_LOGOUT:
      return timezoneLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
