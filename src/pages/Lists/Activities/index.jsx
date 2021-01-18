import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  Anchor
} from './style';
import {Button} from '../../Register/Activities/style';
import {useSelector, useDispatch} from  'react-redux';
import {listActivitiesThunk} from '../../../store/modules/activities/thunk';


const Activities = () => {
const dispatch = useDispatch();
const history = useHistory();
const activities = useSelector(state => state.activities)

useEffect(() =>{
  dispatch(listActivitiesThunk())
},[dispatch])


  return (
    <>
    <Table>
        <TableRow>
          <TableHead>Atividade</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Detalhes</TableHead>
        </TableRow>
        
        {activities.map((activity, index) =>{
          return(
            <TableRow key={index}>
              <TableCell>{activity.name}</TableCell>
              <TableCell>{activity.date}</TableCell>
              <TableCell><Anchor onClick={() => history.push(`/activities/${activity.id}`)}>+ detalhes</Anchor></TableCell>
            </TableRow>
          )
        })}
    </Table>
    <Button onClick={() => history.push('/activitiesregister')}>Cadastrar</Button>
    </>
  );
};

export default Activities;
