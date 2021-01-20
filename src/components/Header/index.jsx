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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const state = useSelector((state) => state.login);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let history = useHistory();

  return (
    <div className="container">
      {state.token === "" ? (
        <>
          <div className="headerDesktop">
            <div className="headerButtons">
              <div className="button" onClick={() => history.push("/")}>
                Home
              </div>
              <div className="button" onClick={() => history.push("/login")}>
                Login
              </div>
              <div className="button" onClick={() => history.push("/register")}>
                Cadastro
              </div>
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
              <MenuRoundedIcon style={{ fontSize: "40" }} />
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
        <>
          <div className="headerDesktop">
            <div className="headerButtons">
              <div className="button" onClick={() => history.push("/")}>
                Home
              </div>
              <div
                className="button"
                onClick={() => history.push("/activities")}
              >
                Minhas Atividades
              </div>
              <div className="button" onClick={() => history.push("/students")}>
                Meus Alunos
              </div>
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
              <MenuRoundedIcon style={{ fontSize: "4rem" }} />
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
              <MenuItem onClick={() => history.push("/activities")}>
                Minhas Atividades
              </MenuItem>
              <MenuItem onClick={() => history.push("/students")}>
                Meus Alunos
              </MenuItem>
            </Menu>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
