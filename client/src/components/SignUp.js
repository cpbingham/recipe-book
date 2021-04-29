import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpModal: {
    display: 'grid',
    rowGap: 12,
    backgroundColor: theme.palette.primary.main,
    padding: 16,
    justifyItems: 'center',
    borderRadius: 12,
  },
  modalHeader: {
    color: theme.palette.text.primary,
  },
  modalFooter: {
    color: theme.palette.text.primary,
  },
  modalInput: {
    backgroundColor: '#FFF',
    opacity: 0.2,
    height: 32,
    width: '90%',
    borderRadius: 6,
  },
  modalButton: {
    borderRadius: 96,
  },
  loginLink: {
    color: theme.palette.text.primary,
  },
}));

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.signUpModal}>
        <Typography className={classes.modalHeader} variant="h6">
          Create your own recipe RecipeBook
        </Typography>
        <TextField className={classes.modalInput} variant="outlined" />
        <TextField className={classes.modalInput} variant="outlined" />
        <Button className={classes.modalButton} variant="contained" color="secondary">
          Sign Up
        </Button>
        <Typography className={classes.modalFooter}>
          {'Already have an account? '}
          <a className={classes.loginLink} href="">Log in</a>
        </Typography>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
