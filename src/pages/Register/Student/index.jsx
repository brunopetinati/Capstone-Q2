<<<<<<< HEAD
import {useDispatch} from 'react-redux';
import {registerStudentsThunk} from '../../../store/modules/students/thunk';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {
  Container,
  Form,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  Title,
  Error
} from './style';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *':{
      marginTop: theme.spacing(2),
    }
  }
}))
=======
import Header from "../../../components/Header/index";
>>>>>>> Develop

const StudentRegister = () => {
  const classes = useStyles();
  const [alertState, setAlertState] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const schema = yup.object().shape({
      name: yup.string().required("Campo Obrigatório"),
      group: yup.string().required("Campo Obrigatório"),
      postscript: yup.string()
  })
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  })

  const handleForm = (data, event) =>{
    dispatch(registerStudentsThunk(data))
    setAlertState(true)
    event.target.reset()

  }
  alertState && setTimeout(() => setAlertState(false), 3000)

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
      {alertState && <Alert severity="success">Aluno Cadastrado com Sucesso</Alert>}
        <Title>Cadastrar Aluno</Title>
        <Input name="name" placeholder="Nome" ref={register}/>
        {errors.name && <Error>{errors.name.message}</Error>}
        <Input name="group" placeholder="Turma" ref={register}/>
        {errors.group && <Error>{errors.group.message}</Error>}
        <TextArea name="postscript" placeholder="Observações" ref={register}/>
        {errors.postscript && <Error>{errors.postscript.message}</Error>}
        <ButtonContainer>
          <Button onClick={() => history.push('/students')}>Voltar</Button>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
        
      </Form>
    </Container>
  );
};

export default StudentRegister;
