import { SET_AUTHENTICATION } from "./actions-types";

const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return action.isAuthenticated;
    default:
      return state;
  }
};

export default authenticationReducer;
