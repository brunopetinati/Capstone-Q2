import { USER_LOGIN } from "./actions-types";

const loginReducer = (state = [], actions) => {
  switch (actions.types) {
    case USER_LOGIN:
      const { login } = actions;
      return (state = [...state, login]);

    default:
      return state;
  }
};

export default loginReducer;
