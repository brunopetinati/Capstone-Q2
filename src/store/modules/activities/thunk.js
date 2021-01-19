import {addActivities, listActivities} from './actions';
import api from  '../../../services/api';

export const addActivitiesThunk = (data) => (dispatch) =>{
    api.post("/activities", {...data})
        .then(res => dispatch(addActivities(res.data)))
        .catch(err => console.log(err))
}

export const listActivitiesThunk = () => (dispatch) =>{
    api.get("/activities")
        .then(res => dispatch(listActivities(res.data)))
        .catch(err => console.log(err))
}