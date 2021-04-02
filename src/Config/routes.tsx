import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SignUp from '../Pages/SignUp';

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
