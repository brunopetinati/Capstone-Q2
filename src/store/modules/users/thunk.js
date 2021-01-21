import api from "../../../services/api";
import { userRegister } from "./action";
import Swal from "sweetalert2";

const usersThunk = (result, history) => async (dispatch) => {
  await api
    .post("/users", result)
    .then((res) => {
      dispatch(userRegister(res));
      history.push("/login");
    })
    .catch((err) =>
      Swal.fire({
        title: "Ops!",
        text: "Encontramos um erro, verifique as informações",
        icon: "error",
        confirmButtonText: "Entendi",
      })
    );
};

export default usersThunk;
