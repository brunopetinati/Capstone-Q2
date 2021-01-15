import { USER_LOGIN } from "./actions-types";

export const userLogin = (users) => ({
  type: USER_LOGIN,
  users,
});
