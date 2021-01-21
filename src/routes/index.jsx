import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

//PAGES
import Home from "../pages/Home/";
import Login from "../pages/Login/";
import Register from "../pages/Register/User/";

import StudentRegister from "../pages/Register/Student/";

import Students from "../pages/Lists/Students/";
import ProfilePage from "../pages/Lists/Students/Profile/";
import ActivitiesRegister from "../pages/Register/Activities/";
import Activities from "../pages/Lists/Activities";
import Activity from "../pages/Activity";
import Header from "../components/Header/index";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const state = useSelector((state) => state.login);
  console.log(state);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        {state.token !== "" ? (
          <>
            <Route exact path="/studentregister">
              <StudentRegister />
            </Route>
            <Route exact path="/students">
              <Students />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/activitiesregister">
              <ActivitiesRegister />
            </Route>
            <Route exact path="/activities">
              <Activities />
            </Route>
            <Route exact path="/activities/:id">
              <Activity />
            </Route>
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
