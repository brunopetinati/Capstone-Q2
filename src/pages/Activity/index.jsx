import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const Activity = () =>{
    const {id} = useParams();
    const activities = useSelector(state => state.activities);
    const activity = activities.filter((activity) => activity.id == id);

    console.log(activity)
    return(
            <div>
                {activity.map(({name, date, description, students, link}, index) =>{
                    return(
                        <div key={index}>
                            <h1>{name}</h1>
                            <p>{date}</p>
                            <p>{description}</p>
                            <a href={link} target="blank">{link}</a>
                            <ul>
                            {students.map((student, index) =>{
                                return(
                                    <li key={index}>{student}</li>
                                )
                            })}
                            </ul>
                        </div>
                        )
                })}
            </div>
    )
}

export default Activity