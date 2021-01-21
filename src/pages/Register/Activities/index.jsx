import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addActivitiesThunk} from "../../../store/modules/activities/thunk";
import {useHistory} from 'react-router-dom';
import AlertFlag from '../../../components/AlertFlag';
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
  Title,
  Error,
  List,
  Date
} from './style';
import {motion} from 'framer-motion';
import {Button} from '../../Login/style';

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
 
  alertState && setTimeout(() => setAlertState(false), 3000)

  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
    <Container>
      <Form onSubmit={handleSubmit(registerActivity)}>
      {alertState && <AlertFlag severity="success" text="Atividade Cadastrada com Sucesso"/>}
        <Title>Cadastrar</Title>
        <MainInfo>
          <div>
            {errors.name && <Error>{errors.name.message}</Error>}
            <Input name="name" placeholder="Atividade" ref={register} />
            
          </div>
          <div>
            {errors.date && <Error>{errors.date.message}</Error>}
            <Date name="date" type="date" ref={register} />
          </div>
          
          
        </MainInfo>        
        
        <TextArea name="description" placeholder="Descrição" ref={register}/>
        <h3>Alunos</h3>
            <List>
              {students && students.map(({name, group}, index) =>{
                return(
                  <li key={index}><input ref={register} name="students" type="checkbox" value={`${name} - ${group}`} onChange={(e) => setSelected([...selected, e.target.value])}/>{name} - {group}</li>
                )
              })}
            </List>
        <Input name="link" placeholder="Link da atividade"  ref={register}/>
        <ButtonContainer>
          <Button onClick={() => history.push('/activities')}>Voltar</Button>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
      </Form>
    </Container>
    </motion.div>
  );
};

export default ActivitiesRegister;
