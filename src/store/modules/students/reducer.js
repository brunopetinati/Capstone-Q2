import {
  GET_STUDENTS,
  REGISTER_STUDENT,
  DELETE_STUDENT,
} from "./actions-types";

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      const { students } = action;
      return students;

    case REGISTER_STUDENT:
      const { student } = action;
      return [...state, student];

    case DELETE_STUDENT:
      const { id } = action;
      return id;

    default:
      return state;
  }
};

export default studentsReducer;
