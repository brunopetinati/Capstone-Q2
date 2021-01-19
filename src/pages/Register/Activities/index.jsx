import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addActivitiesThunk} from "../../../store/modules/activities/thunk";
import {useHistory} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getStudentsThunk} from '../../../store/modules/students/thunk';
import {
  Container,
  Form,
  Input,
  MainInfo,
  TextArea,
  ButtonContainer,
  Button,
  Title,
  Error,
  List,
  Date
} from './style';

const ActivitiesRegister = () => {
  const [alertState, setAlertState] = useState(false);
  const [selected, setSelected] = useState([]);

  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    date: yup.string().required("Campo Obrigatório"),
    description: yup.string(),
    link: yup.string(),  
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registerActivity = (data, event) => {
    dispatch(addActivitiesThunk(data));
    setAlertState(true)
    event.target.reset()
  };

  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);
  console.log(selected)
  alertState && setTimeout(() => setAlertState(false), 3000)

  

  return (
    <Container>
      <Form onSubmit={handleSubmit(registerActivity)}>
      {alertState && <Alert severity="success">Atividade Cadastrada com Sucesso</Alert>}
        <Title>Cadastrar</Title>
        <MainInfo>
          <Input name="name" placeholder="Atividade" ref={register} />
          {errors.activity && <Error>{errors.activity.message}</Error>}
          <Date name="date" type="date" ref={register} />
          {errors.date && <Error>{errors.date.message}</Error>}
        </MainInfo>        
        
        <TextArea name="description" placeholder="Descrição" />
        {errors.description && <Error>{errors.description.message}</Error>}
        <h3>Alunos</h3>
            <List>
              {students.map(({name, group}, index) =>{
                return(
                  <li key={index}><input ref={register} name="students" type="checkbox" value={`${name} - ${group}`} onChange={(e) => setSelected([...selected, e.target.value])}/>{name} - {group}</li>
                )
              })}
            </List>
        <Input name="link" placeholder="Link da atividade" style={{width: "65vw"}}/>
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
