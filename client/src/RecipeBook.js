import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import history from "history/browser";

import Routes from "./Routes";
import NavBar from "./components/NavBar";
import theme from "./theme";

const RecipeBook = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default RecipeBook;
