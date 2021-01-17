import api from "../../../services/api";
import { userRegister } from "./action";

const usersThunk = (result) => async (dispatch) => {
  await api
    .post("/users", result)
    .then((res) => dispatch(userRegister(res)))
    .catch((err) => console.log(err));
};

export default usersThunk;
