import { GET_STUDENTS, REGISTER_STUDENT } from "./actions-types";

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      const { students } = action;
      return students;

    case REGISTER_STUDENT:
      const { student } = action;
      return [...state, student];

    default:
      return state;
  }
};

export default studentsReducer;
