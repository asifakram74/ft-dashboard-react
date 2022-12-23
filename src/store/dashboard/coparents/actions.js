import * as actionTypes from "./constants";

export const coparentsInitiated = () => {
  return {
    type: actionTypes.COPARENTS_INITIATED,
  };
};

export const coparentsFailed = () => {
  return {
    type: actionTypes.COPARENTS_FAILED,
  };
};

export const coparentsSuccess = (data) => {
  return {
    type: actionTypes.COPARENTS_SUCCESS,
    data: data,
  };
};

export const coparentsLogout = (data) => {
  return {
    type: actionTypes.COPARENTS_LOGOUT,
  };
};
