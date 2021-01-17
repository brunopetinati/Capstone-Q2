import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginThunk from "../../store/modules/login/thunk";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, HeaderDesktop, HeaderMobile, FormContainer } from "./style";

const Login = (props) => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(4, "É necessário digitar ao menos 6 dígitos.")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (data) => {
    dispatch(loginThunk(data));
    history.push("/activities");
  };

  return (
    <>
      <HeaderMobile></HeaderMobile>
      <HeaderDesktop></HeaderDesktop>
      <Container>
        <FormContainer>
          <p>Login</p>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <input placeholder="email" name="email" ref={register}></input>
              {errors.email?.message}
            </div>
            <p></p>
            <div>
              <input placeholder="Senha" name="password" ref={register}></input>
              {errors.password?.message}
              <p></p>
            </div>
            <div>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
