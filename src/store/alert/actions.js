import * as actionTypes from "./constants";

export const alertLaunch = (data) => {
  return {
    type: actionTypes.ALERT_LAUNCH,
    data: data,
  };
};

export const alertHide = () => {
  return {
    type: actionTypes.ALERT_HIDE,
  };
};
