import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import "./header.css";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(0);
  const isLoggedIn = useSelector((state) => state.isAuthenticated);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let history = useHistory();
  return (
    <div className="container">
      {!isLoggedIn ? (
        <>
          <div className="headerDesktop">
            <div className="headerButtons">
              <div onClick={() => history.push("/")}>Home</div>
              <div onClick={() => history.push("/login")}>Login</div>
              <div onClick={() => history.push("/register")}>Cadastro</div>
            </div>
            <div
              className="userMenu"
              onClick={() => {
                console.log("menu de usuario");
              }}
            >
              <img
                src="https://curatti.com/wp-content/uploads/2017/05/generic-avatar-image1.png"
                alt="userAvatar"
                width="25vw"
              />
              <div>UserName</div>
            </div>
          </div>
          <div className="headerMobile">
            <Button
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuRoundedIcon />
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => history.push("/")}>Home</MenuItem>
              <MenuItem onClick={() => history.push("/login")}>Login</MenuItem>
              <MenuItem onClick={() => history.push("/register")}>
                Cadastro
              </MenuItem>
            </Menu>
          </div>
        </>
      ) : (
        <div className="headerDesktop">
          <div className="headerButtons">
            <div onClick={() => history.push("/")}>Home</div>
            <div onClick={() => history.push("/activities")}>
              Minhas Atividades
            </div>
            <div onClick={() => history.push("/students")}>Meus Alunos</div>
          </div>
          <div
            className="userMenu"
            onClick={() => {
              console.log("menu de usuario");
            }}
          >
            <img
              src="https://curatti.com/wp-content/uploads/2017/05/generic-avatar-image1.png"
              alt="userAvatar"
              width="25vw"
            />
            <div>UserName</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
