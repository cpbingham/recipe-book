import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

const Routes = () => (
  <Switch>
    {/* <Redirect exact from="/" to="sign-up" /> */}
    <Route exact path="/">
      <SignUp />
    </Route>
  </Switch>
);

export default Routes;
