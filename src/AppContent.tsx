import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import RouteWithSubRoutes from './Components/RouteWithSubRoutes';

import routesConfig from './Config/routes';
import { GlobalStyle, RootDiv } from './styles';

// TODO: tipar o any

const AppContent: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <RootDiv>
        <CssBaseline />
        <Router>
          <Switch>
            {routesConfig.map((route: any, index: number) => {
              return <RouteWithSubRoutes key={index} {...route} />;
            })}
          </Switch>
        </Router>
      </RootDiv>
    </React.Fragment>
  );
};

export default AppContent;
