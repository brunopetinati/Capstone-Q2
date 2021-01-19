import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginThunk from "../../store/modules/login/thunk";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, FormContainer, Input, Button, Title, Error } from "./style";
import Header from "../../components/Header/index";
//import { Input, Button, Title, Error } from "./../Register/Activities/style";

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
      <Header />
      <Container>
        <FormContainer>
          <Title>Login</Title>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <Input placeholder="email" name="email" ref={register}></Input>
              <Error>{errors.email?.message}</Error>
            </div>
            <p></p>
            <div>
              <Input placeholder="Senha" name="password" ref={register}></Input>
              <Error>{errors.password?.message}</Error>
              <p></p>
            </div>
            <div>
              <Button type="submit">Entrar</Button>
            </div>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
