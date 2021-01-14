import api from "../../../services/api";
import { userLogin } from "./actions";

const loginThunk = (data) => async (dispatch) => {
  await api
    .post("/login", { ...data })
    .then((res) => dispatch(userLogin(res.data)))
    .catch((err) => console.log(err));
};

export default loginThunk;
