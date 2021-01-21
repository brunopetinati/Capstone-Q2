import { getProfile } from "./actions";
import api from "../../../services/api";

export const getProfileThunk = (id) => async (dispatch, getState) => {
  const token = localStorage.getItem("authToken");

  try {
    const student = await api.get(`/students/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`,
        "Content-type": "application/json",
      },
    });

    const profile = student.data;
    dispatch(getProfile(profile));
  } catch (err) {
    console.error(err);
  }
};
