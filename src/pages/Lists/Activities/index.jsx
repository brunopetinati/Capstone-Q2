import {useSelector} from 'react-redux';

const Activities = () => {
  const activities = useSelector(state => state.activities);
  console.log(activities)
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
