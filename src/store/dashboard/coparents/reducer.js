import * as actionTypes from "./constants";
import { updateObject } from "../../../shared/utility";

const initialState = {
  isInitiated: false,
  isSuccess: false,
  isFailed: false,
  data: "",
};
const coparentsInitiated = (state, action) => {
  return updateObject(state, {
    isInitiated: true,
  });
};
const coparentsSuccess = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: true,
    isFailed: false,
    data: action.data,
  });
};
const coparentsFailed = (state, action) => {
  return updateObject(state, {
    isInitiated: false,
    isSuccess: false,
    isFailed: true,
  });
};
const coparentsLogout = (state, action) => {
  return initialState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COPARENTS_INITIATED:
      return coparentsInitiated(state, action);
    case actionTypes.COPARENTS_FAILED:
      return coparentsFailed(state, action);
    case actionTypes.COPARENTS_SUCCESS:
      return coparentsSuccess(state, action);
    case actionTypes.COPARENTS_LOGOUT:
      return coparentsLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
