import { updateObject } from "../../shared/utility";
import * as actionTypes from "./constants";
const initialState = {
  show: false,
};
const alertLaunch = (state, action) => {
  return updateObject(state, {
    show: true,
    data: action.data,
  });
};
const alertHide = (state, action) => {
  return updateObject(state, {
    show: false,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALERT_LAUNCH:
      return alertLaunch(state, action);
    case actionTypes.ALERT_HIDE:
      return alertHide(state, action);
    default:
      return state;
  }
};

export default reducer;
