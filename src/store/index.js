import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducers
import activitiesReducer from "./modules/activities/reducer";
import authenticationReducer from "./modules/authentication/reducer";

const reducer = combineReducers({
  authorization: authenticationReducer,
  activities: activitiesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
