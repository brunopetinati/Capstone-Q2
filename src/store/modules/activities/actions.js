import {LIST_ACTIVITIES, ADD_ACTIVITIES} from './actions-types';

export const listActivities = (activities) =>(
    {
        type: LIST_ACTIVITIES,
        activities
    }
)

export const addActivities = (activity) =>(
    {
        type: ADD_ACTIVITIES,
        activity
    }
)
