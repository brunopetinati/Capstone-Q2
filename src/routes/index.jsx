import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/api";

//PAGES
import Home from "../pages/Home/";
import Login from "../pages/Login/";
import Register from "../pages/Register/User/";

import StudentRegister from "../pages/Register/Student/";

import Students from "../pages/Lists/Students/";
import Profile from "../pages/Lists/Students/Profile/";
import ActivitiesRegister from "../pages/Register/Activities/";
import Activities from "../pages/Lists/Activities";

const Routes = () => {
  const state = useSelector((state) => state.login);
  console.log(state);

  useEffect(() => {
    console.log("atualizou");
  }, [state]);

  return (
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
            <Profile />
          </Route>
          <Route exact path="/activitiesregister">
            <ActivitiesRegister />
          </Route>
          <Route exact path="/activities">
            <Activities />
          </Route>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  );
};

export default Routes;
