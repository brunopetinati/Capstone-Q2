import {ADD_ACTIVITY} from './actions-types';

export const addActivity = (activity) =>(
    {
        type: ADD_ACTIVITY,
        activity
    }
);