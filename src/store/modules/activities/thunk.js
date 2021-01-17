import api from '../../../services/api';
import {addActivity, listActivity} from './actions';

export const addActivityThunk = (data) => async (dispatch) =>{
   await api.post('/activities', {...data})
      .then(res => dispatch(addActivity(res.data)))
      .catch(err => console.log(err))
}

export const listActivitiesThunk = () => async (dispatch, getState) => {
  const token = localStorage.getItem("authToken");

  try {
    const activities = await api.get("/activities", {
      headers: {
        Authorization: `Bearer: ${token}`,
        "Content-type": "application/json",
      },
    });
    const activitiesList = activities.data;
    dispatch(listActivity(activitiesList));
  } catch (err) {
    console.error(err);
  }
};
