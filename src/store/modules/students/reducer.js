import { GET_STUDENTS } from "./actions-types";

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      const { list } = action;
      return list;

    default:
      return state;
  }
};

export default studentsReducer;
