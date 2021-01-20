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
    .catch(() =>
      alert(
        "Não foi possível efetuar o login. Por favor, verifique o usuário ou a senha."
      )
    );
};

export default loginThunk;
