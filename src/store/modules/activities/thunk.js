import {addActivities, listActivities} from './actions';
import axios from 'axios';

const token = localStorage.getItem("authToken");

export const addActivitiesThunk = (data) => (dispatch) =>{
    axios.post("https://json-server-bp.herokuapp.com/activities", {...data}, {
        headers: {
            Authorization: token
        }
    })
        .then(res => dispatch(addActivities(res.data)))
        .catch(err => console.log(err))
}

export const listActivitiesThunk = () => (dispatch) =>{
    axios.get("https://json-server-bp.herokuapp.com/activities",{
        headers: {
            Authorization: token
        }
    }
            )
        .then(res => dispatch(listActivities(res.data)))
        .catch(err => console.log(err))
}