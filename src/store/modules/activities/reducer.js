import { ADD_ACTIVITY, LIST_ACTIVITY } from "./actions-types";

const activitiesReducer = (state = [], actions) => {
  switch (actions.types) {
    case ADD_ACTIVITY:
      const { activity } = actions;
      return (state = [...state, activity]);
    case LIST_ACTIVITY:
      const { activities } = actions;
      return (state = [...state, activities]);

    default:
      return state;
  }
};

export default activitiesReducer;
