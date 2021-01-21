import {
  GET_STUDENTS,
  REGISTER_STUDENT,
  DELETE_STUDENT,
} from "./actions-types";

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students,
  };
};

export const registerStudents = (student) => {
  return {
    type: REGISTER_STUDENT,
    student,
  };
};

export const deleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    id,
  };
};
