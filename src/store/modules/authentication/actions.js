import { SET_AUTHENTICATION } from "./actions-types";

export const setAuthentication = (isAuthenticated) => ({
  type: SET_AUTHENTICATION,
  isAuthenticated,
});
