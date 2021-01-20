import { getStudents, registerStudents } from "./actions";
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

    const studentsList = students.data;
    dispatch(getStudents(studentsList));
  } catch (err) {
    console.error(err);
  }
};

export const registerStudentsThunk = (data) => (dispatch) => {
  api
    .post("/students", { ...data })
    .then((res) => dispatch(registerStudents(res.data)))
    .catch((err) => console.log(err));
};

export const deleteStudentThunk = (id) => (dispatch) => {
  api
    .delete(`/students/${id}`)
    .then((res) => {
      res.status === 200 &&
        api
          .get("/students")
          .then((res) => dispatch(getStudents(res.data)))
          .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
