import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Alert} from '@material-ui/lab';
import {
  Container,
  StyledLink,
  Icon
} from './style';
import {Button} from '../../Register/Activities/style';
import {useSelector, useDispatch} from  'react-redux';
import {listActivitiesThunk, deleteActivitiesThunk} from '../../../store/modules/activities/thunk';
import {ImBin2} from 'react-icons/im';
import { DataGrid} from "@material-ui/data-grid";
import { motion } from "framer-motion";

const Activities = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [alertState, setAlertState] = useState(false)
  const activities = useSelector((state) => state.activities);
  let rows = [];
  let columns = [];

  useEffect(() => {
    dispatch(listActivitiesThunk());
  }, [dispatch]);

  const handleExclusion = (id) =>{
    dispatch(deleteActivitiesThunk(id))
    setAlertState(true)
  }

  activities.map((activity) =>{
    rows= [...rows, {id: activity.id, col1: activity.name, col2: activity.date}] 
    columns = [
      { field: 'col1', headerName: 'Atividade', width: 550 },
      { field: 'col2', headerName: 'Data', width: 150 },
      { field: 'col3', headerName: 'Detalhes', renderCell: () => <StyledLink to={`/activities/${activity.id}`}>+ detalhes</StyledLink>, width: 150 },
      {field: 'col4', headerName: 'Excluir', width: 100, renderCell: () => <Icon onClick={() => handleExclusion(activity.id)}><ImBin2/></Icon>}
    ]
})

  alertState && setTimeout(() => setAlertState(false), 3000)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >    
      <Container>
        {alertState && <Alert severity="success">Atividade excluida com sucesso</Alert>}
        <div style={{ height: 450, width: '100%' }}>
          <DataGrid columns={columns} rows={rows}/>
        </div> 
        <Button onClick={() => history.push("/activitiesregister")}>
          Cadastrar
        </Button>
      </Container>
    </motion.div>
  );
};

export default Activities;
