import api from "../../../services/api";
import { userLogin } from "./actions";

const loginThunk = (result) => async (dispatch) => {
  await api
    .post("/login", result)
    .then((res) =>
      window.localStorage.setItem("authToken", res.data.accessToken)
    )
    .then((res) => dispatch(userLogin(res)))
    .catch((err) => console.log(err));
};

export default loginThunk;
