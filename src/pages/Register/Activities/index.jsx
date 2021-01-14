import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver }from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {addActivityThunk} from '../../../store/modules/activities/thunk';
import {useHistory} from 'react-router-dom';
import StudentsTable from '../../../components/transfer';
import {
  Container,
  Input,
  MainInfo,
  StudentInfo,
  Form,
  TextArea,
  ButtonContainer,
  Button,
  Title,
  Error
} from './style';

const ActivitiesRegister = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
      name: yup.string().required("Campo Obrigatório"),
      date: yup.string().required("Campo Obrigatório"),
      description: yup.string(),
      link: yup.string(),
  })
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema)
  });

  const registerActivity = (data) =>{
     dispatch(addActivityThunk(data))
  }
  const history = useHistory();
  return (
    <Container>
      <Form onSubmit={handleSubmit(registerActivity)}>
        <Title>Cadastrar Atividade</Title>
        <MainInfo>
          <div>
            <Input name="name" placeholder="Atividade" ref={register} style={{width: "450px"}}/>
            {errors.name && <Error>{errors.name.message}</Error>}
          </div>
          <div>
            <Input name="date" type="date" ref={register}/>
            {errors.date && <Error>{errors.date.message}</Error>}
          </div>
          
        </MainInfo>
        <StudentInfo>
          <TextArea name="description" placeholder="Descrição"/>
          {errors.description && <Error>{errors.description.message}</Error>}
          <StudentsTable/>
        </StudentInfo>
        <Input name="link" placeholder="Link da atividade" style={{width: "585px"}}/>
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
