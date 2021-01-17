import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  let history = useHistory();
  return (
    <div className="header">
      {isLoggedIn ? (
        <div>
          <div className="headerButtons">
            <div onClick={() => history.push("/")}>Home</div>
            <div onClick={() => history.push("/activities")}>
              Minhas Atividades
            </div>
            <div onClick={() => history.push("/students")}>Meus Alunos</div>
          </div>
          <div className="userMenu">
            <img
              src="https://curatti.com/wp-content/uploads/2017/05/generic-avatar-image1.png"
              alt="userAvatar"
              width="5vw"
            />
          </div>
        </div>
      ) : (
        <div className="headerButtons">
          <div onClick={() => history.push("/")}>Home</div>
          <div onClick={() => history.push("/login")}>Login</div>
          <div onClick={() => history.push("/register")}>Cadastro</div>
        </div>
      )}
    </div>
  );
};

export default Header;
