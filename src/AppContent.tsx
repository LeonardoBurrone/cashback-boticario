import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RouteWithSubRoutes from './Components/RouteWithSubRoutes';

import routesConfig from './Config/routes';

// TODO: tipar o any

const AppContent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        {routesConfig.map((route: any, index: number) => {
          return <RouteWithSubRoutes key={index} {...route} />;
        })}
      </Switch>
    </Router>
  );
};

export default AppContent;
