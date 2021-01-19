import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { DataGrid} from "@material-ui/data-grid";
import {Container} from './style';
import {Button} from '../../Register/Activities/style';
import {useSelector, useDispatch} from  'react-redux';
import {listActivitiesThunk, deleteActivitiesThunk} from '../../../store/modules/activities/thunk';
import Header from "../../../components/Header/index";
import {ImBin2} from 'react-icons/im';

const Activities = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const activities = useSelector((state) => state.activities);
  let rows = []
  let columns = []

  useEffect(() => {
    dispatch(listActivitiesThunk());
  }, [dispatch]);

  activities.map((activity) =>{
    rows= [...rows, {id: activity.id, col1: activity.name, col2: activity.data}] 
    columns = [
      { field: 'col1', headerName: 'Atividade', width: 550 },
      { field: 'col2', headerName: 'Data', width: 150 },
      { field: 'col3', headerName: 'Detalhes', renderCell: () => <Link to={`/activities/${activity.id}`}>+ detalhes</Link>, width: 150 },
      {field: 'col4', headerName: 'Excluir', width: 100, renderCell: () => <div onClick={() => dispatch(deleteActivitiesThunk(activity.id))}><ImBin2/></div>}
    ]
})


  return (
    <div>
      <Header />      
      <Container>
        <div style={{ height: 450, width: '100%' }}>
          <DataGrid columns={columns} rows={rows}/>
        </div> 
        <Button onClick={() => history.push("/activitiesregister")}>
          Cadastrar
        </Button>
      </Container>
    </div>
  );
};

export default Activities;
