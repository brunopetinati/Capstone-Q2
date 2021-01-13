import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

  const handleForm = (data) => {
    axios
      .post("https://json-server-bp.herokuapp.com/users", { ...data })
      .then((res) => {
        history.push("/login");
      });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        <input placeholder="Nome" name="name" ref={register}></input>
        {errors.email?.message}
      </div>
      <p></p>
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
        <input
          placeholder="Confirmar senha"
          name="passwordConfirm"
          ref={register}
        ></input>
        <p style={{ color: "red" }}>{errors.passwordConfirm?.message}</p>
        <p></p>
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
};

export default User;
