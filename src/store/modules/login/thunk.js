import api from "../../../services/api";
import { userLogin } from "./actions";

const loginThunk = (result) => (dispatch) => {
  api
    .post("/login", result)
    .then((res) => {
      console.log(res);
      window.localStorage.setItem("authToken", res.data.accessToken);
      dispatch(userLogin(res.data.accessToken));
    })
    .catch((err) => console.log(err));
};

export default loginThunk;
