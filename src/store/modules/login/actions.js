import { USER_LOGIN } from "./actions-types";

export const userLogin = (token) => ({
  type: USER_LOGIN,
  token,
});
