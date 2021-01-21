import api from "../../../services/api";
import { userLogin } from "./actions";
import Swal from "sweetalert2";

const loginThunk = (result, history) => (dispatch) => {
  api
    .post("/login", result)
    .then((res) => {
      console.log(res);
      window.localStorage.setItem("authToken", res.data.accessToken);
      dispatch(userLogin(res.data.accessToken));
      history.push("/");
      window.location.reload();
    })
    .catch(() =>
      Swal.fire({
        title: "Ops!",
        text: "Email ou Senha invalidos!",
        icon: "error",
        confirmButtonText: "Entendi",
      })
    );
};

export default loginThunk;
