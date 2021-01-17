import {useDispatch} from 'react-redux';
import {registerStudentsThunk} from '../../../store/modules/students/thunk';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

const StudentRegister = () => {
  const dispatch = useDispatch();
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
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input name="name" placeholder="Nome" ref={register}/>
        {errors.name && <div>{errors.name.message}</div>}
        <input name="group" placeholder="Turma" ref={register}/>
        {errors.group && <div>{errors.group.message}</div>}
        <textarea name="postscript" placeholder="Observações" ref={register}/>
        {errors.postscript && <div>{errors.postscript.message}</div>}
        <button type="submit">cadastrar</button>
      </form>
    </div>
  );
};

export default StudentRegister;
