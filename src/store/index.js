import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
//reducers
import activitiesReducer from './modules/activities/reducer';

const reducer = combineReducers({
    activities: activitiesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store