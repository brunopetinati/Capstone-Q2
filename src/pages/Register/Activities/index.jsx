import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addActivityThunk } from "../../../store/modules/activities/thunk";
import {useHistory} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import {useState} from 'react';
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
  Error
} from './style';
import Students from '../../../components/students-list';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *':{
      marginTop: theme.spacing(2),
    }
  }
}))

const ActivitiesRegister = () => {
  const classes = useStyles();
  const [alertState, setAlertState] = useState(false);
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

  const registerActivity = (data, event) => {
    dispatch(addActivityThunk(data));
    setAlertState(true)
    event.target.reset()
  };
  alertState && setTimeout(() => setAlertState(false), 3000)
  return (
    <Container>
      <Form onSubmit={handleSubmit(registerActivity)}>
      {alertState && <Alert severity="success">Atividade Cadastrada com Sucesso</Alert>}
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
