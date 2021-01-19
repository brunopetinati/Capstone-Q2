import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//reducers
import activitiesReducer from "./modules/activities/reducer";
import profileReducer from "./modules/profile/reducer";
import loginReducer from "./modules/login/reducer";
import studentsReducer from "./modules/students/reducer";
const reducer = combineReducers({
  activities: activitiesReducer,
  students: studentsReducer,
  profile: profileReducer,
  login: loginReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;