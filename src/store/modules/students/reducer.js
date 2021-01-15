import { GET_STUDENTS } from "./actions-types";

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      const { student } = action;
      return student;

    default:
      return state;
  }
};

export default studentsReducer;
