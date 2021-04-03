import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SignUp from '../Pages/SignUp';

type Props = {
  isLoggedIn: boolean;
};

const Routes: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/dashboard" component={(props: Props) => (props.isLoggedIn ? <Dashboard /> : <Redirect to="/" />)} />
      <Route path="/register" component={(props: Props) => (props.isLoggedIn ? <Register /> : <Redirect to="/" />)} />
    </Switch>
  );
};

export default Routes;
