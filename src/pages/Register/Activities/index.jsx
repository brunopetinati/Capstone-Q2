import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver }from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {addActivityThunk} from '../../../store/modules/activities/thunk';
import StudentsTable from '../../../components/transfer';

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
  return (
    <div>
      <form onSubmit={handleSubmit(registerActivity)} style={{display: "flex", flexDirection: "column", width: '50%', margin: "auto"}}>
        <input name="name" placeholder="Atividade" ref={register}/>
        {errors.activity && <div>{errors.activity.message}</div>}
        <input name="date" type="date" ref={register}/>
        {errors.date && <div>{errors.date.message}</div>}
        <textarea name="description" placeholder="Descrição"/>
        {errors.description && <div>{errors.description.message}</div>}
        <input name="link" placeholder="Link da atividade"/>
        {errors.link && <div>{errors.link.message}</div>}
        <StudentsTable/>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ActivitiesRegister;
