import {useDispatch} from 'react-redux';
import {registerStudentsThunk} from '../../../store/modules/students/thunk';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import AlertFlag from '../../../components/AlertFlag';
import {makeStyles} from '@material-ui/core/styles';
import {
  Container,
  Form,
  Input,
  TextArea,
  ButtonContainer,
  Title,
  Error
} from './style';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {Button} from '../../Login/style';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const StudentRegister = () => {
  const [alertState, setAlertState] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    group: yup.string().required("Campo Obrigatório"),
    postscript: yup.string(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data, event) => {
    dispatch(registerStudentsThunk(data));
    setAlertState(true);
    event.target.reset();
  };
  alertState && setTimeout(() => setAlertState(false), 3000);

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
      {alertState && <AlertFlag severity="success" text="Aluno cadastrado com sucesso"/>}
        <Title>Cadastrar Aluno</Title>
        <Input name="name" placeholder="Nome" ref={register} />
        {errors.name && <Error>{errors.name.message}</Error>}
        <Input name="group" placeholder="Turma" ref={register} />
        {errors.group && <Error>{errors.group.message}</Error>}
        <TextArea name="postscript" placeholder="Observações" ref={register}/>
        <ButtonContainer>
          <Button onClick={() => history.push("/students")}>Voltar</Button>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default StudentRegister;
