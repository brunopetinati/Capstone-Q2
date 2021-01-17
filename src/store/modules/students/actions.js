import { GET_STUDENTS } from "./actions-types";

export const getStudents = (student) => {
  return {
    type: GET_STUDENTS,
    student,
  };
};
