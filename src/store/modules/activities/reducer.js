import {ADD_ACTIVITY, LIST_ACTIVITY} from './actions-types';

const activitiesReducer = (state=[], actions) =>{
    switch (actions.types) {
        case ADD_ACTIVITY:
            const {activity} = actions;
            return state = [...state, activity];
        case LIST_ACTIVITY:
            const {list} = actions;
            return list;
    
        default:
            return state;
    }
}

export default activitiesReducer