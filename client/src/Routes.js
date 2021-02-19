import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="sign-up" />
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Routes;
