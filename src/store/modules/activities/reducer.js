import {LIST_ACTIVITIES, ADD_ACTIVITIES} from './actions-types';

const activitiesReducer = (state=[], action) => {
    switch (action.type) {
        
        case LIST_ACTIVITIES:
            const {activities} = action;
            return activities
        case ADD_ACTIVITIES:
            const {activity} = action;
            return state =[...state, activity]
        default:
            return state
    }
}

export default activitiesReducer