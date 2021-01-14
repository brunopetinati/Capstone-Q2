import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/api";
import { setAuthentication } from "../store/modules/authentication/actions";

//PAGES
import Home from "../pages/Home/";
import Login from "../pages/Login/";
import Register from "../pages/Register/User/";
import GroupRegister from "../pages/Register/Group/";
import StudentRegister from "../pages/Register/Student/";
import Groups from "../pages/Lists/Groups/";
import Students from "../pages/Lists/Students/";
import Profile from "../pages/Lists/Students/Profile/";
import ActivitiesRegister from "../pages/Register/Activities/";
import Activities from "../pages/Lists/Activities";

const Routes = () => {
  const dispatch = useDispatch();
  const authentication = useSelector(({ authentication }) => authentication);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    token !== null && !authentication && dispatch(setAuthentication(true));
  }, [authentication, dispatch]);

  return (
    <>
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
        <Route exact path="/groupregister">
          <GroupRegister />
        </Route>
        <Route exact path="/studentregister">
          <StudentRegister />
        </Route>
        <Route exact path="/groups">
          <Groups />
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
      </Switch>
      {/* abaixo será editado no futuro */}
      {/* {authentication ? (
        <>
          rotas liberadas
        </>
      ) : (
        <Redirect to="/" />
      )} */}
    </>
  );
};

export default Routes;
