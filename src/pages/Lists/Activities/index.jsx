import {useEffect, useState} from 'react'
import api from '../../../services/api';

const Activities = () => {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    api.get('/activities')
      .then(res => setActivities(res.data))
  }, [])

  return (
    <ul>
      {activities.map((activity, index) =>{
        return(
          <li key={index}>{activity.name}--------{activity.date}</li>
        )
      })}
    </ul>
  );
};

export default Activities;
