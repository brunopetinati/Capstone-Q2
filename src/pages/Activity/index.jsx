import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const Activity = () =>{
    const {id} = useParams();
    const activities = useSelector(state => state.activities);
    const activity = activities.filter((activity) => activity.id === id);

    console.log(id)
    return(
        <div>
            Activity
            <div>
                <div>{activity.name}</div>
            </div>
        </div>
    )
}

export default Activity