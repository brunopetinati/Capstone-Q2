import api from '../../../services/api';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  Anchor
} from './style';
import {Button} from '../../Register/Activities/style';

const Activities = () => {
const [activities, setActivities] = useState([]);
const history = useHistory();

useEffect(() =>{
  api.get('/activities')
    .then( res => setActivities(res.data))
},[])

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
