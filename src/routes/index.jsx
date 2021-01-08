import { Switch, Link, Route } from "react-router-dom";

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
  return (
    <>
      {/* posteriormente, as rotas serão reformuladas*/}
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
      {/* posteriormente, os links serão apagados */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Registrar</Link>
        </li>
        <li>
          <Link to="/groupregister">Cadastrar novo grupo</Link>
        </li>
        <li>
          <Link to="/studentregister">Cadastrar novo aluno em seu grupo</Link>
        </li>
        <li>
          <Link to="/groups">Turmas</Link>
        </li>
        <li>
          <Link to="/students">Lista de alunos de determinada turma</Link>
        </li>
        <li>
          <Link to="/profile">Perfil do aluno</Link>
        </li>
        <li>
          <Link to="/activitiesregister">
            Gerenciar atividades de determinado grupo
          </Link>
        </li>
        <li>
          <Link to="/activities">Atividades de determinado grupo</Link>
        </li>
      </ul>
    </>
  );
};

export default Routes;
