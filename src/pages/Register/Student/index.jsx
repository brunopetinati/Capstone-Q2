import {useDispatch} from 'react-redux';
import {registerStudentsThunk} from '../../../store/modules/students/thunk';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
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
import {useHistory} from 'react-router-dom';

const StudentRegister = () => {
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

  const handleForm = (data) =>{
    dispatch(registerStudentsThunk(data))
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
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
