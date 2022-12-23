import * as actionType from "./actions";
const initialState = {
  toggleSidebar: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.TOGGLE_SIDEBAR:
      return {
        toggleSidebar: !state.toggleSidebar,
      };
    case actionType.TOGGLE_SIDEBAR_CLOSE:
      return {
        toggleSidebar: false,
      };
    case actionType.LOGOUT_SIDEBAR:
      return {
        toggleSidebar: false,
      };
    default:
      return state;
  }
};

export default reducer;
