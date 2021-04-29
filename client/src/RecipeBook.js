import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { Router } from 'react-router-dom';
import history from 'history/browser';

import Routes from './Routes';
import theme from './theme';

const RecipeBook = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Routes />
    </Router>
  </ThemeProvider>
);

export default RecipeBook;
