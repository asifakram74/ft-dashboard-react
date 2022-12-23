import * as actionTypes from "./constants";
import { updateObject } from "../../../shared/utility";

const initialState = {
  isInitiated: false,
  isSuccess: false,
  isFailed: false,
  user: JSON.parse(localStorage.getItem("user")),
  data: "",
  child_id: "",
};
const homeInitiated = (state, action) => {
  return updateObject(state, {
    isInitiated: true,
    isSuccess: false,
    isFailed: false,
  });
};
const homeSuccess = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: true,
    isFailed: false,
    data: action.data,
  });
};
const homeFailed = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: false,
    isFailed: true,
  });
};
const setChildId = (state, action) => {
  console.log("State---->", state, action);
  return updateObject(state, {
    child_id: action.data,
  });
};
const homeOnLogout = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: false,
    isFailed: false,
    user: "",
    data: "",
    child_id: "",
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOME_INITIATED:
      return homeInitiated(state, action);
    case actionTypes.HOME_FAILED:
      return homeFailed(state, action);
    case actionTypes.HOME_SUCCESS:
      return homeSuccess(state, action);
    case actionTypes.SET_CHILD_ID:
      return setChildId(state, action);
    case actionTypes.HOME_ON_LOGOUT:
      return homeOnLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
