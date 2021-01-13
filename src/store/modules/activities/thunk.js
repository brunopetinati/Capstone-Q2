import api from '../../../services/api';
import {addActivity} from './actions';

export const addActivityThunk = (data) => async (dispatch) =>{
    await api.post('/activities', {...data})
      .then(res => dispatch(addActivity(res.data)))
      .catch(err => console.log(err))
}