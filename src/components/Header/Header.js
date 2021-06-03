import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  
} from "@material-ui/core";
import { Add, Apps } from "@material-ui/icons";
import React from "react";
import { CreateClass, JoinClass } from "..";
import { useLocalContext } from "../../context/context";
import { useStyles } from "./style";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const {
    setCreateClassDialog,
    setJoinClassDialog,
    loggedInUser,
    logout,
  } = useLocalContext();

  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };

  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img
              src="data:image/png;base64,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"
              alt="Classroom"
            />
           
          </div>
          <div className={classes.header__wrapper__right}>
            <Add onClick={handleClick} className={classes.icon} />
            <Apps className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Join Class</MenuItem>
              <MenuItem onClick={handleCreate}>Create Class</MenuItem>
            </Menu>
            <div>
              <Avatar
                onClick={() => logout()}
                src={loggedInUser?.photoURL}
                className={classes.icon}
              />
            </div>
            <div>
            <ExitToAppIcon 
            onClick={() => logout()} />
            <h3>Sign Out</h3>

            </div>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  );
};

export default Header;