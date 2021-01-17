import { GET_PROFILE } from "./actions-types";

const profileReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROFILE:
      const { profile } = action;
      return profile;
    default:
      return state;
  }
};

export default profileReducer;
