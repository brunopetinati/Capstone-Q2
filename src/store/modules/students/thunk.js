import { getStudents } from "./actions";
import api from "../../../services/api";

export const getStudentsThunk = () => async (dispatch, getState) => {
  const token = localStorage.getItem("authToken");

  try {
    const students = await api.get("/students", {
      headers: {
        Authorization: `Bearer: ${token}`,
        "Content-type": "application/json",
      },
    });
    console.log(students.data);
    const studentsList = students.data;
    dispatch(getStudents(studentsList));
  } catch (err) {
    console.error(err);
  }
};
