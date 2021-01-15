import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducers
import activitiesReducer from "./modules/activities/reducer";
import authenticationReducer from "./modules/authentication/reducer";
import loginReducer from "./modules/login/reducer";
import studentsReducer from "./modules/students/reducer";

const reducer = combineReducers({
  authorization: authenticationReducer,
  activities: activitiesReducer,
  students: studentsReducer,
  login: loginReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
