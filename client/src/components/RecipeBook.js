import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

const useStyles = makeStyles({
    root: {
       
    }
})

const RecipeBook = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#F7F4E9';
    },[])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            Recipe Book App
        </div>
    );
}

export default RecipeBook;