import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addActivityThunk } from "../../../store/modules/activities/thunk";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  Input,
  MainInfo,
  TextArea,
  StudentInfo,
  ButtonContainer,
  Button,
  Title,
  Error,
} from "./style";
import Students from "../../../components/transfer";
import Header from "../../../components/Header/index";

const ActivitiesRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    date: yup.string().required("Campo Obrigatório"),
    description: yup.string(),
    link: yup.string(),
    students: yup.string().required("Campo Obrigatório")
    
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registerActivity = (data) => {
    dispatch(addActivityThunk(data));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(registerActivity)}>
        <Title>Cadastrar</Title>
        <MainInfo>
          <Input name="name" placeholder="Atividade" ref={register} />
          {errors.activity && <Error>{errors.activity.message}</Error>}
          <Input name="date" type="date" ref={register} />
          {errors.date && <Error>{errors.date.message}</Error>}
        </MainInfo>        
        <StudentInfo>
        <TextArea name="description" placeholder="Descrição" />
        {errors.description && <Error>{errors.description.message}</Error>}
            <Students name="students" ref={register}/>
        </StudentInfo>
        <Input name="link" placeholder="Link da atividade" />
        {errors.link && <Error>{errors.link.message}</Error>}
        <ButtonContainer>
          <Button onClick={() => history.push('/activities')}>Voltar</Button>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default ActivitiesRegister;
