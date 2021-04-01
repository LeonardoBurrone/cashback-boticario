import { Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppBar from './Components/AppBar';
import RouteWithSubRoutes from './Components/RouteWithSubRoutes';

import routesConfig from './Config/routes';
import { GlobalStyle, RootDiv } from './styles';

// TODO: tipar o any
// TODO: mudar chave de Login no AppBar

const AppContent: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <CssBaseline />
      <AppBar darkTheme={false} isLoggedIn={true} />
      <Toolbar />
      <RootDiv>
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
