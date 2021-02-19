import React from "react";
import { makeStyles } from "@material-ui/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#F7F4E9",
  },
  menuIcon: {
    marginRight: "auto",
  },
  title: {
    color: "#E40C2B",
    textAlign: "center",
    fontWeight: "700",
  },
  toolBar: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolBar}>
        <IconButton edge="start" className={classes.menuIcon}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Typography className={classes.title}>Recipe Book</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
