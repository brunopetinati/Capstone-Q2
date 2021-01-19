import { ADD_ACTIVITY, LIST_ACTIVITY } from "./actions-types";

export const addActivity = (activity) => ({
  type: ADD_ACTIVITY,
  activity,
});

export const listActivity = (list) => ({
  type: LIST_ACTIVITY,
  list,
});
