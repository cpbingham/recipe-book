import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles'

import NavBar from './components/NavBar';
import theme from './theme';

console.log(theme);


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
                <NavBar />
            </div>
        </ThemeProvider>
    );
}

export default RecipeBook;