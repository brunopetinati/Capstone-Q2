import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStudentsThunk } from "../../store/modules/students/thunk";
import AlertFlag from '../AlertFlag';
import Table from '../Table';
import Pages from '../pagination';
import {Box} from './styles';
import {deleteStudentsThunk} from '../../store/modules/students/thunk';

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [alertState, setAlertState] = useState(false)
  const [lastIndex, setLastIndex] = useState(0)
  const [nextPage, setNextPage] = useState(5)


  useEffect(() => {
    dispatch(getStudentsThunk());
    setAlertState(true)
  }, [dispatch]);

  const page = students.slice(lastIndex, nextPage);
  
  const handleExclusion = (id) =>{
    dispatch(deleteStudentsThunk(id))
    setAlertState(true)
  }

  alertState && setTimeout(() => setAlertState(false), 3000)
  return (
    <>   
        <Box>
        <Pages 
        items={students}
        setLastIndex={setLastIndex}
        setNextPage={setNextPage}
        lastIndex={lastIndex}
        nextPage={nextPage}
        />
        </Box>

        {alertState && <AlertFlag severity="success" text="Aluno excluido com sucesso"/>}
        
        <Table
        title="Nome"
        info="Turma"
        details="Detalhes"
        isActivity={false}
        remove="Excluir"
        data={page}
        detailsRoute="students"
        registerRoute="studentregister"
        handleRemove={handleExclusion}
        />
        
    </>
  );
};

export default Students;
