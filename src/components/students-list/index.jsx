import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getStudentsThunk} from '../../store/modules/students/thunk'


const StudentsList = () =>{ 
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [selected, setSelected] = useState([]);

  console.log(students);

  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);

 

    return(
        <div>
            <p>Alunos</p>
            <input/>
            <button>Buscar</button>
            <ul>
              {students.map(({name}, index) =>{
                return(
                  <li key={index}><input type="checkbox" value={name} onChange={(e) => console.log(e.target.value)}/>{name}</li>
                )
              })}
            </ul>
        </div>

    )
}

export default StudentsList