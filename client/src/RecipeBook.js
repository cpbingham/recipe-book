import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import history from 'history/browser';

import Routes from './Routes';
import NavBar from './components/NavBar';
import theme from './theme';

const useStyles = makeStyles( theme => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.background
    }
}));

const RecipeBook = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Router history={history}>
                    <Routes />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default RecipeBook;