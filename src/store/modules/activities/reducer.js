import {LIST_ACTIVITIES, ADD_ACTIVITIES, DELETE_ACTIVITIES} from './actions-types';

const activitiesReducer = (state=[], action) => {
    switch (action.type) {
        
        case LIST_ACTIVITIES:
            const {activities} = action;
            return activities
        case ADD_ACTIVITIES:
            const {activity} = action;
            return state =[...state, activity]
        case DELETE_ACTIVITIES:
            const {id} = action;
            return id
        default:
            return state
    }

};

export default activitiesReducer;
