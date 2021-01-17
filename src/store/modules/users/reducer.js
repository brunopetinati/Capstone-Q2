import { USERS_REGISTER } from "./actions-types";

const usersReducer = (state = [], actions) => {
  switch (actions.types) {
    case USERS_REGISTER:
      const { users } = actions;
      return (state = [...state, users]);

    default:
      return state;
  }
};

export default usersReducer;
