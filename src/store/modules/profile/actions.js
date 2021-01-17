import { GET_PROFILE } from "./actions-types";

export const getProfile = (profile) => ({
  type: GET_PROFILE,
  profile,
});
