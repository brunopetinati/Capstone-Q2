import {ADD_ACTIVITY} from './actions-types';

const activitiesReducer = (state=[], actions) =>{
    switch (actions.types) {
        case ADD_ACTIVITY:
            const {activity} = actions;
            return state = [...state, activity];
    
        default:
            return state;
    }
}

export default activitiesReducer