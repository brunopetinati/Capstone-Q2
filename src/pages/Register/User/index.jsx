import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import userThunk from "./../../../store/modules/users/thunk";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, FormContainer } from "./style";
import Header from "../../../components/Header/index";
import { Input, Button, Title, Error } from "./../../Register/Activities/style";

const User = (props) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(4, "É necessário digitar ao menos 6 dígitos.")
      .required("Campo obrigatório"),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const handleForm = (data) => {
    dispatch(userThunk(data));
    console.log(data);
    history.push("/login");
  };

  return (
    <>
      <Header></Header>
      <Container>
        <FormContainer>
          <Title>Cadastro</Title>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <Input placeholder="Nome" name="name" ref={register}></Input>
              <Error>{errors.name?.message}</Error>
            </div>
            <p></p>
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
              <Input
                placeholder="Confirmar senha"
                name="passwordConfirm"
                ref={register}
              ></Input>
              <Error>{errors.passwordConfirm?.message}</Error>
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

export default User;
