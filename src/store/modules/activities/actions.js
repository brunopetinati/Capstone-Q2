import { ADD_ACTIVITY, LIST_ACTIVITY } from "./actions-types";

export const addActivity = (activity) => ({
  type: ADD_ACTIVITY,
  activity,
});

export const listActivity = (activities) => ({
  type: LIST_ACTIVITY,
  activities,
});
