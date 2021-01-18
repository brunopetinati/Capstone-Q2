import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';


const StudentsList = () =>{ 
  const students = useSelector(state => state.students);
  console.log(students)
    return(
        <div>
            <p>Alunos</p>
            <input/> <button>pesquisar</button>
            <ul>
              {students.map(({name}, index) =>{
                return(
                  <li key={index}><input type="checkbox"/>{name}</li>
                )
              })}
            </ul>
        </div>

    )
}

export default StudentsList