import api from '../../../services/api';
import {addActivity, listActivity} from './actions';

export const addActivityThunk = (data) => async (dispatch) =>{
    await api.post('/activities', {...data})
      .then(res => dispatch(addActivity(res.data)))
      .catch(err => console.log(err))
}

export const listActivitiesThunk = () =>(dispatch) =>{
 api.get('/activities')
    .then(res => dispatch(listActivity(res.data)))
    .catch(err => console.log(err))
}

